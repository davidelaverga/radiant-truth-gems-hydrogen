import {useEffect, useState} from 'react';

/**
 * Minimal type declaration for the Shopify Customer Privacy API.
 * The full API is loaded by Analytics.Provider via the consent prop.
 * window.Shopify.customerPrivacy is available after 'customerPrivacyApiLoaded' fires.
 */
interface ShopifyCP {
  shouldShowBanner: () => boolean;
  analyticsProcessingAllowed: () => boolean;
  setTrackingConsent: (
    consent: {
      analytics: boolean;
      marketing: boolean;
      preferences: boolean;
      sale_of_data: boolean;
      headlessStorefront?: boolean;
    },
    callback: (err?: {error: string}) => void,
  ) => void;
}

declare global {
  interface Window {
    Shopify?: {customerPrivacy?: ShopifyCP};
  }
}

/**
 * ConsentBanner
 *
 * Appears on first visit when Shopify's Customer Privacy API determines
 * consent is required (GDPR / ePrivacy). Dispatches 'astreas:open-cookie-settings'
 * from the footer to reopen.
 *
 * Strictly necessary cookies are always active; this banner controls
 * analytics, marketing, and preferences cookies only.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [api, setApi] = useState<ShopifyCP | null>(null);

  // Initialise once the Shopify Customer Privacy API is ready
  useEffect(() => {
    function init() {
      const cp = window.Shopify?.customerPrivacy;
      if (!cp) return;
      setApi(cp);
      if (cp.shouldShowBanner()) setVisible(true);
    }

    if (window.Shopify?.customerPrivacy) {
      init();
    } else {
      window.addEventListener('customerPrivacyApiLoaded', init);
      return () => window.removeEventListener('customerPrivacyApiLoaded', init);
    }
  }, []);

  // Allow footer "Cookie Settings" button to reopen the banner
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener('astreas:open-cookie-settings', handler);
    return () => window.removeEventListener('astreas:open-cookie-settings', handler);
  }, []);

  if (!visible || !api) return null;

  function accept() {
    api!.setTrackingConsent(
      {
        analytics: true,
        marketing: true,
        preferences: true,
        sale_of_data: true,
        headlessStorefront: true,
      },
      (err) => {
        if (!err?.error) setVisible(false);
      },
    );
  }

  function decline() {
    api!.setTrackingConsent(
      {
        analytics: false,
        marketing: false,
        preferences: false,
        sale_of_data: false,
        headlessStorefront: true,
      },
      (err) => {
        if (!err?.error) setVisible(false);
      },
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-modal="false"
      className="fixed bottom-6 left-6 z-50 w-[calc(100vw-3rem)] max-w-xs bg-background border border-border/40 shadow-xl"
    >
      <div className="p-6">
        <p
          className="caps-label text-[9px] mb-3 tracking-[0.22em]"
          style={{color: 'hsl(var(--gold))'}}
        >
          Cookie Preferences
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-5">
          We use cookies to enhance your experience and measure site
          performance. Strictly necessary cookies are always active.{' '}
          <a
            href="/policies/privacy-policy"
            className="text-foreground/50 underline underline-offset-2 hover:text-foreground transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={decline}
            className="flex-1 btn-dawn text-[10px] py-2.5"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="flex-1 btn-dawn-filled text-[10px] py-2.5"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
