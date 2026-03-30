import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {
  ProductItemFragment,
  CollectionItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export function ProductItem({
  product,
  loading,
}: {
  product:
    | CollectionItemFragment
    | ProductItemFragment
    | RecommendedProductFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;

  return (
    <Link
      key={product.id}
      prefetch="intent"
      to={variantUrl}
      className="group block"
    >
      {image && (
        <div className="aspect-square overflow-hidden mb-4">
          <Image
            alt={image.altText || product.title}
            aspectRatio="1/1"
            data={image}
            loading={loading}
            sizes="(min-width: 64em) 25vw, (min-width: 45em) 33vw, 50vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <h4 className="text-sm font-medium group-hover:text-accent transition-colors duration-300">
        {product.title}
      </h4>
      <p className="text-sm text-muted-foreground mt-1">
        <Money data={product.priceRange.minVariantPrice} />
      </p>
    </Link>
  );
}
