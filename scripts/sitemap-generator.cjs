const { create } = require('xmlbuilder2');
const fs = require('fs');
const path = require('path');

// Main URLs for the World Time Clock website
const urls = [
  {
    loc: 'https://www.timeinworldclock.com/',
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    loc: 'https://www.timeinworldclock.com/about',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: 'https://www.timeinworldclock.com/contact',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: 'https://www.timeinworldclock.com/privacy-policy',
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: 'https://www.timeinworldclock.com/world-clock-comparison-tool',
    changefreq: 'daily',
    priority: '0.9'
  },
  {
    loc: 'https://www.timeinworldclock.com/global-day-night-tracker',
    changefreq: 'daily',
    priority: '0.9'
  },
  {
    loc: 'https://www.timeinworldclock.com/country-time-zone-finder',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    loc: 'https://www.timeinworldclock.com/time-difference-calculator',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    loc: 'https://www.timeinworldclock.com/daylight-saving-time-tracker',
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    loc: 'https://www.timeinworldclock.com/help',
    changefreq: 'monthly',
    priority: '0.5'
  }
];

// Generate XML sitemap
const generateSitemap = () => {
  try {
    const root = create({ version: '1.0', encoding: 'UTF-8' })
      .ele('urlset', { 
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
      });

    urls.forEach(url => {
      const urlElement = root.ele('url');
      urlElement.ele('loc').txt(url.loc);
      urlElement.ele('changefreq').txt(url.changefreq);
      urlElement.ele('priority').txt(url.priority);
      
      // Add lastmod for important pages
      if (url.loc === 'https://www.timeinworldclock.com/') {
        urlElement.ele('lastmod').txt(new Date().toISOString().split('T')[0]);
      }
    });

    const xml = root.end({ prettyPrint: true, indent: '  ' });
    
    // Create public directory if it doesn't exist
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write sitemap to public directory for Next.js
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${sitemapPath}`);
    console.log(`📊 Total URLs: ${urls.length}`);
    
    return sitemapPath;
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    throw error;
  }
};

// Generate robots.txt file
const generateRobotsTxt = () => {
  try {
    const robotsContent = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/

Sitemap: https://www.timeinworldclock.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;

    const robotsPath = path.join(__dirname, '../public/robots.txt');
    fs.writeFileSync(robotsPath, robotsContent);
    
    console.log('✅ robots.txt generated successfully!');
    console.log(`📍 Location: ${robotsPath}`);
    
    return robotsPath;
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
    throw error;
  }
};

// Main function
const main = () => {
  console.log('🚀 Starting sitemap generation for TimeInWorldClock.com...');
  console.log('='.repeat(50));
  
  generateSitemap();
  console.log('='.repeat(50));
  generateRobotsTxt();
  console.log('='.repeat(50));
  
  console.log('🎉 All SEO files generated successfully!');
};

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, generateRobotsTxt };