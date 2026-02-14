// src/hooks/useAnalytics.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useAnalytics() {
  const router = useRouter();

  useEffect(() => {
    // Handle page views on route change
    const handleRouteChange = (url) => {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        if (window.goatcounter && window.goatcounter.count) {
          window.goatcounter.count({
            path: url,
            title: document.title
          });
        }
      }, 300);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Track initial page view
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count();
    }

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
}