/**
 * Ring Size Surcharge — Shopify variant IDs
 *
 * HOW TO SET UP:
 * 1. In Shopify Admin → Products → Add product
 *    - Title: "Ring Size Surcharge"
 *    - Product type: "Surcharge"
 *    - Set status to "Active"
 *    - Remove from all sales channels / storefronts if desired (it won't
 *      appear in collections, only be added programmatically to cart)
 * 2. Add variants for each surcharge amount (no options needed — just set
 *    the price on each variant):
 *      $50  | $100 | $150 | $200 | $250 | $300
 * 3. Copy each variant's numeric ID from the URL when you click on it,
 *    then replace the placeholder strings below with:
 *    `gid://shopify/ProductVariant/<numeric-id>`
 *
 * Until these IDs are filled in the surcharge will NOT be added to the cart,
 * but the displayed price will already reflect the correct total.
 */

/** Map from surcharge amount (USD) → Shopify ProductVariant GID */
export const RING_SIZE_SURCHARGE_VARIANTS: Partial<Record<number, string>> = {
  50:  'gid://shopify/ProductVariant/56987069743435',
  100: 'gid://shopify/ProductVariant/56987069776203',
  150: 'gid://shopify/ProductVariant/56987069808971',
  200: 'gid://shopify/ProductVariant/56987069841739',
  250: 'gid://shopify/ProductVariant/56987069874507',
  300: 'gid://shopify/ProductVariant/56987069907275',
};

/**
 * Compute the size surcharge for ring families where size is a line item
 * property (hasRingSize: true).
 *
 * Rule: size 7 = base price; each whole size above 7 adds $100.
 * Half-sizes (7.5, 8.5 …) are charged in $50 increments.
 *
 * e.g. size 8 → +$100, size 8.5 → +$150, size 9 → +$200, size 10 → +$300
 */
export function computeSizeAdder(selectedRingSize: string): number {
  return Math.max(0, Number(selectedRingSize) - 7) * 100;
}

/**
 * Returns the Shopify ProductVariant GID for the given surcharge amount,
 * or undefined if it hasn't been configured yet.
 */
export function getSurchargeVariantId(sizeAdder: number): string | undefined {
  const id = RING_SIZE_SURCHARGE_VARIANTS[sizeAdder];
  return id || undefined;
}
