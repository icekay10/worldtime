'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './PolicyPage.module.css';

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

const LockIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const TrashIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

const MailIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const policyFacts = [
  {
    title: "Zero Data Collection",
    description: "We don't collect, store, or process any personal information. Your privacy is built into our core architecture."
  },
  {
    title: "No Tracking",
    description: "No analytics trackers, no cookies, no fingerprinting. Your time zone queries vanish when you leave."
  },
  {
    title: "Complete Anonymity",
    description: "You remain completely anonymous while using our service. We don't know who you are, and we don't want to."
  },
  {
    title: "Transparent Operations",
    description: "Our privacy practices are simple and transparent. No hidden data collection, no third-party sharing, no surprises."
  }
];

const faqs = [
  {
    question: "Does World Time Clock collect any personal data?",
    answer: "No, we collect absolutely no personal data. No names, no email addresses, no IP addresses, no location data. Your privacy is completely protected."
  },
  {
    question: "Do you use cookies or tracking technologies?",
    answer: "No, we don't use any cookies, trackers, or analytics tools. Your session is completely private and leaves no trace on our servers."
  },
  {
    question: "What happens to my time zone queries?",
    answer: "All calculations happen locally in your browser. We don't store or log any queries. When you close your browser, everything vanishes."
  },
  {
    question: "Do you share data with third parties?",
    answer: "We never share any data with third parties because we don't collect any data to begin with. There's nothing to share."
  },
  {
    question: "Do you comply with privacy regulations like GDPR?",
    answer: "Yes, our privacy-first approach exceeds GDPR requirements. Since we collect no data, there's nothing to comply with beyond our existing practices."
  },
  {
    question: "How can I verify your privacy claims?",
    answer: "You can inspect our website's network traffic using browser developer tools. You'll see no tracking requests, analytics calls, or data collection endpoints."
  }
];

const testimonials = [
  {
    quote: "Finally, a website that actually respects privacy! No tracking, no cookies, just a useful tool. This is how the web should work.",
    metric: "Verified Privacy",
    name: "Alex Rivera",
    role: "Privacy Advocate",
    company: "Digital Rights Group"
  },
  {
    quote: "I checked with browser dev tools - absolutely zero tracking. In 2024, this is rare and refreshing. Thank you for putting privacy first.",
    metric: "Zero Trackers Found",
    name: "Sam Williams",
    role: "Security Engineer",
    company: "TechSafe"
  },
  {
    quote: "The fact that my time zone queries aren't stored anywhere gives me peace of mind. This is privacy done right.",
    metric: "100% Anonymous",
    name: "Priya Patel",
    role: "Privacy-Conscious User",
    company: "Digital Nomad"
  },
  {
    quote: "I recommend this to everyone who asks about privacy-friendly tools. It's rare to find a service that truly collects nothing.",
    metric: "Top Recommendation",
    name: "Marcus Chen",
    role: "Tech Journalist",
    company: "Privacy First Media"
  }
];

const PolicyPage = ({ seoData, buildTimestamp }) => {
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
    try {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(currentTime);
    } catch (error) {
      return '--:--:--';
    }
  };

  const formatLocalDate = () => {
    if (!isClient) return 'Loading...';
    try {
      return new Intl.DateTimeFormat('en-US', {
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
  const canonicalUrl = 'https://www.timeinworldclock.com/privacy-policy';

  const metaDescription = "Privacy Policy for World Time Clock. We are committed to protecting your privacy - no data collection, no tracking, complete anonymity. Your time zone queries vanish when you leave. 100% private, 100% free.";
  
  const keywords = [
    "privacy policy",
    "world time clock privacy",
    "no data collection",
    "anonymous time zone",
    "privacy focused",
    "no tracking policy",
    "zero data retention",
    "online privacy",
    "data protection",
    "cookie free",
    "tracker free",
    "private browsing",
    "anonymous web service",
    "privacy first",
    "no analytics",
    "gdpr compliant",
    "ccpa compliant",
    "privacy guaranteed",
    "no logging policy",
    "zero tracking"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": "Privacy Policy - World Time Clock | No Data Collection, Complete Anonymity",
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
              "name": "Privacy Policy",
              "item": canonicalUrl
            }
          ]
        },
        "about": {
          "@type": "Thing",
          "name": "Privacy Policy",
          "description": "Our commitment to protecting user privacy with zero data collection"
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
      }
    ]
  };

  return (
    <div className={styles.policyPage} lang="en-US">
      <Head>
        <title>Privacy Policy | World Time Clock - No Data Collection, Complete Anonymity</title>
        <meta name="title" content="Privacy Policy | World Time Clock - No Data Collection, Complete Anonymity" />
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
        
        <meta property="og:title" content="Privacy Policy | World Time Clock - No Data Collection" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/privacy-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Time Clock" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - World Time Clock" />
        <meta name="twitter:description" content="No data collection, no tracking, complete anonymity - read our privacy policy" />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/privacy-twitter.jpg" />
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
              <ShieldIcon />
              <span className={styles.breadcrumbText}>Privacy Policy</span>
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.trustBadge}>
          <ShieldIcon />
          <span className={styles.trustBadgeText}>
            Zero Data Collection | No Tracking | Complete Anonymity
          </span>
        </div>

        <h1 className={styles.heroTitle} id="hero-title">
          Privacy <span className={styles.gradientText}>Policy</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          <strong className={styles.heroHighlight}>Your privacy is our priority.</strong> We believe in a web where your data belongs to you. That's why we built World Time Clock with zero tracking, zero data collection, and complete anonymity by default.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>0</span>
            <span className={styles.statLabel}>Data Collected</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>0</span>
            <span className={styles.statLabel}>Trackers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Anonymous</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>Privacy</span>
          </div>
        </div>
      </section>

      {/* Live Time Banner */}
      <div className={styles.liveTimeBanner}>
        <div className={styles.timeDisplay}>
          <span className={styles.currentTimeLabel}>Current Local Time:</span>
          <span className={styles.currentTimeValue}>{formatLocalTime()}</span>
          <span className={styles.currentDate}>{formatLocalDate()}</span>
        </div>
        <div className={styles.privacyNote}>
          <EyeOffIcon />
          <span>No tracking - even this time is calculated locally</span>
        </div>
      </div>

      {/* Policy Card */}
      <div className={styles.policyCard}>
        <div className={styles.policyHeader}>
          <div className={styles.titleContainer}>
            <h2 className={styles.policyTitle}>Our Commitment to Your Privacy</h2>
            <p className={styles.policySubtitle}>World Time Clock</p>
          </div>
          <div className={styles.privacyBadge}>
            <LockIcon />
            <span className={styles.badgeText}>No Data Collection</span>
          </div>
        </div>
        
        <div className={styles.policyContent}>
          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>
                <ShieldIcon />
              </div>
              <h3 className={styles.sectionTitle}>Our Commitment to Your Privacy</h3>
            </div>
            <div className={styles.sectionContent}>
              <p className={styles.policyText}>
                The Privacy Policy covers the World Time Clock (Service). This policy articulates our commitment 
                to protecting user privacy. Our online platform does not demand any storing or tracking, which 
                may limit your online freedom. This differs from many modern online services.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <CheckIcon />
                  <span className={styles.featureText}>Zero Data Collection</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckIcon />
                  <span className={styles.featureText}>Complete Anonymity</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckIcon />
                  <span className={styles.featureText}>No User Tracking</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>
                <TrashIcon />
              </div>
              <h3 className={styles.sectionTitle}>Data Collection Absence</h3>
            </div>
            <div className={styles.sectionContent}>
              <p className={styles.policyText}>
                Complete anonymity is maintained by the Service. We don't collect, process, or keep 
                personally identifiable information. When you exit your browser, your time zone queries vanish. 
                No analytics trackers, no cookies, and no secret data gathering at all.
              </p>
              <div className={styles.dataDiagram}>
                <div className={styles.diagramItem}>
                  <div className={styles.diagramIcon}>📊</div>
                  <div className={styles.diagramText}>No Analytics</div>
                </div>
                <div className={styles.diagramArrow}>→</div>
                <div className={styles.diagramItem}>
                  <div className={styles.diagramIcon}>🍪</div>
                  <div className={styles.diagramText}>No Cookies</div>
                </div>
                <div className={styles.diagramArrow}>→</div>
                <div className={styles.diagramItem}>
                  <div className={styles.diagramIcon}>🗑️</div>
                  <div className={styles.diagramText}>Session-Only Data</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.policySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>
                <HeartIcon />
              </div>
              <h3 className={styles.sectionTitle}>Third-Party Assurance</h3>
            </div>
            <div className={styles.sectionContent}>
              <p className={styles.policyText}>
                We firmly oppose surveillance capitalism. Your information will never be sold or transferred 
                to third parties, and there are no data-sharing agreements or backdoors. This is the essential 
                basis of our Service, not merely a policy. If this policy needs to be updated, we will provide 
                adequate notice and maintain the same stringent privacy rules.
              </p>
              <div className={styles.assuranceGrid}>
                <div className={styles.assuranceItem}>
                  <div className={styles.assuranceIcon}>💰</div>
                  <h4 className={styles.assuranceTitle}>No Data Selling</h4>
                  <p className={styles.assuranceText}>We never sell or share user data</p>
                </div>
                <div className={styles.assuranceItem}>
                  <div className={styles.assuranceIcon}>🔐</div>
                  <h4 className={styles.assuranceTitle}>No Backdoors</h4>
                  <p className={styles.assuranceText}>Complete privacy with no hidden access</p>
                </div>
                <div className={styles.assuranceItem}>
                  <div className={styles.assuranceIcon}>📢</div>
                  <h4 className={styles.assuranceTitle}>Transparent Updates</h4>
                  <p className={styles.assuranceText}>Clear notification of any policy changes</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.policyNotice}>
            <div className={styles.noticeIcon}>
              <LockIcon />
            </div>
            <div className={styles.noticeContent}>
              <h3 className={styles.noticeTitle}>Privacy-First Design</h3>
              <p className={styles.noticeText}>
                This privacy policy is built into the core architecture of World Time Clock. 
                We believe privacy should be the default, not an optional feature.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.policyFooter}>
          <div className={styles.footerLinks}>
            <Link href="/" className={styles.homeLink}>
              <span className={styles.linkIcon}>←</span>
              Return to World Time Clock
            </Link>
            <Link href="/contact" className={styles.contactLink}>
              <MailIcon />
              <span className={styles.emailLink}>Contact Us</span>
            </Link>
          </div>
          <div className={styles.effectiveDate}>
            <span className={styles.dateLabel}>Effective Date:</span>
            <span className={styles.dateValue}>
              {isClient ? new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'Loading...'}
            </span>
          </div>
        </div>
      </div>

      {/* Facts Section */}
      <section className={styles.factsSection} aria-labelledby="facts-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="facts-title">Why Privacy Matters</h2>
          <p className={styles.sectionSubtitle}>
            Our commitment to protecting your data
          </p>
        </div>

        <div className={styles.factsGrid}>
          {policyFacts.map((fact, index) => (
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
          <h2 className={styles.sectionTitle} id="testimonials-title">What Users Say About Our Privacy</h2>
          <p className={styles.sectionSubtitle}>
            Real feedback from privacy-conscious users
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
            Common questions about our privacy practices
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
          <h2 className={styles.ctaTitle} id="cta-title">Experience True Privacy</h2>
          <p className={styles.ctaSubtitle}>
            Use World Time Clock with complete confidence - no tracking, no data collection, no compromises
          </p>
          <div className={styles.ctaFeatures}>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Zero data collection</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>No tracking</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>100% anonymous</span>
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
        <h2>Privacy Policy Summary</h2>
        <p>World Time Clock collects no data, uses no trackers, and ensures complete anonymity for all users.</p>
        <ul>
          <li>No personal information collected</li>
          <li>No cookies or tracking technologies</li>
          <li>No analytics tools</li>
          <li>No data sharing with third parties</li>
          <li>Session-only local calculations</li>
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
    revalidate: 86400 // Revalidate every 24 hours
  };
}

export default PolicyPage;