import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🌎</span>
            <h3 className="footer-heading">World Time Explorer</h3>
          </div>
          <p className="footer-text">
            Compare time zones across the globe with beautiful, interactive cards
          </p>
        </div>
        
        <div className="footer-links-section">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/world-clock-comparison-tool" className="footer-link">Time Comparator</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/blog" className="footer-link">Blog</Link></li>
            <li><Link to="/global-day-and-night-tracker-world-clock" className="footer-link">Day & Night Tracker</Link></li>
            <li><Link to="/game" className="footer-link">Quiz Game</Link></li>
            <li><Link to="/policy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} World Time Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;