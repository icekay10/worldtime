// src/pages/_app.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import './globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Handle SPA route changes for GoatCounter
  useEffect(() => {
    const handleRouteChange = () => {
      // Small delay to ensure page title is updated
      setTimeout(() => {
        if (window.goatcounter && window.goatcounter.count) {
          window.goatcounter.count({
            path: window.location.pathname + window.location.search,
            title: document.title
          });
        }
      }, 300);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <GoogleAnalytics />
      <Navbar />
      <main className="app-wrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}