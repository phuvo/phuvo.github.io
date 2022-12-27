import fs from 'node:fs/promises';
import tplDefault from '../theme/default.js';
import tplIndex from '../theme/index.js';

import glob from 'glob';
import { DocType, Element, Root, RootContent } from 'hast';
import rehypeAttrs from 'rehype-attr';
import rehypeFormat from 'rehype-format';
import rehypeInferTitleMeta from 'rehype-infer-title-meta';
import rehypeKatex from 'rehype-katex';
import rehypeMeta from 'rehype-meta';
import rehypeRewrite from 'rehype-rewrite';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import { read, write } from 'to-vfile';
import { unified } from 'unified';
import { VFile } from 'vfile';
import { reporter } from 'vfile-reporter';

const BUILD_DIR = 'build';
const contentProcessor = createProcessor();

function main() {
    fs.mkdir(BUILD_DIR, { recursive: true });
	fs.cp('public', BUILD_DIR, { recursive: true });

	glob.sync('content/**/*.md').forEach(convertContent);
    convertIndex();
}

async function convertContent(markPath: string) {
    const markFile = await read(markPath, { encoding: 'utf8' });
    const htmlFile = await processContent(markFile);
    console.error(reporter(htmlFile));

    rewritePath(htmlFile);
    await fs.mkdir(htmlFile.dirname!, { recursive: true });
    await write(htmlFile);
}

async function convertIndex() {
    const indexFile = await processIndex();
    rewritePath(indexFile);
    await write(indexFile);
}

function processContent(markFile: VFile) {
    return contentProcessor.process(markFile);
}

async function processIndex() {
    const processor = unified()
        .use(indexDocument)
        .use(rehypeFormat)
        .use(rehypeStringify, {
            allowDangerousHtml: true,
        });
    const root = await processor.run({ type: 'root' });
    const html = processor.stringify(root);
    return new VFile({ path: 'index.html', value: html });
}

function createProcessor() {
    return unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkSmartypants)
        .use(remarkRehype, {
            allowDangerousHtml: true,
        })
        .use(rehypeAttrs, {
            properties: 'attr',
        })
        .use(rehypeKatex, {
            fleqn: true,
            macros: {},
        })
        .use(rehypeRewrite, {
            rewrite: rewriteElement,
        })
        .use(contentDocument)
        .use(rehypeInferTitleMeta)
        .use(rehypeMeta)
        .use(rehypeFormat)
        .use(rehypeStringify, {
            allowDangerousHtml: true,
        });
}

function rewriteElement(node: RootContent) {
    if (node.type !== 'element') {
        return;
    }
    if (node.tagName === 'a') {
        rewriteAttr(node, 'href', transformLink);
    }
    else if (node.tagName === 'img') {
        rewriteAttr(node, 'src', stripTop);
    }
}

function rewriteAttr(
    el: Element,
    attr: string,
    fn: (value: string) => string,
) {
    const value = el.properties?.[attr];
    if (typeof value === 'string') {
        el.properties![attr] = fn(value);
    }
}

function transformLink(href: string) {
    return stripTop(replaceExt(href));
}

function stripTop(href: string) {
    const matches = /^\/[^/]+(\/.*)$/.exec(href);
    return matches ? matches[1] : href;
}

function replaceExt(href: string) {
    return href.replace(/\.md$/, '.html');
}

function contentDocument() {
    return (tree: RootContent): Root => ({
        type: 'root',
        children: [
            { type: 'doctype' } as DocType,
            tplDefault(tree) as RootContent,
        ],
    });
}

function indexDocument() {
    return (): Root => ({
        type: 'root',
        children: [
            { type: 'doctype' } as DocType,
            tplIndex() as RootContent,
        ],
    });
}

function rewritePath(file: VFile) {
    file.dirname = file.dirname
        ? replaceTop(file.dirname, BUILD_DIR)
        : BUILD_DIR;
    file.extname = '.html';
}

function replaceTop(filePath: string, rootDir: string) {
    const parts = filePath.split('/');
    parts[0] = rootDir;
    return parts.join('/');
}

main();
