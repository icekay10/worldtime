import React, { useState, useEffect } from 'react';
import countries from '../utils/countries';
import './CountrySearch.css';

const CountrySearch = ({ onSelect, selectedCountries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = countries.filter(country => 
        country.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.cities.some(city => 
          city.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ).slice(0, 10);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleSelect = (item, isCity = false) => {
    const selection = isCity 
      ? { ...item, isCity: true }
      : { 
          label: item.label, 
          value: item.value, 
          lat: item.lat, 
          lng: item.lng,
          flag: item.flag
        };
    
    onSelect(selection);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="country-search">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search countries or cities..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <span className="search-icon">🔍</span>
        
        {isOpen && results.length > 0 && (
          <div className="dropdown">
            {results.map((country) => (
              <React.Fragment key={country.value}>
                <div 
                  className="dropdown-item country"
                  onClick={() => handleSelect(country)}
                >
                  <span className="flag">{country.flag}</span>
                  <span className="name">{country.label}</span>
                </div>
                {country.cities
                  .filter(city => 
                    city.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .slice(0, 2)
                  .map(city => (
                    <div
                      key={`${country.value}-${city.name}`}
                      className="dropdown-item city"
                      onClick={() => handleSelect({
                        label: `${city.name}, ${country.label}`,
                        value: city.timezone,
                        lat: city.lat,
                        lng: city.lng,
                        flag: country.flag
                      }, true)}
                    >
                      <span className="flag">{country.flag}</span>
                      <span className="name">{city.name}, {country.label}</span>
                    </div>
                  ))
                }
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountrySearch;