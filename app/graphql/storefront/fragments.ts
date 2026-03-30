/**
 * Centralized Storefront API GraphQL fragments.
 *
 * These fragments are used across collection routes, product routes,
 * and the homepage to keep query definitions DRY.
 */

/**
 * Shared Money fragment — used in prices, cart totals, etc.
 */
export const MONEY_FRAGMENT = `#graphql
  fragment MoneyFragment on MoneyV2 {
    amount
    currencyCode
  }
` as const;

/**
 * Image fragment for product/collection images.
 */
export const IMAGE_FRAGMENT = `#graphql
  fragment ImageFragment on Image {
    id
    url
    altText
    width
    height
  }
` as const;

/**
 * Lightweight product fragment for grids and listings.
 * Used in collection pages and search results.
 */
export const PRODUCT_CARD_FRAGMENT = `#graphql
  fragment ProductCard on Product {
    id
    title
    handle
    vendor
    featuredImage {
      ...ImageFragment
    }
    priceRange {
      minVariantPrice {
        ...MoneyFragment
      }
      maxVariantPrice {
        ...MoneyFragment
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        ...MoneyFragment
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${MONEY_FRAGMENT}
` as const;

/**
 * Full product variant fragment for PDP.
 */
export const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFields on ProductVariant {
    id
    availableForSale
    sku
    title
    compareAtPrice {
      ...MoneyFragment
    }
    price {
      ...MoneyFragment
    }
    image {
      ...ImageFragment
    }
    selectedOptions {
      name
      value
    }
    unitPrice {
      ...MoneyFragment
    }
  }
  ${IMAGE_FRAGMENT}
  ${MONEY_FRAGMENT}
` as const;

/**
 * Collection fragment for listings.
 */
export const COLLECTION_CARD_FRAGMENT = `#graphql
  fragment CollectionCard on Collection {
    id
    title
    handle
    description
    image {
      ...ImageFragment
    }
  }
  ${IMAGE_FRAGMENT}
` as const;
