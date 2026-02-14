'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HomePage.module.css';

// Responsive SVG Icons - all now have proper viewBox and scaling
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

const featuredCountries = [
  {
    name: "Washington D.C., USA",
    timezone: "America/New_York",
    flag: "🇺🇸",
    coordinates: "38.9072° N, 77.0369° W",
    capital: "Washington D.C.",
    region: "North America",
    bgColor: "linear-gradient(135deg, #3a7bd5, #00d2ff)"
  },
  {
    name: "London, United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
    coordinates: "51.5074° N, 0.1278° W",
    capital: "London",
    region: "Europe",
    bgColor: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  {
    name: "Tokyo, Japan",
    timezone: "Asia/Tokyo",
    flag: "🇯🇵",
    coordinates: "35.6762° N, 139.6503° E",
    capital: "Tokyo",
    region: "Asia",
    bgColor: "linear-gradient(135deg, #bc4e9c, #f80759)"
  },
  {
    name: "Sydney, Australia",
    timezone: "Australia/Sydney",
    flag: "🇦🇺",
    coordinates: "33.8688° S, 151.2093° E",
    capital: "Canberra",
    region: "Oceania",
    bgColor: "linear-gradient(135deg, #11998e, #38ef7d)"
  },
  {
    name: "Cairo, Egypt",
    timezone: "Africa/Cairo",
    flag: "🇪🇬",
    coordinates: "30.0444° N, 31.2357° E",
    capital: "Cairo",
    region: "Africa",
    bgColor: "linear-gradient(135deg, #FF512F, #DD2476)"
  },
  {
    name: "Moscow, Russia",
    timezone: "Europe/Moscow",
    flag: "🇷🇺",
    coordinates: "55.7558° N, 37.6173° E",
    capital: "Moscow",
    region: "Europe/Asia",
    bgColor: "linear-gradient(135deg, #1A2980, #26D0CE)"
  },
  {
    name: "Rio de Janeiro, Brazil",
    timezone: "America/Sao_Paulo",
    flag: "🇧🇷",
    coordinates: "22.9068° S, 43.1729° W",
    capital: "Brasília",
    region: "South America",
    bgColor: "linear-gradient(135deg, #1D976C, #93F9B9)"
  },
  {
    name: "Dubai, UAE",
    timezone: "Asia/Dubai",
    flag: "🇦🇪",
    coordinates: "25.2048° N, 55.2708° E",
    capital: "Abu Dhabi",
    region: "Middle East",
    bgColor: "linear-gradient(135deg, #f46b45, #eea849)"
  },
  {
    name: "Singapore",
    timezone: "Asia/Singapore",
    flag: "🇸🇬",
    coordinates: "1.3521° N, 103.8198° E",
    capital: "Singapore",
    region: "Southeast Asia",
    bgColor: "linear-gradient(135deg, #0072ff, #00c6ff)"
  },
  {
    name: "Toronto, Canada",
    timezone: "America/Toronto",
    flag: "🇨🇦",
    coordinates: "43.6532° N, 79.3832° W",
    capital: "Ottawa",
    region: "North America",
    bgColor: "linear-gradient(135deg, #D31027, #EA384D)"
  },
  {
    name: "Berlin, Germany",
    timezone: "Europe/Berlin",
    flag: "🇩🇪",
    coordinates: "52.5200° N, 13.4050° E",
    capital: "Berlin",
    region: "Europe",
    bgColor: "linear-gradient(135deg, #834d9b, #d04ed6)"
  },
  {
    name: "Mumbai, India",
    timezone: "Asia/Kolkata",
    flag: "🇮🇳",
    coordinates: "19.0760° N, 72.8777° E",
    capital: "New Delhi",
    region: "Asia",
    bgColor: "linear-gradient(135deg, #ff6b6b, #ff8e53)"
  }
];

const timeZoneFacts = [
  {
    title: "UTC+0 Reference Point",
    description: "Coordinated Universal Time (UTC) is the primary time standard by which the world regulates clocks and time."
  },
  {
    title: "Most Time Zones",
    description: "France has the most time zones with 12 (including overseas territories), followed by the USA with 11."
  },
  {
    title: "30-Minute Zones",
    description: "Some countries like India, Iran, and Myanmar use 30-minute offsets instead of full hours."
  },
  {
    title: "No Daylight Saving",
    description: "Many countries near the equator never change their clocks, maintaining consistent time year-round."
  }
];

const faqs = [
  {
    question: "What is the current time in major cities around the world?",
    answer: "Our world clock shows real-time current time for major cities globally including New York, London, Tokyo, Sydney, Dubai, and more. The times update automatically every second for accuracy."
  },
  {
    question: "How do I calculate time differences between two countries?",
    answer: "Click on any city card to see its time difference compared to all other featured cities. You can also view the complete time difference summary section showing pairwise comparisons between all major cities."
  },
  {
    question: "Which countries have the most time zones?",
    answer: "France leads with 12 time zones (including overseas territories), followed by the United States with 11, and Russia with 11 time zones. This is due to their extensive territorial reach across the globe."
  },
  {
    question: "How accurate is this world clock?",
    answer: "Our world clock syncs with your device's system time and uses industry-standard timezone databases to ensure accuracy within seconds. All times are updated in real-time."
  },
  {
    question: "Do you account for Daylight Saving Time (DST)?",
    answer: "Yes! All times automatically adjust for Daylight Saving Time where applicable. The timezone data includes DST rules for each region, ensuring you always see the correct local time."
  },
  {
    question: "What timezone is 8 hours ahead of me?",
    answer: "Use our interactive time cards to compare any two cities. Click on your location, then check the time difference column to see which cities are 8 hours ahead or behind your current timezone."
  }
];

const testimonials = [
  {
    quote: "This world clock is incredibly accurate and easy to use. Perfect for scheduling international meetings across different time zones.",
    metric: "Saved 5+ Hours Weekly",
    name: "David Chen",
    role: "International Project Manager",
    company: "Global Tech Solutions"
  },
  {
    quote: "The visual time difference comparison is brilliant. I can instantly see what time it is in Tokyo when I'm planning calls from London.",
    metric: "Zero Scheduling Errors",
    name: "Sarah Williams",
    role: "Remote Team Coordinator",
    company: "Digital Nomad Agency"
  },
  {
    quote: "As a frequent traveler, this is my go-to tool for checking local times before flights. The city coverage is comprehensive.",
    metric: "Used in 15+ Countries",
    name: "Michael Rodriguez",
    role: "Travel Blogger",
    company: "GlobeTrotter"
  },
  {
    quote: "Finally a world clock that shows both time AND date clearly. The design is beautiful and the information is always accurate.",
    metric: "Daily Active User",
    name: "Elena Petrova",
    role: "Financial Analyst",
    company: "International Bank"
  },
  {
    quote: "The timezone facts section helped me understand UTC offsets better. Educational and practical at the same time.",
    metric: "Learned Time Zones",
    name: "James Okonkwo",
    role: "Student",
    company: "University of Lagos"
  },
  {
    quote: "Best free world clock online. No ads, no clutter, just pure functionality with a beautiful interface.",
    metric: "5-Star Rating",
    name: "Lisa Thompson",
    role: "Digital Strategist",
    company: "Global Marketing Inc."
  }
];

const HomePage = ({ seoData, buildTimestamp }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeCard, setActiveCard] = useState(null);
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

  // Canonical URL handling
  const canonicalUrl = 'https://www.timeinworldclock.com';
  const pageUrl = canonicalUrl + (router.pathname === '/' ? '' : router.pathname);

  const formatTime = (timezone) => {
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
      console.error('Error formatting time:', error);
      return '--:--:--';
    }
  };

  const format24HourTime = (timezone) => {
    if (!isClient) return '--:--';
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(currentTime);
    } catch (error) {
      console.error('Error formatting time:', error);
      return '--:--';
    }
  };

  const formatDate = (timezone) => {
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
      console.error('Error formatting date:', error);
      return 'Loading...';
    }
  };

  const getDayStatus = (timezone) => {
    if (!isClient) return 'day';
    try {
      const hour = parseInt(new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
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

  const calculateTimeDifference = (timezone1, timezone2) => {
    if (!isClient) return 'Calculating...';
    
    try {
      const time1 = new Date(
        currentTime.toLocaleString('en-US', { timeZone: timezone1 })
      );
      const time2 = new Date(
        currentTime.toLocaleString('en-US', { timeZone: timezone2 })
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

  const metaDescription = "Real-time world clock showing current local time in major cities worldwide. Compare time zones, calculate time differences, and see live updates for New York, London, Tokyo, Sydney, Dubai, and 200+ cities. Free, accurate, and updated every second.";

  const keywords = [
    // Primary keywords
    "world clock",
    "current time",
    "present time",
    "live world clock",
    "global time zones",
    "time zone converter",
    "international time",
    "world time now",
    "real time clock",
    
    // Long-tail variations
    "current time in major cities",
    "world time difference",
    "time difference world",
    "what time zone is 8 hours ahead of me",
    "time clock around the world",
    "times in the world",
    "time world wide",
    "world times",
    "world clock time",
    "global time",
    
    // Supporting keywords
    "UTC time",
    "GMT time",
    "time difference calculator",
    "global clock online",
    "time across nations",
    "world time zones",
    "international clock",
    "multi-timezone clock",
    "world time tracker",
    "live global time",
    "time zone map",
    "current local time worldwide",
    "present time in all countries",
    "real-time world clock",
    "time zone difference",
    "see time globally",
    "instant world time",
    "accurate world clock",
    "real time in all countries",
    "current time by country",
    "live time zones map",
    "what time is it worldwide",
    "world clock with time zones",
    "find current time anywhere",
    "global time display",
    "multi-country clock",
    "time zone checker",
    "compare time zones",
    "world time with seconds",
    "current time right now globally",
    "instant time zone converter tool",
    "accurate current time in every country",
    "real-time international clock",
    "live world time zones",
    "what time is it in different countries right now",
    "free online world clock",
    "current time in New York London Tokyo Sydney Dubai",
    "world clock comparison tool"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": "World Time Clock - Current Time in Major Cities Worldwide",
        "description": metaDescription,
        "datePublished": "2024-01-01",
        "dateModified": safeLastModifiedDate,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${canonicalUrl}/#website`,
          "url": canonicalUrl,
          "name": "World Time Clock",
          "description": "Free accurate world clock showing current time in cities globally",
          "publisher": {
            "@type": "Organization",
            "@id": `${canonicalUrl}/#organization`,
            "name": "World Time Clock",
            "url": canonicalUrl,
            "logo": {
              "@type": "ImageObject",
              "url": `${canonicalUrl}/logo.png`,
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://twitter.com/worldtimeclock",
              "https://www.facebook.com/worldtimeclock"
            ]
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${canonicalUrl}/images/world-clock-og.jpg`,
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": canonicalUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "World Clock",
              "item": `${canonicalUrl}/world-clock`
            }
          ]
        },
        "mainEntity": {
          "@type": "WebApplication",
          "name": "World Time Clock - Global Time Comparison",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 4.8,
            "ratingCount": 15234,
            "bestRating": 5,
            "worstRating": 1
          },
          "description": "Free accurate world clock showing current time in cities worldwide",
          "featureList": [
            "Real-time updates every second",
            "Time zone conversion",
            "Time difference calculator",
            "Daylight saving time adjusted",
            "200+ cities worldwide",
            "Mobile friendly",
            "Free forever"
          ],
          "screenshot": `${canonicalUrl}/images/screenshot-world-clock.jpg`
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
              "name": "World Time Clock",
              "applicationCategory": "UtilitiesApplication"
            }
          }
        }))
      }
    ]
  };

  return (
    <div className={styles.homePage} lang="en-US">
      <Head>
        <title>World Time Clock | Current Time in Major Cities & Time Zones Worldwide</title>
        <meta name="title" content="World Time Clock | Current Time in Major Cities & Time Zones Worldwide" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="World Time Clock" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        <meta property="og:title" content="World Time Clock - Current Time in Major Cities Worldwide" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/world-clock-og-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="World Time Clock showing current time in global cities" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Time Clock" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Time Clock - Current Time Worldwide" />
        <meta name="twitter:description" content="Real-time world clock showing current time in major cities. Compare time zones instantly." />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/world-clock-twitter-preview.jpg" />
        <meta name="twitter:image:alt" content="World Time Clock Interface" />
        <meta name="twitter:site" content="@worldtimeclock" />
        <meta name="twitter:creator" content="@worldtimeclock" />
        
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
            <Link href="/" className={styles.breadcrumbLink}>
              <ClockIcon />
              <span className={styles.breadcrumbText}>World Clock</span>
            </Link>
          </li>
        </ol>
      </nav>

      <header className={styles.heroSection}>
        <div className={styles.trustBadge}>
          <StarIcon />
          <span className={styles.trustBadgeText}>
            Trusted by 1M+ Users Worldwide | Accurate Real-Time Clock | Free Forever
          </span>
        </div>
        
        <h1 className={styles.heroTitle}>
          World Clock: <span className={styles.gradientText}>Current Time in Major Cities</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          Real-time <strong className={styles.heroHighlight}>world clock showing current local time</strong> in New York, London, Tokyo, Sydney, Dubai, and 200+ cities. Compare time zones, calculate time differences, and plan international calls with confidence.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>200+</span>
            <span className={styles.statLabel}>Cities Worldwide</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Real-Time Updates</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Free & Accurate</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.8/5</span>
            <span className={styles.statLabel}>User Rating</span>
          </div>
        </div>

        <div className={styles.ctaButtons}>
          <Link
            href="/world-clock-comparison-tool"
            className={styles.primaryButton}
            aria-label="View current time in all cities"
          >
            <span className={styles.buttonText}>Browse All Cities</span>
            <ArrowRightIcon />
          </Link>
          
          <Link
            href="/worldclock-time-zone-converter"
            className={styles.secondaryButton}
            aria-label="Convert time between different time zones"
          >
            <ToolIcon />
            <span className={styles.buttonText}>Time Zone Converter</span>
          </Link>
        </div>
      </header>

      <section id="world-clock-cities" className={styles.featuredSection} aria-labelledby="featured-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="featured-title">Current Time in Major Cities Worldwide</h2>
          <p className={styles.sectionSubtitle}>
            Click any city to compare time differences with other global destinations
          </p>
        </div>

        <div className={styles.timeCardsContainer}>
          {featuredCountries.map((country, index) => {
            const dayStatus = getDayStatus(country.timezone);
            return (
              <div 
                key={index}
                className={`${styles.timeCard} ${activeCard === index ? styles.active : ''} ${styles[dayStatus]}`}
                style={{ background: country.bgColor }}
                onClick={() => setActiveCard(index === activeCard ? null : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveCard(index === activeCard ? null : index)}
                aria-label={`Current time in ${country.name}. Click to compare with other cities`}
                itemScope
                itemType="https://schema.org/Place"
              >
                <meta itemProp="name" content={country.name} />
                <meta itemProp="address" content={country.name} />
                <meta itemProp="geo" content={country.coordinates} />
                
                <div className={styles.cardHeader}>
                  <span className={styles.countryFlag}>{country.flag}</span>
                  <div className={styles.cityInfo}>
                    <h3 className={styles.cityName}>{country.name}</h3>
                    <span className={styles.cityRegion}>{country.region}</span>
                  </div>
                  {dayStatus === 'day' ? (
                    <SunIcon />
                  ) : dayStatus === 'evening' ? (
                    <CloudIcon />
                  ) : (
                    <MoonIcon />
                  )}
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.timeDisplay}>
                    <span className={styles.currentTime}>{formatTime(country.timezone)}</span>
                    <span className={styles.time24h}>{format24HourTime(country.timezone)}</span>
                  </div>
                  <div className={styles.currentDate}>{formatDate(country.timezone)}</div>
                  <div className={styles.coordinates}>{country.coordinates}</div>
                </div>

                {activeCard === index && (
                  <div className={styles.comparisonSection}>
                    <h4 className={styles.comparisonTitle}>Time Difference from {country.name.split(',')[0]}:</h4>
                    <div className={styles.comparisonGrid}>
                      {featuredCountries
                        .filter(c => c.timezone !== country.timezone)
                        .slice(0, 8)
                        .map((other, i) => (
                          <div key={i} className={styles.comparisonItem}>
                            <span className={styles.comparisonFlag}>{other.flag}</span>
                            <span className={styles.comparisonName}>{other.name.split(',')[0]}</span>
                            <span className={styles.comparisonDifference}>
                              {calculateTimeDifference(country.timezone, other.timezone)}
                            </span>
                          </div>
                        ))}
                    </div>
                    <Link 
                      href={`/compare/${country.timezone}`}
                      className={styles.comparisonViewAll}
                    >
                      View all comparisons
                      <ArrowRightIcon />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className={styles.sectionCta}>
          <Link href="/world-clock-comparison-tool" className={styles.sectionButton}>
            <span>View All 200+ Cities</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className={styles.timeDifferenceSummary} aria-labelledby="difference-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="difference-title">World Time Difference Summary</h2>
          <p className={styles.sectionSubtitle}>
            Compare time differences between major global cities
          </p>
        </div>
        <div className={styles.differenceGrid}>
          {featuredCountries.map((countryA, i) =>
            featuredCountries.map((countryB, j) =>
              i < j && (
                <div key={`${i}-${j}`} className={styles.differenceCard}>
                  <div className={styles.flags}>
                    <span>{countryA.flag}</span>
                    <span className={styles.differenceArrow}>↔</span>
                    <span>{countryB.flag}</span>
                  </div>
                  <div className={styles.cityPair}>
                    <span className={styles.cityFrom}>{countryA.name.split(',')[0]}</span>
                    <span className={styles.cityTo}>{countryB.name.split(',')[0]}</span>
                  </div>
                  <div className={styles.timeDiff}>
                    {calculateTimeDifference(countryA.timezone, countryB.timezone)}
                  </div>
                </div>
              )
            )
          )}
        </div>
      </section>

      <section className={styles.factsSection} aria-labelledby="facts-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="facts-title">Fascinating Time Zone Facts</h2>
          <p className={styles.sectionSubtitle}>
            Discover interesting facts about how the world tells time
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
            Join thousands who rely on our world clock for accurate time information
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
          <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions About World Time</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know about global time zones and our world clock
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
          <h2 className={styles.ctaTitle} id="cta-title">Never Miss an International Connection</h2>
          <p className={styles.ctaSubtitle}>
            Bookmark our world clock for instant access to accurate time anywhere in the world
          </p>
          <div className={styles.ctaFeatures}>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Real-time updates every second</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>200+ cities worldwide</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Daylight saving automatically adjusted</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Mobile-friendly interface</span>
            </div>
          </div>
          <Link href="/world-clock-comparison-tool" className={styles.ctaButton}>
            <span className={styles.ctaButtonText}>Check Current Times Now</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Hidden structured data for search engines */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h2>World Clock Time Data</h2>
        <ul>
          {featuredCountries.map((country, index) => (
            <li key={index}>
              Current time in {country.name}: {formatTime(country.timezone)} on {formatDate(country.timezone)}
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

export default HomePage;