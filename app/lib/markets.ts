/**
 * Shopify Markets / i18n utilities.
 *
 * Detects the buyer's locale from the URL path prefix or defaults
 * to the primary market. The Storefront API uses this to return
 * prices in the correct currency.
 *
 * Current markets:
 *   - Italy (primary, default): EUR, language EN
 *   - United States: USD, language EN
 *
 * URL strategy:
 *   - /en-us/products/... → US market, English, USD
 *   - /products/...       → Default (Italy/primary market, English, EUR)
 */

import type {I18nLocale} from '@shopify/hydrogen';

export type Locale = I18nLocale & {
  pathPrefix: string;
  label: string;
};

export const DEFAULT_LOCALE: Locale = {
  language: 'EN',
  country: 'IT',
  pathPrefix: '',
  label: 'Italia (EUR)',
};

export const SUPPORTED_LOCALES: Locale[] = [
  DEFAULT_LOCALE,
  {
    language: 'EN',
    country: 'IT',
    pathPrefix: '/it',
    label: 'Italia (EUR)',
  },
];

/**
 * Get the locale from the URL path prefix.
 * Falls back to DEFAULT_LOCALE if no prefix matches.
 */
export function getLocaleFromRequest(request: Request): Locale {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0]?.toLowerCase();

  // Check if first path segment matches a locale prefix
  for (const locale of SUPPORTED_LOCALES) {
    if (locale.pathPrefix && locale.pathPrefix === `/${firstPart}`) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

/**
 * Format a price for display. Uses the browser's Intl.NumberFormat
 * when available, falls back to basic formatting.
 */
export function formatPrice(
  amount: string | number,
  currencyCode: string,
): string {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(numAmount);
  } catch {
    return `${currencyCode} ${numAmount.toFixed(2)}`;
  }
}
