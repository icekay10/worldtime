'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand Section */}
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoIcon} aria-hidden="true">
              🌎
            </span>
            <h3 className={styles.footerHeading}>World Time Explorer</h3>
          </div>
          <p className={styles.footerText}>
            Compare time zones across the globe with beautiful, interactive cards
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerLinksSection}>
          <h4 className={styles.footerSubheading}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/" className={styles.footerLink} prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/world-clock-comparison-tool"
                className={styles.footerLink}
                prefetch={false}
              >
                Time Comparator
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.footerLink} prefetch={false}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.footerLink} prefetch={false}>
                About
              </Link>
            </li>
            
            <li>
              <Link
                href="/global-day-and-night-tracker-world-clock"
                className={styles.footerLink}
                prefetch={false}
              >
                Day & Night Tracker
              </Link>
            </li>
            <li>
              <Link href="/policy-page" className={styles.footerLink} prefetch={false}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>© {currentYear} World Time Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;