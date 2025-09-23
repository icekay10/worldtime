const { create } = require('xmlbuilder2');
const fs = require('fs');
const path = require('path');

// List of URLs to include in sitemap
const urls = [
  'https://timeacrossnations.com/',
  'https://timeacrossnations.com/about',
  'https://timeacrossnations.com/contact',
  'https://timeacrossnations.com/privacy-policy',
  'https://timeacrossnations.com/blog',
  'https://timeacrossnations.com/blog/:slug',
  'https://timeacrossnations.com/world-clock-comparison-tool',
  'https://timeacrossnations.com/global-day-and-night-tracker-world-clock',
  'https://timeacrossnations.com/geography=quiz-game',


];

const root = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.schemas.xmlsoap.org/sitemap/0.9' });

urls.forEach(url => {
  root
    .ele('url')
    .ele('loc').txt(url).up()
    .ele('changefreq').txt('weekly').up()
    .ele('priority').txt('0.8').up()
    .up();
});

const xml = root.end({ prettyPrint: true });

fs.writeFileSync(path.join(__dirname, '../build/sitemap.xml'), xml);
console.log('Sitemap generated at build/sitemap.xml');