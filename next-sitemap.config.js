module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://paddleelk.com',
    generateRobotsTxt: true, // Automatically generate robots.txt
    sitemapSize: 5000, // Limit number of URLs per sitemap file
    changefreq: 'weekly', // Change frequency of pages
    priority: 0.7, // Default priority of pages
    generateIndexSitemap: true, // Generate index sitemap for multiple sitemaps
    // exclude: ['/admin', '/dashboard'], // Exclude certain pages from the sitemap
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                // disallow: ['/admin', '/dashboard'], // Same as exclude above
            },
        ],
    },
};