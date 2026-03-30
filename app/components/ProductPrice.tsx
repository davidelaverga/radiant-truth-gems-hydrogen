import {Money} from '@shopify/hydrogen';
import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';

export function ProductPrice({
  price,
  compareAtPrice,
}: {
  price?: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
}) {
  return (
    <div className="flex items-center gap-3">
      {compareAtPrice ? (
        <>
          {price ? (
            <span className="text-xl font-medium">
              <Money data={price} />
            </span>
          ) : null}
          <s className="text-sm text-muted-foreground line-through">
            <Money data={compareAtPrice} />
          </s>
        </>
      ) : price ? (
        <span className="text-xl font-medium">
          <Money data={price} />
        </span>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}
