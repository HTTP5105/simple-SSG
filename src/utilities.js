import { config } from './config.js';
import { emptyDirSync, copySync, ensureDirSync } from 'fs-extra';

const resetPublicDir = (directory) => emptyDirSync(config.dev.outdir, () => console.log(`${config.dev.outdir} removed!`));

const moveContentToPostsDir = (directory) => {
    const inputDir = `./${config.dev.postsdir}/${directory}`,
        outputDir = `./${config.dev.outdir}/${directory}`;

    // Create in public folder if it doesn't exist
    ensureDirSync(outputDir);

    // Empty it in public folder
    emptyDirSync(outputDir);

    // Move content from content folder to public folder
    copySync(inputDir, outputDir);
};

export { resetPublicDir, moveContentToPostsDir };