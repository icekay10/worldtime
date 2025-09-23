import React, { useRef, useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // FormSubmit.co endpoint - replace with your actual email
    const formSubmitUrl = "https://formsubmit.co/your-email@example.com";
    
    // Create form data
    const formData = new FormData(form.current);
    
    // Send the form data using fetch
    fetch(formSubmitUrl, {
      method: "POST",
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        setSubmitStatus('success');
        form.current.reset();
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch((error) => {
      console.log(error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact World Time Comparator</h1>
        <p>Have questions about timezones or feature requests? Send us a message!</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          <div className="contact-form-card">
            <h2>Send Us a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              {/* FormSubmit requires these hidden fields for functionality */}
              <input type="hidden" name="_subject" value="New contact from World Time Comparator" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://yourdomain.co/thanks.html" />
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="timezone">Your Timezone (Optional)</label>
                <input 
                  type="text" 
                  id="timezone" 
                  name="timezone" 
                  placeholder="e.g. America/New_York"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5" 
                  placeholder="Tell us about your time comparison needs..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {submitStatus === 'success' && (
                <div className="alert success">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert error">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>How accurate are your time comparisons?</h3>
              <p>Our comparisons use official IANA timezone data and update in real-time, automatically adjusting for daylight saving changes.</p>
            </div>
            <div className="faq-card">
              <h3>Can I request a new location?</h3>
              <p>Yes! We add new locations weekly. Just mention the city and country in your message.</p>
            </div>
            <div className="faq-card">
              <h3>When can I expect a response?</h3>
              <p>We typically respond within 24 hours, regardless of your timezone.</p>
            </div>
            <div className="faq-card">
              <h3>Do you store my information?</h3>
              <p>We only use your details to respond to your inquiry and never share them with third parties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;