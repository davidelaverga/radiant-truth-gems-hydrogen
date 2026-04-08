import {useLoaderData} from 'react-router';
import type {Route} from './+types/collections.rings';
import {getPaginationVariables, Analytics} from '@shopify/hydrogen';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {ProductItem} from '~/components/ProductItem';
import type {CollectionItemFragment} from 'storefrontapi.generated';
import {getDesignFamilyByHandle} from '~/lib/design-families';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Rings | Astreas'},
    {
      name: 'description',
      content:
        'Shop all lab-grown diamond rings in solid gold — solitaire, side stone, romantic, and more.',
    },
  ];
};

export async function loader({context, request}: Route.LoaderArgs) {
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {pageBy: 24});

  const {collection} = await storefront.query(RINGS_COLLECTION_QUERY, {
    variables: {...paginationVariables},
  });

  if (!collection) {
    throw new Response('Rings collection not found', {status: 404});
  }

  return {collection};
}

export default function RingsCollection() {
  const {collection} = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen">
      <section className="container-wide py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="caps-label text-accent mb-3">Collection</p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-4">
            {collection.title}
          </h1>
          {collection.description && (
            <p className="body-refined max-w-xl mx-auto">
              {collection.description}
            </p>
          )}
        </div>

        <PaginatedResourceSection<CollectionItemFragment>
          connection={collection.products}
          resourcesClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
        >
          {({node: product, index}) => {
            const family = getDesignFamilyByHandle(product.handle);
            const to = family ? `/design/${family.id}` : undefined;
            return (
              <ProductItem
                key={product.id}
                product={product}
                loading={index < 8 ? 'eager' : undefined}
                to={to}
              />
            );
          }}
        </PaginatedResourceSection>
      </section>

      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </div>
  );
}

/* ── GraphQL ─────────────────────────────────────────────── */
const COLLECTION_ITEM_FRAGMENT = `#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
` as const;

const RINGS_COLLECTION_QUERY = `#graphql
  ${COLLECTION_ITEM_FRAGMENT}
  query RingsCollection(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: "rings") {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...CollectionItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
` as const;
