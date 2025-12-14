'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import styles from './TimeComparator.module.css';

// Full country data from your file (embedded)
const countryData = {
  "Afghanistan": { capital: "Kabul", timezoneId: "Asia/Kabul" },
  "Albania": { capital: "Tirana", timezoneId: "Europe/Tirane" },
  "Algeria": { capital: "Algiers", timezoneId: "Africa/Algiers" },
  "Andorra": { capital: "Andorra la Vella", timezoneId: "Europe/Andorra" },
  "Angola": { capital: "Luanda", timezoneId: "Africa/Luanda" },
  "Antigua and Barbuda": { capital: "Saint John's", timezoneId: "America/Antigua" },
  "Argentina": { capital: "Buenos Aires", timezoneId: "America/Argentina/Buenos_Aires" },
  "Armenia": { capital: "Yerevan", timezoneId: "Asia/Yerevan" },
  "Australia": { capital: "Canberra", timezoneId: "Australia/Sydney" },
  "Austria": { capital: "Vienna", timezoneId: "Europe/Vienna" },
  "Azerbaijan": { capital: "Baku", timezoneId: "Asia/Baku" },
  "Bahamas": { capital: "Nassau", timezoneId: "America/Nassau" },
  "Bahrain": { capital: "Manama", timezoneId: "Asia/Bahrain" },
  "Bangladesh": { capital: "Dhaka", timezoneId: "Asia/Dhaka" },
  "Barbados": { capital: "Bridgetown", timezoneId: "America/Barbados" },
  "Belarus": { capital: "Minsk", timezoneId: "Europe/Minsk" },
  "Belgium": { capital: "Brussels", timezoneId: "Europe/Brussels" },
  "Belize": { capital: "Belmopan", timezoneId: "America/Belize" },
  "Benin": { capital: "Porto-Novo", timezoneId: "Africa/Porto-Novo" },
  "Bhutan": { capital: "Thimphu", timezoneId: "Asia/Thimphu" },
  "Bolivia": { capital: "Sucre", timezoneId: "America/La_Paz" },
  "Bosnia and Herzegovina": { capital: "Sarajevo", timezoneId: "Europe/Sarajevo" },
  "Botswana": { capital: "Gaborone", timezoneId: "Africa/Gaborone" },
  "Brazil": { capital: "Brasília", timezoneId: "America/Sao_Paulo" },
  "Brunei": { capital: "Bandar Seri Begawan", timezoneId: "Asia/Brunei" },
  "Bulgaria": { capital: "Sofia", timezoneId: "Europe/Sofia" },
  "Burkina Faso": { capital: "Ouagadougou", timezoneId: "Africa/Ouagadougou" },
  "Burundi": { capital: "Gitega", timezoneId: "Africa/Bujumbura" },
  "Cabo Verde": { capital: "Praia", timezoneId: "Atlantic/Cape_Verde" },
  "Cambodia": { capital: "Phnom Penh", timezoneId: "Asia/Phnom_Penh" },
  "Cameroon": { capital: "Yaoundé", timezoneId: "Africa/Douala" },
  "Canada": { capital: "Ottawa", timezoneId: "America/Toronto" },
  "Central African Republic": { capital: "Bangui", timezoneId: "Africa/Bangui" },
  "Chad": { capital: "N'Djamena", timezoneId: "Africa/Ndjamena" },
  "Chile": { capital: "Santiago", timezoneId: "America/Santiago" },
  "China": { capital: "Beijing", timezoneId: "Asia/Shanghai" },
  "Colombia": { capital: "Bogotá", timezoneId: "America/Bogota" },
  "Comoros": { capital: "Moroni", timezoneId: "Indian/Comoro" },
  "Congo (Congo-Brazzaville)": { capital: "Brazzaville", timezoneId: "Africa/Brazzaville" },
  "Costa Rica": { capital: "San José", timezoneId: "America/Costa_Rica" },
  "Croatia": { capital: "Zagreb", timezoneId: "Europe/Zagreb" },
  "Cuba": { capital: "Havana", timezoneId: "America/Havana" },
  "Cyprus": { capital: "Nicosia", timezoneId: "Asia/Nicosia" },
  "Czechia (Czech Republic)": { capital: "Prague", timezoneId: "Europe/Prague" },
  "Denmark": { capital: "Copenhagen", timezoneId: "Europe/Copenhagen" },
  "Djibouti": { capital: "Djibouti", timezoneId: "Africa/Djibouti" },
  "Dominica": { capital: "Roseau", timezoneId: "America/Dominica" },
  "Dominican Republic": { capital: "Santo Domingo", timezoneId: "America/Santo_Domingo" },
  "Ecuador": { capital: "Quito", timezoneId: "America/Guayaquil" },
  "Egypt": { capital: "Cairo", timezoneId: "Africa/Cairo" },
  "El Salvador": { capital: "San Salvador", timezoneId: "America/El_Salvador" },
  "Equatorial Guinea": { capital: "Malabo", timezoneId: "Africa/Malabo" },
  "Eritrea": { capital: "Asmara", timezoneId: "Africa/Asmara" },
  "Estonia": { capital: "Tallinn", timezoneId: "Europe/Tallinn" },
  "Eswatini (fmr. Swaziland)": { capital: "Mbabane", timezoneId: "Africa/Mbabane" },
  "Ethiopia": { capital: "Addis Ababa", timezoneId: "Africa/Addis_Ababa" },
  "Fiji": { capital: "Suva", timezoneId: "Pacific/Fiji" },
  "Finland": { capital: "Helsinki", timezoneId: "Europe/Helsinki" },
  "France": { capital: "Paris", timezoneId: "Europe/Paris" },
  "Gabon": { capital: "Libreville", timezoneId: "Africa/Libreville" },
  "Gambia": { capital: "Banjul", timezoneId: "Africa/Banjul" },
  "Georgia": { capital: "Tbilisi", timezoneId: "Asia/Tbilisi" },
  "Germany": { capital: "Berlin", timezoneId: "Europe/Berlin" },
  "Ghana": { capital: "Accra", timezoneId: "Africa/Accra" },
  "Greece": { capital: "Athens", timezoneId: "Europe/Athens" },
  "Grenada": { capital: "St. George's", timezoneId: "America/Grenada" },
  "Guatemala": { capital: "Guatemala City", timezoneId: "America/Guatemala" },
  "Guinea": { capital: "Conakry", timezoneId: "Africa/Conakry" },
  "Guinea-Bissau": { capital: "Bissau", timezoneId: "Africa/Bissau" },
  "Guyana": { capital: "Georgetown", timezoneId: "America/Guyana" },
  "Haiti": { capital: "Port-au-Prince", timezoneId: "America/Port-au-Prince" },
  "Holy See": { capital: "Vatican City", timezoneId: "Europe/Vatican" },
  "Honduras": { capital: "Tegucigalpa", timezoneId: "America/Tegucigalpa" },
  "Hungary": { capital: "Budapest", timezoneId: "Europe/Budapest" },
  "Iceland": { capital: "Reykjavik", timezoneId: "Atlantic/Reykjavik" },
  "India": { capital: "New Delhi", timezoneId: "Asia/Kolkata" },
  "Indonesia": { capital: "Jakarta", timezoneId: "Asia/Jakarta" },
  "Iran": { capital: "Tehran", timezoneId: "Asia/Tehran" },
  "Iraq": { capital: "Baghdad", timezoneId: "Asia/Baghdad" },
  "Ireland": { capital: "Dublin", timezoneId: "Europe/Dublin" },
  "Israel": { capital: "Jerusalem", timezoneId: "Asia/Jerusalem" },
  "Italy": { capital: "Rome", timezoneId: "Europe/Rome" },
  "Jamaica": { capital: "Kingston", timezoneId: "America/Jamaica" },
  "Japan": { capital: "Tokyo", timezoneId: "Asia/Tokyo" },
  "Jordan": { capital: "Amman", timezoneId: "Asia/Amman" },
  "Kazakhstan": { capital: "Nur-Sultan", timezoneId: "Asia/Almaty" },
  "Kenya": { capital: "Nairobi", timezoneId: "Africa/Nairobi" },
  "Kiribati": { capital: "South Tarawa", timezoneId: "Pacific/Tarawa" },
  "Korea, North": { capital: "Pyongyang", timezoneId: "Asia/Pyongyang" },
  "Korea, South": { capital: "Seoul", timezoneId: "Asia/Seoul" },
  "Kosovo": { capital: "Pristina", timezoneId: "Europe/Belgrade" },
  "Kuwait": { capital: "Kuwait City", timezoneId: "Asia/Kuwait" },
  "Kyrgyzstan": { capital: "Bishkek", timezoneId: "Asia/Bishkek" },
  "Laos": { capital: "Vientiane", timezoneId: "Asia/Vientiane" },
  "Latvia": { capital: "Riga", timezoneId: "Europe/Riga" },
  "Lebanon": { capital: "Beirut", timezoneId: "Asia/Beirut" },
  "Lesotho": { capital: "Maseru", timezoneId: "Africa/Maseru" },
  "Liberia": { capital: "Monrovia", timezoneId: "Africa/Monrovia" },
  "Libya": { capital: "Tripoli", timezoneId: "Africa/Tripoli" },
  "Liechtenstein": { capital: "Vaduz", timezoneId: "Europe/Vaduz" },
  "Lithuania": { capital: "Vilnius", timezoneId: "Europe/Vilnius" },
  "Luxembourg": { capital: "Luxembourg", timezoneId: "Europe/Luxembourg" },
  "Madagascar": { capital: "Antananarivo", timezoneId: "Indian/Antananarivo" },
  "Malawi": { capital: "Lilongwe", timezoneId: "Africa/Blantyre" },
  "Malaysia": { capital: "Kuala Lumpur", timezoneId: "Asia/Kuala_Lumpur" },
  "Maldives": { capital: "Malé", timezoneId: "Indian/Maldives" },
  "Mali": { capital: "Bamako", timezoneId: "Africa/Bamako" },
  "Malta": { capital: "Valletta", timezoneId: "Europe/Malta" },
  "Marshall Islands": { capital: "Majuro", timezoneId: "Pacific/Majuro" },
  "Mauritania": { capital: "Nouakchott", timezoneId: "Africa/Nouakchott" },
  "Mauritius": { capital: "Port Louis", timezoneId: "Indian/Mauritius" },
  "Mexico": { capital: "Mexico City", timezoneId: "America/Mexico_City" },
  "Micronesia": { capital: "Palikir", timezoneId: "Pacific/Pohnpei" },
  "Moldova": { capital: "Chisinau", timezoneId: "Europe/Chisinau" },
  "Monaco": { capital: "Monaco", timezoneId: "Europe/Monaco" },
  "Mongolia": { capital: "Ulaanbaatar", timezoneId: "Asia/Ulaanbaatar" },
  "Montenegro": { capital: "Podgorica", timezoneId: "Europe/Podgorica" },
  "Morocco": { capital: "Rabat", timezoneId: "Africa/Casablanca" },
  "Mozambique": { capital: "Maputo", timezoneId: "Africa/Maputo" },
  "Myanmar (Burma)": { capital: "Naypyidaw", timezoneId: "Asia/Yangon" },
  "Namibia": { capital: "Windhoek", timezoneId: "Africa/Windhoek" },
  "Nauru": { capital: "Yaren", timezoneId: "Pacific/Nauru" },
  "Nepal": { capital: "Kathmandu", timezoneId: "Asia/Kathmandu" },
  "Netherlands": { capital: "Amsterdam", timezoneId: "Europe/Amsterdam" },
  "New Zealand": { capital: "Wellington", timezoneId: "Pacific/Auckland" },
  "Nicaragua": { capital: "Managua", timezoneId: "America/Managua" },
  "Niger": { capital: "Niamey", timezoneId: "Africa/Niamey" },
  "Nigeria": { capital: "Abuja", timezoneId: "Africa/Lagos" },
  "North Macedonia": { capital: "Skopje", timezoneId: "Europe/Skopje" },
  "Norway": { capital: "Oslo", timezoneId: "Europe/Oslo" },
  "Oman": { capital: "Muscat", timezoneId: "Asia/Muscat" },
  "Pakistan": { capital: "Islamabad", timezoneId: "Asia/Karachi" },
  "Palau": { capital: "Ngerulmud", timezoneId: "Pacific/Palau" },
  "Panama": { capital: "Panama City", timezoneId: "America/Panama" },
  "Papua New Guinea": { capital: "Port Moresby", timezoneId: "Pacific/Port_Moresby" },
  "Paraguay": { capital: "Asunción", timezoneId: "America/Asuncion" },
  "Peru": { capital: "Lima", timezoneId: "America/Lima" },
  "Philippines": { capital: "Manila", timezoneId: "Asia/Manila" },
  "Poland": { capital: "Warsaw", timezoneId: "Europe/Warsaw" },
  "Portugal": { capital: "Lisbon", timezoneId: "Europe/Lisbon" },
  "Qatar": { capital: "Doha", timezoneId: "Asia/Qatar" },
  "Romania": { capital: "Bucharest", timezoneId: "Europe/Bucharest" },
  "Russia": { capital: "Moscow", timezoneId: "Europe/Moscow" },
  "Rwanda": { capital: "Kigali", timezoneId: "Africa/Kigali" },
  "Saint Kitts and Nevis": { capital: "Basseterre", timezoneId: "America/St_Kitts" },
  "Saint Lucia": { capital: "Castries", timezoneId: "America/St_Lucia" },
  "Saint Vincent and the Grenadines": { capital: "Kingstown", timezoneId: "America/St_Vincent" },
  "Samoa": { capital: "Apia", timezoneId: "Pacific/Apia" },
  "San Marino": { capital: "San Marino", timezoneId: "Europe/San_Marino" },
  "Sao Tome and Principe": { capital: "São Tomé", timezoneId: "Africa/Sao_Tome" },
  "Saudi Arabia": { capital: "Riyadh", timezoneId: "Asia/Riyadh" },
  "Senegal": { capital: "Dakar", timezoneId: "Africa/Dakar" },
  "Serbia": { capital: "Belgrade", timezoneId: "Europe/Belgrade" },
  "Seychelles": { capital: "Victoria", timezoneId: "Indian/Mahe" },
  "Sierra Leone": { capital: "Freetown", timezoneId: "Africa/Freetown" },
  "Singapore": { capital: "Singapore", timezoneId: "Asia/Singapore" },
  "Slovakia": { capital: "Bratislava", timezoneId: "Europe/Bratislava" },
  "Slovenia": { capital: "Ljubljana", timezoneId: "Europe/Ljubljana" },
  "Solomon Islands": { capital: "Honiara", timezoneId: "Pacific/Guadalcanal" },
  "Somalia": { capital: "Mogadishu", timezoneId: "Africa/Mogadishu" },
  "South Africa": { capital: "Pretoria", timezoneId: "Africa/Johannesburg" },
  "South Sudan": { capital: "Juba", timezoneId: "Africa/Juba" },
  "Spain": { capital: "Madrid", timezoneId: "Europe/Madrid" },
  "Sri Lanka": { capital: "Colombo", timezoneId: "Asia/Colombo" },
  "Sudan": { capital: "Khartoum", timezoneId: "Africa/Khartoum" },
  "Suriname": { capital: "Paramaribo", timezoneId: "America/Paramaribo" },
  "Sweden": { capital: "Stockholm", timezoneId: "Europe/Stockholm" },
  "Switzerland": { capital: "Bern", timezoneId: "Europe/Zurich" },
  "Syria": { capital: "Damascus", timezoneId: "Asia/Damascus" },
  "Tajikistan": { capital: "Dushanbe", timezoneId: "Asia/Dushanbe" },
  "Tanzania": { capital: "Dodoma", timezoneId: "Africa/Dar_es_Salaam" },
  "Thailand": { capital: "Bangkok", timezoneId: "Asia/Bangkok" },
  "Timor-Leste": { capital: "Dili", timezoneId: "Asia/Dili" },
  "Togo": { capital: "Lomé", timezoneId: "Africa/Lome" },
  "Tonga": { capital: "Nuku'alofa", timezoneId: "Pacific/Tongatapu" },
  "Trinidad and Tobago": { capital: "Port of Spain", timezoneId: "America/Port_of_Spain" },
  "Tunisia": { capital: "Tunis", timezoneId: "Africa/Tunis" },
  "Turkey": { capital: "Ankara", timezoneId: "Europe/Istanbul" },
  "Turkmenistan": { capital: "Ashgabat", timezoneId: "Asia/Ashgabat" },
  "Tuvalu": { capital: "Funafuti", timezoneId: "Pacific/Funafuti" },
  "Uganda": { capital: "Kampala", timezoneId: "Africa/Kampala" },
  "Ukraine": { capital: "Kyiv", timezoneId: "Europe/Kyiv" },
  "United Arab Emirates": { capital: "Abu Dhabi", timezoneId: "Asia/Dubai" },
  "United Kingdom": { capital: "London", timezoneId: "Europe/London" },
  "United States": { capital: "Washington, D.C.", timezoneId: "America/New_York" },
  "Uruguay": { capital: "Montevideo", timezoneId: "America/Montevideo" },
  "Uzbekistan": { capital: "Tashkent", timezoneId: "Asia/Tashkent" },
  "Vanuatu": { capital: "Port Vila", timezoneId: "Pacific/Efate" },
  "Venezuela": { capital: "Caracas", timezoneId: "America/Caracas" },
  "Vietnam": { capital: "Hanoi", timezoneId: "Asia/Ho_Chi_Minh" },
  "Yemen": { capital: "Sana'a", timezoneId: "Asia/Aden" },
  "Zambia": { capital: "Lusaka", timezoneId: "Africa/Lusaka" },
  "Zimbabwe": { capital: "Harare", timezoneId: "Africa/Harare" },
   "Bahamas": { capital: "Nassau", timezoneId: "America/Nassau" },
  "Congo (Democratic Republic)": { capital: "Kinshasa", timezoneId: "Africa/Kinshasa" },
  "Côte d'Ivoire (Ivory Coast)": { capital: "Yamoussoukro", timezoneId: "Africa/Abidjan" },
  "East Timor": { capital: "Dili", timezoneId: "Asia/Dili" },
  "El Salvador": { capital: "San Salvador", timezoneId: "America/El_Salvador" },
  "Eswatini": { capital: "Mbabane", timezoneId: "Africa/Mbabane" },
  "Guinea-Bissau": { capital: "Bissau", timezoneId: "Africa/Bissau" },
  "Honduras": { capital: "Tegucigalpa", timezoneId: "America/Tegucigalpa" },
  "Kyrgyzstan": { capital: "Bishkek", timezoneId: "Asia/Bishkek" },
  "Madagascar": { capital: "Antananarivo", timezoneId: "Indian/Antananarivo" },
  "Malawi": { capital: "Lilongwe", timezoneId: "Africa/Blantyre" },
  "Mali": { capital: "Bamako", timezoneId: "Africa/Bamako" },
  "Moldova": { capital: "Chisinau", timezoneId: "Europe/Chisinau" },
  "Mongolia": { capital: "Ulaanbaatar", timezoneId: "Asia/Ulaanbaatar" },
  "Palestine": { capital: "Ramallah", timezoneId: "Asia/Gaza" },
  "Puerto Rico": { capital: "San Juan", timezoneId: "America/Puerto_Rico" },
  "Republic of the Congo": { capital: "Brazzaville", timezoneId: "Africa/Brazzaville" },
  "Sahrawi Arab Democratic Republic": { capital: "El Aaiún", timezoneId: "Africa/El_Aaiun" },
  "São Tomé and Príncipe": { capital: "São Tomé", timezoneId: "Africa/Sao_Tome" },
  "Somaliland": { capital: "Hargeisa", timezoneId: "Africa/Mogadishu" },
  "South Ossetia": { capital: "Tskhinvali", timezoneId: "Asia/Tbilisi" },
  "Taiwan": { capital: "Taipei", timezoneId: "Asia/Taipei" },
  "Transnistria": { capital: "Tiraspol", timezoneId: "Europe/Chisinau" },
  "Vatican City": { capital: "Vatican City", timezoneId: "Europe/Vatican" },
};

// Helper: Get gradient by region
const getGradient = (tz) => {
  if (tz.includes('America')) return 'linear-gradient(135deg, #3a7bd5, #00d2ff)';
  if (tz.includes('Europe')) return 'linear-gradient(135deg, #bc4e9c, #f80759)';
  if (tz.includes('Asia')) return 'linear-gradient(135deg, #11998e, #38ef7d)';
  if (tz.includes('Australia') || tz.includes('Pacific')) return 'linear-gradient(135deg, #FF512F, #DD2476)';
  if (tz.includes('Africa')) return 'linear-gradient(135deg, #D31027, #EA384D)';
  return 'linear-gradient(135deg, #1A2980, #26D0CE)';
};

// Country Card
const CountryCard = ({ country, currentTime, onRemove }) => {
  const formatTime = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: country.timezoneId,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(currentTime);
  };

  const formatDate = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: country.timezoneId,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(currentTime);
  };

  return (
    <div
      className={styles.countryCard}
      style={{ background: getGradient(country.timezoneId) }}
      role="region"
      aria-label={`Time in ${country.name}`}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.cityName}>{country.name}</h3>
        <button
          onClick={onRemove}
          className={styles.removeButton}
          aria-label={`Remove ${country.name}`}
        >
          ✕
        </button>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.currentTime}>{formatTime()}</div>
        <div className={styles.currentDate}>{formatDate()}</div>
        <div className={styles.capital}>{country.capital}</div>
      </div>
    </div>
  );
};

// Comparison Summary
const ComparisonSummary = ({ countries, currentTime }) => {
  const calculateTimeDifference = (tz1, tz2) => {
    const time1 = new Date(currentTime.toLocaleString('en-US', { timeZone: tz1 }));
    const time2 = new Date(currentTime.toLocaleString('en-US', { timeZone: tz2 }));
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
    <div className={styles.comparisonSummary}>
      <h2 className={styles.summaryTitle}>Time Differences</h2>
      <div className={styles.differencesGrid}>
        {countries.map((a, i) =>
          countries.map((b, j) =>
            i < j && (
              <div key={`${i}-${j}`} className={styles.differenceCard}>
                <div className={styles.citiesPair}>
                  <span>{a.name}</span>
                  <span>↔</span>
                  <span>{b.name}</span>
                </div>
                <div className={styles.differenceValue}>
                  {calculateTimeDifference(a.timezoneId, b.timezoneId)}
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

// Search Component
const CountrySearch = ({ onSelect, selectedCountries }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const allCountries = Object.entries(countryData).map(([name, data]) => ({
    name,
    ...data
  }));

  useEffect(() => {
    if (query.trim()) {
      const filtered = allCountries
        .filter(c => !selectedCountries.some(sc => sc.name === c.name))
        .filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.capital.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 6);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, selectedCountries]);

  const handleSelect = (country) => {
    onSelect(country);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country or capital (e.g. Japan, London)"
        className={styles.searchInput}
        aria-label="Search for a country"
      />
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((country) => (
            <li
              key={country.name}
              onClick={() => handleSelect(country)}
              className={styles.suggestionItem}
              role="option"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(country)}
            >
              {country.name}, {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main Component
const TimeComparator = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectCountry = (country) => {
    if (selectedCountries.length < 6 && !selectedCountries.some(c => c.name === country.name)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const removeCountry = (name) => {
    setSelectedCountries(selectedCountries.filter(c => c.name !== name));
  };

  const selectedNames = selectedCountries.map(c => c.name).join(', ');
  const totalSelected = selectedCountries.length;
  const metaDescription = totalSelected > 0
    ? `Compare real-time clocks across ${totalSelected} countries: ${selectedNames}. See current time and time differences.`
    : 'World Time Explorer: Compare current times across up to 6 countries. Live clock with time zone differences.';

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "World Time Explorer",
    "description": metaDescription,
    "applicationCategory": "Utilities",
    "operatingSystem": "All",
    "url": "https://timeacrossnations.com/time-comparator",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "mainEntity": selectedCountries.map(country => ({
      "@type": "Place",
      "name": country.name,
      "description": `Current time in ${country.name}`
    }))
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </Script>

      <div className={styles.timeComparator}>
        <header className={styles.header}>
          <h1 className={styles.heroTitle}>World Time Explorer</h1>
          <p className={styles.heroSubtitle}>
            Compare current times across up to 6 countries
          </p>
        </header>

        <div className={styles.searchBox}>
          <CountrySearch
            onSelect={handleSelectCountry}
            selectedCountries={selectedCountries}
          />
          {selectedCountries.length > 0 && (
            <p className={styles.trackingCount}>
              Showing {selectedCountries.length} of 6 countries
            </p>
          )}
        </div>

        {selectedCountries.length > 0 ? (
          <>
            <div className={styles.countryContainer}>
              {selectedCountries.map((country) => (
                <CountryCard
                  key={country.name}
                  country={country}
                  currentTime={currentTime}
                  onRemove={() => removeCountry(country.name)}
                />
              ))}
            </div>

            {selectedCountries.length >= 2 && (
              <ComparisonSummary countries={selectedCountries} currentTime={currentTime} />
            )}
          </>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.worldIcon}>🌍</div>
            <h3 className={styles.emptyTitle}>Search to Compare Times</h3>
            <p className={styles.emptyText}>Add up to 6 countries to see live clocks and time differences</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TimeComparator;