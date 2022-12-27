import { Content } from 'hast';
import { h } from 'hastscript';
import criticalCss from './critical.js';

const tplDefault = (content: Content) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>{criticalCss}</style>
      <link rel="stylesheet" href="/style.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css" integrity="sha384-Juol1FqnotbkyZUT5Z7gUPjQ9gzlwCENvUZTpQBAPxtusdwFLRy382PSDx5UUJ4/" crossorigin="anonymous" />
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

export default tplDefault;
