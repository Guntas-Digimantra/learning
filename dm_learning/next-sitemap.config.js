module.exports = {
  siteUrl: 'https://learning.digimantra.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.5,
  sitemapSize: 5000,
  exclude: [
    '/harsh',
    '/failed',
    '/success',
    '/thankyou',
    '/thank-you-page',
    '/web-development',
    '/blog',
    '/payment',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/_next/',
      },
    ],
  },
};
