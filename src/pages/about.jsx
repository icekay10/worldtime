'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import styles from './AboutPage.module.css';

const About = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatLocalTime = () => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    }).format(currentTime);
  };

  const metaDescription = "Learn about World Time Clock — a fast, beautiful, and accurate global time zone viewer showing real-time clocks for every country.";
  
  // SEO keywords related to global time
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
    "time around the world"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About World Time Clock",
    "description": metaDescription,
    "url": "https://www.timeinworldclock.com/about",
    "publisher": {
      "@type": "Organization",
      "name": "World Time Clock",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.timeinworldclock.com/images/logo.png"
      }
    },
    "mainEntity": {
      "@type": "WebApplication",
      "name": "World Time Clock",
      "applicationCategory": "Utilities",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <>
      {/* Metadata */}
      <Head>
        <title>About World Time Clock | Global Time Zone Viewer</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About World Time Clock | Global Time Zone Viewer" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://www.timeinworldclock.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About World Time Clock" />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.timeinworldclock.com/about" />
      </Head>

      {/* Structured Data */}
      <Script id="about-structured-data" type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </Script>

      <div className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About World Time Clock</h1>
            <p className={styles.heroSubtitle}>
              Your real-time window into global time zones — accurate, beautiful, and free.
            </p>
          </div>
        </section>

        {/* Live Time Card */}
        <section className={styles.liveTimeCardSection}>
          <div
            className={styles.liveTimeCard}
            style={{
              background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)'
            }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.flag}>🌐</span>
              <h2 className={styles.cardTitle}>Your Local Time</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.currentTime}>
                {formatLocalTime()}
              </div>
              <div className={styles.currentDate}>
                {currentTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Features */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why We Built This</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⏱️</div>
                <h3>Real-Time Accuracy</h3>
                <p>
                  Uses your browser&apos;s native Intl API to display precise, up-to-the-second time for every country.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌍</div>
                <h3>Global Coverage</h3>
                <p>
                  Supports all 195+ countries and their time zones, including DST-aware regions.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Blazing Fast</h3>
                <p>
                  Built with Next.js for instant loading, zero external scripts, and optimal performance.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <h3>Beautiful Design</h3>
                <p>
                  Inspired by modern UI principles — gradients, glass effects, and responsive cards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className={styles.visionSection}>
          <div className={styles.container}>
            <blockquote className={styles.visionQuote}>
              &ldquo;Time connects us all. We believe understanding global time should be intuitive, visual, and joyful.&rdquo;
            </blockquote>
            <p className={styles.visionAuthor}>— The World Time Clock Team</p>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Explore the World&apos;s Time?</h2>
            <a href="/" className={styles.ctaButton}>
              Go to World Clock
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;