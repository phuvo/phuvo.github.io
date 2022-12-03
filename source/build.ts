import rehypeAttrs from 'rehype-attr';
import rehypeFormat from 'rehype-format';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import { VFile } from 'vfile';
import { read, write } from 'to-vfile';
import { unified } from 'unified';

import tplDefault from './default.js';


function markdownDocument() {
	return tplDefault;
}


const markdownProcessor = unified()
	.use(remarkParse)
	.use(remarkMath)
	.use(remarkSmartypants)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeAttrs, { properties: 'attr' })
	.use(rehypeKatex, { fleqn: true, macros: {} })
	.use(markdownDocument as any)
	.use(rehypeFormat)
	.use(rehypeStringify, { allowDangerousHtml: true })


function transformVfile(markFile: VFile) {
	return markdownProcessor.process(markFile);
}


async function transformPath(markPath: string, htmlPath: string) {
	const markFile = await read(markPath, { encoding: 'utf8' });
	const htmlFile = await transformVfile(markFile);
	console.log(htmlFile.value);
	// await writeFile(htmlPath, html);
}


transformPath(process.argv[2], process.argv[3]);
