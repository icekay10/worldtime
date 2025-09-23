import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const features = [
    {
      title: "Global Time Coverage",
      description: "Compare current times across all major timezones worldwide with just a few clicks.",
      icon: "🌐"
    },
    {
      title: "Instant Comparisons",
      description: "See time differences calculated in hours and minutes between any two locations.",
      icon: "⏱️"
    },
    {
      title: "Beautiful Visuals",
      description: "Each location has its own colorful card with flag emoji and gradient background.",
      icon: "🎨"
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on all devices from mobile phones to desktop computers.",
      icon: "📱"
    },
    {
      title: "Real-time Updates",
      description: "All times update every second so you always see the current time.",
      icon: "🔄"
    },
    {
      title: "Detailed Information",
      description: "View coordinates, local dates, and comprehensive time comparisons.",
      icon: "📊"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      bio: "Timezone enthusiast with a passion for building useful tools.",
      avatar: "👨‍💻"
    },
    {
      name: "Maria Rodriguez",
      role: "UI/UX Designer",
      bio: "Creates beautiful interfaces that make time comparison intuitive.",
      avatar: "👩‍🎨"
    },
    {
      name: "James Wilson",
      role: "Data Specialist",
      bio: "Ensures all timezone data is accurate and up-to-date.",
      avatar: "👨‍🔬"
    }
  ];

  return (
    <div className="about-page">
      <header className="about-hero">
        <h1>About World Time Comparator</h1>
        <p>Your ultimate tool for global time tracking and comparison</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <div className="mission-card">
          <p>We created World Time Comparator to solve the problem of coordinating across timezones. Whether you're scheduling international meetings, contacting friends abroad, or just curious about the time elsewhere, our tool makes it simple and intuitive.</p>
          <div className="world-icon">🌍</div>
        </div>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Select Locations</h3>
            <p>Choose from our list of major cities worldwide or use the search function.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>View Current Times</h3>
            <p>See the local time for each location displayed in an easy-to-read format.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Compare Times</h3>
            <p>Instantly see the time difference between any two locations.</p>
          </div>
        </div>
      </section>

      

      
    </div>
  );
};

export default AboutPage;