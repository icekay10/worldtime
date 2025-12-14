'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import styles from './Custom404.module.css';

const Custom404 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formattedTime, setFormattedTime] = useState('');
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // Update time immediately
    updateTime();
    
    // Set interval for continuous updates
    const timer = setInterval(() => {
      updateTime();
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const updateTime = () => {
    const now = new Date();
    setCurrentTime(now);
    
    // Format time safely
    try {
      const timeStr = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
      }).format(now);
      setFormattedTime(timeStr);
      
      const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      setFormattedDate(dateStr);
    } catch (error) {
      console.error('Error formatting time:', error);
      // Fallback formatting
      setFormattedTime(now.toLocaleTimeString());
      setFormattedDate(now.toLocaleDateString());
    }
  };

  const metaDescription = "Oops! Page not found. Return to World Time Explorer — a fast, beautiful, and accurate global time zone viewer.";

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "404 - Page Not Found | World Time Explorer",
    "description": metaDescription,
    "url": "https://timeacrossnations.com/404",
    "publisher": {
      "@type": "Organization",
      "name": "World Time Explorer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://timeacrossnations.com/images/logo.png"
      }
    }
  };

  return (
    <>
      {/* Structured Data */}
      <Script id="404-structured-data" type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </Script>

      <div className={styles.errorPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>404 - Page Lost in Time</h1>
            <p className={styles.heroSubtitle}>
              The page you're looking for has traveled to another timeline. Don't worry — we'll help you get back on track.
            </p>
          </div>
        </section>

        {/* Live Time Card */}
        <section className={styles.liveTimeCardSection}>
          <div
            className={styles.liveTimeCard}
            style={{
              background: 'linear-gradient(135deg, #ff416c, #ff4b2b)'
            }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.flag}>⏰</span>
              <h2 className={styles.cardTitle}>Current Time While You Search</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.currentTime}>
                {formattedTime || 'Loading time...'}
              </div>
              <div className={styles.currentDate}>
                {formattedDate || 'Loading date...'}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Find Your Way Back</h2>
            <div className={styles.featuresGrid}>
              <Link href="/" className={styles.featureCard}>
                <div className={styles.featureIcon}>🏠</div>
                <h3>Home Page</h3>
                <p>
                  Return to the main dashboard with world clocks and time zone tools.
                </p>
              </Link>
              
              
              <Link href="/about" className={styles.featureCard}>
                <div className={styles.featureIcon}>ℹ️</div>
                <h3>About Us</h3>
                <p>
                  Learn more about World Time Explorer and our mission.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className={styles.tipsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Time Travel Tips</h2>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>🔍</div>
                <h3>Check the URL</h3>
                <p>Make sure the address is spelled correctly — time zone names can be tricky!</p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>📚</div>
                <h3>Use Navigation</h3>
                <p>Our menu and search bar will guide you to the right destination.</p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>⭐</div>
                <h3>Bookmark Pages</h3>
                <p>Save your favorite time zones to avoid getting lost in the future.</p>
              </div>
              <div className={styles.tipCard}>
                <div className={styles.tipIcon}>📞</div>
                <h3>Need Help?</h3>
                <p>Contact our support team if you're really stuck in a time loop.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className={styles.visionSection}>
          <div className={styles.container}>
            <blockquote className={styles.visionQuote}>
              "Even when pages get lost in time, our clocks keep ticking. Let's find your way back together."
            </blockquote>
            <p className={styles.visionAuthor}>— The World Time Explorer Team</p>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Explore Time Again?</h2>
            <Link href="/" className={styles.ctaButton}>
              Return to World Clock
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Custom404;