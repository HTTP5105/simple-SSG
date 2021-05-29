import { config } from './config.js';
import fm from 'front-matter' ;
import { readFileSync, existsSync, mkdirSync, writeFile }  from 'fs';
import { marked } from './marked.js';
import { head, foot } from './elem.js';

const posthtml = data => `
<!DOCTYPE html>
<html lang="en">
    ${head(false,data.attributes.title, data.attributes.description)}
    <body>
        <header><a href="/">Go back home</a><h1>${data.attributes.title}</h1></header>
        <main>
            <p>${new Date(parseInt(data.attributes.date)).toDateString()}</p>
            <hr>
            ${data.body}
        </main>
        ${foot()}
    </body>
</html>
`;

const createPost = postPath => {
  const data = readFileSync(`${config.dev.postsdir}/${postPath}.md`, "utf8");
  const content = fm(data);
  content.body = marked(content.body);
  content.path = postPath;
  return content;
};

const createPosts = posts => {
  posts.forEach(post => {
    if (!existsSync(`${config.dev.outdir}/${post.path}`))
      mkdirSync(`${config.dev.outdir}/${post.path}`);

    writeFile(
      `${config.dev.outdir}/${post.path}/index.html`,
      posthtml(post),
      e => {
        if (e) throw e;
        console.log(`${post.path}/index.html was created successfully`);
      }
    );
  });
};

export { createPost, createPosts };
