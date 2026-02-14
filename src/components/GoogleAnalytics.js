// components/GoogleAnalytics.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Send pageview with new URL
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-QJDMC5FK42', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}