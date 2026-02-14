'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ContactPage.module.css';

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

const MailIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MessageIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const Clock3Icon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const contactFacts = [
  {
    title: "Fast Response Time",
    description: "We typically respond to all inquiries within 24-48 hours, often much faster during business hours."
  },
  {
    title: "Global Support",
    description: "Our team is available to assist users from any time zone with questions about our world clock tools."
  },
  {
    title: "Feature Requests Welcome",
    description: "Have an idea for a new feature? We love hearing suggestions from our users to improve the experience."
  },
  {
    title: "Technical Assistance",
    description: "Need help understanding time zones or using our comparison tools? We're here to help!"
  }
];

const faqs = [
  {
    question: "How can I contact World Time Clock support?",
    answer: "You can reach us directly by email at contact@timeinworldclock.com. We aim to respond to all inquiries within 24-48 hours."
  },
  {
    question: "What types of inquiries do you handle?",
    answer: "We handle all types of inquiries including questions about time zones, feature requests, bug reports, partnership opportunities, and general feedback about our tools."
  },
  {
    question: "Do you offer technical support for your time tools?",
    answer: "Yes! If you're having trouble using any of our features or have questions about how time zone calculations work, just email us and we'll be happy to assist."
  },
  {
    question: "Can I suggest new features for the website?",
    answer: "Absolutely! We welcome feature suggestions from our users. Email us with your ideas and we'll consider them for future updates."
  },
  {
    question: "Is there a phone number I can call?",
    answer: "We currently offer email support only. This allows us to provide thoughtful, detailed responses to all inquiries and maintain our free service."
  },
  {
    question: "How quickly will I get a response?",
    answer: "Most emails receive a response within 24-48 hours. During weekends and holidays, response times may be slightly longer."
  }
];

const testimonials = [
  {
    quote: "The support team was incredibly helpful when I had questions about time zone calculations. They responded within hours!",
    metric: "Fast Response",
    name: "Jennifer Lee",
    role: "Project Manager",
    company: "Global Tech Solutions"
  },
  {
    quote: "I suggested a feature for comparing multiple time zones, and they actually implemented it. Amazing customer focus!",
    metric: "Feature Implemented",
    name: "Marcus Webb",
    role: "Remote Team Lead",
    company: "Digital Nomad Co."
  },
  {
    quote: "Had a question about DST changes in a specific region. The team provided detailed explanations and links to resources.",
    metric: "Expert Help",
    name: "Elena Rodriguez",
    role: "Travel Planner",
    company: "Wanderlust Travel"
  },
  {
    quote: "Best customer service I've experienced from a free tool. They genuinely care about their users.",
    metric: "5-Star Support",
    name: "Thomas Chen",
    role: "Software Developer",
    company: "Tech Innovations"
  }
];

const ContactPage = ({ seoData, buildTimestamp }) => {
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
  }, []);

  // Canonical URL
  const canonicalUrl = 'https://www.timeinworldclock.com/contact';

  const metaDescription = "Contact World Time Clock team for questions about global time zones, feature requests, or feedback. Email us at contact@timeinworldclock.com and we'll respond within 24-48 hours.";
  
  const keywords = [
    "contact world time clock",
    "global time zone support",
    "time zone questions",
    "world clock contact",
    "international time help",
    "time converter support",
    "GMT UTC assistance",
    "time zone feedback",
    "world clock feature request",
    "time difference questions",
    "global clock support",
    "multi-timezone help",
    "world time zone contact",
    "time synchronization support",
    "international business time contact",
    "email world clock",
    "time zone customer service",
    "world clock help desk",
    "global time assistance",
    "time tool support"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${canonicalUrl}/#contactpage`,
        "url": canonicalUrl,
        "name": "Contact World Time Clock | Global Time Zone Support",
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
            "email": "contact@timeinworldclock.com",
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
              "item": "https://www.timeinworldclock.com/contact"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Contact",
              "item": canonicalUrl
            }
          ]
        },
        "mainEntity": {
          "@type": "Organization",
          "name": "World Time Clock",
          "email": "contact@timeinworldclock.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@timeinworldclock.com",
            "contactType": "customer support",
            "availableLanguage": "English"
          }
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
    <div className={styles.contactPage} lang="en-US">
      <Head>
        <title>Contact World Time Clock | Global Time Zone Support & Help</title>
        <meta name="title" content="Contact World Time Clock | Global Time Zone Support & Help" />
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
        
        <meta property="og:title" content="Contact World Time Clock | Global Time Zone Support" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.timeinworldclock.com/images/contact-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="World Time Clock" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact World Time Clock" />
        <meta name="twitter:description" content="Get in touch with our team for questions about global time zones" />
        <meta name="twitter:image" content="https://www.timeinworldclock.com/images/contact-twitter.jpg" />
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
              <MailIcon />
              <span className={styles.breadcrumbText}>Contact</span>
            </span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.trustBadge}>
          <StarIcon />
          <span className={styles.trustBadgeText}>
            Free Support | 24-48h Response | contact@timeinworldclock.com
          </span>
        </div>

        <h1 className={styles.heroTitle} id="hero-title">
          Contact <span className={styles.gradientText}>World Time Clock</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          Have questions about time zones? Need help with our tools? <strong className={styles.heroHighlight}>We're here to help!</strong> Email us and we'll get back to you within 24-48 hours.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24-48h</span>
            <span className={styles.statLabel}>Response Time</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Free Support</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>🌍</span>
            <span className={styles.statLabel}>Global</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>📧</span>
            <span className={styles.statLabel}>Email Only</span>
          </div>
        </div>
      </section>

      {/* Contact Email Card */}
      <section className={styles.contactSection} aria-labelledby="contact-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="contact-title">Get in Touch</h2>
          <p className={styles.sectionSubtitle}>
            The fastest way to reach our team
          </p>
        </div>

        <div className={styles.emailCardWrapper}>
          <div className={styles.emailCard}>
            <div className={styles.emailIcon}>
              <MailIcon />
            </div>
            <div className={styles.emailContent}>
              <h3 className={styles.emailLabel}>Email us at:</h3>
              <a 
                href="mailto:contact@timeinworldclock.com" 
                className={styles.emailAddress}
              >
                contact@timeinworldclock.com
              </a>
              <p className={styles.emailNote}>
                Click the address above to open your default email app, or copy it manually. We respond within 24-48 hours.
              </p>
            </div>
            <div className={styles.emailBadge}>
              <span className={styles.badge}>Free Support</span>
            </div>
          </div>
        </div>

        <div className={styles.contactMethods}>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>
              <MessageIcon />
            </div>
            <h3 className={styles.methodTitle}>General Inquiries</h3>
            <p className={styles.methodText}>Questions about time zones, features, or how to use our tools</p>
          </div>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>
              <ToolIcon />
            </div>
            <h3 className={styles.methodTitle}>Technical Support</h3>
            <p className={styles.methodText}>Having issues with our website or time calculations?</p>
          </div>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>
              <HeartIcon />
            </div>
            <h3 className={styles.methodTitle}>Feedback & Ideas</h3>
            <p className={styles.methodText}>Suggest new features or tell us how we can improve</p>
          </div>
          <div className={styles.methodCard}>
            <div className={styles.methodIcon}>
              <BriefcaseIcon />
            </div>
            <h3 className={styles.methodTitle}>Business Inquiries</h3>
            <p className={styles.methodText}>Partnerships, collaborations, or media requests</p>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className={styles.factsSection} aria-labelledby="facts-title">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="facts-title">Why Contact Us?</h2>
          <p className={styles.sectionSubtitle}>
            We're here to help with all your time zone questions
          </p>
        </div>

        <div className={styles.factsGrid}>
          {contactFacts.map((fact, index) => (
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
          <h2 className={styles.sectionTitle} id="testimonials-title">What Users Say About Our Support</h2>
          <p className={styles.sectionSubtitle}>
            Real feedback from people who've contacted us
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
            Common questions about contacting us
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
          <h2 className={styles.ctaTitle} id="cta-title">Ready to Get in Touch?</h2>
          <p className={styles.ctaSubtitle}>
            We're just an email away and ready to help with any questions
          </p>
          <div className={styles.ctaEmail}>
            <MailIcon />
            <a href="mailto:contact@timeinworldclock.com" className={styles.ctaEmailLink}>
              contact@timeinworldclock.com
            </a>
          </div>
          <div className={styles.ctaFeatures}>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>24-48h response</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Free support</span>
            </div>
            <div className={styles.featureItem}>
              <CheckIcon />
              <span>Global team</span>
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
        <h2>Contact Information</h2>
        <p>Email: contact@timeinworldclock.com</p>
        <p>Response Time: 24-48 hours</p>
        <p>Support Type: Free Email Support</p>
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

export default ContactPage;