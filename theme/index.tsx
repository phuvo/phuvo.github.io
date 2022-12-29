import { h } from 'hastscript';
import config from './config.js';
import criticalCss from './critical.js';

const Fragment = 'x-fragment';

const tplIndex = () => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>{criticalCss}</style>
      <link rel="stylesheet" href="/style.css" />
    </head>

    <body>
      <>
        {config.groups.map(group => (
          <section>
            <h2>{group.title}</h2>
            <>
              {group.posts.map(post => (
                <a href={post.href} class="post-slat">
                  <article>
                    <h3>{post.title}</h3>
                    <p>{post.subhead}</p>
                  </article>
                </a>
              ))}
            </>
          </section>
        ))}
      </>
    </body>
  </html>
);

export default tplIndex;
