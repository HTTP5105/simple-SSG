import { config } from './config.js';

const head = (isHomepage = false, title = config.title, description = config.description) => {
	return `<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width" />
        
        <title>${title}</title>
        <link rel="stylesheet" href="${isHomepage ? '.' : '..'}/assets/styles/main.min.css">

        <meta name="description" content="${description}" />
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image:alt" content="Image description">
        <meta property="og:locale" content="en_GB">
        <meta property="og:type" content="website">
        <meta property="og:url" content="${config.root}">

        <link rel="icon" href="./assets/favicon.ico">
        <link rel="apple-touch-icon" href="${isHomepage ? '.' : '..'}/assets/apple-touch-icon.png">
        <link rel="manifest" href="${isHomepage ? '.' : '..'}/assets/site.webmanifest">
        <meta name="theme-color" content="${config.themeColour}">
    </head>`;
};

const foot = () => {
	return `<footer>
	    ${`<p>© ${new Date().getFullYear()} ${config.authorName}</p>`}
	</footer>`;
};

export { head, foot };