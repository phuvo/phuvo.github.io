import { h } from 'hastscript';
import criticalCss from './critical.js';

const tplIndex = () => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>{criticalCss}</style>
      <link rel="stylesheet" href="/style.css" />
    </head>

    <body>
      <section>
        <h2>Math for ML</h2>
        <a href="/math/linear-algebra.html">
          <article>
            <h3>Linear algebra</h3>
            <p>Vectors and matricies</p>
          </article>
        </a>
      </section>
    </body>
  </html>
);

export default tplIndex;
