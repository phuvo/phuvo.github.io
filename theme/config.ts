import fs from 'node:fs/promises';
import { parse } from 'yaml';

interface Config {
	groups: Group[];
}

interface Group {
	title: string;
	posts: Post[];
}

interface Post {
	title: string;
	subhead: string;
	href: string;
}

const yaml = await fs.readFile('content/config.yaml', { encoding: 'utf8' });
const config = parse(yaml) as Config;

export default config;
