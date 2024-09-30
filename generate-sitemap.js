const Sitemap = require('react-router-sitemap').default;
// const router = require('./src/routes').default; // Adjust this path to where your routes are defined.
const router = require('./src/App').default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build('https://mindsmaven.in') // Replace with your site's URL
            .save('./public/sitemap.xml') // Save sitemap to public folder
    );
}

generateSitemap();
