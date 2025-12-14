'use client';

import { useState, useEffect } from 'react';
import TimeDisplay from './timedisplay';
import styles from './CountryCard.module.css';

// Default country data
const defaultCountry = {
  value: 'UTC',
  label: 'Unknown Country',
  flag: '🌐',
  lat: 0,
  lng: 0,
  timezone: 'UTC'
};

const CountryCard = ({ 
  country = defaultCountry, 
  currentTime = new Date(), 
  onRemove = () => {}, 
  viewMode = 'grid' 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [localTime, setLocalTime] = useState(currentTime);
  const [isDay, setIsDay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Ensure country has all required properties
  const safeCountry = {
    value: country?.value || defaultCountry.value,
    label: country?.label || defaultCountry.label,
    flag: country?.flag || defaultCountry.flag,
    lat: typeof country?.lat === 'number' ? country.lat : defaultCountry.lat,
    lng: typeof country?.lng === 'number' ? country.lng : defaultCountry.lng,
    timezone: country?.timezone || country?.value || defaultCountry.timezone
  };

  useEffect(() => {
    setIsClient(true);
    setIsLoading(false);

    // If no currentTime prop is provided, set up real-time updates
    if (!currentTime || currentTime instanceof Date === false) {
      const timer = setInterval(() => {
        setLocalTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentTime]);

  useEffect(() => {
    if (isClient) {
      try {
        const timeToUse = currentTime instanceof Date ? currentTime : localTime;
        const hours = new Intl.DateTimeFormat('en-US', {
          timeZone: safeCountry.value,
          hour: 'numeric',
          hour12: false
        }).format(timeToUse);
        setIsDay(hours >= 6 && hours < 18);
      } catch (error) {
        console.error('Error determining day/night:', error);
        setIsDay(true); // Default to day
      }
    }
  }, [isClient, safeCountry.value, currentTime, localTime]);

  const getFormattedCoordinates = () => {
    const latDirection = safeCountry.lat >= 0 ? 'N' : 'S';
    const lngDirection = safeCountry.lng >= 0 ? 'E' : 'W';
    return `${Math.abs(safeCountry.lat).toFixed(2)}°${latDirection}, ${Math.abs(safeCountry.lng).toFixed(2)}°${lngDirection}`;
  };

  const getFormattedDate = () => {
    if (!isClient) return 'Loading...';
    
    try {
      const timeToUse = currentTime instanceof Date ? currentTime : localTime;
      return new Intl.DateTimeFormat('en-US', {
        timeZone: safeCountry.value,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(timeToUse);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date unavailable';
    }
  };

  const getFormattedTimezone = () => {
    try {
      return safeCountry.value
        .replace(/_/g, ' ')
        .replace(/\//g, ' / ')
        .replace(/([a-z])([A-Z])/g, '$1 $2');
    } catch {
      return 'UTC';
    }
  };

  const handleRemove = () => {
    if (onRemove && typeof onRemove === 'function') {
      onRemove(safeCountry.value);
    }
  };

  if (isLoading) {
    return (
      <div className={`${styles.countryCard} ${styles[viewMode]} ${styles.loading}`}>
        <div className={styles.cardSkeleton}>
          <div className={styles.skeletonHeader}></div>
          <div className={styles.skeletonTime}></div>
          <div className={styles.skeletonDetails}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.countryCard} ${styles[viewMode]} ${isDay ? styles.day : styles.night}`}>
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.flagContainer}>
          <span className={styles.flag}>{safeCountry.flag}</span>
          <div className={styles.countryInfo}>
            <h3 className={styles.countryName}>{safeCountry.label}</h3>
            <div className={styles.timezone}>{getFormattedTimezone()}</div>
          </div>
        </div>
        <button 
          className={styles.removeBtn}
          onClick={handleRemove}
          aria-label={`Remove ${safeCountry.label}`}
          title={`Remove ${safeCountry.label}`}
        >
          <span className={styles.removeIcon}>×</span>
        </button>
      </div>
      
      {/* Card Body */}
      <div className={styles.cardBody}>
        <TimeDisplay 
          time={currentTime instanceof Date ? currentTime : localTime} 
          timezone={safeCountry.value} 
        />
        
        <div className={styles.timeStatus}>
          <div className={styles.dayNightIndicator}>
            {isDay ? (
              <>
                <span className={styles.dayIcon}>☀️</span>
                <span className={styles.dayText}>Daytime</span>
              </>
            ) : (
              <>
                <span className={styles.nightIcon}>🌙</span>
                <span className={styles.nightText}>Nighttime</span>
              </>
            )}
          </div>
          <div className={styles.coordinates}>
            <span className={styles.coordinatesIcon}>📍</span>
            <span className={styles.coordinatesText}>{getFormattedCoordinates()}</span>
          </div>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className={styles.cardFooter}>
        <div className={styles.dateInfo}>
          <div className={styles.dateLabel}>Current Date:</div>
          <div className={styles.dateValue}>{getFormattedDate()}</div>
        </div>
        <div className={styles.timezoneInfo}>
          <div className={styles.timezoneLabel}>Timezone:</div>
          <div className={styles.timezoneValue}>{safeCountry.value}</div>
        </div>
      </div>

      {/* Background gradient based on time */}
      <div className={styles.cardBackground}></div>
    </div>
  );
};

export default CountryCard;