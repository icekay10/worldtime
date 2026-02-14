// scripts/submitSitemap.cjs
const https = require('https');
const fs = require('fs');
const xml2js = require('xml2js');

const siteUrl = 'https://www.timeinworldclock.com';
const apiKey = '116ae2da00b347919387609cb4c5e5c4';

// Read and parse sitemap
const sitemapPath = './public/sitemap.xml';

fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Sitemap not found - skipping submission');
    return;
  }

  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }
    
    if (!result || !result.urlset || !result.urlset.url) {
      console.error('Invalid sitemap format');
      return;
    }
    
    const urls = result.urlset.url.map(u => u.loc[0]);
    
    // Submit first 10,000 URLs (IndexNow limit)
    const postData = JSON.stringify({
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
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      console.log(`Submitted ${Math.min(urls.length, 10000)} URLs - Status: ${res.statusCode}`);
      
      let responseData = '';
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('Successfully submitted to IndexNow');
        } else {
          console.log('Response:', responseData);
        }
      });
    });

    req.on('error', (error) => {
      console.error('Request error:', error);
    });
    
    req.write(postData);
    req.end();
  });
});