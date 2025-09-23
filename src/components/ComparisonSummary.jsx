import React from 'react';
import './ComparisonSummary.css';

const ComparisonSummary = ({ countries, currentTime }) => {
  const calculateDifference = (timezone1, timezone2) => {
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

  return (
    <div className="comparison-summary">
      <h3>Time Differences</h3>
      <div className="difference-grid">
        {countries.map((countryA, i) => (
          countries.map((countryB, j) => (
            i < j && (
              <div key={`${i}-${j}`} className="difference-card">
                <div className="flags">
                  <span>{countryA.flag}</span>
                  <span>↔</span>
                  <span>{countryB.flag}</span>
                </div>
                <div className="names">
                  {countryA.label.split(',')[0]} ↔ {countryB.label.split(',')[0]}
                </div>
                <div className="difference">
                  {calculateDifference(countryA.value, countryB.value)}
                </div>
              </div>
            )
          ))
        ))}
      </div>
    </div>
  );
};

export default ComparisonSummary;