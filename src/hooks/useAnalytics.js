// src/hooks/useAnalytics.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useAnalytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window.goatcounter === 'undefined') return;
      
      window.goatcounter.count({
        path: location.pathname + location.search + location.hash,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}

// Optional: For tracking custom events (clicks, form submissions, etc.)
export function useAnalyticsEvent() {
  function trackCustomEvent({ eventName, eventTitle }) {
    if (typeof window.goatcounter === 'undefined') return;
    
    window.goatcounter.count({
      path: eventName,
      title: eventTitle || eventName,
      event: true,
    });
  }

  return { trackCustomEvent };
}