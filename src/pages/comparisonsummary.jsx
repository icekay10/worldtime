'use client';

import { useState, useEffect } from 'react';
import styles from './ComparisonSummary.module.css';

// Default countries data in case props are not provided
const defaultCountries = [
  { value: 'America/New_York', label: 'New York, USA', flag: '🇺🇸' },
  { value: 'Europe/London', label: 'London, UK', flag: '🇬🇧' },
  { value: 'Asia/Tokyo', label: 'Tokyo, Japan', flag: '🇯🇵' },
  { value: 'Australia/Sydney', label: 'Sydney, Australia', flag: '🇦🇺' },
  { value: 'Africa/Cairo', label: 'Cairo, Egypt', flag: '🇪🇬' }
];

const ComparisonSummary = ({ countries = defaultCountries, currentTime = new Date() }) => {
  const [isClient, setIsClient] = useState(false);
  const [localTime, setLocalTime] = useState(currentTime);

  useEffect(() => {
    setIsClient(true);
    
    // If no currentTime prop is provided, set up real-time updates
    if (!currentTime || currentTime instanceof Date === false) {
      const timer = setInterval(() => {
        setLocalTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentTime]);

  const calculateDifference = (timezone1, timezone2) => {
    if (!isClient) return 'Calculating...';
    
    try {
      const timeToUse = currentTime instanceof Date ? currentTime : localTime;
      
      const time1 = new Date(
        timeToUse.toLocaleString('en-US', { timeZone: timezone1 })
      );
      const time2 = new Date(
        timeToUse.toLocaleString('en-US', { timeZone: timezone2 })
      );
      
      const diffHours = (time1 - time2) / (1000 * 60 * 60);
      const absDiff = Math.abs(diffHours);
      
      if (Math.abs(diffHours) < 0.01) return 'Same time';
      
      const direction = diffHours > 0 ? 'ahead' : 'behind';
      
      if (Math.abs(absDiff % 1) < 0.01) {
        return `${Math.round(absDiff)} hour${Math.round(absDiff) !== 1 ? 's' : ''} ${direction}`;
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

  // Ensure countries is an array and has items
  const safeCountries = Array.isArray(countries) && countries.length > 0 
    ? countries 
    : defaultCountries;

  return (
    <div className={styles.comparisonSummary}>
      <div className={styles.header}>
        <h3 className={styles.title}>Time Differences Summary</h3>
        <p className={styles.subtitle}>Comparison between {safeCountries.length} locations</p>
      </div>
      
      <div className={styles.timeIndicator}>
        <span className={styles.timeLabel}>Current Reference Time:</span>
        <span className={styles.timeValue}>
          {isClient ? localTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }) : '--:--:--'}
        </span>
      </div>

      {safeCountries.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🌐</div>
          <p className={styles.emptyText}>No countries selected for comparison</p>
        </div>
      ) : (
        <>
          <div className={styles.differenceGrid}>
            {safeCountries.map((countryA, i) => (
              safeCountries.map((countryB, j) => (
                i < j && (
                  <div key={`${i}-${j}`} className={styles.differenceCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.flags}>
                        <span className={styles.flag}>{countryA.flag || '🌐'}</span>
                        <span className={styles.arrow}>↔</span>
                        <span className={styles.flag}>{countryB.flag || '🌐'}</span>
                      </div>
                      <div className={styles.locationNames}>
                        <span className={styles.locationName}>
                          {countryA.label ? countryA.label.split(',')[0] : 'Unknown'}
                        </span>
                        <span className={styles.separator}>vs</span>
                        <span className={styles.locationName}>
                          {countryB.label ? countryB.label.split(',')[0] : 'Unknown'}
                        </span>
                      </div>
                    </div>
                    <div className={styles.difference}>
                      {calculateDifference(
                        countryA.value || 'UTC', 
                        countryB.value || 'UTC'
                      )}
                    </div>
                  </div>
                )
              ))
            ))}
          </div>
          
          <div className={styles.summaryFooter}>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Total Comparisons:</span>
                <span className={styles.statValue}>
                  {(safeCountries.length * (safeCountries.length - 1)) / 2}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Locations:</span>
                <span className={styles.statValue}>{safeCountries.length}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ComparisonSummary;