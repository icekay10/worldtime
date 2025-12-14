export default function Robots() {}

export async function getServerSideProps({ res }) {
  const robotsTxt = `# robots.txt for TimeInWorldClock.com
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /private/

Sitemap: https://www.timeinworldclock.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Disallow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Disallow: /

User-agent: YandexBot
Disallow: /

# Crawl delay (if needed)
# Crawl-delay: 10

# Development environments
User-agent: *
Disallow: /staging/
Disallow: /test/

Host: www.timeinworldclock.com
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}