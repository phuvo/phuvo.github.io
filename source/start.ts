import express from 'express';
import serveStatic from 'serve-static';

function main() {
	const app = express();
	app.use(serveStatic('public'));
	app.use(serveStatic('build' ));
	app.listen(4000);
	console.log('Listening on :4000 🚀');
}

main();
