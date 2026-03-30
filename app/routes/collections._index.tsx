import {useLoaderData, Link} from 'react-router';
import type {Route} from './+types/collections._index';
import {getPaginationVariables, Image} from '@shopify/hydrogen';
import type {CollectionFragment} from 'storefrontapi.generated';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Collections | Astreas — Lab-Grown Diamond Jewelry'},
    {
      name: 'description',
      content:
        'Browse our collections of lab-grown diamond rings, earrings, bracelets, and necklaces in solid 14K and 18K gold.',
    },
  ];
}

export async function loader(args: Route.LoaderArgs) {
  const criticalData = await loadCriticalData(args);
  return {...criticalData};
}

async function loadCriticalData({context, request}: Route.LoaderArgs) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const [{collections}] = await Promise.all([
    context.storefront.query(COLLECTIONS_QUERY, {
      variables: paginationVariables,
    }),
  ]);

  return {collections};
}

export default function Collections() {
  const {collections} = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen">
      <section className="container-wide py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="caps-label text-accent mb-3">Shop</p>
          <h1 className="serif-heading text-4xl md:text-5xl">
            Our Collections
          </h1>
        </div>
        <PaginatedResourceSection<CollectionFragment>
          connection={collections}
          resourcesClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {({node: collection, index}) => (
            <CollectionItem
              key={collection.id}
              collection={collection}
              index={index}
            />
          )}
        </PaginatedResourceSection>
      </section>
    </div>
  );
}

function CollectionItem({
  collection,
  index,
}: {
  collection: CollectionFragment;
  index: number;
}) {
  return (
    <Link
      key={collection.id}
      to={`/collections/${collection.handle}`}
      prefetch="intent"
      className="group block"
    >
      {collection?.image && (
        <div className="aspect-[3/4] overflow-hidden mb-4">
          <Image
            alt={collection.image.altText || collection.title}
            aspectRatio="3/4"
            data={collection.image}
            loading={index < 4 ? 'eager' : undefined}
            sizes="(min-width: 64em) 25vw, (min-width: 45em) 33vw, 50vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <h3 className="serif-heading text-lg group-hover:text-accent transition-colors duration-300">
        {collection.title}
      </h3>
    </Link>
  );
}

const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
` as const;
