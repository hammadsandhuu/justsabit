/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.justsabit.com/", // ← change this!
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin"], // optional
};
