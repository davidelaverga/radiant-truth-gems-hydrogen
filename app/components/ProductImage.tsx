import type {ProductVariantFragment} from 'storefrontapi.generated';
import {Image} from '@shopify/hydrogen';

export function ProductImage({
  image,
}: {
  image: ProductVariantFragment['image'];
}) {
  if (!image) {
    return (
      <div className="aspect-square bg-muted flex items-center justify-center">
        <span className="text-sm text-muted-foreground">No image</span>
      </div>
    );
  }
  return (
    <div className="aspect-square overflow-hidden">
      <Image
        alt={image.altText || 'Product Image'}
        aspectRatio="1/1"
        data={image}
        key={image.id}
        sizes="(min-width: 45em) 50vw, 100vw"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
