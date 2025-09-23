import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌎</span>
          <span className="logo-text">World Time Explorer</span>
        </Link>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/world-clock-comparison-tool" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Time Comparator
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/global-day-and-night-tracker-world-clock" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Day & Night Tracker
          </Link>
          <Link to="/geography=quiz-game" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Quiz Game
          </Link>
        </div>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;