import React from 'react';
import { Link } from 'react-router-dom';
import './PolicyPage.css';

const PolicyPage = () => {
  return (
    <div className="policy-container">
      <div className="policy-card">
        <div className="policy-header">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-subtitle">World Time Explorer</p>
        </div>
        
        <div className="policy-content">
          <div className="policy-section">
            <h2 className="policy-section-title">Our Commitment to Your Privacy</h2>
            <p className="policy-text">
              The Privacy Policy covers the World Time Comparator (Service).   This policy articulates our commitment to protecting user privacy.   Our online platform does not demand any storing or tracking, which may limit your online freedom.   This differs from many modern online services.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="policy-section-title">Data Collection Absence</h2>
            <p className="policy-text">
              Complete anonymity is maintained by the Service.   We don't collect, process, or keep personally identifiable information.   When you exit your browser, your time zone queries vanish.    No analytics trackers, no cookies, and no secret data gathering at all.
            </p>
          </div>

          <div className="policy-section">
            <h2 className="policy-section-title">Third-Party Assurance</h2>
            <p className="policy-text">
              We firmly oppose surveillance capitalism.   Your information will never be sold or transferred to third parties, and there are no data-sharing agreements or backdoors.   This is the essential basis of our Service, not merely a policy.   If this policy needs to be updated, we will provide adequate notice and maintain the same stringent privacy rules.
            </p>
          </div>
        </div>

        <div className="policy-footer">
          <Link to="/" className="policy-home-link">← Return to Time Comparator</Link>
          <p className="policy-effective-date">Effective: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;