import React from 'react';
import TimeDisplay from './TimeDisplay';
import './CountryCard.css';

const CountryCard = ({ country, currentTime, onRemove, viewMode }) => {
  const isDayTime = () => {
    const hours = new Intl.DateTimeFormat('en-US', {
      timeZone: country.value,
      hour: 'numeric',
      hour12: false
    }).format(currentTime);
    return hours >= 6 && hours < 18;
  };

  return (
    <div className={`country-card ${viewMode} ${isDayTime() ? 'day' : 'night'}`}>
      <div className="card-header">
        <div className="flag">{country.flag}</div>
        <h3>{country.label}</h3>
        <button className="remove-btn" onClick={onRemove}>
          &times;
        </button>
      </div>
      
      <div className="card-body">
        <TimeDisplay time={currentTime} timezone={country.value} />
        
        <div className="timezone">{country.value.replace(/_/g, ' ')}</div>
        
        <div className="day-night">
          {isDayTime() ? (
            <span className="day-indicator">☀️ Daytime</span>
          ) : (
            <span className="night-indicator">🌙 Nighttime</span>
          )}
        </div>
      </div>
      
      <div className="card-footer">
        <div className="coordinates">
          <span>📍 {country.lat.toFixed(2)}°N, {country.lng.toFixed(2)}°E</span>
        </div>
        <div className="date">
          {new Intl.DateTimeFormat('en-US', {
            timeZone: country.value,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;