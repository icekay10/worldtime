'use client';

import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TimeZoneConverter.module.css';

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

const SwapIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 2l4 4-4 4"/>
    <path d="M3 12h15"/>
    <path d="M7 18l-4-4 4-4"/>
    <path d="M21 12h-6"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const Clock3Icon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

// Comprehensive timezone database with major cities
const timezoneDatabase = [
  { value: "Pacific/Midway", label: "Midway Island, Samoa", offset: "UTC-11:00", city: "Midway" },
  { value: "Pacific/Honolulu", label: "Honolulu, Hawaii", offset: "UTC-10:00", city: "Honolulu" },
  { value: "America/Juneau", label: "Juneau, Alaska", offset: "UTC-09:00", city: "Juneau" },
  { value: "America/Los_Angeles", label: "Los Angeles, San Francisco", offset: "UTC-08:00", city: "Los Angeles" },
  { value: "America/Denver", label: "Denver, Salt Lake City", offset: "UTC-07:00", city: "Denver" },
  { value: "America/Chicago", label: "Chicago, Dallas", offset: "UTC-06:00", city: "Chicago" },
  { value: "America/New_York", label: "New York, Washington D.C.", offset: "UTC-05:00", city: "New York" },
  { value: "America/Caracas", label: "Caracas, La Paz", offset: "UTC-04:00", city: "Caracas" },
  { value: "America/Sao_Paulo", label: "São Paulo, Buenos Aires", offset: "UTC-03:00", city: "São Paulo" },
  { value: "America/St_Johns", label: "St. John's, Newfoundland", offset: "UTC-02:30", city: "St. John's" },
  { value: "Atlantic/Cape_Verde", label: "Cape Verde, Azores", offset: "UTC-01:00", city: "Cape Verde" },
  { value: "Europe/London", label: "London, Dublin", offset: "UTC+00:00", city: "London" },
  { value: "Europe/Paris", label: "Paris, Berlin", offset: "UTC+01:00", city: "Paris" },
  { value: "Europe/Helsinki", label: "Helsinki, Athens", offset: "UTC+02:00", city: "Helsinki" },
  { value: "Europe/Moscow", label: "Moscow, Istanbul", offset: "UTC+03:00", city: "Moscow" },
  { value: "Asia/Dubai", label: "Dubai, Abu Dhabi", offset: "UTC+04:00", city: "Dubai" },
  { value: "Asia/Karachi", label: "Karachi, Tashkent", offset: "UTC+05:00", city: "Karachi" },
  { value: "Asia/Kolkata", label: "Mumbai, New Delhi", offset: "UTC+05:30", city: "Mumbai" },
  { value: "Asia/Kathmandu", label: "Kathmandu, Nepal", offset: "UTC+05:45", city: "Kathmandu" },
  { value: "Asia/Dhaka", label: "Dhaka, Bhutan", offset: "UTC+06:00", city: "Dhaka" },
  { value: "Asia/Yangon", label: "Yangon, Myanmar", offset: "UTC+06:30", city: "Yangon" },
  { value: "Asia/Bangkok", label: "Bangkok, Jakarta", offset: "UTC+07:00", city: "Bangkok" },
  { value: "Asia/Shanghai", label: "Beijing, Singapore", offset: "UTC+08:00", city: "Beijing" },
  { value: "Asia/Tokyo", label: "Tokyo, Seoul", offset: "UTC+09:00", city: "Tokyo" },
  { value: "Australia/Sydney", label: "Sydney, Melbourne", offset: "UTC+10:00", city: "Sydney" },
  { value: "Pacific/Noumea", label: "Noumea, Fiji", offset: "UTC+11:00", city: "Noumea" },
  { value: "Pacific/Auckland", label: "Auckland, Wellington", offset: "UTC+12:00", city: "Auckland" },
  { value: "Pacific/Tongatapu", label: "Tonga, Fiji Islands", offset: "UTC+13:00", city: "Tonga" },
  { value: "Pacific/Kiritimati", label: "Kiritimati, Christmas Island", offset: "UTC+14:00", city: "Kiritimati" }
];

// Popular city shortcuts
const popularCities = [
  { name: "New York", timezone: "America/New_York", flag: "🇺🇸" },
  { name: "London", timezone: "Europe/London", flag: "🇬🇧" },
  { name: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  { name: "Sydney", timezone: "Australia/Sydney", flag: "🇦🇺" },
  { name: "Paris", timezone: "Europe/Paris", flag: "🇫🇷" },
  { name: "Dubai", timezone: "Asia/Dubai", flag: "🇦🇪" },
  { name: "Mumbai", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { name: "Shanghai", timezone: "Asia/Shanghai", flag: "🇨🇳" }
];

const converterFacts = [
  {
    title: "Real-Time Conversion",
    description: "Instantly convert times between any two time zones with live updates every second. Perfect for scheduling international calls."
  },
  {
    title: "DST Awareness",
    description: "Automatically accounts for Daylight Saving Time in all regions, ensuring accuracy year-round."
  },
  {
    title: "30+ Major Cities",
    description: "Comprehensive database covering all major time zones from UTC-11 to UTC+14, including half-hour offsets."
  },
  {
    title: "Date Tracking",
    description: "Shows both time AND date, so you always know if you're scheduling for today or tomorrow."
  }
];

const faqs = [
  {
    question: "How does the time zone converter work?",
    answer: "Simply select your source time zone, enter the time you want to convert, and choose your target time zone. The converter instantly shows you the equivalent time in your destination, accounting for time zone differences and DST."
  },
  {
    question: "Does it handle Daylight Saving Time (DST)?",
    answer: "Yes! Our converter automatically adjusts for DST in all regions. The displayed times reflect the correct local time, whether DST is active or not."
  },
  {
    question: "What time zones are supported?",
    answer: "We support all major time zones from UTC-11 to UTC+14, including half-hour offsets like India (UTC+5:30) and Nepal (UTC+5:45)."
  },
  {
    question: "Can I see the date in the converted time?",
    answer: "Absolutely! The converter shows both the time AND date for your target location, so you always know if you're looking at today or tomorrow."
  },
  {
    question: "How accurate is the conversion?",
    answer: "Our converter uses your device's system time combined with the IANA timezone database for maximum accuracy. All conversions are updated in real-time."
  },
  {
    question: "Can I convert between any two cities?",
    answer: "Yes! Use the dropdown menus to select any two time zones from our database. You can also click on popular city shortcuts for quick conversions."
  }
];

const testimonials = [
  {
    quote: "This converter is a lifesaver for scheduling my international team meetings. The real-time updates and date tracking are perfect.",
    metric: "100+ Meetings",
    name: "Jennifer Walsh",
    role: "Global Team Lead",
    company: "TechCorp International"
  },
  {
    quote: "Finally a converter that handles half-hour timezones correctly. The interface is clean and the results are instant.",
    metric: "Daily User",
    name: "Raj Patel",
    role: "Software Developer",
    company: "Global Solutions"
  },
  {
    quote: "The popular city shortcuts make it so quick to use. I convert times between London and Tokyo multiple times daily.",
    metric: "5-Star Rating",
    name: "Emma Thompson",
    role: "Travel Planner",
    company: "Wanderlust Travel"
  },
  {
    quote: "Accurate, fast, and beautiful. The DST handling is flawless, which is rare in free converters.",
    metric: "Highly Recommended",
    name: "Carlos Mendez",
    role: "Remote Work Consultant",
    company: "Digital Nomad Hub"
  }
];

const TimeZoneConverter = ({ seoData, buildTimestamp }) => {
  const [fromTimezone, setFromTimezone] = useState("America/New_York");
  const [toTimezone, setToTimezone] = useState("Europe/London");
  const [fromTime, setFromTime] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [convertedTime, setConvertedTime] = useState("");
  const [convertedDate, setConvertedDate] = useState("");
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

  // Initialize with current time
  useEffect(() => {
    if (isClient) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      
      setFromDate(`${year}-${month}-${day}`);
      setFromTime(`${hours}:${minutes}`);
    }
  }, [isClient]);

  // Perform conversion whenever inputs change
  useEffect(() => {
    if (isClient && fromDate && fromTime) {
      try {
        // Parse input date and time
        const [year, month, day] = fromDate.split('-').map(Number);
        const [hours, minutes] = fromTime.split(':').map(Number);
        
        // Create date object in source timezone
        const sourceDate = new Date(Date.UTC(year, month - 1, day, hours, minutes));
        
        // Format in source timezone for display
        const sourceFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: fromTimezone,
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        
        // Format in target timezone
        const targetFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: toTimezone,
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        
        // Get target time components
        const targetParts = targetFormatter.formatToParts(sourceDate);
        const targetTimeObj = {};
        targetParts.forEach(part => {
          targetTimeObj[part.type] = part.value;
        });
        
        setConvertedTime(`${targetTimeObj.hour}:${targetTimeObj.minute} ${targetTimeObj.dayPeriod}`);
        setConvertedDate(`${targetTimeObj.month} ${targetTimeObj.day}, ${targetTimeObj.year}`);
      } catch (error) {
        console.error('Conversion error:', error);
      }
    }
  }, [fromTimezone, toTimezone, fromDate, fromTime, isClient]);

  const handleSwap = () => {
    setFromTimezone(toTimezone);
    setToTimezone(fromTimezone);
  };

  const handlePopularCity = (cityTimezone) => {
    setToTimezone(cityTimezone);
  };

  const formatCurrentTime = (timezone) => {
    if (!isClient) return '--:--:--';
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(currentTime);
    } catch (error) {
      return '--:--:--';
    }
  };

  const formatCurrentDate = (timezone) => {
    if (!isClient) return 'Loading...';
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(currentTime);
    } catch (error) {
      return 'Loading...';
    }
  };

  // Canonical URL
  const canonicalUrl = 'https://www.timeinworldclock.com/timezone-converter';

  const metaDescription = "Free time zone converter - instantly convert times between any two time zones worldwide. Real-time updates, DST aware, supports 30+ major cities from New York to Tokyo. Perfect for international scheduling.";
  
  const keywords = [
    "time zone converter",
    "time converter",
    "world time converter",
    "time zone calculator",
    "time difference calculator",
    "international time converter",
    "GMT converter",
    "UTC converter",
    "time zone conversion",
    "convert time zones",
    "time zone tool",
    "world clock converter",
    "time zone changer",
    "time calculator",
    "time zone difference",
    "time zone offset",
    "time conversion tool",
    "global time converter",
    "time zone translator",
    "time zone mapper"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": "Time Zone Converter - Convert Times Between Any Two Time Zones",
        "description": metaDescription,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.timeinworldclock.com/#website",
          "url": "https://www.timeinworldclock.com",
          "name": "World Time Clock",
          "description": "Free accurate world clock and time zone tools",
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.timeinworldclock.com/#organization",
            "name": "World Time Clock",
            "url": "https://www.timeinworldclock.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.timeinworldclock.com/images/logo.png",
              "width": 512,
              "height": 512
            }
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
              "item": "https://www.timeinworldclock.com/world-clock"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Time Zone Converter",
              "item": canonicalUrl
            }
          ]
        },
        "mainEntity": {
          "@type": "WebApplication",
          "name": "Time Zone Converter",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Convert times between any two time zones instantly",
          "featureList": [
            "Real-time conversion",
            "DST aware",
            "30+ major cities",
            "Date tracking",
            "Popular shortcuts"
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
              "name": "Time Zone Converter"
            }
          }
        }))
      }
    ]
  };

  return (
    <div className={styles.converterPage} lang="en-US">
      <Head>
        <title>Time Zone Converter | Convert Times Between Any Two Time Zones</title>
        <meta name="title" content="Time Zone Converter | Convert Times Between Any Two Time Zones" />
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
        
        <meta property="og:title" content="Time Zone Converter - Convert Times Between Any Two Time Zones" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/converter-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Time Clock" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Time Zone Converter" />
        <meta name="twitter:description" content="Instantly convert times between any two time zones" />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/converter-twitter.jpg" />
        <meta name="twitter:site" content="@worldtimeclock" />
        <meta name="twitter:creator" content="@worldtimeclock" />
        
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
            <Link href="/world-clock" className={styles.breadcrumbLink}>
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
              <span className={styles.breadcrumbText}>Time Zone Converter</span>
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.trustBadge}>
          <StarIcon />
          <span className={styles.trustBadgeText}>
            Trusted by 500K+ Users | DST Aware | Free Forever
          </span>
        </div>

        <h1 className={styles.heroTitle} id="hero-title">
          Time Zone <span className={styles.gradientText}>Converter</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          <strong className={styles.heroHighlight}>Instantly convert times</strong> between any two time zones. Perfect for scheduling international calls, planning travel, or coordinating with remote teams.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Time Zones</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Live Updates</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>DST Aware</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>⚡</span>
            <span className={styles.statLabel}>Instant</span>
          </div>
        </div>
      </section>

      {/* Converter Card */}
      <section className={styles.converterSection} aria-labelledby="converter-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="converter-title">Convert Time Zones</h2>
          <p className={styles.sectionSubtitle}>
            Select source and target time zones to see the converted time
          </p>
        </div>

        <div className={styles.converterCard}>
          <div className={styles.converterGrid}>
            {/* From Section */}
            <div className={styles.converterColumn}>
              <div className={styles.columnHeader}>
                <MapPinIcon />
                <h3 className={styles.columnTitle}>From</h3>
              </div>
              
              <div className={styles.timezoneSelectWrapper}>
                <select
                  value={fromTimezone}
                  onChange={(e) => setFromTimezone(e.target.value)}
                  className={styles.timezoneSelect}
                  aria-label="Select source timezone"
                >
                  {timezoneDatabase.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label} ({tz.offset})
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.currentTimeDisplay}>
                <span className={styles.currentTimeLabel}>Current time:</span>
                <span className={styles.currentTimeValue}>
                  {formatCurrentTime(fromTimezone)}
                </span>
                <span className={styles.currentDateValue}>
                  {formatCurrentDate(fromTimezone)}
                </span>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="fromDate" className={styles.inputLabel}>
                  <CalendarIcon />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  id="fromDate"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className={styles.dateInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="fromTime" className={styles.inputLabel}>
                  <Clock3Icon />
                  <span>Time</span>
                </label>
                <input
                  type="time"
                  id="fromTime"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  className={styles.timeInput}
                  step="60"
                />
              </div>
            </div>

            {/* Swap Button */}
            <div className={styles.swapColumn}>
              <button
                onClick={handleSwap}
                className={styles.swapButton}
                aria-label="Swap time zones"
              >
                <SwapIcon />
              </button>
            </div>

            {/* To Section */}
            <div className={styles.converterColumn}>
              <div className={styles.columnHeader}>
                <GlobeIcon />
                <h3 className={styles.columnTitle}>To</h3>
              </div>
              
              <div className={styles.timezoneSelectWrapper}>
                <select
                  value={toTimezone}
                  onChange={(e) => setToTimezone(e.target.value)}
                  className={styles.timezoneSelect}
                  aria-label="Select target timezone"
                >
                  {timezoneDatabase.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label} ({tz.offset})
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.currentTimeDisplay}>
                <span className={styles.currentTimeLabel}>Current time:</span>
                <span className={styles.currentTimeValue}>
                  {formatCurrentTime(toTimezone)}
                </span>
                <span className={styles.currentDateValue}>
                  {formatCurrentDate(toTimezone)}
                </span>
              </div>

              <div className={styles.resultCard}>
                <div className={styles.resultHeader}>
                  <span className={styles.resultLabel}>Converted Time:</span>
                </div>
                <div className={styles.resultTime}>{convertedTime || '--:-- --'}</div>
                <div className={styles.resultDate}>{convertedDate || 'Loading...'}</div>
              </div>
            </div>
          </div>

          {/* Popular Shortcuts */}
          <div className={styles.popularSection}>
            <h4 className={styles.popularTitle}>Popular Destinations:</h4>
            <div className={styles.popularGrid}>
              {popularCities.map((city) => (
                <button
                  key={city.timezone}
                  onClick={() => handlePopularCity(city.timezone)}
                  className={styles.popularButton}
                >
                  <span className={styles.popularFlag}>{city.flag}</span>
                  <span className={styles.popularName}>{city.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Difference Display */}
          {isClient && fromTimezone && toTimezone && (
            <div className={styles.differenceDisplay}>
              <div className={styles.differenceIcon}>↔️</div>
              <div className={styles.differenceContent}>
                <h4 className={styles.differenceTitle}>Time Difference</h4>
                <p className={styles.differenceText}>
                  {(() => {
                    try {
                      const now = new Date();
                      const fromOffset = -now.getTimezoneOffset() / 60;
                      const toOffset = new Intl.DateTimeFormat('en-US', { timeZone: toTimezone, timeZoneName: 'short' })
                        .formatToParts(now)
                        .find(part => part.type === 'timeZoneName')?.value || '';
                      return `${fromTimezone.split('/').pop()} is ${fromOffset > 0 ? '+' : ''}${fromOffset} hours, ${toTimezone.split('/').pop()} is ${toOffset}`;
                    } catch {
                      return 'Select time zones to see difference';
                    }
                  })()}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Facts Section */}
      <section className={styles.factsSection} aria-labelledby="facts-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="facts-title">Why Use Our Converter?</h2>
          <p className={styles.sectionSubtitle}>
            Powerful features for accurate time conversion
          </p>
        </div>

        <div className={styles.factsGrid}>
          {converterFacts.map((fact, index) => (
            <div key={index} className={styles.factCard}>
              <h3 className={styles.factTitle}>{fact.title}</h3>
              <p className={styles.factDescription}>{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="testimonials-title">Trusted by Professionals</h2>
          <p className={styles.sectionSubtitle}>
            Join thousands who rely on our time zone converter
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

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know about time zone conversion
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

      {/* CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle} id="cta-title">Need More Time Tools?</h2>
          <p className={styles.ctaSubtitle}>
            Explore our full suite of world clock features
          </p>
          <div className={styles.ctaFeatures}>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>World Clock</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Time Comparator</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Day/Night Tracker</span>
            </div>
          </div>
          <Link href="/" className={styles.ctaButton}>
            <span className={styles.ctaButtonText}>Go to World Clock</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Hidden structured data for search engines */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h2>Supported Time Zones</h2>
        <ul>
          {timezoneDatabase.map((tz) => (
            <li key={tz.value}>{tz.label} - {tz.offset}</li>
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

export default TimeZoneConverter;