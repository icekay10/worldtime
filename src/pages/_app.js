// src/pages/_app.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import Script from 'next/script';
import { useAnalytics } from '../hooks/useAnalytics';
import './globals.css';

export default function App({ Component, pageProps }) {
  // GoatCounter hook for SPA navigation tracking
  useAnalytics();

  return (
    <>
      {/* Google Analytics Component */}
      <GoogleAnalytics />
      
      {/* GoatCounter Script - Production */}
      <Script
        data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER_CODE}.goatcounter.com/count`}
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
      
      {/* Your existing layout */}
      <Navbar />
      <main className="app-wrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}