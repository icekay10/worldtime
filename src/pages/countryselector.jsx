'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './CountrySelector.module.css';

// Default countries data if not provided
const defaultCountries = [
  { value: 'America/New_York', label: 'United States (New York)', flag: '🇺🇸' },
  { value: 'Europe/London', label: 'United Kingdom (London)', flag: '🇬🇧' },
  { value: 'Asia/Tokyo', label: 'Japan (Tokyo)', flag: '🇯🇵' },
  { value: 'Australia/Sydney', label: 'Australia (Sydney)', flag: '🇦🇺' },
  { value: 'Europe/Paris', label: 'France (Paris)', flag: '🇫🇷' },
  { value: 'Europe/Berlin', label: 'Germany (Berlin)', flag: '🇩🇪' },
  { value: 'Asia/Shanghai', label: 'China (Shanghai)', flag: '🇨🇳' },
  { value: 'Asia/Dubai', label: 'United Arab Emirates (Dubai)', flag: '🇦🇪' },
  { value: 'America/Toronto', label: 'Canada (Toronto)', flag: '🇨🇦' },
  { value: 'Africa/Johannesburg', label: 'South Africa (Johannesburg)', flag: '🇿🇦' }
];

const CountrySelector = ({ 
  onSelect = () => {}, 
  selectedCountries = [], 
  maxSelection = 8,
  countries = defaultCountries
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Validate and ensure arrays
  const safeSelectedCountries = Array.isArray(selectedCountries) ? selectedCountries : [];
  const safeCountries = Array.isArray(countries) && countries.length > 0 ? countries : defaultCountries;

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filtered = safeCountries.filter(country =>
        country.label && 
        country.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !safeSelectedCountries.some(selected => 
          selected && selected.value === country.value
        )
      ).slice(0, 10); // Limit to 10 results
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  }, [searchTerm, safeSelectedCountries, safeCountries]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        inputRef.current && 
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (country) => {
    if (!country || !country.value) return;
    
    if (safeSelectedCountries.length >= maxSelection) {
      alert(`You can only compare up to ${maxSelection} countries at a time.`);
      return;
    }
    
    onSelect(country);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleRemove = (index) => {
    const newSelected = [...safeSelectedCountries];
    newSelected.splice(index, 1);
    // Call parent's onSelect with new array or individual removal
    if (onSelect) {
      onSelect({ type: 'remove', index });
    }
  };

  const handleClearAll = () => {
    setSearchTerm('');
    setIsOpen(false);
    if (onSelect) {
      onSelect({ type: 'clear' });
    }
  };

  const getCountryFlagEmoji = (country) => {
    if (country.flag) return country.flag;
    
    // Fallback flag emoji based on timezone
    try {
      const timezone = country.value || '';
      const countryCode = timezone.split('/')[0];
      if (countryCode.length === 2) {
        const codePoints = countryCode
          .toUpperCase()
          .split('')
          .map(char => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
      }
    } catch (error) {
      console.error('Error generating flag emoji:', error);
    }
    return '🌐'; // Default globe emoji
  };

  return (
    <div className={styles.countrySelector}>
      <div className={styles.header}>
        <h3 className={styles.title}>Select Countries to Compare</h3>
        <p className={styles.subtitle}>
          Choose up to {maxSelection} countries to compare time zones
        </p>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchIcon}>🔍</div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for a country (e.g., Japan, France, Brazil)..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => {
              setIsOpen(true);
              setSearchFocused(true);
            }}
            onBlur={() => {
              setSearchFocused(false);
              setTimeout(() => setIsOpen(false), 200);
            }}
            className={styles.searchInput}
            aria-label="Search countries"
          />
          {searchTerm && (
            <button 
              className={styles.clearButton}
              onClick={() => {
                setSearchTerm('');
                setFilteredCountries([]);
              }}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {isOpen && (
          <div ref={dropdownRef} className={styles.dropdown}>
            {filteredCountries.length > 0 ? (
              <div className={styles.dropdownList}>
                {filteredCountries.map(country => (
                  <button
                    key={country.value || Math.random()}
                    type="button"
                    className={styles.dropdownItem}
                    onClick={() => handleSelect(country)}
                    onMouseDown={(e) => e.preventDefault()} // Prevent immediate blur
                  >
                    <span className={styles.flag}>{getCountryFlagEmoji(country)}</span>
                    <span className={styles.countryName}>
                      {country.label || 'Unknown Country'}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className={styles.dropdownEmpty}>
                {searchTerm ? (
                  <>
                    <div className={styles.emptyIcon}>🔍</div>
                    <p className={styles.emptyMessage}>No matching countries found</p>
                    <p className={styles.emptyHint}>Try different search terms</p>
                  </>
                ) : (
                  <>
                    <div className={styles.emptyIcon}>🌍</div>
                    <p className={styles.emptyMessage}>Start typing to search countries</p>
                    <p className={styles.emptyHint}>Type country names or cities</p>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {safeSelectedCountries.length > 0 ? (
        <div className={styles.selectedContainer}>
          <div className={styles.selectedHeader}>
            <div className={styles.selectedTitle}>
              Selected Countries ({safeSelectedCountries.length}/{maxSelection})
            </div>
            {safeSelectedCountries.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className={styles.clearAllButton}
              >
                Clear All
              </button>
            )}
          </div>
          
          <div className={styles.selectedTags}>
            {safeSelectedCountries.map((country, index) => (
              <div key={country.value || index} className={styles.selectedTag}>
                <span className={styles.tagFlag}>{getCountryFlagEmoji(country)}</span>
                <span className={styles.tagName}>
                  {country.label ? country.label.split(' (')[0] : 'Unknown'}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className={styles.removeButton}
                  aria-label={`Remove ${country.label}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {safeSelectedCountries.length >= maxSelection && (
            <div className={styles.limitWarning}>
              <span className={styles.warningIcon}>⚠️</span>
              <span className={styles.warningText}>
                Maximum selection reached ({maxSelection} countries)
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIconLarge}>🌐</div>
          <p className={styles.emptyMessageLarge}>No countries selected yet</p>
          <p className={styles.emptyHintLarge}>
            Search above to add countries for time comparison
          </p>
        </div>
      )}

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Available Countries:</span>
          <span className={styles.statValue}>{safeCountries.length}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Remaining Slots:</span>
          <span className={styles.statValue}>
            {maxSelection - safeSelectedCountries.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;