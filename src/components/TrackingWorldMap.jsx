import React, { useState, useEffect } from 'react';
import './TrackingWorldMap.css';

// 🌍 Country Data: Capital, Timezone, Sunrise/Sunset by Season
const countryData = {
  "Afghanistan": { capital: "Kabul", timezoneId: "Asia/Kabul", seasons: {
    winter: { sunrise: "7:00 AM", sunset: "5:00 PM" },
    spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
    summer: { sunrise: "5:30 AM", sunset: "7:30 PM" },
    autumn: { sunrise: "6:30 AM", sunset: "5:30 PM" }
  }},
  "Albania": { capital: "Tirana", timezoneId: "Europe/Tirane", seasons: {
    winter: { sunrise: "7:30 AM", sunset: "4:30 PM" },
    spring: { sunrise: "6:00 AM", sunset: "7:00 PM" },
    summer: { sunrise: "5:00 AM", sunset: "8:00 PM" },
    autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
  }},
  "Algeria": { capital: "Algiers", timezoneId: "Africa/Algiers", seasons: {
    winter: { sunrise: "7:15 AM", sunset: "5:15 PM" },
    spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
    summer: { sunrise: "5:45 AM", sunset: "8:15 PM" },
    autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
  }},
  "Argentina": { capital: "Buenos Aires", timezoneId: "America/Argentina/Buenos_Aires", seasons: {
    winter: { sunrise: "7:15 AM", sunset: "6:00 PM" },
    spring: { sunrise: "5:45 AM", sunset: "8:00 PM" },
    summer: { sunrise: "5:15 AM", sunset: "8:30 PM" },
    autumn: { sunrise: "6:15 AM", sunset: "7:15 PM" }
  }},
  "Australia": { capital: "Canberra", timezoneId: "Australia/Sydney", otherCities: [
    { name: "Sydney", timezoneId: "Australia/Sydney" },
    { name: "Melbourne", timezoneId: "Australia/Melbourne" },
    { name: "Perth", timezoneId: "Australia/Perth" },
    { name: "Darwin", timezoneId: "Australia/Darwin" }
  ], seasons: {
    winter: { sunrise: "7:00 AM", sunset: "5:15 PM" },
    spring: { sunrise: "6:00 AM", sunset: "6:00 PM" },
    summer: { sunrise: "5:45 AM", sunset: "8:15 PM" },
    autumn: { sunrise: "6:30 AM", sunset: "5:45 PM" }
  }},
  "Brazil": { capital: "Brasília", timezoneId: "America/Sao_Paulo", seasons: {
    winter: { sunrise: "6:45 AM", sunset: "6:00 PM" },
    spring: { sunrise: "5:30 AM", sunset: "6:45 PM" },
    summer: { sunrise: "5:00 AM", sunset: "6:30 PM" },
    autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
  }},
  "Canada": { capital: "Ottawa", timezoneId: "America/Toronto", seasons: {
    winter: { sunrise: "7:30 AM", sunset: "4:30 PM" },
    spring: { sunrise: "6:15 AM", sunset: "8:00 PM" },
    summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
    autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
  }},
  "China": { capital: "Beijing", timezoneId: "Asia/Shanghai", seasons: {
    winter: { sunrise: "7:00 AM", sunset: "5:30 PM" },
    spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
    summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
    autumn: { sunrise: "6:00 AM", sunset: "5:45 PM" }
  }},
  "France": { capital: "Paris", timezoneId: "Europe/Paris", seasons: {
    winter: { sunrise: "8:15 AM", sunset: "5:15 PM" },
    spring: { sunrise: "6:45 AM", sunset: "9:00 PM" },
    summer: { sunrise: "5:45 AM", sunset: "10:00 PM" },
    autumn: { sunrise: "7:45 AM", sunset: "7:15 PM" }
  }},
  "Germany": { capital: "Berlin", timezoneId: "Europe/Berlin", seasons: {
    winter: { sunrise: "8:00 AM", sunset: "4:00 PM" },
    spring: { sunrise: "6:00 AM", sunset: "8:30 PM" },
    summer: { sunrise: "5:00 AM", sunset: "9:30 PM" },
    autumn: { sunrise: "7:00 AM", sunset: "6:00 PM" }
  }},
  "India": { capital: "New Delhi", timezoneId: "Asia/Kolkata", seasons: {
    winter: { sunrise: "6:45 AM", sunset: "5:30 PM" },
    spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
    summer: { sunrise: "5:15 AM", sunset: "7:00 PM" },
    autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
  }},
  "Japan": { capital: "Tokyo", timezoneId: "Asia/Tokyo", seasons: {
    winter: { sunrise: "6:45 AM", sunset: "4:45 PM" },
    spring: { sunrise: "5:30 AM", sunset: "6:00 PM" },
    summer: { sunrise: "4:30 AM", sunset: "6:45 PM" },
    autumn: { sunrise: "5:30 AM", sunset: "5:30 PM" }
  }},
  "South Africa": { capital: "Pretoria", timezoneId: "Africa/Johannesburg", seasons: {
    winter: { sunrise: "6:45 AM", sunset: "5:15 PM" },
    spring: { sunrise: "5:15 AM", sunset: "6:30 PM" },
    summer: { sunrise: "5:00 AM", sunset: "7:00 PM" },
    autumn: { sunrise: "5:30 AM", sunset: "6:00 PM" }
  }},
  "United States": { capital: "Washington, D.C.", timezoneId: "America/New_York", otherCities: [
    { name: "New York", timezoneId: "America/New_York" },
    { name: "Los Angeles", timezoneId: "America/Los_Angeles" },
    { name: "Chicago", timezoneId: "America/Chicago" },
    { name: "Denver", timezoneId: "America/Denver" },
    { name: "Honolulu", timezoneId: "Pacific/Honolulu" }
  ], seasons: {
    winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
    spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
    summer: { sunrise: "5:45 AM", sunset: "8:30 PM" },
    autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
  }}
};

const countriesList = Object.keys(countryData);

const TrackingWorldMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [theme, setTheme] = useState('day');
  const [currentSeason, setCurrentSeason] = useState('summer');
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine season based on month
  useEffect(() => {
    const month = currentTime.getMonth(); // 0 = Jan, 11 = Dec
    if ([11, 0, 1].includes(month)) setCurrentSeason('winter');     // Dec-Feb
    else if ([2, 3, 4].includes(month)) setCurrentSeason('spring'); // Mar-May
    else if ([5, 6, 7].includes(month)) setCurrentSeason('summer'); // Jun-Aug
    else setCurrentSeason('autumn');                                // Sep-Nov
  }, [currentTime]);

  const filteredCountries = countriesList
    .filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 8);

  const handleCountrySelect = (country) => {
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
      setSearchTerm('');
      setShowSearchResults(false);
    }
  };

  const removeCountry = (countryToRemove) => {
    setSelectedCountries(selectedCountries.filter(c => c !== countryToRemove));
  };

  const formatLocalTime = (country) => {
    const tz = countryData[country].timezoneId;
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: tz,
    }).format(currentTime);
  };

  const calculateDayNightProgress = (country) => {
    const seasonData = countryData[country].seasons[currentSeason];
    const parseTime = (timeStr) => {
      let [time, period] = timeStr.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      return hours + minutes / 60;
    };

    const sunriseHour = parseTime(seasonData.sunrise);
    const sunsetHour = parseTime(seasonData.sunset);
    const tz = countryData[country].timezoneId;
    const localNow = new Date(currentTime.toLocaleString("en-US", { timeZone: tz }));
    const localHours = localNow.getHours();
    const localMinutes = localNow.getMinutes();
    const localTimeDecimal = localHours + localMinutes / 60;

    if (localTimeDecimal >= sunriseHour && localTimeDecimal < sunsetHour) {
      const dayDuration = sunsetHour - sunriseHour;
      const progress = ((localTimeDecimal - sunriseHour) / dayDuration) * 100;
      return {
        isDay: true,
        progress: Math.min(100, Math.max(0, progress)),
        remaining: `${((sunsetHour - localTimeDecimal) * 10 | 0) / 10} hours of daylight`
      };
    } else {
      const nextSunrise = localTimeDecimal < sunriseHour ? sunriseHour : sunriseHour + 24;
      const nightDuration = nextSunrise - (localTimeDecimal < sunsetHour ? sunsetHour - 24 : sunsetHour);
      const progress = ((localTimeDecimal - (localTimeDecimal < sunsetHour ? sunsetHour - 24 : sunsetHour)) / nightDuration) * 100;
      return {
        isDay: false,
        progress: Math.min(100, Math.max(0, progress)),
        remaining: `${((nextSunrise - localTimeDecimal) * 10 | 0) / 10} hours until sunrise`
      };
    }
  };

  return (
    <div className={`app-container ${theme}`}>
      <header className="app-header">
        <h1>🌞🌜 Global Day &amp; Night Tracker</h1>
        <p>Track real-time sunlight and darkness across the world</p>

        <div className="controls">
          <div className="theme-toggle">
            <button
              className={theme === 'day' ? 'active' : ''}
              onClick={() => setTheme('day')}
            >
              Day Mode
            </button>
            <button
              className={theme === 'night' ? 'active' : ''}
              onClick={() => setTheme('night')}
            >
              Night Mode
            </button>
          </div>
        </div>
      </header>

      {/* World Map Simulation */}
      <div className="world-map">
        <div className="sunlight-overlay"></div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSearchResults(true);
            }}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
            className="search-input"
          />
          {showSearchResults && searchTerm && (
            <div className="search-results">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <div
                    key={country}
                    className="search-result-item"
                    onClick={() => handleCountrySelect(country)}
                  >
                    {country}
                    <span className="capital">Capital: {countryData[country].capital}</span>
                  </div>
                ))
              ) : (
                <div className="search-result-item">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Selected Countries Cards */}
      <div className="selected-countries">
        {selectedCountries.map((country) => {
          const data = countryData[country];
          const dayNight = calculateDayNightProgress(country);
          const seasonTimes = data.seasons[currentSeason];

          return (
            <div
              key={country}
              className={`country-card ${dayNight.isDay ? 'day' : 'night'}`}
            >
              <div className="card-header">
                <h2>{country}</h2>
                <button
                  onClick={() => removeCountry(country)}
                  className="close-btn"
                  aria-label={`Remove ${country}`}
                >
                  ×
                </button>
              </div>

              <div className="card-body">
                <div className="time-info">
                  <div className="local-time">
                    <span className="label">Local Time</span>
                    <span className="time">{formatLocalTime(country)}</span>
                  </div>
                  <div className="timezone">
                    <span className="label">Timezone</span>
                    <span className="value">{data.timezoneId.replace('_', ' ')}</span>
                  </div>
                </div>

                <div className="day-night-tracker">
                  <div className="tracker-header">
                    <span className="status">{dayNight.isDay ? '☀️ Daytime' : '🌙 Nighttime'}</span>
                    <span className="remaining">{dayNight.remaining}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${dayNight.progress}%`,
                        backgroundColor: dayNight.isDay ? '#FFD700' : '#1E90FF'
                      }}
                    ></div>
                  </div>
                </div>

                <div className="all-seasons">
                  <h4>All Seasons</h4>
                  <div className="season-grid">
                    {Object.entries(data.seasons).map(([season, times]) => (
                      <div key={season} className="season-item">
                        <span className="season-name">{season}:</span>
                        <span className="season-times">{times.sunrise} – {times.sunset}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCountries.length === 0 && (
        <div className="empty-state">
          <p>Search for countries above to start tracking their day/night cycles</p>
          <p>Try searching for "India", "Germany", or "Australia"</p>
        </div>
      )}

      <footer className="app-footer">
        <p>Compare up to 12 countries at once</p>
        <p>Current season: {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)} (based on your local time)</p>
      </footer>
    </div>
  );
};

export default TrackingWorldMap;