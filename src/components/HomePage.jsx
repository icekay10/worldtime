import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; 
import './HomePage.css';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (timezone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(currentTime);
  };

  const formatDate = (timezone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(currentTime);
  };

  const calculateTimeDifference = (timezone1, timezone2) => {
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
  };

  // Generate dynamic meta description
  const now = new Date();
  const localTime = now.toLocaleTimeString('en-US', { hour12: true });
  const today = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const metaDescription = `Check current time in 9 major cities worldwide including New York, Tokyo, Sydney, and Cairo. Compare time zones and differences in real-time. Updated every second.`;

  const citiesList = featuredCountries.map(c => c.name.split(',')[0]).join(', ');

  // Structured Data (JSON-LD) for rich results
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "World Clock Comparison",
    "description": metaDescription,
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
        "latitude": country.coordinates.split('°')[0],
        "longitude": country.coordinates.split(',')[1].split('°')[0].trim()
      },
      "description": `Current time in ${country.name}: ${formatTime(country.timezone)}`
    }))
  };

  return (
    <>
      {/* SEO & Social Meta Tags */}
      <Helmet>
        {/* Basic Meta Tags */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>World Clock Comparison - Real-Time Time Zones for 9 Major Cities</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="world clock, time zone comparison, current time, time difference, New York time, Tokyo time, Sydney time, UTC time, global time, city time zones" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://timeacrossnations.com/world-clock" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="World Clock Comparison - Live Time Zones" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://timeacrossnations.com/world-clock" />
        <meta property="og:image" content="https://timeacrossnations.com/images/world-clock-preview.jpg" />
        <meta property="og:image:alt" content="Live world clock showing times in New York, Tokyo, Sydney, and more" />
        <meta property="og:site_name" content="TimeCompare App" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Clock Comparison - Real-Time Global Times" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://timeacrossnations.com/images/world-clock-preview.jpg" />
        <meta name="twitter:site" content="@timecompare" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      {/* Page Content */}
      <div className="home-page">
        <header className="hero-section">
          <h1>World Clock Comparison</h1>
          <p>Current times in major cities around the world</p>
        </header>

        <div className="time-cards-container">
          {featuredCountries.map((country, index) => (
            <div 
              key={index}
              className={`time-card ${activeCard === index ? 'active' : ''}`}
              style={{ background: country.bgColor }}
              onClick={() => setActiveCard(index === activeCard ? null : index)}
            >
              <div className="card-header">
                <span className="country-flag">{country.flag}</span>
                <h2>{country.name}</h2>
              </div>
              
              <div className="card-body">
                <div className="current-time">{formatTime(country.timezone)}</div>
                <div className="current-date">{formatDate(country.timezone)}</div>
                <div className="coordinates">{country.coordinates}</div>
              </div>

              {activeCard === index && (
                <div className="comparison-section">
                  <h3>Comparison with other cities:</h3>
                  <div className="comparison-grid">
                    {featuredCountries.filter(c => c.timezone !== country.timezone).map((other, i) => (
                      <div key={i} className="comparison-item">
                        <span className="comparison-flag">{other.flag}</span>
                        <span className="comparison-name">{other.name.split(',')[0]}</span>
                        <span className="comparison-difference">
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

        <div className="time-difference-summary">
          <h2>Time Difference Summary</h2>
          <div className="difference-grid">
            {featuredCountries.map((countryA, i) => (
              featuredCountries.map((countryB, j) => (
                i < j && (
                  <div key={`${i}-${j}`} className="difference-card">
                    <div className="flags">
                      <span>{countryA.flag}</span>
                      <span>↔</span>
                      <span>{countryB.flag}</span>
                    </div>
                    <div className="names">
                      {countryA.name.split(',')[0]} ↔ {countryB.name.split(',')[0]}
                    </div>
                    <div className="difference">
                      {calculateTimeDifference(countryA.timezone, countryB.timezone)}
                    </div>
                  </div>
                )
              ))
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;