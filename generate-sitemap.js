// // const Sitemap = require('react-router-sitemap').default;
// // // const router = require('./src/routes').default; // Adjust this path to where your routes are defined.
// // const router = require('./src/App').default;

// // function generateSitemap() {
// //     return (
// //         new Sitemap(router)
// //             .build('https://mindsmaven.in') // Replace with your site's URL
// //             .save('./public/sitemap.xml') // Save sitemap to public folder
// //     );
// // }

// // generateSitemap();

// // generate-sitemap.js
// const fs = require('fs');
// const { createSitemap } = require('sitemap');

// const sitemap = createSitemap({
//     hostname: 'https://mindsmaven.in',
//     cacheTime: 600000, // 600 sec - cache purge period
//     urls: [
//         { url: '/', changefreq: 'daily', priority: 1.0 },
//         // Add more URLs as needed
//         // { url: '/about', changefreq: 'monthly', priority: 0.7 },
//         // { url: '/contact', changefreq: 'monthly', priority: 0.7 },
//         // ... other routes
//     ],
// });

// fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
// console.log('Sitemap generated: sitemap.xml');



const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Create a write stream
const sitemapStream = new SitemapStream({ hostname: 'https://mindsmaven.in' });

// Define your routes
const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    // { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add more URLs as needed
];

// Write the links to the sitemap
links.forEach(link => sitemapStream.write(link));
sitemapStream.end();

// Convert the stream to a promise and write to the file
streamToPromise(sitemapStream).then(data => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap generated: sitemap.xml');
}).catch(err => {
    console.error('Error generating sitemap:', err);
});
