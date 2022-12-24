import fs from 'node:fs/promises';
import CleanCss from 'clean-css';

const cleanCss = new CleanCss({
	format: {
		breaks: {
			afterBlockEnds: true,
			afterRuleEnds: true,
		},
	},
});

const originalCss = await fs.readFile('theme/style.css');
const minifiedCss = cleanCss.minify(originalCss).styles;

const style = `\n${minifiedCss}\n  `;
export default style;
