'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './PolicyPage.module.css';

const PolicyPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

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

  const metaDescription = "Privacy Policy for World Time Clock. We are committed to protecting your privacy - no data collection, no tracking, complete anonymity. Your time zone queries vanish when you leave.";
  
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
    "no analytics"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - World Time Clock",
    "description": metaDescription,
    "url": "https://www.timeinworldclock.com/privacy-policy",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Privacy Policy | World Time Clock - No Data Collection, Complete Anonymity</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | World Time Clock - No Data Collection" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://www.timeinworldclock.com/privacy-policy" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - World Time Clock" />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.timeinworldclock.com/privacy-policy" />
      </Head>

      {/* Structured Data */}
      <script
        id="policy-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className={styles.policyContainer}>
        {/* Live Time Banner */}
        <div className={styles.liveTimeBanner}>
          <div className={styles.timeDisplay}>
            <span className={styles.currentTimeLabel}>Current Local Time:</span>
            <span className={styles.currentTimeValue}>{formatLocalTime()}</span>
            <span className={styles.currentDate}>{formatLocalDate()}</span>
          </div>
        </div>

        <div className={styles.policyCard}>
          <div className={styles.policyHeader}>
            <div className={styles.titleContainer}>
              <h1 className={styles.policyTitle}>Privacy Policy</h1>
              <p className={styles.policySubtitle}>World Time Clock</p>
            </div>
            <div className={styles.privacyBadge}>
              <span className={styles.badgeIcon}>🔒</span>
              <span className={styles.badgeText}>No Data Collection</span>
            </div>
          </div>
          
          <div className={styles.policyContent}>
            <div className={styles.policySection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🛡️</div>
                <h2 className={styles.sectionTitle}>Our Commitment to Your Privacy</h2>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.policyText}>
                  The Privacy Policy covers the World Time Clock (Service). This policy articulates our commitment 
                  to protecting user privacy. Our online platform does not demand any storing or tracking, which 
                  may limit your online freedom. This differs from many modern online services.
                </p>
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>✅</span>
                    <span className={styles.featureText}>Zero Data Collection</span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>✅</span>
                    <span className={styles.featureText}>Complete Anonymity</span>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>✅</span>
                    <span className={styles.featureText}>No User Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.policySection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>🚫</div>
                <h2 className={styles.sectionTitle}>Data Collection Absence</h2>
              </div>
              <div className={styles.sectionContent}>
                <p className={styles.policyText}>
                  Complete anonymity is maintained by the Service. We don&apos;t collect, process, or keep 
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
                <div className={styles.sectionIcon}>🤝</div>
                <h2 className={styles.sectionTitle}>Third-Party Assurance</h2>
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
                    <h3 className={styles.assuranceTitle}>No Data Selling</h3>
                    <p className={styles.assuranceText}>We never sell or share user data</p>
                  </div>
                  <div className={styles.assuranceItem}>
                    <div className={styles.assuranceIcon}>🔐</div>
                    <h3 className={styles.assuranceTitle}>No Backdoors</h3>
                    <p className={styles.assuranceText}>Complete privacy with no hidden access</p>
                  </div>
                  <div className={styles.assuranceItem}>
                    <div className={styles.assuranceIcon}>📢</div>
                    <h3 className={styles.assuranceTitle}>Transparent Updates</h3>
                    <p className={styles.assuranceText}>Clear notification of any policy changes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.policyNotice}>
              <div className={styles.noticeIcon}>ℹ️</div>
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
      </div>
    </>
  );
};

export default PolicyPage;