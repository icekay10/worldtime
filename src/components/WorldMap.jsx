import React from 'react';
import getCountryCodeFromTimezone from '../utils/mapUtils';
import './WorldMap.css';

const WorldMap = ({ selectedCountries, highlightedCountry, setHighlightedCountry }) => {
  const highlightedCodes = selectedCountries.map(country => 
    getCountryCodeFromTimezone(country.value)
  );
  
  const currentHighlightedCode = highlightedCountry 
    ? getCountryCodeFromTimezone(highlightedCountry)
    : null;

  return (
    <div className="world-map-container">
      <div className="map-title">World Map</div>
      <div className="world-map">
         <img src="/world.svg" alt="World Map" className="base-map" />
        {highlightedCodes.map((code, index) => (
          <div
            key={index}
            className={`country-highlight ${code.toLowerCase()} ${
              currentHighlightedCode === code ? 'active' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldMap;