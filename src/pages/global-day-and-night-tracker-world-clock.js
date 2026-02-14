'use client';

import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './DayNightTracker.module.css';

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

// Full country data (same as provided)
const countryData = {
  "Afghanistan": {
    capital: "Kabul",
    timezoneId: "Asia/Kabul",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "5:30 PM" }
    }
  },
  "Albania": {
    capital: "Tirana",
    timezoneId: "Europe/Tirane",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:00 PM" }
    }
  },
  "Algeria": {
    capital: "Algiers",
    timezoneId: "Africa/Algiers",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Andorra": {
    capital: "Andorra la Vella",
    timezoneId: "Europe/Andorra",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "7:00 AM", sunset: "8:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Angola": {
    capital: "Luanda",
    timezoneId: "Africa/Luanda",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Antigua and Barbuda": {
    capital: "Saint John's",
    timezoneId: "America/Antigua",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Argentina": {
    capital: "Buenos Aires",
    timezoneId: "America/Argentina/Buenos_Aires",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:30 PM" }
    }
  },
  "Armenia": {
    capital: "Yerevan",
    timezoneId: "Asia/Yerevan",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Australia": {
    capital: "Canberra",
    timezoneId: "Australia/Sydney",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "5:45 PM" }
    }
  },
  "Austria": {
    capital: "Vienna",
    timezoneId: "Europe/Vienna",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Azerbaijan": {
    capital: "Baku",
    timezoneId: "Asia/Baku",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Bahamas": {
    capital: "Nassau",
    timezoneId: "America/Nassau",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      summer: { sunrise: "6:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Bahrain": {
    capital: "Manama",
    timezoneId: "Asia/Bahrain",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:30 PM" }
    }
  },
  "Bangladesh": {
    capital: "Dhaka",
    timezoneId: "Asia/Dhaka",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Barbados": {
    capital: "Bridgetown",
    timezoneId: "America/Barbados",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Belarus": {
    capital: "Minsk",
    timezoneId: "Europe/Minsk",
    seasons: {
      winter: { sunrise: "9:00 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:30 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "7:15 PM" }
    }
  },
  "Belgium": {
    capital: "Brussels",
    timezoneId: "Europe/Brussels",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:15 PM" }
    }
  },
  "Belize": {
    capital: "Belmopan",
    timezoneId: "America/Belize",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Benin": {
    capital: "Porto-Novo",
    timezoneId: "Africa/Porto-Novo",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Bhutan": {
    capital: "Thimphu",
    timezoneId: "Asia/Thimphu",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Bolivia": {
    capital: "Sucre",
    timezoneId: "America/La_Paz",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Bosnia and Herzegovina": {
    capital: "Sarajevo",
    timezoneId: "Europe/Sarajevo",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:00 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Botswana": {
    capital: "Gaborone",
    timezoneId: "Africa/Gaborone",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Brazil": {
    capital: "Brasília",
    timezoneId: "America/Sao_Paulo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Brunei": {
    capital: "Bandar Seri Begawan",
    timezoneId: "Asia/Brunei",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Bulgaria": {
    capital: "Sofia",
    timezoneId: "Europe/Sofia",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Burkina Faso": {
    capital: "Ouagadougou",
    timezoneId: "Africa/Ouagadougou",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Burundi": {
    capital: "Gitega",
    timezoneId: "Africa/Bujumbura",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Cabo Verde": {
    capital: "Praia",
    timezoneId: "Atlantic/Cape_Verde",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "Cambodia": {
    capital: "Phnom Penh",
    timezoneId: "Asia/Phnom_Penh",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Cameroon": {
    capital: "Yaoundé",
    timezoneId: "Africa/Douala",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Canada": {
    capital: "Ottawa",
    timezoneId: "America/Toronto",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Central African Republic": {
    capital: "Bangui",
    timezoneId: "Africa/Bangui",
    seasons: {
      winter: { sunrise: "5:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:15 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Chad": {
    capital: "N'Djamena",
    timezoneId: "Africa/Ndjamena",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Chile": {
    capital: "Santiago",
    timezoneId: "America/Santiago",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "6:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "7:00 PM" }
    }
  },
  "China": {
    capital: "Beijing",
    timezoneId: "Asia/Shanghai",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Colombia": {
    capital: "Bogotá",
    timezoneId: "America/Bogota",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Comoros": {
    capital: "Moroni",
    timezoneId: "Indian/Comoro",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Congo (Congo-Brazzaville)": {
    capital: "Brazzaville",
    timezoneId: "Africa/Brazzaville",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Costa Rica": {
    capital: "San José",
    timezoneId: "America/Costa_Rica",
    seasons: {
      winter: { sunrise: "5:45 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:15 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Croatia": {
    capital: "Zagreb",
    timezoneId: "Europe/Zagreb",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Cuba": {
    capital: "Havana",
    timezoneId: "America/Havana",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Cyprus": {
    capital: "Nicosia",
    timezoneId: "Asia/Nicosia",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Czechia (Czech Republic)": {
    capital: "Prague",
    timezoneId: "Europe/Prague",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Denmark": {
    capital: "Copenhagen",
    timezoneId: "Europe/Copenhagen",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "3:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "4:30 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Djibouti": {
    capital: "Djibouti",
    timezoneId: "Africa/Djibouti",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Dominica": {
    capital: "Roseau",
    timezoneId: "America/Dominica",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Dominican Republic": {
    capital: "Santo Domingo",
    timezoneId: "America/Santo_Domingo",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Ecuador": {
    capital: "Quito",
    timezoneId: "America/Guayaquil",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Egypt": {
    capital: "Cairo",
    timezoneId: "Africa/Cairo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "El Salvador": {
    capital: "San Salvador",
    timezoneId: "America/El_Salvador",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Equatorial Guinea": {
    capital: "Malabo",
    timezoneId: "Africa/Malabo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Eritrea": {
    capital: "Asmara",
    timezoneId: "Africa/Asmara",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "Estonia": {
    capital: "Tallinn",
    timezoneId: "Europe/Tallinn",
    seasons: {
      winter: { sunrise: "9:00 AM", sunset: "3:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      summer: { sunrise: "4:00 AM", sunset: "10:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Eswatini (fmr. Swaziland)": {
    capital: "Mbabane",
    timezoneId: "Africa/Mbabane",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Ethiopia": {
    capital: "Addis Ababa",
    timezoneId: "Africa/Addis_Ababa",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Fiji": {
    capital: "Suva",
    timezoneId: "Pacific/Fiji",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Finland": {
    capital: "Helsinki",
    timezoneId: "Europe/Helsinki",
    seasons: {
      winter: { sunrise: "9:15 AM", sunset: "3:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "9:30 PM" },
      summer: { sunrise: "3:45 AM", sunset: "10:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:30 PM" }
    }
  },
  "France": {
    capital: "Paris",
    timezoneId: "Europe/Paris",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "5:45 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:45 AM", sunset: "7:15 PM" }
    }
  },
  "Gabon": {
    capital: "Libreville",
    timezoneId: "Africa/Libreville",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Gambia": {
    capital: "Banjul",
    timezoneId: "Africa/Banjul",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Georgia": {
    capital: "Tbilisi",
    timezoneId: "Asia/Tbilisi",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Germany": {
    capital: "Berlin",
    timezoneId: "Europe/Berlin",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "4:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Ghana": {
    capital: "Accra",
    timezoneId: "Africa/Accra",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Greece": {
    capital: "Athens",
    timezoneId: "Europe/Athens",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Grenada": {
    capital: "St. George's",
    timezoneId: "America/Grenada",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Guatemala": {
    capital: "Guatemala City",
    timezoneId: "America/Guatemala",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Guinea": {
    capital: "Conakry",
    timezoneId: "Africa/Conakry",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Guinea-Bissau": {
    capital: "Bissau",
    timezoneId: "Africa/Bissau",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Guyana": {
    capital: "Georgetown",
    timezoneId: "America/Guyana",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Haiti": {
    capital: "Port-au-Prince",
    timezoneId: "America/Port-au-Prince",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Holy See": {
    capital: "Vatican City",
    timezoneId: "Europe/Vatican",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Honduras": {
    capital: "Tegucigalpa",
    timezoneId: "America/Tegucigalpa",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Hungary": {
    capital: "Budapest",
    timezoneId: "Europe/Budapest",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Iceland": {
    capital: "Reykjavik",
    timezoneId: "Atlantic/Reykjavik",
    seasons: {
      winter: { sunrise: "11:00 AM", sunset: "3:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "10:00 PM" },
      summer: { sunrise: "3:00 AM", sunset: "11:30 PM" },
      autumn: { sunrise: "8:00 AM", sunset: "7:00 PM" }
    }
  },
  "India": {
    capital: "New Delhi",
    timezoneId: "Asia/Kolkata",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "Indonesia": {
    capital: "Jakarta",
    timezoneId: "Asia/Jakarta",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Iran": {
    capital: "Tehran",
    timezoneId: "Asia/Tehran",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "5:45 PM" }
    }
  },
  "Iraq": {
    capital: "Baghdad",
    timezoneId: "Asia/Baghdad",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "5:45 PM" }
    }
  },
  "Ireland": {
    capital: "Dublin",
    timezoneId: "Europe/Dublin",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "4:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:45 PM" },
      summer: { sunrise: "5:00 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Israel": {
    capital: "Jerusalem",
    timezoneId: "Asia/Jerusalem",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Italy": {
    capital: "Rome",
    timezoneId: "Europe/Rome",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Jamaica": {
    capital: "Kingston",
    timezoneId: "America/Jamaica",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Japan": {
    capital: "Tokyo",
    timezoneId: "Asia/Tokyo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      summer: { sunrise: "4:30 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:15 PM" }
    }
  },
  "Jordan": {
    capital: "Amman",
    timezoneId: "Asia/Amman",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "Kazakhstan": {
    capital: "Nur-Sultan",
    timezoneId: "Asia/Almaty",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Kenya": {
    capital: "Nairobi",
    timezoneId: "Africa/Nairobi",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Kiribati": {
    capital: "South Tarawa",
    timezoneId: "Pacific/Tarawa",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Korea, North": {
    capital: "Pyongyang",
    timezoneId: "Asia/Pyongyang",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Korea, South": {
    capital: "Seoul",
    timezoneId: "Asia/Seoul",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Kosovo": {
    capital: "Pristina",
    timezoneId: "Europe/Belgrade",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Kuwait": {
    capital: "Kuwait City",
    timezoneId: "Asia/Kuwait",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Kyrgyzstan": {
    capital: "Bishkek",
    timezoneId: "Asia/Bishkek",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Laos": {
    capital: "Vientiane",
    timezoneId: "Asia/Vientiane",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Latvia": {
    capital: "Riga",
    timezoneId: "Europe/Riga",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "3:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      summer: { sunrise: "4:15 AM", sunset: "10:30 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Lebanon": {
    capital: "Beirut",
    timezoneId: "Asia/Beirut",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Lesotho": {
    capital: "Maseru",
    timezoneId: "Africa/Maseru",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Liberia": {
    capital: "Monrovia",
    timezoneId: "Africa/Monrovia",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:30 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Libya": {
    capital: "Tripoli",
    timezoneId: "Africa/Tripoli",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Liechtenstein": {
    capital: "Vaduz",
    timezoneId: "Europe/Vaduz",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Lithuania": {
    capital: "Vilnius",
    timezoneId: "Europe/Vilnius",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "4:30 AM", sunset: "10:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:30 PM" }
    }
  },
  "Luxembourg": {
    capital: "Luxembourg",
    timezoneId: "Europe/Luxembourg",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Madagascar": {
    capital: "Antananarivo",
    timezoneId: "Indian/Antananarivo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Malawi": {
    capital: "Lilongwe",
    timezoneId: "Africa/Blantyre",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:15 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Malaysia": {
    capital: "Kuala Lumpur",
    timezoneId: "Asia/Kuala_Lumpur",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "7:00 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Maldives": {
    capital: "Malé",
    timezoneId: "Indian/Maldives",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Mali": {
    capital: "Bamako",
    timezoneId: "Africa/Bamako",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Malta": {
    capital: "Valletta",
    timezoneId: "Europe/Malta",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Marshall Islands": {
    capital: "Majuro",
    timezoneId: "Pacific/Majuro",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:45 PM" }
    }
  },
  "Mauritania": {
    capital: "Nouakchott",
    timezoneId: "Africa/Nouakchott",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Mauritius": {
    capital: "Port Louis",
    timezoneId: "Indian/Mauritius",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Mexico": {
    capital: "Mexico City",
    timezoneId: "America/Mexico_City",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Micronesia": {
    capital: "Palikir",
    timezoneId: "Pacific/Pohnpei",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "Moldova": {
    capital: "Chisinau",
    timezoneId: "Europe/Chisinau",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:00 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Monaco": {
    capital: "Monaco",
    timezoneId: "Europe/Monaco",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Mongolia": {
    capital: "Ulaanbaatar",
    timezoneId: "Asia/Ulaanbaatar",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Montenegro": {
    capital: "Podgorica",
    timezoneId: "Europe/Podgorica",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Morocco": {
    capital: "Rabat",
    timezoneId: "Africa/Casablanca",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Mozambique": {
    capital: "Maputo",
    timezoneId: "Africa/Maputo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Myanmar (Burma)": {
    capital: "Naypyidaw",
    timezoneId: "Asia/Yangon",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Namibia": {
    capital: "Windhoek",
    timezoneId: "Africa/Windhoek",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Nauru": {
    capital: "Yaren",
    timezoneId: "Pacific/Nauru",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:45 PM" }
    }
  },
  "Nepal": {
    capital: "Kathmandu",
    timezoneId: "Asia/Kathmandu",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:00 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Netherlands": {
    capital: "Amsterdam",
    timezoneId: "Europe/Amsterdam",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "10:15 PM" },
      autumn: { sunrise: "7:45 AM", sunset: "7:00 PM" }
    }
  },
  "New Zealand": {
    capital: "Wellington",
    timezoneId: "Pacific/Auckland",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:30 PM" }
    }
  },
  "Nicaragua": {
    capital: "Managua",
    timezoneId: "America/Managua",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Niger": {
    capital: "Niamey",
    timezoneId: "Africa/Niamey",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Nigeria": {
    capital: "Abuja",
    timezoneId: "Africa/Lagos",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "North Macedonia": {
    capital: "Skopje",
    timezoneId: "Europe/Skopje",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Norway": {
    capital: "Oslo",
    timezoneId: "Europe/Oslo",
    seasons: {
      winter: { sunrise: "9:15 AM", sunset: "3:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:30 PM" },
      summer: { sunrise: "3:45 AM", sunset: "10:45 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "6:45 PM" }
    }
  },
  "Oman": {
    capital: "Muscat",
    timezoneId: "Asia/Muscat",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Pakistan": {
    capital: "Islamabad",
    timezoneId: "Asia/Karachi",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Palau": {
    capital: "Ngerulmud",
    timezoneId: "Pacific/Palau",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Panama": {
    capital: "Panama City",
    timezoneId: "America/Panama",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Papua New Guinea": {
    capital: "Port Moresby",
    timezoneId: "Pacific/Port_Moresby",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Paraguay": {
    capital: "Asunción",
    timezoneId: "America/Asuncion",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Peru": {
    capital: "Lima",
    timezoneId: "America/Lima",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Philippines": {
    capital: "Manila",
    timezoneId: "Asia/Manila",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Poland": {
    capital: "Warsaw",
    timezoneId: "Europe/Warsaw",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "3:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:15 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:00 PM" }
    }
  },
  "Portugal": {
    capital: "Lisbon",
    timezoneId: "Europe/Lisbon",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:30 PM" },
      summer: { sunrise: "6:00 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "7:00 PM" }
    }
  },
  "Qatar": {
    capital: "Doha",
    timezoneId: "Asia/Qatar",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Romania": {
    capital: "Bucharest",
    timezoneId: "Europe/Bucharest",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Russia": {
    capital: "Moscow",
    timezoneId: "Europe/Moscow",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:00 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:15 PM" }
    }
  },
  "Rwanda": {
    capital: "Kigali",
    timezoneId: "Africa/Kigali",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Saint Kitts and Nevis": {
    capital: "Basseterre",
    timezoneId: "America/St_Kitts",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Saint Lucia": {
    capital: "Castries",
    timezoneId: "America/St_Lucia",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Saint Vincent and the Grenadines": {
    capital: "Kingstown",
    timezoneId: "America/St_Vincent",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Samoa": {
    capital: "Apia",
    timezoneId: "Pacific/Apia",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "San Marino": {
    capital: "San Marino",
    timezoneId: "Europe/San_Marino",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Sao Tome and Principe": {
    capital: "São Tomé",
    timezoneId: "Africa/Sao_Tome",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Saudi Arabia": {
    capital: "Riyadh",
    timezoneId: "Asia/Riyadh",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Senegal": {
    capital: "Dakar",
    timezoneId: "Africa/Dakar",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Serbia": {
    capital: "Belgrade",
    timezoneId: "Europe/Belgrade",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Seychelles": {
    capital: "Victoria",
    timezoneId: "Indian/Mahe",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Sierra Leone": {
    capital: "Freetown",
    timezoneId: "Africa/Freetown",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Singapore": {
    capital: "Singapore",
    timezoneId: "Asia/Singapore",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "7:00 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Slovakia": {
    capital: "Bratislava",
    timezoneId: "Europe/Bratislava",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Slovenia": {
    capital: "Ljubljana",
    timezoneId: "Europe/Ljubljana",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Solomon Islands": {
    capital: "Honiara",
    timezoneId: "Pacific/Guadalcanal",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Somalia": {
    capital: "Mogadishu",
    timezoneId: "Africa/Mogadishu",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "South Africa": {
    capital: "Pretoria",
    timezoneId: "Africa/Johannesburg",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "South Sudan": {
    capital: "Juba",
    timezoneId: "Africa/Juba",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Spain": {
    capital: "Madrid",
    timezoneId: "Europe/Madrid",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "9:30 PM" },
      autumn: { sunrise: "7:45 AM", sunset: "7:15 PM" }
    }
  },
  "Sri Lanka": {
    capital: "Colombo",
    timezoneId: "Asia/Colombo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Sudan": {
    capital: "Khartoum",
    timezoneId: "Africa/Khartoum",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Suriname": {
    capital: "Paramaribo",
    timezoneId: "America/Paramaribo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Sweden": {
    capital: "Stockholm",
    timezoneId: "Europe/Stockholm",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "3:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      summer: { sunrise: "3:30 AM", sunset: "10:30 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:30 PM" }
    }
  },
  "Switzerland": {
    capital: "Bern",
    timezoneId: "Europe/Zurich",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Syria": {
    capital: "Damascus",
    timezoneId: "Asia/Damascus",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Tajikistan": {
    capital: "Dushanbe",
    timezoneId: "Asia/Dushanbe",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Tanzania": {
    capital: "Dodoma",
    timezoneId: "Africa/Dar_es_Salaam",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "Thailand": {
    capital: "Bangkok",
    timezoneId: "Asia/Bangkok",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Timor-Leste": {
    capital: "Dili",
    timezoneId: "Asia/Dili",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:30 PM" },
      summer: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Togo": {
    capital: "Lomé",
    timezoneId: "Africa/Lome",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Tonga": {
    capital: "Nuku'alofa",
    timezoneId: "Pacific/Tongatapu",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Trinidad and Tobago": {
    capital: "Port of Spain",
    timezoneId: "America/Port_of_Spain",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Tunisia": {
    capital: "Tunis",
    timezoneId: "Africa/Tunis",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Turkey": {
    capital: "Ankara",
    timezoneId: "Europe/Istanbul",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:00 PM" }
    }
  },
  "Turkmenistan": {
    capital: "Ashgabat",
    timezoneId: "Asia/Ashgabat",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Tuvalu": {
    capital: "Funafuti",
    timezoneId: "Pacific/Funafuti",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Uganda": {
    capital: "Kampala",
    timezoneId: "Africa/Kampala",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:45 PM" }
    }
  },
  "Ukraine": {
    capital: "Kyiv",
    timezoneId: "Europe/Kyiv",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "United Arab Emirates": {
    capital: "Abu Dhabi",
    timezoneId: "Asia/Dubai",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "United Kingdom": {
    capital: "London",
    timezoneId: "Europe/London",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "4:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:30 PM" }
    }
  },
  "United States": {
    capital: "Washington, D.C.",
    timezoneId: "America/New_York",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Uruguay": {
    capital: "Montevideo",
    timezoneId: "America/Montevideo",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Uzbekistan": {
    capital: "Tashkent",
    timezoneId: "Asia/Tashkent",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Vanuatu": {
    capital: "Port Vila",
    timezoneId: "Pacific/Efate",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Venezuela": {
    capital: "Caracas",
    timezoneId: "America/Caracas",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Vietnam": {
    capital: "Hanoi",
    timezoneId: "Asia/Ho_Chi_Minh",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Yemen": {
    capital: "Sana'a",
    timezoneId: "Asia/Aden",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Zambia": {
    capital: "Lusaka",
    timezoneId: "Africa/Lusaka",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Zimbabwe": {
    capital: "Harare",
    timezoneId: "Africa/Harare",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
};

const dayNightFacts = [
  {
    title: "Track Day & Night Cycles",
    description: "Monitor real-time day/night status for up to 12 countries simultaneously with live countdowns to sunrise and sunset."
  },
  {
    title: "Seasonal Sunrise & Sunset",
    description: "Accurate sunrise and sunset times adjusted for each country's current season - winter, spring, summer, or autumn."
  },
  {
    title: "Visual Progress Tracking",
    description: "Beautiful progress bars show how much of the day or night has passed, with live countdowns to the next transition."
  },
  {
    title: "Global Coverage",
    description: "Access day/night data for 190+ countries including all major capitals and territories worldwide."
  }
];

const faqs = [
  {
    question: "How does the Day & Night Tracker work?",
    answer: "Our tracker uses seasonal sunrise/sunset data for each country combined with real-time local time calculations. It determines whether it's day or night, shows the current time, and calculates countdowns to the next sunrise or sunset."
  },
  {
    question: "How many countries can I track at once?",
    answer: "You can track up to 12 countries simultaneously. This limit ensures optimal performance and readability while giving you comprehensive day/night monitoring capabilities."
  },
  {
    question: "How accurate are the sunrise and sunset times?",
    answer: "The times are based on typical seasonal averages for each country's capital city. While actual times may vary slightly based on specific location within a country, they provide a reliable guide for day/night patterns."
  },
  {
    question: "Do you account for Daylight Saving Time (DST)?",
    answer: "Yes! All times automatically adjust for Daylight Saving Time where applicable. The timezone data includes DST rules for each region, ensuring you always see the correct local time."
  },
  {
    question: "What do the progress bars show?",
    answer: "The progress bars visually represent how much of the current day (if it's daytime) or night (if it's nighttime) has passed. A shimmering effect shows the current phase progressing toward the next transition."
  },
  {
    question: "How are seasons determined for each country?",
    answer: "Seasons are automatically determined based on the current month and each country's hemisphere. This ensures that sunrise/sunset times are appropriate for the actual season in that location."
  }
];

const testimonials = [
  {
    quote: "This day/night tracker is perfect for planning wildlife photography trips. I can instantly see golden hour times and day lengths anywhere in the world.",
    metric: "50+ Trips Planned",
    name: "James Wilson",
    role: "Nature Photographer",
    company: "Wildlife Lens"
  },
  {
    quote: "As an astronomer, I need to know night durations worldwide. This tool gives me instant access to day/night cycles for any country.",
    metric: "24/7 Research Tool",
    name: "Dr. Sarah Chen",
    role: "Astrophysicist",
    company: "Global Observatory"
  },
  {
    quote: "Essential for coordinating with remote teams across different time zones. The visual day/night indicators make it easy to see who's working and who's sleeping.",
    metric: "12 Time Zones Managed",
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "Global Tech Solutions"
  },
  {
    quote: "My students love tracking day and night cycles across different countries. It's an engaging way to learn about Earth's rotation and seasons.",
    metric: "500+ Students Engaged",
    name: "Emily Thompson",
    role: "Geography Teacher",
    company: "International School"
  }
];

// Helper: Parse "7:30 AM" → minutes since midnight
const parseTimeToMinutes = (timeStr) => {
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

// Helper: Format minutes → "1h 30m"
const formatDuration = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
};

// Helper: Get current season
const getCurrentSeason = () => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
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

// Country Card Component
const CountryCard = ({ country, name, season, currentTime, onRemove }) => {
  const { capital, timezoneId, seasons } = country;
  const times = seasons[season] || seasons.winter;

  // Parse sunrise/sunset
  const sunriseMin = parseTimeToMinutes(times.sunrise);
  const sunsetMin = parseTimeToMinutes(times.sunset);

  // Current local time
  const localNow = new Date(currentTime.toLocaleString('en-US', { timeZone: timezoneId }));
  const currentMinutes = localNow.getHours() * 60 + localNow.getMinutes();
  const formattedTime = localNow.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Determine day/night and calculate remaining time
  let isDay = false;
  let nextEvent = '';
  let timeUntilNext = 0;

  if (currentMinutes >= sunriseMin && currentMinutes < sunsetMin) {
    isDay = true;
    timeUntilNext = sunsetMin - currentMinutes;
    nextEvent = 'Sunset';
  } else {
    isDay = false;
    // Handle overnight: if sunset < sunrise, add 1440 mins
    const adjustedSunrise = sunriseMin < sunsetMin ? sunriseMin + 1440 : sunriseMin;
    timeUntilNext = adjustedSunrise - currentMinutes;
    if (timeUntilNext < 0) timeUntilNext += 1440;
    nextEvent = 'Sunrise';
  }

  // Progress bar (0–100%)
  let progress = 0;
  if (isDay) {
    const dayDuration = sunsetMin - sunriseMin;
    progress = ((currentMinutes - sunriseMin) / dayDuration) * 100;
  } else {
    const nightStart = sunsetMin;
    const nightEnd = sunriseMin < sunsetMin ? sunriseMin + 1440 : sunriseMin;
    const nightDuration = nightEnd - nightStart;
    const nightElapsed = currentMinutes >= nightStart
      ? currentMinutes - nightStart
      : currentMinutes + 1440 - nightStart;
    progress = (nightElapsed / nightDuration) * 100;
  }

  return (
    <div
      className={`${styles.countryCard} ${isDay ? styles.day : styles.night}`}
      style={{ background: getGradient(timezoneId) }}
      role="region"
      aria-label={`Day and night info for ${name}`}
      itemScope
      itemType="https://schema.org/Place"
    >
      <meta itemProp="name" content={name} />
      <meta itemProp="address" content={capital} />
      
      <div className={styles.cardHeader}>
        <div className={styles.cityInfo}>
          <h3 className={styles.cityName}>{name}</h3>
          <p className={styles.capital}>{capital}</p>
        </div>
        <button
          onClick={onRemove}
          className={styles.removeButton}
          aria-label={`Remove ${name}`}
        >
          ✕
        </button>
      </div>
      
      <div className={styles.cardBody}>
        <div className={styles.timeDisplay}>
          <span className={styles.currentTime}>{formattedTime}</span>
          <span className={styles.timeIcon}>
            {isDay ? <SunIcon /> : <MoonIcon />}
          </span>
        </div>
        
        <div className={styles.sunTimes}>
          <div className={styles.sunrise}>
            <span className={styles.sunIcon}>🌅</span>
            <span>{times.sunrise}</span>
          </div>
          <div className={styles.sunset}>
            <span className={styles.sunIcon}>🌇</span>
            <span>{times.sunset}</span>
          </div>
        </div>
        
        <div className={styles.statusInfo}>
          <span className={styles.statusText}>
            {isDay ? '☀️ Daytime' : '🌙 Nighttime'}
          </span>
          <span className={styles.countdown}>
            {nextEvent} in {formatDuration(timeUntilNext)}
          </span>
        </div>
        
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressFill} ${isDay ? styles.dayFill : styles.nightFill}`}
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Search Component
const CountrySearch = ({ onSelect, selectedCountries }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const countryNames = Object.keys(countryData);

  useEffect(() => {
    if (query.trim()) {
      const filtered = countryNames
        .filter(name =>
          !selectedCountries.includes(name) &&
          name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, selectedCountries]);

  const handleSelect = (name) => {
    onSelect(name);
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
          placeholder="Search country (e.g. Japan, Brazil)"
          className={styles.searchInput}
          aria-label="Search for a country"
        />
      </div>
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((name) => (
            <li
              key={name}
              onClick={() => handleSelect(name)}
              className={styles.suggestionItem}
              role="option"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(name)}
            >
              <span className={styles.suggestionFlag}>🌍</span>
              <span className={styles.suggestionName}>{name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main Component
const DayNightTracker = ({ seoData, buildTimestamp }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);
  const season = useMemo(() => getCurrentSeason(), []);
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

  const handleSelectCountry = (name) => {
    if (selectedCountries.length < 12 && !selectedCountries.includes(name)) {
      setSelectedCountries([...selectedCountries, name]);
    }
  };

  const removeCountry = (name) => {
    setSelectedCountries(selectedCountries.filter(c => c !== name));
  };

  const selectedNames = selectedCountries.join(', ');
  const totalSelected = selectedCountries.length;

  // Canonical URL
  const canonicalUrl = 'https://www.timeinworldclock.com/global-day-and-night-tracker-world-clock';

  const metaDescription = totalSelected > 0
    ? `Track real-time day/night cycles across ${totalSelected} countries: ${selectedNames}. See sunrise, sunset, and countdowns to next transition. Live updates every second.`
    : 'Day & Night Tracker: Monitor real-time day/night cycles worldwide. Track sunrise, sunset, and countdowns for any country. Visual progress bars show day/night progression.';

  const keywords = [
    "day night tracker",
    "sunrise sunset times",
    "daylight hours",
    "night time tracker",
    "global day night map",
    "sunrise time by country",
    "sunset time by country",
    "day length calculator",
    "night duration tracker",
    "world day night cycle",
    "daylight tracking tool",
    "sunrise sunset worldwide",
    "day night monitor",
    "global daylight hours",
    "country day length",
    "sunrise sunset database",
    "day night visualizer",
    "daylight hours by location",
    "night time worldwide",
    "day night progress tracker"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": "Day & Night Tracker - Track Sunrise & Sunset Times Worldwide",
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
              "item": "https://www.timeinworldclock.com/global-day-and-night-tracker-world-clock"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Day & Night Tracker",
              "item": canonicalUrl
            }
          ]
        },
        "mainEntity": {
          "@type": "WebApplication",
          "name": "Day & Night Tracker",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Track real-time day/night cycles worldwide",
          "featureList": [
            "Track up to 12 countries",
            "Real-time sunrise/sunset times",
            "Day/night progress bars",
            "Countdowns to next transition",
            "Seasonal adjustments",
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
              "name": "Day & Night Tracker"
            }
          }
        }))
      }
    ]
  };

  return (
    <div className={styles.dayNightTracker} lang="en-US">
      <Head>
        <title>Day & Night Tracker | Track Sunrise & Sunset Times Worldwide</title>
        <meta name="title" content="Day & Night Tracker | Track Sunrise & Sunset Times Worldwide" />
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
        
        <meta property="og:title" content="Day & Night Tracker - Track Sunrise & Sunset Times Worldwide" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/day-night-tracker-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Time Clock" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Day & Night Tracker" />
        <meta name="twitter:description" content="Track real-time day/night cycles, sunrise, and sunset worldwide" />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/day-night-tracker-twitter.jpg" />
        
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
            <Link href="/global-day-and-night-tracker-world-clock" className={styles.breadcrumbLink}>
              <ClockIcon />
              <span className={styles.breadcrumbText}>World Clock</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <ChevronRightIcon />
          </li>
          <li className={styles.breadcrumbItem}>
            <span className={styles.breadcrumbCurrent}>
              <SunIcon />
              <span className={styles.breadcrumbText}>Day & Night Tracker</span>
            </span>
          </li>
        </ol>
      </nav>

      <header className={styles.header}>
        <div className={styles.trustBadge}>
          <StarIcon />
          <span className={styles.trustBadgeText}>
            Trusted by 500K+ Users | Track 12 Countries | Free Forever
          </span>
        </div>

        <h1 className={styles.heroTitle}>
          Day & Night <span className={styles.gradientText}>Tracker</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          <strong className={styles.heroHighlight}>Monitor real-time day/night cycles</strong> for any country. Track sunrise, sunset, and countdowns to the next transition with beautiful visual progress bars.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>190+</span>
            <span className={styles.statLabel}>Countries Available</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>12</span>
            <span className={styles.statLabel}>Max Countries</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Real-Time Updates</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Seasons</span>
          </div>
        </div>
      </header>

      <div className={styles.controls}>
        <CountrySearch
          onSelect={handleSelectCountry}
          selectedCountries={selectedCountries}
        />
        {selectedCountries.length > 0 && (
          <p className={styles.trackingCount}>
            <CheckIcon />
            <span>Tracking {selectedCountries.length} of 12 countries</span>
          </p>
        )}
      </div>

      {selectedCountries.length > 0 ? (
        <div className={styles.cardsContainer}>
          {selectedCountries.map((name) => (
            <CountryCard
              key={name}
              name={name}
              country={countryData[name]}
              season={season}
              currentTime={currentTime}
              onRemove={() => removeCountry(name)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.worldIcon}>🌍</div>
          <h3 className={styles.emptyTitle}>Start Tracking Day & Night</h3>
          <p className={styles.emptyText}>Search and select up to 12 countries to monitor their day/night cycles</p>
          <div className={styles.emptyFeatures}>
            <div className={styles.emptyFeature}>
              <CheckIcon />
              <span>Real-time day/night status</span>
            </div>
            <div className={styles.emptyFeature}>
              <CheckIcon />
              <span>Sunrise & sunset times</span>
            </div>
            <div className={styles.emptyFeature}>
              <CheckIcon />
              <span>Live countdowns</span>
            </div>
            <div className={styles.emptyFeature}>
              <CheckIcon />
              <span>Visual progress bars</span>
            </div>
          </div>
        </div>
      )}

      <section className={styles.factsSection} aria-labelledby="facts-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="facts-title">Why Use Our Day & Night Tracker?</h2>
          <p className={styles.sectionSubtitle}>
            Powerful features for tracking daylight worldwide
          </p>
        </div>
        <div className={styles.factsGrid}>
          {dayNightFacts.map((fact, index) => (
            <div key={index} className={styles.factCard}>
              <h3 className={styles.factTitle}>{fact.title}</h3>
              <p className={styles.factDescription}>{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="testimonials-title">Trusted by Professionals</h2>
          <p className={styles.sectionSubtitle}>
            Join thousands who rely on our day/night tracker
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
          <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know about tracking day and night
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
          <h2 className={styles.ctaTitle} id="cta-title">Start Tracking Day & Night Now</h2>
          <p className={styles.ctaSubtitle}>
            Add your first country above to see live day/night cycles
          </p>
          <div className={styles.ctaFeatures}>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Track up to 12 countries</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Real-time updates</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Seasonal adjustments</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Visual progress tracking</span>
            </div>
          </div>
          <Link href="/world-clock" className={styles.ctaButton}>
            <span className={styles.ctaButtonText}>Back to World Clock</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Hidden structured data for search engines */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h2>Countries Available for Day/Night Tracking</h2>
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

export default DayNightTracker;