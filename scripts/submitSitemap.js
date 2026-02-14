const https = require('https');
const fs = require('fs');
const xml2js = require('xml2js'); // npm install xml2js

const siteUrl = 'https://www.timeinworldclock.com';
const apiKey = '116ae2da00b347919387609cb4c5e5c4';

// Read and parse sitemap
const sitemapPath = './public/sitemap.xml';
fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Sitemap not found');
    return;
  }

  xml2js.parseString(data, (err, result) => {
    const urls = result.urlset.url.map(u => u.loc[0]);
    
    // Submit first 10,000 URLs (IndexNow limit)
    const data = JSON.stringify({
      host: new URL(siteUrl).hostname,
      key: apiKey,
      keyLocation: `${siteUrl}/${apiKey}.txt`,
      urlList: urls.slice(0, 10000)
    });

    const options = {
      hostname: 'api.indexnow.org',
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      console.log(`Submitted ${urls.length} URLs - Status: ${res.statusCode}`);
    });

    req.on('error', (error) => console.error(error));
    req.write(data);
    req.end();
  });
});