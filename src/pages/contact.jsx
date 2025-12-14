'use client';

import { useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('https://formsubmit.co/your-email@example.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        formRef.current.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const metaDescription = "Contact World Time Clock team for questions about global time zones, feature requests, or feedback. We're here to help with all your time-related needs!";
  
  const keywords = [
    "contact world time clock",
    "global time zone support",
    "time zone questions",
    "world clock contact",
    "international time help",
    "time converter support",
    "GMT UTC assistance",
    "time zone feedback",
    "world clock feature request",
    "time difference questions",
    "global clock support",
    "multi-timezone help",
    "world time zone contact",
    "time synchronization support",
    "international business time contact"
  ].join(', ');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact World Time Clock",
    "description": metaDescription,
    "url": "https://www.timeinworldclock.com/contact",
    "publisher": {
      "@type": "Organization",
      "name": "World Time Clock",
      "url": "https://www.timeinworldclock.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.timeinworldclock.com/images/logo.png"
      }
    },
    "mainEntity": {
      "@type": "WebPage",
      "name": "Contact Form",
      "description": "Contact form for World Time Clock inquiries"
    }
  };

  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Contact World Time Clock | Global Time Zone Support</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact World Time Clock | Global Time Zone Support" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://www.timeinworldclock.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact World Time Clock" />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.timeinworldclock.com/contact" />
      </Head>

      {/* Structured Data */}
      <Script id="contact-structured-data" type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </Script>

      <div className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.contactHero}>
          <h1 className={styles.heroTitle}>Contact World Time Clock</h1>
          <p className={styles.heroSubtitle}>
            Have questions about time zones or feature requests? Send us a message!
          </p>
        </section>

        <div className={styles.contactContent}>
          {/* Contact Form */}
          <div className={styles.contactFormContainer}>
            <div
              className={styles.contactFormCard}
              style={{ background: 'linear-gradient(135deg, #3a7bd5, #00d2ff)' }}
            >
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                {/* FormSubmit.co Hidden Fields */}
                <input type="hidden" name="_subject" value="New contact from World Time Clock" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.timeinworldclock.com/contact?success=true" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting World Time Clock! We'll get back to you soon regarding your time zone inquiry." />

                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="timezone" className={styles.formLabel}>
                    Your Timezone (Optional)
                  </label>
                  <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    placeholder="e.g. America/New_York or GMT+5"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell us about your time comparison needs, feature requests, or any questions about global time zones..."
                    className={styles.formTextarea}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true"></span> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className={`${styles.alert} ${styles.success}`} role="alert">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={`${styles.alert} ${styles.error}`} role="alert">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3>Email Us</h3>
              <p>support@timeinworldclock.com</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕐</div>
              <h3>Response Time</h3>
              <p>Within 24-48 hours</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🌐</div>
              <h3>Global Support</h3>
              <p>24/7 time zone assistance</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How accurate is the world time clock?</h3>
              <p>Our clock uses your browser&apos;s native time APIs, which are synchronized with global time servers for maximum accuracy.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you support daylight saving time?</h3>
              <p>Yes! All time zones automatically adjust for DST based on the current date and location.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I suggest new features?</h3>
              <p>Absolutely! We welcome all suggestions for improving our global time zone tools.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is the service really free?</h3>
              <p>Yes, World Time Clock is completely free to use with no hidden fees or subscriptions.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;