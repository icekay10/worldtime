import React, { useState, useEffect } from 'react';
import countries from '../utils/timezones';
import './CountrySelector.css';

const CountrySelector = ({ onSelect, selectedCountries, maxSelection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = countries.filter(country =>
        country.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !selectedCountries.some(selected => selected.value === country.value)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  }, [searchTerm, selectedCountries]);

  const handleSelect = (country) => {
    if (selectedCountries.length >= maxSelection) {
      alert(`You can only compare up to ${maxSelection} countries at a time.`);
      return;
    }
    
    onSelect(country);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="country-selector">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        />
        {isOpen && (
          <div className="dropdown">
            {filteredCountries.length > 0 ? (
              filteredCountries.map(country => (
                <div
                  key={country.value}
                  className="dropdown-item"
                  onMouseDown={(e) => e.preventDefault()} // Prevent immediate blur
                  onClick={() => handleSelect(country)}
                >
                  <span className="flag">{getCountryFlagEmoji(country.value)}</span>
                  <span className="country-name">{country.label}</span>
                </div>
              ))
            ) : (
              <div className="dropdown-item no-results">
                {searchTerm ? "No matching countries found" : "Start typing to search"}
              </div>
            )}
          </div>
        )}
      </div>
      {selectedCountries.length > 0 && (
        <div className="selected-countries">
          <div className="selected-title">Selected: {selectedCountries.length}/{maxSelection}</div>
          <div className="selected-tags">
            {selectedCountries.map(country => (
              <span key={country.value} className="selected-tag">
                <span className="tag-flag">{getCountryFlagEmoji(country.value)}</span>
                {country.label.split(' (')[0]}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get flag emoji
const getCountryFlagEmoji = (timezone) => {
  const countryCode = timezone.split('/')[0];
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

export default CountrySelector;