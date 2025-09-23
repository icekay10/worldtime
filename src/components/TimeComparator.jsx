import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; 
import CountrySearch from './CountrySearch';
import CountryCard from './CountryCard';
import ComparisonSummary from './ComparisonSummary';
import './TimeComparator.css';

// Sample data for structured data (you can enhance this with real country data)
const countryDataMap = {
  'America/New_York': { name: 'New York, USA', flag: '🇺🇸', lat: '40.7128', lon: '-74.0060' },
  'Europe/London': { name: 'London, UK', flag: '🇬🇧', lat: '51.5074', lon: '-0.1278' },
  'Asia/Tokyo': { name: 'Tokyo, Japan', flag: '🇯🇵', lat: '35.6762', lon: '139.6503' },
  'Australia/Sydney': { name: 'Sydney, Australia', flag: '🇦🇺', lat: '-33.8688', lon: '151.2093' },
  'Africa/Johannesburg': { name: 'Johannesburg, South Africa', flag: '🇿🇦', lat: '-26.2041', lon: '28.0473' },
  'America/Sao_Paulo': { name: 'São Paulo, Brazil', flag: '🇧🇷', lat: '-23.5505', lon: '-46.6333' },
  'Asia/Dubai': { name: 'Dubai, UAE', flag: '🇦🇪', lat: '25.2048', lon: '55.2708' },
  'Europe/Moscow': { name: 'Moscow, Russia', flag: '🇷🇺', lat: '55.7558', lon: '37.6173' },
  'Asia/Kolkata': { name: 'Mumbai, India', flag: '🇮🇳', lat: '19.0760', lon: '72.8777' },
};

const TimeComparator = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectCountry = (country) => {
    if (!selectedCountries.some(c => c.value === country.value)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const removeCountry = (timezone) => {
    setSelectedCountries(selectedCountries.filter(c => c.value !== timezone));
  };

  // Generate dynamic meta description
  const selectedNames = selectedCountries.map(c => c.label.split(',')[0]).join(', ');
  const totalSelected = selectedCountries.length;
  const baseDescription = `Compare real-time clocks across ${totalSelected} selected cities: ${selectedNames || 'global locations'}. Check current time, time zones, and differences instantly.`;
  const defaultDescription = `World Time Explorer: Compare current times across cities worldwide. Real-time clock with time zone differences, daylight saving support, and live updates.`;

  const metaDescription = totalSelected > 0 ? baseDescription : defaultDescription;

  // Generate structured data for rich snippets
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "World Time Explorer",
    "description": "Compare current times across multiple cities and time zones in real-time.",
    "applicationCategory": "Utilities",
    "operatingSystem": "All",
    "url": "https://timeacrossnations.com/time-comparator",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "mainEntity": selectedCountries.length > 0
      ? selectedCountries.map(country => {
          const data = countryDataMap[country.value] || { name: country.label, lat: '', lon: '' };
          return {
            "@type": "Place",
            "name": data.name,
            "geo": data.lat && data.lon ? {
              "@type": "GeoCoordinates",
              "latitude": data.lat,
              "longitude": data.lon
            } : undefined,
            "description": `Current time in ${data.name}: ${new Intl.DateTimeFormat('en-US', {
              timeZone: country.value,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true
            }).format(new Date())}`
          };
        }).filter(Boolean)
      : Object.values(countryDataMap).map(data => ({
          "@type": "Place",
          "name": data.name,
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": data.lat,
            "longitude": data.lon
          }
        }))
  };

  return (
    <>
      {/* SEO & Social Meta Tags */}
      <Helmet>
        {/* Basic Meta */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{selectedCountries.length > 0 
          ? `Time in ${selectedNames} - Live Clock Comparison` 
          : 'World Time Explorer - Compare Global Time Zones in Real-Time'}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`world clock, time zone comparison, current time, time difference, ${selectedNames}, UTC time, global time, city time zones, daylight saving, live clock`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://timeacrossnations.com/time-comparator" />

        {/* Open Graph / Social */}
        <meta property="og:title" content={selectedCountries.length > 0 
          ? `Time Comparison: ${selectedNames}` 
          : 'World Time Explorer - Real-Time Global Clock'} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://timeacrossnations.com/time-comparator" />
        <meta property="og:image" content="https://timeacrossnations.com/images/time-comparator-preview.jpg" />
        <meta property="og:image:alt" content="Live world time comparison tool showing clocks for multiple cities" />
        <meta property="og:site_name" content="TimeExplorer App" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Time Explorer - Compare City Times" />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://timeacrossnations.com/images/time-comparator-preview.jpg" />
        <meta name="twitter:site" content="@timeexplorer" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      {/* Page Content */}
      <div className="time-comparator">
        <div className="comparator-header">
          <h1>World Time Explorer</h1>
          <p>Compare current times across multiple locations</p>
        </div>

        <div className="controls">
          <CountrySearch 
            onSelect={handleSelectCountry} 
            selectedCountries={selectedCountries}
          />
          
          <div className="view-toggle">
            <button 
              className={viewMode === 'grid' ? 'active' : ''}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
          </div>
        </div>

        {selectedCountries.length > 0 ? (
          <>
            <div className={`country-container ${viewMode}`}>
              {selectedCountries.map((country) => (
                <CountryCard
                  key={country.value}
                  country={country}
                  currentTime={currentTime}
                  onRemove={() => removeCountry(country.value)}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {selectedCountries.length > 1 && (
              <ComparisonSummary 
                countries={selectedCountries} 
                currentTime={currentTime} 
              />
            )}
          </>
        ) : (
          <div className="empty-state">
            <div className="world-icon">🌎</div>
            <h3>No countries selected</h3>
            <p>Start by searching for countries or cities above</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TimeComparator;