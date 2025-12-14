'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change (optional but recommended for SPA feel)
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    // In App Router, we don't have router events like in Pages Router,
    // but since this is a client component and navigation re-renders it,
    // the menu will auto-close on hard nav. For soft navs, you'd use useRouter,
    // but for simplicity and performance, we rely on re-render.
  }, []);

  // Optional: Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Link href="/" className={styles.navbarLogo} onClick={() => setIsMenuOpen(false)}>
          <span className={styles.logoIcon} aria-hidden="true">
            🌎
          </span>
          <span className={styles.logoText}>World Time Explorer</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`${styles.navbarLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/world-clock-comparison-tool"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Time Comparator
          </Link>
          <Link
            href="/global-day-and-night-tracker-world-clock"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Day & Night Tracker
          </Link>
          <Link
            href="/about"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`${styles.navbarToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.toggleBar}></span>
          <span className={styles.toggleBar}></span>
          <span className={styles.toggleBar}></span>
        </button>
      </div>

      {/* Mobile Overlay (optional for better UX) */}
      {isMenuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;