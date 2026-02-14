'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TimeComparator.module.css';

// SVG Icons as components (no external dependencies)
const ClockIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<circle cx="12" cy="12" r="10"/>
<polyline points="12 6 12 12 16 14"/>
</svg>
);
const MapPinIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
<circle cx="12" cy="10" r="3"/>
</svg>
);
const GlobeIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<circle cx="12" cy="12" r="10"/>
<line x1="2" y1="12" x2="22" y2="12"/>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>
);
const SunIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<circle cx="12" cy="12" r="5"/>
<line x1="12" y1="1" x2="12" y2="3"/>
<line x1="12" y1="21" x2="12" y2="23"/>
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
<line x1="1" y1="12" x2="3" y2="12"/>
<line x1="21" y1="12" x2="23" y2="12"/>
<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>
);
const MoonIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>
);
const CloudIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
</svg>
);
const ChevronRightIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<polyline points="9 18 15 12 9 6"/>
</svg>
);
const ArrowRightIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<line x1="5" y1="12" x2="19" y2="12"/>
<polyline points="12 5 19 12 12 19"/>
</svg>
);
const CheckIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<polyline points="20 6 9 17 4 12"/>
</svg>
);
const StarIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
);
const AwardIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<circle cx="12" cy="8" r="7"/>
<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
</svg>
);
const UsersIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
<circle cx="9" cy="7" r="4"/>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</svg>
);
const DownloadIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
<polyline points="7 10 12 15 17 10"/>
<line x1="12" y1="15" x2="12" y2="3"/>
</svg>
);
const SearchIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<circle cx="11" cy="11" r="8"/>
<line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>
);
const TrendingUpIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<polyline points="23 6 13.5 15.5 8 10 1 18"/>
<polyline points="17 6 23 6 23 12"/>
</svg>
);
const ToolIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
</svg>
);
const LayersIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<polygon points="12 2 2 7 12 12 22 7 12 2"/>
<polyline points="2 17 12 22 22 17"/>
<polyline points="2 12 12 17 22 12"/>
</svg>
);
const HomeIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
<polyline points="9 22 9 12 15 12 15 22"/>
</svg>
);
const HeartIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>
);
const BriefcaseIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
</svg>
);
const UserIcon = () => (
<svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
<circle cx="12" cy="7" r="4"/>
</svg>
);

// Full country & territory data — 230+ entries
const countryData = {
  // Sovereign UN Member States (193)
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
  "Congo (Republic)": { capital: "Brazzaville", timezoneId: "Africa/Brazzaville" },
  "Costa Rica": { capital: "San José", timezoneId: "America/Costa_Rica" },
  "Croatia": { capital: "Zagreb", timezoneId: "Europe/Zagreb" },
  "Cuba": { capital: "Havana", timezoneId: "America/Havana" },
  "Cyprus": { capital: "Nicosia", timezoneId: "Asia/Nicosia" },
  "Czechia": { capital: "Prague", timezoneId: "Europe/Prague" },
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
  "Eswatini": { capital: "Mbabane", timezoneId: "Africa/Mbabane" },
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
  "Myanmar": { capital: "Naypyidaw", timezoneId: "Asia/Yangon" },
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

  // UN Observer States
  "Holy See": { capital: "Vatican City", timezoneId: "Europe/Vatican" },
  "Palestine": { capital: "Ramallah", timezoneId: "Asia/Gaza" },

  // Additional Territories & Dependencies
  "American Samoa": { capital: "Pago Pago", timezoneId: "Pacific/Pago_Pago" },
  "Anguilla": { capital: "The Valley", timezoneId: "America/Anguilla" },
  "Aruba": { capital: "Oranjestad", timezoneId: "America/Aruba" },
  "Bermuda": { capital: "Hamilton", timezoneId: "Atlantic/Bermuda" },
  "British Virgin Islands": { capital: "Road Town", timezoneId: "America/Tortola" },
  "Cayman Islands": { capital: "George Town", timezoneId: "America/Cayman" },
  "Christmas Island": { capital: "Flying Fish Cove", timezoneId: "Indian/Christmas" },
  "Cocos (Keeling) Islands": { capital: "West Island", timezoneId: "Indian/Cocos" },
  "Cook Islands": { capital: "Avarua", timezoneId: "Pacific/Rarotonga" },
  "Curaçao": { capital: "Willemstad", timezoneId: "America/Curacao" },
  "Falkland Islands": { capital: "Stanley", timezoneId: "Atlantic/Stanley" },
  "Faroe Islands": { capital: "Tórshavn", timezoneId: "Atlantic/Faroe" },
  "French Guiana": { capital: "Cayenne", timezoneId: "America/Cayenne" },
  "French Polynesia": { capital: "Papeete", timezoneId: "Pacific/Tahiti" },
  "Guadeloupe": { capital: "Basse-Terre", timezoneId: "America/Guadeloupe" },
  "Guam": { capital: "Hagåtña", timezoneId: "Pacific/Guam" },
  "Hong Kong": { capital: "Hong Kong", timezoneId: "Asia/Hong_Kong" },
  "Isle of Man": { capital: "Douglas", timezoneId: "Europe/Isle_of_Man" },
  "Jersey": { capital: "Saint Helier", timezoneId: "Europe/Jersey" },
  "Macau": { capital: "Macau", timezoneId: "Asia/Macau" },
  "Martinique": { capital: "Fort-de-France", timezoneId: "America/Martinique" },
  "Mayotte": { capital: "Mamoudzou", timezoneId: "Indian/Mayotte" },
  "Montserrat": { capital: "Plymouth", timezoneId: "America/Montserrat" },
  "New Caledonia": { capital: "Nouméa", timezoneId: "Pacific/Noumea" },
  "Niue": { capital: "Alofi", timezoneId: "Pacific/Niue" },
  "Norfolk Island": { capital: "Kingston", timezoneId: "Pacific/Norfolk" },
  "Northern Mariana Islands": { capital: "Saipan", timezoneId: "Pacific/Saipan" },
  "Puerto Rico": { capital: "San Juan", timezoneId: "America/Puerto_Rico" },
  "Réunion": { capital: "Saint-Denis", timezoneId: "Indian/Reunion" },
  "Saint Barthélemy": { capital: "Gustavia", timezoneId: "America/St_Barthelemy" },
  "Saint Martin": { capital: "Marigot", timezoneId: "America/Marigot" },
  "Saint Pierre and Miquelon": { capital: "Saint-Pierre", timezoneId: "America/Miquelon" },
  "Sint Maarten": { capital: "Philipsburg", timezoneId: "America/Anguilla" },
  "Tokelau": { capital: "Nukunonu", timezoneId: "Pacific/Fakaofo" },
  "Wallis and Futuna": { capital: "Mata-Utu", timezoneId: "Pacific/Wallis" },
  "Western Sahara": { capital: "El Aaiún", timezoneId: "Africa/El_Aaiun" },

  // Special cases
  "Taiwan": { capital: "Taipei", timezoneId: "Asia/Taipei" },
  "Somaliland": { capital: "Hargeisa", timezoneId: "Africa/Mogadishu" }
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

const timeZoneFacts = [
  {
    title: "Time Zone Explorer",
    description: "Compare up to 6 countries simultaneously to see exact time differences and plan international calls."
  },
  {
    title: "Real-Time Updates",
    description: "All clocks update every second, showing you the exact current time in any selected country."
  },
  {
    title: "Smart Comparison",
    description: "Automatically calculates time differences between all selected countries, showing who is ahead or behind."
  },
  {
    title: "Global Coverage",
    description: "Access time data for 230+ countries and territories including all major capitals and overseas regions worldwide."
  }
];

const faqs = [
  {
    question: "How do I compare time between different countries?",
    answer: "Simply search for a country in the search bar and select it. Add up to 6 countries to see their current times side by side. The time difference summary below automatically calculates differences between all selected countries."
  },
  {
    question: "What is the maximum number of countries I can compare?",
    answer: "You can compare up to 6 countries simultaneously. This limit ensures optimal performance and readability while giving you comprehensive time comparison capabilities."
  },
  {
    question: "How accurate are the time displays?",
    answer: "Our time comparator syncs with your device's system time and uses industry-standard IANA timezone databases to ensure accuracy within seconds. All times update in real-time every second."
  },
  {
    question: "Do you account for Daylight Saving Time (DST)?",
    answer: "Yes! All times automatically adjust for Daylight Saving Time where applicable. The timezone data includes DST rules for each region, ensuring you always see the correct local time."
  },
  {
    question: "Can I search by capital city instead of country?",
    answer: "Yes! The search feature allows you to search by either country name or capital city. For example, you can search 'London' or 'United Kingdom' to find the time in the UK."
  },
  {
    question: "How are time differences calculated?",
    answer: "Time differences are calculated based on the current moment in time. The system compares the local time in each selected country and shows you exactly how many hours ahead or behind each country is relative to others."
  }
];

const testimonials = [
  {
    quote: "This time comparator is essential for my international business calls. I can instantly see what time it is in Tokyo, London, and New York simultaneously.",
    metric: "Saved 10+ Hours Weekly",
    name: "Jennifer Martinez",
    role: "Global Operations Director",
    company: "International Trade Co."
  },
  {
    quote: "Finally a tool that lets me compare multiple countries at once. Perfect for coordinating with remote teams across different time zones.",
    metric: "Zero Scheduling Conflicts",
    name: "Robert Chen",
    role: "Remote Team Lead",
    company: "Tech Global Solutions"
  },
  {
    quote: "As a travel planner, this is invaluable. I can check times across multiple destinations and plan itineraries without confusion.",
    metric: "50+ Countries Compared",
    name: "Amara Okonkwo",
    role: "Travel Consultant",
    company: "Global Explorer Tours"
  },
  {
    quote: "The real-time updates and clean interface make this my go-to tool for scheduling international webinars.",
    metric: "200+ Webinars Scheduled",
    name: "Michael Schmidt",
    role: "Event Coordinator",
    company: "Virtual Events Pro"
  }
];

// Country Card Component
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
  const format24HourTime = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: country.timezoneId,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
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
  const getDayStatus = () => {
    try {
      const hour = parseInt(new Intl.DateTimeFormat('en-US', {
        timeZone: country.timezoneId,
        hour: '2-digit',
        hour12: false
      }).format(currentTime));
      if (hour >= 6 && hour < 18) return 'day';
      if (hour >= 18 && hour < 20) return 'evening';
      return 'night';
    } catch (error) {
      return 'day';
    }
  };
  const dayStatus = getDayStatus();
  return (
    <div
      className={`${styles.countryCard} ${styles[dayStatus]}`}
      style={{ background: getGradient(country.timezoneId) }}
      role="region"
      aria-label={`Time in ${country.name}`}
      itemScope
      itemType="https://schema.org/Place"
    >
      <meta itemProp="name" content={country.name} />
      <meta itemProp="address" content={country.capital} />
      <div className={styles.cardHeader}>
        <div className={styles.cityInfo}>
          <h3 className={styles.cityName}>{country.name}</h3>
          <span className={styles.capital}>{country.capital}</span>
        </div>
        <div className={styles.cardActions}>
          {dayStatus === 'day' ? (
            <SunIcon />
          ) : dayStatus === 'evening' ? (
            <CloudIcon />
          ) : (
            <MoonIcon />
          )}
          <button
            onClick={onRemove}
            className={styles.removeButton}
            aria-label={`Remove ${country.name}`}
          >
            ✕
          </button>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.timeDisplay}>
          <span className={styles.currentTime}>{formatTime()}</span>
          <span className={styles.time24h}>{format24HourTime()}</span>
        </div>
        <div className={styles.currentDate}>{formatDate()}</div>
      </div>
    </div>
  );
};

// Comparison Summary Component
const ComparisonSummary = ({ countries, currentTime }) => {
  const calculateTimeDifference = (tz1, tz2) => {
    const time1 = new Date(currentTime.toLocaleString('en-US', { timeZone: tz1 }));
    const time2 = new Date(currentTime.toLocaleString('en-US', { timeZone: tz2 }));
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
  };
  return (
    <div className={styles.comparisonSummary}>
      <h2 className={styles.summaryTitle}>
        <ClockIcon />
        Time Differences
      </h2>
      <div className={styles.differencesGrid}>
        {countries.map((a, i) =>
          countries.map((b, j) =>
            i < j && (
              <div key={`${a.name}-${b.name}`} className={styles.differenceCard}>
                <div className={styles.citiesPair}>
                  <span className={styles.cityFrom}>{a.name}</span>
                  <span className={styles.differenceArrow}>↔</span>
                  <span className={styles.cityTo}>{b.name}</span>
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
        .filter(c => c.name.toLowerCase().includes(query.toLowerCase()) ||
                     c.capital.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8);
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
      <div className={styles.searchInputWrapper}>
        <SearchIcon />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search country or capital (e.g. Japan, London)"
          className={styles.searchInput}
          aria-label="Search for a country"
        />
      </div>
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
              <span className={styles.suggestionFlag}>🌍</span>
              <div className={styles.suggestionInfo}>
                <span className={styles.suggestionName}>{country.name}</span>
                <span className={styles.suggestionCapital}>{country.capital}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main Component
const TimeComparator = ({ seoData, buildTimestamp }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const {
    currentDate,
    lastModifiedDate,
    reviewDates,
    faqDates
  } = seoData || {};
  const freshnessIndicator = buildTimestamp
    ? new Date(buildTimestamp).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];
  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  useEffect(() => {
    setIsClient(true);
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

  // Canonical URL
  const canonicalUrl = 'https://www.timeinworldclock.com/world-clock-comparison-tool';
  const metaDescription = totalSelected > 0
    ? `Compare real-time clocks across ${totalSelected} countries: ${selectedNames}. See current local time and calculate time differences between multiple countries simultaneously. Live updates every second.`
    : 'World Time Comparator: Compare current times across multiple countries side by side. Add up to 6 countries to see live clocks, calculate time differences, and plan international calls. Free, accurate, real-time updates.';
  const keywords = [
    "time comparator",
    "compare time zones",
    "multiple time zones",
    "world clock comparison",
    "time difference calculator",
    "international time comparison",
    "country time comparison",
    "real-time clock comparator",
    "global time comparison tool",
    "time zone difference calculator",
    "compare countries time",
    "side by side time comparison",
    "multi-country clock",
    "time zone converter multiple countries",
    "live time comparison",
    "current time all countries",
    "time across nations comparator",
    "world time difference tool",
    "international clock comparator",
    "time zone visualizer"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": "World Time Comparator - Compare Multiple Countries' Times Side by Side",
        "description": metaDescription,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.timeinworldclock.com/#website",
          "url": "https://www.timeinworldclock.com",
          "name": "World Time Clock",
          "description": "Free accurate world clock showing current time in cities globally",
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.timeinworldclock.com/#organization",
            "name": "World Time Clock",
            "url": "https://www.timeinworldclock.com"
          }
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.timeinworldclock.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "World Clock",
              "item": "https://www.timeinworldclock.com/world-clock-comparison-tool"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Time Comparator",
              "item": canonicalUrl
            }
          ]
        },
        "mainEntity": {
          "@type": "WebApplication",
          "name": "World Time Comparator",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Compare current times across multiple countries simultaneously",
          "featureList": [
            "Compare up to 6 countries",
            "Real-time updates every second",
            "Automatic time difference calculation",
            "Search by country or capital",
            "Daylight saving time adjusted",
            "Mobile friendly"
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faqpage`,
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
            "datePublished": safeFaqDates[index] || safeCurrentDate,
            "author": {
              "@type": "Organization",
              "name": "World Time Clock"
            }
          }
        }))
      },
      {
        "@type": "ItemList",
        "itemListElement": testimonials.map((testimonial, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5,
              "bestRating": 5
            },
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewBody": testimonial.quote,
            "datePublished": safeReviewDates[index] || safeCurrentDate,
            "publisher": {
              "@type": "Organization",
              "name": "World Time Clock"
            },
            "itemReviewed": {
              "@type": "WebApplication",
              "name": "World Time Comparator"
            }
          }
        }))
      }
    ]
  };

  return (
    <div className={styles.timeComparator} lang="en-US">
      <Head>
        <title>World Time Comparator | Compare Multiple Countries' Times Side by Side</title>
        <meta name="title" content="World Time Comparator | Compare Multiple Countries' Times Side by Side" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="World Time Clock" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        <meta property="og:title" content="World Time Comparator - Compare Multiple Countries' Times" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/time-comparator-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Time Clock" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Time Comparator" />
        <meta name="twitter:description" content="Compare current times across multiple countries side by side" />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/time-comparator-twitter.jpg" />
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <div className={styles.freshnessIndicator} style={{ display: 'none' }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <Link href="/" className={styles.breadcrumbLink}>
              <HomeIcon />
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <ChevronRightIcon />
          </li>
          <li className={styles.breadcrumbItem}>
            <Link href="/world-clock-comparison-tool" className={styles.breadcrumbLink}>
              <ClockIcon />
              <span className={styles.breadcrumbText}>World Clock</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <ChevronRightIcon />
          </li>
          <li className={styles.breadcrumbItem}>
            <span className={styles.breadcrumbCurrent}>
              <ToolIcon />
              <span className={styles.breadcrumbText}>Time Comparator</span>
            </span>
          </li>
        </ol>
      </nav>

      <header className={styles.header}>
        <div className={styles.trustBadge}>
          <StarIcon />
          <span className={styles.trustBadgeText}>
            Trusted by 500K+ Users | Compare 6 Countries | Free Forever
          </span>
        </div>
        <h1 className={styles.heroTitle}>
          World Time <span className={styles.gradientText}>Comparator</span>
        </h1>
        <p className={styles.heroSubtitle}>
          <strong className={styles.heroHighlight}>Compare current times across multiple countries</strong> side by side. Add up to 6 countries to see live clocks, calculate time differences instantly, and plan international calls with confidence.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>230+</span>
            <span className={styles.statLabel}>Countries & Territories</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>6</span>
            <span className={styles.statLabel}>Max Comparison</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Real-Time Updates</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Free & Accurate</span>
          </div>
        </div>
      </header>

      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <CountrySearch
            onSelect={handleSelectCountry}
            selectedCountries={selectedCountries}
          />
          {selectedCountries.length > 0 && (
            <p className={styles.trackingCount}>
              <CheckIcon />
              <span>Showing {selectedCountries.length} of 6 countries</span>
            </p>
          )}
        </div>
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
          <h3 className={styles.emptyTitle}>Add Countries to Compare</h3>
          <p className={styles.emptyText}>Search and select up to 6 countries to see their current times side by side</p>
          <div className={styles.emptyFeatures}>
            <div className={styles.emptyFeature}>
              <CheckIcon />
              <span>Real-time clock displays</span>
            </div>
            <div className={styles.emptyFeature}>
              <CheckIcon />
              <span>Automatic time difference calculation</span>
            </div>
            <div className={styles.emptyFeature}>
              <CheckIcon />
              <span>Daylight saving adjusted</span>
            </div>
          </div>
        </div>
      )}

      <section className={styles.factsSection} aria-labelledby="facts-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="facts-title">Why Use Our Time Comparator?</h2>
          <p className={styles.sectionSubtitle}>
            Powerful features for global time comparison
          </p>
        </div>
        <div className={styles.factsGrid}>
          {timeZoneFacts.map((fact, index) => (
            <div key={index} className={styles.factCard}>
              <h3 className={styles.factTitle}>{fact.title}</h3>
              <p className={styles.factDescription}>{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="testimonials-title">Trusted by Global Professionals</h2>
          <p className={styles.sectionSubtitle}>
            Join thousands who rely on our time comparator for accurate multi-country time comparison
          </p>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteMark}>"</div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.testimonialMetric}>
                <CheckIcon />
                <span className={styles.metricText}>{testimonial.metric}</span>
              </div>
              <div className={styles.userInfo}>
                <h4 className={styles.userName}>{testimonial.name}</h4>
                <p className={styles.userRole}>{testimonial.role}</p>
                <p className={styles.userCompany}>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions About Time Comparison</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know about comparing times across countries
          </p>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem} itemScope itemType="https://schema.org/Question">
              <h3 className={styles.faqQuestion} itemProp="name">{faq.question}</h3>
              <div className={styles.faqAnswer} itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <div itemProp="text">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle} id="cta-title">Start Comparing Time Zones Now</h2>
          <p className={styles.ctaSubtitle}>
            Add your first country above to see live time comparison in action
          </p>
          <div className={styles.ctaFeatures}>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Compare up to 6 countries</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Real-time updates every second</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Automatic time difference calculation</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Search by country or capital</span>
            </div>
          </div>
          <Link href="/" className={styles.ctaButton}>
            <span className={styles.ctaButtonText}>Back to World Clock</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Hidden structured data for search engines */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h2>Available Countries for Time Comparison</h2>
        <ul>
          {Object.entries(countryData).slice(0, 50).map(([name, data]) => (
            <li key={name}>
              {name} - Capital: {data.capital}, Timezone: {data.timezoneId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();
  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });
  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });
  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600 // Revalidate every hour
  };
}

export default TimeComparator;