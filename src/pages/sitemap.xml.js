export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://www.timeinworldclock.com';
  
  const urls = [
    {
      loc: `${baseUrl}/`,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/about`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/world-clock-comparison-tool`,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/global-day-night-tracker`,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/country-time-zone-finder`,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/time-difference-calculator`,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/daylight-saving-time-tracker`,
      changefreq: 'weekly',
      priority: '0.7'
    },
    {
      loc: `${baseUrl}/help`,
      changefreq: 'monthly',
      priority: '0.5'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      return `
    <url>
      <loc>${url.loc}</loc>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </url>
  `;
    })
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}