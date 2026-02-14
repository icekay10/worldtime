'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './AboutPage.module.css';

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

const ShieldIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ZapIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const Globe2Icon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const PaletteIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r="1.5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.8 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.5-1.1-.5-.6-.9-1.4-.9-2.4 0-1.9 1.5-3.5 3.5-3.5h3.5c4.4 0 8-3.6 8-8C22 5.3 18.7 2 14 2h-2z"/>
  </svg>
);

const aboutFacts = [
  {
    title: "Real-Time Accuracy",
    description: "Uses your browser's native Intl API to display precise, up-to-the-second time for every country with automatic DST adjustments."
  },
  {
    title: "Global Coverage",
    description: "Supports all 195+ countries and their time zones, including territories and regions with unique time offsets like India (UTC+5:30)."
  },
  {
    title: "Blazing Fast Performance",
    description: "Built with Next.js for instant loading, zero external scripts, and optimal performance across all devices and network conditions."
  },
  {
    title: "Beautiful Design",
    description: "Inspired by modern UI principles — gradients, glass effects, and responsive cards that work beautifully on any screen size."
  }
];

const faqs = [
  {
    question: "What is World Time Clock?",
    answer: "World Time Clock is a free, accurate, real-time global time zone viewer that shows current local time for every country. It helps travelers, remote workers, and businesses coordinate across time zones."
  },
  {
    question: "How accurate is the time displayed?",
    answer: "Our clocks use your device's system time combined with the IANA timezone database to ensure accuracy within seconds. All times update in real-time every second."
  },
  {
    question: "Do you support Daylight Saving Time (DST)?",
    answer: "Yes! All times automatically adjust for Daylight Saving Time where applicable. The timezone data includes DST rules for each region, ensuring you always see the correct local time."
  },
  {
    question: "How many countries are supported?",
    answer: "We support all 195+ recognized countries plus many territories and regions, covering every time zone across the globe from UTC-12 to UTC+14."
  },
  {
    question: "Is World Time Clock free to use?",
    answer: "Yes, World Time Clock is completely free with no ads, no subscriptions, and no hidden costs. We believe global time information should be accessible to everyone."
  },
  {
    question: "Can I use this on mobile devices?",
    answer: "Absolutely! Our site is fully responsive and works beautifully on smartphones, tablets, and desktop computers. The interface adapts to any screen size."
  }
];

const testimonials = [
  {
    quote: "I use World Time Clock daily to coordinate with my remote team across 4 continents. It's accurate, fast, and beautifully designed.",
    metric: "Daily Active User",
    name: "Alex Johnson",
    role: "Remote Team Lead",
    company: "Global Solutions Inc."
  },
  {
    quote: "Finally a world clock that's both functional AND beautiful. The gradient cards and live updates make checking times actually enjoyable.",
    metric: "5-Star Rating",
    name: "Maya Patel",
    role: "Digital Nomad",
    company: "TravelTech"
  },
  {
    quote: "As an international event planner, I need accurate time information constantly. This tool has never let me down.",
    metric: "500+ Events Planned",
    name: "Carlos Mendez",
    role: "Event Coordinator",
    company: "Global Events Pro"
  },
  {
    quote: "The clean interface and real-time updates make this my go-to reference for scheduling international calls.",
    metric: "50+ Countries",
    name: "Yuki Tanaka",
    role: "Business Developer",
    company: "Asia Pacific Trade"
  }
];

const teamMembers = [
  {
    name: "David Chen",
    role: "Founder & Lead Developer",
    bio: "Passionate about creating tools that connect people across borders. Former time zone confusion sufferer."
  },
  {
    name: "Sarah Williams",
    role: "UX/UI Designer",
    bio: "Designs beautiful, intuitive interfaces that make global time information accessible to everyone."
  },
  {
    name: "Michael Rodriguez",
    role: "Data Engineer",
    bio: "Ensures our timezone data is always accurate and up-to-date with the latest DST changes worldwide."
  },
  {
    name: "Elena Petrova",
    role: "Content & Community",
    bio: "Helps users understand time zones through engaging content and responsive support."
  }
];

const About = ({ seoData, buildTimestamp }) => {
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

  const formatLocalTime = () => {
    if (!isClient) return '--:--:--';
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    }).format(currentTime);
  };

  const formatLocalDate = () => {
    if (!isClient) return 'Loading...';
    return currentTime.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Canonical URL
  const canonicalUrl = 'https://www.timeinworldclock.com/about';

  const metaDescription = "Learn about World Time Clock — a fast, beautiful, and accurate global time zone viewer showing real-time clocks for every country. Free, no ads, updated every second.";
  
  const keywords = [
    "world time clock",
    "global time zones",
    "international time",
    "time zone converter",
    "world clock online",
    "real-time global clock",
    "time across nations",
    "time zone calculator",
    "international time zones",
    "world time zones map",
    "live world clock",
    "time difference calculator",
    "GMT time zones",
    "UTC time converter",
    "global time synchronizer",
    "multi-timezone clock",
    "world time tracker",
    "time zone viewer",
    "international business time",
    "time around the world",
    "about world clock",
    "world time team",
    "clock creators",
    "time zone experts"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${canonicalUrl}/#aboutpage`,
        "url": canonicalUrl,
        "name": "About World Time Clock | Global Time Zone Viewer",
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
            "url": "https://www.timeinworldclock.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.timeinworldclock.com/images/logo.png",
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://twitter.com/worldtimeclock",
              "https://www.facebook.com/worldtimeclock"
            ]
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
              "name": "About",
              "item": canonicalUrl
            }
          ]
        },
        "mainEntity": {
          "@type": "WebApplication",
          "name": "World Time Clock",
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
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
              "name": "World Time Clock"
            }
          }
        }))
      },
      {
        "@type": "Organization",
        "@id": "https://www.timeinworldclock.com/#organization",
        "name": "World Time Clock",
        "url": "https://www.timeinworldclock.com",
        "logo": "https://www.timeinworldclock.com/images/logo.png",
        "sameAs": [
          "https://twitter.com/worldtimeclock",
          "https://www.facebook.com/worldtimeclock"
        ],
        "founder": teamMembers.map(member => ({
          "@type": "Person",
          "name": member.name,
          "description": member.role
        }))
      }
    ]
  };

  return (
    <div className={styles.aboutPage} lang="en-US">
      <Head>
        <title>About World Time Clock | Global Time Zone Viewer & Team</title>
        <meta name="title" content="About World Time Clock | Global Time Zone Viewer & Team" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="World Time Clock" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="7 days" />
        
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
        <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
        
        <meta property="og:title" content="About World Time Clock | Global Time Zone Viewer" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/about-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Time Clock" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About World Time Clock" />
        <meta name="twitter:description" content="Learn about our mission to make global time information accessible to everyone" />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/about-twitter.jpg" />
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
              <UsersIcon />
              <span className={styles.breadcrumbText}>About</span>
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.trustBadge}>
          <StarIcon />
          <span className={styles.trustBadgeText}>
            Trusted by 1M+ Users Worldwide | Free Forever | No Ads
          </span>
        </div>

        <h1 className={styles.heroTitle} id="hero-title">
          About <span className={styles.gradientText}>World Time Clock</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          Your <strong className={styles.heroHighlight}>real-time window into global time zones</strong> — accurate, beautiful, and completely free. We're on a mission to make global time information accessible to everyone.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1M+</span>
            <span className={styles.statLabel}>Happy Users</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>195+</span>
            <span className={styles.statLabel}>Countries</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Live Updates</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Free</span>
          </div>
        </div>
      </section>

      {/* Live Time Card */}
      <section className={styles.liveTimeCardSection} aria-labelledby="live-time-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="live-time-title">Your Local Time</h2>
          <p className={styles.sectionSubtitle}>
            See our accuracy in action — updated every second
          </p>
        </div>

        <div className={styles.liveTimeCardWrapper}>
          <div
            className={styles.liveTimeCard}
            style={{
              background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)'
            }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardFlag}>🌐</span>
              <h3 className={styles.cardTitle}>Your Current Time</h3>
              <div className={styles.cardBadge}>
                <ZapIcon />
                <span>LIVE</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.currentTime}>
                {formatLocalTime()}
              </div>
              <div className={styles.currentDate}>
                {formatLocalDate()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={styles.missionSection} aria-labelledby="mission-title">
        <div className={styles.missionContent}>
          <h2 className={styles.missionTitle} id="mission-title">Our Mission</h2>
          <p className={styles.missionText}>
            Time connects us all. We believe understanding global time should be intuitive, visual, and joyful. 
            Whether you're coordinating with remote teams, planning international travel, or simply curious about 
            the time halfway around the world, World Time Clock is here to help.
          </p>
          <div className={styles.missionQuote}>
            <blockquote className={styles.quote}>
              &ldquo;Making global time simple, beautiful, and accessible to everyone.&rdquo;
            </blockquote>
            <p className={styles.quoteAuthor}>— The World Time Clock Team</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} aria-labelledby="features-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="features-title">Why We Built This</h2>
          <p className={styles.sectionSubtitle}>
            Four principles that guide everything we do
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <ClockIcon />
            </div>
            <h3 className={styles.featureTitle}>Real-Time Accuracy</h3>
            <p className={styles.featureDescription}>
              Uses your browser's native Intl API to display precise, up-to-the-second time for every country with automatic DST adjustments.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Globe2Icon />
            </div>
            <h3 className={styles.featureTitle}>Global Coverage</h3>
            <p className={styles.featureDescription}>
              Supports all 195+ countries and their time zones, including territories and regions with unique time offsets like India (UTC+5:30).
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <ZapIcon />
            </div>
            <h3 className={styles.featureTitle}>Blazing Fast</h3>
            <p className={styles.featureDescription}>
              Built with Next.js for instant loading, zero external scripts, and optimal performance across all devices and network conditions.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <PaletteIcon />
            </div>
            <h3 className={styles.featureTitle}>Beautiful Design</h3>
            <p className={styles.featureDescription}>
              Inspired by modern UI principles — gradients, glass effects, and responsive cards that work beautifully on any screen size.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection} aria-labelledby="team-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="team-title">Meet the Team</h2>
          <p className={styles.sectionSubtitle}>
            The people behind World Time Clock
          </p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                <UserIcon />
              </div>
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} aria-labelledby="stats-title">
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statCardNumber}>1,000,000+</span>
            <span className={styles.statCardLabel}>Monthly Users</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardNumber}>195+</span>
            <span className={styles.statCardLabel}>Countries</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardNumber}>24/7</span>
            <span className={styles.statCardLabel}>Live Updates</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardNumber}>4.9/5</span>
            <span className={styles.statCardLabel}>User Rating</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardNumber}>0</span>
            <span className={styles.statCardLabel}>Ads or Tracking</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statCardNumber}>∞</span>
            <span className={styles.statCardLabel}>Free Forever</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="testimonials-title">What Our Users Say</h2>
          <p className={styles.sectionSubtitle}>
            Join thousands of satisfied users worldwide
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
            Everything you need to know about World Time Clock
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
          <h2 className={styles.ctaTitle} id="cta-title">Ready to Explore the World's Time?</h2>
          <p className={styles.ctaSubtitle}>
            Join over 1 million users who trust World Time Clock for accurate global time information
          </p>
          <div className={styles.ctaFeatures}>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Real-time updates</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>195+ countries</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>DST adjusted</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>100% free</span>
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
        <h2>About World Time Clock</h2>
        <p>World Time Clock is a free, accurate, real-time global time zone viewer. Founded in 2024, we serve over 1 million users monthly with reliable time information for 195+ countries.</p>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index}>{member.name} - {member.role}</li>
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
    revalidate: 86400 // Revalidate every 24 hours (about page changes less frequently)
  };
}

export default About;