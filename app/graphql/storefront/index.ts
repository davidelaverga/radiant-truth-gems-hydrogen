/**
 * Storefront API GraphQL barrel export.
 *
 * Import from '~/graphql/storefront' to access all shared
 * fragments and queries for the Storefront API.
 */

export {
  MONEY_FRAGMENT,
  IMAGE_FRAGMENT,
  PRODUCT_CARD_FRAGMENT,
  PRODUCT_VARIANT_FRAGMENT,
  COLLECTION_CARD_FRAGMENT,
} from './fragments';

export {
  PRODUCT_QUERY,
  PRODUCTS_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
} from './product-queries';

export {
  COLLECTIONS_QUERY,
  COLLECTION_QUERY,
} from './collection-queries';
