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

const originalCss = await fs.readFile('theme/critical.css');
const minifiedCss = cleanCss.minify(originalCss).styles;

const criticalCss = `\n${minifiedCss}\n    `;
export default criticalCss;
