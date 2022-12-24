import fs from 'node:fs/promises';
import path from 'node:path';

import glob from 'glob';
import { Root, RootContent } from 'hast';
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

import tplDefault from '../theme/default.js';
import tplIndex from '../theme/index.js';

const BUILD_DIR = 'build';
const README_MD = 'README.md';

function markdownDocument() {
	return (tree: Root, file: VFile) => {
		const template = file.basename === README_MD ? tplIndex : tplDefault;
		return template(tree);
	};
}

function transformLink(href: string) {
	if (href.startsWith('/content/')) {
		href = href.slice('/content/'.length - 1);
	}
	return href.replace(/\.md$/, '.html');
}

function rewriteElements(node: RootContent) {
	if (node.type === 'element' && node.tagName === 'a') {
		const href = node.properties?.href;
		if (typeof href === 'string') {
			node.properties!.href = transformLink(href);
		}
	}
}

const markdownProcessor = unified()
	.use(remarkParse)
	.use(remarkMath)
	.use(remarkSmartypants)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeAttrs, { properties: 'attr' })
	.use(rehypeKatex, { fleqn: true, macros: {} })
	.use(rehypeRewrite, { rewrite: rewriteElements })
	.use(markdownDocument as any)
	.use(rehypeInferTitleMeta)
	.use(rehypeMeta)
	.use(rehypeFormat)
	.use(rehypeStringify, { allowDangerousHtml: true })
	;

async function convertFile(markFile: VFile) {
	const htmlFile = await markdownProcessor.process(markFile);
	htmlFile.value += '\n';
	return htmlFile;
}

function rewritePath(file: VFile) {
	if (file.basename === README_MD) {
		file.basename = 'index.html';
	} else {
		file.extname = '.html';
	}
	if (file.dirname) {
		const parts = file.dirname.split(path.sep);
		parts[0] = BUILD_DIR;
		file.dirname = parts.join(path.sep);
	} else {
		file.dirname = BUILD_DIR;
	}
}

async function convertPath(markPath: string) {
	const markFile = await read(markPath, { encoding: 'utf8' });
	const htmlFile = await convertFile(markFile);
	console.error(reporter(htmlFile));

	rewritePath(htmlFile);
	await fs.mkdir(htmlFile.dirname!, { recursive: true });
	await write(htmlFile);
}

function main() {
	glob.sync('content/**/*.md').concat('README.md')
		.map(convertPath);
	fs.cp('public', 'build', { recursive: true });
}

main();
