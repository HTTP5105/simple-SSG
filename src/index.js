import { existsSync, mkdirSync, readdirSync } from 'fs';
import { extname } from 'path';
import { createPost, createPosts } from './posts.js';
import { config } from './config.js';
import { addHomePage } from './homepage.js';
import { resetPublicDir, moveContentToPostsDir } from './utilities.js';

const posts = readdirSync(config.dev.postsdir)
    .filter(file => extname(file).toLowerCase() === '.md')
    .map(post => post.slice(0, -3))
    .map(post => createPost(post))
    .sort((a, b) =>  b.attributes.date - a.attributes.date);

if (!existsSync(config.dev.outdir)) {
  mkdirSync(config.dev.outdir);
} else {
  resetPublicDir();
}

moveContentToPostsDir('assets');
createPosts(posts);
addHomePage(posts);