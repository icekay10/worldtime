'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import styles from './HomePage.module.css';

const featuredCountries = [
  {
    name: "Washington, USA",
    timezone: "America/New_York",
    flag: "🇺🇸",
    coordinates: "38.9072° N, 77.0369° W",
    bgColor: "linear-gradient(135deg, #3a7bd5, #00d2ff)"
  },
  {
    name: "Johannesburg, South Africa",
    timezone: "Africa/Johannesburg",
    flag: "🇿🇦",
    coordinates: "26.2041° S, 28.0473° E",
    bgColor: "linear-gradient(135deg, #0072ff, #00c6ff)"
  },
  {
    name: "Sydney, Australia",
    timezone: "Australia/Sydney",
    flag: "🇦🇺",
    coordinates: "33.8688° S, 151.2093° E",
    bgColor: "linear-gradient(135deg, #11998e, #38ef7d)"
  },
  {
    name: "Abuja, Nigeria",
    timezone: "Africa/Lagos",
    flag: "🇳🇬",
    coordinates: "9.0579° N, 7.4951° E",
    bgColor: "linear-gradient(135deg, #f46b45, #eea849)"
  },
  {
    name: "Tokyo, Japan",
    timezone: "Asia/Tokyo",
    flag: "🇯🇵",
    coordinates: "35.6762° N, 139.6503° E",
    bgColor: "linear-gradient(135deg, #bc4e9c, #f80759)"
  },
  {
    name: "Rio de Janeiro, Brazil",
    timezone: "America/Sao_Paulo",
    flag: "🇧🇷",
    coordinates: "22.9068° S, 43.1729° W",
    bgColor: "linear-gradient(135deg, #1D976C, #93F9B9)"
  },
  {
    name: "Cairo, Egypt",
    timezone: "Africa/Cairo",
    flag: "🇪🇬",
    coordinates: "30.0444° N, 31.2357° E",
    bgColor: "linear-gradient(135deg, #FF512F, #DD2476)"
  },
  {
    name: "Moscow, Russia",
    timezone: "Europe/Moscow",
    flag: "🇷🇺",
    coordinates: "55.7558° N, 37.6173° E",
    bgColor: "linear-gradient(135deg, #1A2980, #26D0CE)"
  },
  {
    name: "Toronto, Canada",
    timezone: "America/Toronto",
    flag: "🇨🇦",
    coordinates: "43.6532° N, 79.3832° W",
    bgColor: "linear-gradient(135deg, #D31027, #EA384D)"
  }
];

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeCard, setActiveCard] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Ensure consistent URL format - redirect if needed
  useEffect(() => {
    if (isClient) {
      // Check if URL has trailing slash or www inconsistency
      const currentUrl = window.location.href;
      const canonicalUrl = 'https://www.timeinworldclock.com';
      const preferredUrl = 'https://www.timeinworldclock.com';
      
      // Redirect if on non-www or with trailing slash
      if (currentUrl.includes('http://') || 
          currentUrl.includes('timeinworldclock.com/') ||
          currentUrl !== preferredUrl + router.pathname) {
        // Don't redirect automatically - let server handle this
        console.log('URL consistency check passed');
      }
    }
  }, [isClient, router.pathname]);

  const formatTime = (timezone) => {
    if (!isClient) return '--:--:--';
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(currentTime);
    } catch (error) {
      console.error('Error formatting time:', error);
      return '--:--:--';
    }
  };

  const formatDate = (timezone) => {
    if (!isClient) return 'Loading...';
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(currentTime);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Loading...';
    }
  };

  const calculateTimeDifference = (timezone1, timezone2) => {
    if (!isClient) return 'Calculating...';
    
    try {
      const time1 = new Date(
        currentTime.toLocaleString('en-US', { timeZone: timezone1 })
      );
      const time2 = new Date(
        currentTime.toLocaleString('en-US', { timeZone: timezone2 })
      );
      
      const diffHours = (time1 - time2) / (1000 * 60 * 60);
      const absDiff = Math.abs(diffHours);
      
      if (diffHours === 0) return 'Same time';
      
      const direction = diffHours > 0 ? 'ahead' : 'behind';
      
      if (absDiff % 1 === 0) {
        return `${absDiff} hour${absDiff !== 1 ? 's' : ''} ${direction}`;
      } else {
        const hours = Math.floor(absDiff);
        const minutes = Math.round((absDiff % 1) * 60);
        return `${hours}h ${minutes}m ${direction}`;
      }
    } catch (error) {
      console.error('Error calculating time difference:', error);
      return 'Error';
    }
  };

  const metaDescription = "Real-time global world clock showing current time in major cities worldwide. Compare time zones, time differences, and see live updates for Washington, Tokyo, Sydney, Cairo, and more cities.";
  
  const keywords = [
    "world clock",
    "current time",
    "present time",
    "live world clock",
    "global time zones",
    "time zone converter",
    "international time",
    "world time now",
    "real time clock",
    "GMT time",
    "world clock",
"current time",
"present time",
"live world clock",
"global time zones",
"time zone converter",
"international time",
"world time now",
"real time clock",
"GMT time",
"UTC time",
"time difference calculator",
"global clock online",
"time across nations",
"world time zones",
"international clock",
"multi-timezone clock",
"world time tracker",
"live global time",
"time zone map",
"current local time worldwide",
"present time in all countries",
"real-time world clock",
"time",
"clock",
"timezone",
"world",
"now",
"live time",
"global time",
"current world time",
"what time is it",
"time zones",
"current GMT",
"current UTC",
"world time converter",
"check time online",
"time in different countries",
"time zones around the world",
"online world clock",
"current time worldwide",
"time zone difference",
"see time globally",
"instant world time",
"accurate world clock",
"real time in all countries",
"current time by country",
"live time zones map",
"what time is it worldwide",
"world clock with time zones",
"find current time anywhere",
"global time display",
"multi-country clock",
"time zone checker",
"compare time zones",
"world time with seconds",
"current time right now globally",
"instant time zone converter tool",
"accurate current time in every country",
"real-time international clock with map",
"live world time zones with daylight saving",
"what time is it in different countries right now",
"free online world clock showing all time zones",
"current time in major cities worldwide",
"real-time global world clock",
"world clock showing current time in major cities",
"compare time zones, time differences, and see live updates for Washington, Tokyo, Sydney, Cairo, and more cities",
    "UTC time",
    "time difference calculator",
    "global clock online",
    "time across nations",
    "world time zones",
    "international clock",
    "multi-timezone clock",
    "world time tracker",
    "live global time",
    "time zone map",
    "current local time worldwide",
    "present time in all countries",
    "real-time world clock"
  ].join(', ');

  const canonicalUrl = 'https://www.timeinworldclock.com';
  const pageUrl = canonicalUrl + (router.pathname === '/' ? '' : router.pathname);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "World Time Clock - Global Time Comparison",
    "description": metaDescription,
    "url": canonicalUrl,
    "applicationCategory": "Utilities",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "mainEntity": featuredCountries.map(country => ({
      "@type": "Place",
      "name": country.name,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": parseFloat(country.coordinates.split('°')[0]),
        "longitude": parseFloat(country.coordinates.split(',')[1].replace(/[^0-9.\-]/g, ''))
      },
      "description": `Current time in ${country.name}`
    }))
  };

  return (
    <>
      {/* Metadata - Critical Fix for Canonical Issue */}
      <Head>
        <title>World Time Clock | Current Time in Major Cities Worldwide</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL - ABSOLUTELY CRITICAL FIX */}
        <link rel="canonical" href={pageUrl} key="canonical" />
        
        {/* Alternate URLs - Prevent Duplicate Indexing */}
        <link rel="alternate" href="https://timeinworldclock.com" hrefLang="x-default" />
        <link rel="alternate" href="https://www.timeinworldclock.com" hrefLang="en" />
        
        {/* Open Graph with Canonical Reference */}
        <meta property="og:title" content="World Time Clock | Current Time in Major Cities Worldwide" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/world-clock-og.jpg" />
        <meta property="og:site_name" content="World Time Clock" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Time Clock" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/world-clock-twitter.jpg" />
        <meta name="twitter:site" content="@worldtimeclock" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="author" content="World Time Clock" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 day" />
        
        {/* Structured Data Markup for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "World Time Clock",
            "url": canonicalUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${canonicalUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Head>

      {/* Structured Data for Web Application */}
      <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdData)}
      </Script>

      <div className={styles.homePage}>
        <header className={styles.heroSection}>
          <h1 className={styles.heroTitle}>World Time Clock Comparison</h1>
          <p className={styles.heroSubtitle}>Real-time current times in major cities around the world</p>
          <button
            onClick={() => window.location.href = '/world-clock-comparison-tool'}
            className={styles.smallCtaButton}
          >
            Know the current/present time of any country in the world
          </button>
        </header>

        <div className={styles.timeCardsContainer}>
          {featuredCountries.map((country, index) => (
            <div 
              key={index}
              className={`${styles.timeCard} ${activeCard === index ? styles.active : ''}`}
              style={{ background: country.bgColor }}
              onClick={() => setActiveCard(index === activeCard ? null : index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveCard(index === activeCard ? null : index)}
              aria-label={`Current time in ${country.name}. Click to compare with other cities`}
              itemScope
              itemType="https://schema.org/City"
              itemProp="location"
            >
              <meta itemProp="name" content={country.name.split(',')[0]} />
              <meta itemProp="address" content={country.name} />
              
              <div className={styles.cardHeader}>
                <span className={styles.countryFlag}>{country.flag}</span>
                <h2 className={styles.cityName}>{country.name}</h2>
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.currentTime}>{formatTime(country.timezone)}</div>
                <div className={styles.currentDate}>{formatDate(country.timezone)}</div>
                <div className={styles.coordinates}>{country.coordinates}</div>
              </div>

              {activeCard === index && (
                <div className={styles.comparisonSection}>
                  <h3 className={styles.comparisonTitle}>Time Difference Comparison:</h3>
                  <div className={styles.comparisonGrid}>
                    {featuredCountries.filter(c => c.timezone !== country.timezone).map((other, i) => (
                      <div key={i} className={styles.comparisonItem}>
                        <span className={styles.comparisonFlag}>{other.flag}</span>
                        <span className={styles.comparisonName}>{other.name.split(',')[0]}</span>
                        <span className={styles.comparisonDifference}>
                          {calculateTimeDifference(country.timezone, other.timezone)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.timeDifferenceSummary}>
          <h2 className={styles.summaryTitle}>Global Time Difference Summary</h2>
          <div className={styles.differenceGrid}>
            {featuredCountries.map((countryA, i) =>
              featuredCountries.map((countryB, j) =>
                i < j && (
                  <div key={`${i}-${j}`} className={styles.differenceCard}>
                    <div className={styles.flags}>
                      <span>{countryA.flag}</span>
                      <span>↔</span>
                      <span>{countryB.flag}</span>
                    </div>
                    <div className={styles.names}>
                      {countryA.name.split(',')[0]} ↔ {countryB.name.split(',')[0]}
                    </div>
                    <div className={styles.difference}>
                      {calculateTimeDifference(countryA.timezone, countryB.timezone)}
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
        
        {/* Hidden structured data for search engines */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <h1>World Time Clock - Current Time Worldwide</h1>
          <p>Live world clock showing current time in Washington, Johannesburg, Sydney, Abuja, Tokyo, Rio de Janeiro, Cairo, Moscow, Toronto and other major cities globally.</p>
          <ul>
            {featuredCountries.map((country, index) => (
              <li key={index}>Current time in {country.name}: {formatTime(country.timezone)}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;