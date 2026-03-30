/**
 * Storefront API product queries.
 *
 * Used by product routes and any component that needs product data
 * loaded server-side via Hydrogen route loaders.
 */

import {PRODUCT_CARD_FRAGMENT, PRODUCT_VARIANT_FRAGMENT} from './fragments';

/**
 * Query a single product by handle with full variant data.
 * Used on the PDP (product detail page).
 */
export const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      encodedVariantExistence
      encodedVariantAvailability
      options {
        name
        optionValues {
          name
          firstSelectableVariant {
            ...ProductVariantFields
          }
          swatch {
            color
            image {
              previewImage {
                url
              }
            }
          }
        }
      }
      selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions) {
        ...ProductVariantFields
      }
      adjacentVariants(selectedOptions: $selectedOptions) {
        ...ProductVariantFields
      }
      seo {
        description
        title
      }
      images(first: 10) {
        nodes {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

/**
 * Query multiple products for grids (homepage, search, etc.).
 */
export const PRODUCTS_QUERY = `#graphql
  query Products(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) @inContext(country: $country, language: $language) {
    products(
      first: $first
      last: $last
      before: $startCursor
      after: $endCursor
      sortKey: $sortKey
      reverse: $reverse
      query: $query
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
` as const;

/**
 * Recommended products query (used on homepage and PDP).
 */
export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  query RecommendedProducts(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
` as const;
