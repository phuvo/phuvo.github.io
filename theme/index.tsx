import { h, Result } from 'hastscript';
import style from './style.js';

const tplIndex = (content: Result) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>{style}</style>
    </head>

    <body>
      <header>
        {/* todo */}
      </header>
      <article>
        {content}
      </article>
      <footer>
        {/* todo */}
      </footer>
    </body>
  </html>
);

export default tplIndex;
