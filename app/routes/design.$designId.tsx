import {useState, useMemo} from 'react';
import {useLoaderData, Link} from 'react-router';
import type {Route} from './+types/design.$designId';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
  Money,
  CartForm,
  type OptimisticCartLineInput,
} from '@shopify/hydrogen';
import {useNavigate, useSearchParams} from 'react-router';
import {getDesignFamily, getConfiguratorImage} from '~/lib/design-families';
import {computeSizeAdder, getSurchargeVariantId, RING_SIZE_SURCHARGE_VARIANTS} from '~/lib/ring-size-surcharge';
import {useAside} from '~/components/Aside';
import {ProductMediaGallery} from '~/components/ProductMediaGallery';
import {ProductReviews} from '~/components/ProductReviews';
import {ShieldCheck, Truck, Package} from 'lucide-react';

export const meta: Route.MetaFunction = ({data}) => {
  const family = data?.family;
  return [
    {title: `${family?.name ?? 'Design'} | Customize | Astreas`},
    {
      name: 'description',
      content: family?.description || 'Customize your lab-grown diamond jewelry.',
    },
  ];
};

export async function loader({context, params, request}: Route.LoaderArgs) {
  const {designId} = params;
  if (!designId) throw new Response('Design ID required', {status: 400});

  const family = getDesignFamily(designId);
  if (!family) throw new Response(`Design family ${designId} not found`, {status: 404});

  // Fetch surcharge variant prices in the buyer's currency when this family uses
  // ring size as a line item property (hasRingSize: true).
  const surchargeIds = family.hasRingSize
    ? (Object.values(RING_SIZE_SURCHARGE_VARIANTS).filter(Boolean) as string[])
    : [];

  const [{product}, surchargeData] = await Promise.all([
    context.storefront.query(PRODUCT_QUERY, {
      variables: {
        handle: family.shopifyHandle,
        selectedOptions: getSelectedProductOptions(request),
      },
    }),
    surchargeIds.length > 0
      ? context.storefront.query(SURCHARGE_PRICES_QUERY, {
          variables: {ids: surchargeIds},
        })
      : Promise.resolve({nodes: []}),
  ]);

  if (!product?.id) {
    throw new Response(`Product for ${family.shopifyHandle} not found`, {status: 404});
  }

  // Build map: sizeAdder (number) → price in buyer's currency
  const surchargeAdderPrices: Partial<Record<number, {amount: string; currencyCode: string}>> = {};
  for (const [adder, id] of Object.entries(RING_SIZE_SURCHARGE_VARIANTS)) {
    const node = (surchargeData as any).nodes?.find((n: any) => n?.id === id);
    if (node?.price) surchargeAdderPrices[Number(adder)] = node.price;
  }

  return {product, family, surchargeAdderPrices};
}

export default function ConfigurableProduct() {
  const {product, family, surchargeAdderPrices} = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {open} = useAside();

  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  // Visual-only state (not Shopify variants)
  const [selectedColor, setSelectedColor] = useState('yellow');
  const initialShape = searchParams.get('shape');
  const [selectedShape, setSelectedShape] = useState(
    initialShape && family.shapes.includes(initialShape)
      ? initialShape
      : family.shapes[0] || '',
  );
  const [selectedRingSize, setSelectedRingSize] = useState('7');
  const [selectedLength, setSelectedLength] = useState('7in');

  // Get the correct image based on current configuration
  const currentImage = useMemo(
    () => getConfiguratorImage(family, selectedColor, selectedShape),
    [family, selectedColor, selectedShape],
  );

  // Build line item properties for visual options
  const lineItemProperties = useMemo(() => {
    const props: {key: string; value: string}[] = [];
    const colorEntry = family.goldColors.find((c) => c.value === selectedColor);
    if (colorEntry) props.push({key: 'Gold Color', value: colorEntry.name});
    if (selectedShape && family.shapes.length > 1) {
      props.push({key: 'Diamond Shape', value: selectedShape});
    }
    if (family.hasRingSize && selectedRingSize) {
      props.push({key: 'Ring Size', value: selectedRingSize});
    }
    if (family.hasBraceletLength && selectedLength) {
      const lengthEntry = family.braceletLengthMultipliers?.find(
        (l) => l.value === selectedLength,
      );
      if (lengthEntry) props.push({key: 'Bracelet Length', value: lengthEntry.label});
    }
    return props;
  }, [family, selectedColor, selectedShape, selectedRingSize, selectedLength]);

  // Ring size surcharge (only for hasRingSize families — size is a line item
  // property, not a Shopify variant, so the surcharge is a separate cart line)
  const sizeAdder = useMemo(
    () => (family.hasRingSize ? computeSizeAdder(selectedRingSize) : 0),
    [family.hasRingSize, selectedRingSize],
  );
  const surchargeVariantId = sizeAdder > 0 ? getSurchargeVariantId(sizeAdder) : undefined;

  // Displayed price = variant base price + surcharge price in buyer's currency (if any)
  const displayPrice = useMemo(() => {
    if (!selectedVariant?.price) return null;
    if (sizeAdder === 0) return null; // render <Money> directly
    const surchargePrice = surchargeAdderPrices[sizeAdder];
    if (!surchargePrice) return null;
    return {
      amount: (parseFloat(selectedVariant.price.amount) + parseFloat(surchargePrice.amount)).toFixed(2),
      currencyCode: selectedVariant.price.currencyCode,
    };
  }, [selectedVariant, sizeAdder, surchargeAdderPrices]);

  return (
    <div className="min-h-screen">
      <div className="container-wide py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/collections" className="hover:text-foreground transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-foreground">{family.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product media: main hero + thumbnail strip */}
          <ProductMediaGallery
            items={family.media ?? []}
            fallbackSrc={currentImage}
            fallbackAlt={`${family.name} in ${selectedColor} gold${selectedShape ? ` - ${selectedShape} cut` : ''}`}
          />

          {/* Configuration Panel */}
          <div className="lg:py-4">
            <p className="caps-label text-accent text-[9px] mb-3">Customize</p>
            <h1 className="serif-heading text-3xl md:text-4xl mb-3">{family.name}</h1>
            <p className="text-sm text-muted-foreground mb-4">{family.description}</p>

            {/* Price from selected Shopify variant + ring size surcharge */}
            {selectedVariant?.price && (
              <div className="mb-6">
                <span className="text-2xl font-medium">
                  {displayPrice ? (
                    <Money data={displayPrice} />
                  ) : (
                    <Money data={selectedVariant.price} />
                  )}
                </span>
                {selectedVariant.compareAtPrice && (
                  <s className="text-sm text-muted-foreground ml-3">
                    <Money data={selectedVariant.compareAtPrice} />
                  </s>
                )}
                {sizeAdder > 0 && surchargeAdderPrices[sizeAdder] && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Includes <Money data={surchargeAdderPrices[sizeAdder]!} /> for ring size {selectedRingSize}
                  </p>
                )}
              </div>
            )}

            <div className="divider-soft mb-6" />

            <div className="space-y-6">
              {/* Diamond Shape Selector */}
              {family.shapes.length > 1 && (
                <div>
                  <h3 className="caps-label text-[10px] text-foreground mb-3">Diamond Shape</h3>
                  <div className="flex flex-wrap gap-2">
                    {family.shapes.map((shape) => (
                      <button
                        key={shape}
                        onClick={() => setSelectedShape(shape)}
                        className={`px-4 py-2.5 text-xs tracking-wide transition-all duration-300 ${
                          selectedShape === shape
                            ? 'border border-foreground text-foreground'
                            : 'border border-border/40 text-muted-foreground hover:border-foreground/30'
                        }`}
                      >
                        {shape}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Shopify Variant Options (Carat, Gold/Purity) */}
              {productOptions.map((option) => {
                if (option.optionValues.length <= 1) return null;
                // Hide purity for 14K-only products
                if (family.is14kOnly && option.name === 'Gold') return null;

                return (
                  <div key={option.name}>
                    <h3 className="caps-label text-[10px] text-foreground mb-3">
                      {option.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {option.optionValues.map((value) => {
                        const {name, variantUriQuery, selected, available, exists, isDifferentProduct, handle} = value;
                        const baseClasses = 'px-4 py-2.5 text-xs tracking-wide transition-all duration-300';
                        const selectedClasses = selected
                          ? 'border border-foreground text-foreground'
                          : 'border border-border/40 text-muted-foreground hover:border-foreground/30';
                        const availableClasses = available ? '' : 'opacity-30 cursor-not-allowed';

                        if (isDifferentProduct) {
                          return (
                            <Link
                              key={option.name + name}
                              prefetch="intent"
                              preventScrollReset
                              replace
                              to={`/products/${handle}?${variantUriQuery}`}
                              className={`${baseClasses} ${selectedClasses} ${availableClasses}`}
                            >
                              {name}
                            </Link>
                          );
                        }
                        return (
                          <button
                            key={option.name + name}
                            type="button"
                            className={`${baseClasses} ${selectedClasses} ${availableClasses}`}
                            disabled={!exists}
                            onClick={() => {
                              if (!selected) {
                                void navigate(`?${variantUriQuery}`, {
                                  replace: true,
                                  preventScrollReset: true,
                                });
                              }
                            }}
                          >
                            {name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Gold Color (visual only — line item property) */}
              <div>
                <h3 className="caps-label text-[10px] text-foreground mb-3">Gold Color</h3>
                <div className="flex gap-3">
                  {family.goldColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === color.value
                          ? 'border-foreground scale-110'
                          : 'border-border/40 hover:border-foreground/30'
                      }`}
                      style={{backgroundColor: color.color}}
                      aria-label={color.name}
                      title={color.name}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {family.goldColors.find((c) => c.value === selectedColor)?.name}
                </p>
              </div>

              {/* Ring Size (line item property) */}
              {family.hasRingSize && family.ringSizes && (
                <div>
                  <h3 className="caps-label text-[10px] text-foreground mb-3">Ring Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {family.ringSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedRingSize(size)}
                        className={`w-10 h-10 text-xs flex items-center justify-center transition-all duration-300 ${
                          selectedRingSize === size
                            ? 'border border-foreground text-foreground'
                            : 'border border-border/40 text-muted-foreground hover:border-foreground/30'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bracelet Length (line item property) */}
              {family.hasBraceletLength && family.braceletLengthMultipliers && (
                <div>
                  <h3 className="caps-label text-[10px] text-foreground mb-3">Bracelet Length</h3>
                  <div className="flex flex-wrap gap-2">
                    {family.braceletLengthMultipliers.map((length) => (
                      <button
                        key={length.value}
                        onClick={() => setSelectedLength(length.value)}
                        className={`px-4 py-2.5 text-xs tracking-wide transition-all duration-300 ${
                          selectedLength === length.value
                            ? 'border border-foreground text-foreground'
                            : 'border border-border/40 text-muted-foreground hover:border-foreground/30'
                        }`}
                      >
                        {length.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <CartForm
                route="/cart"
                inputs={{
                  lines: selectedVariant
                    ? ([
                        {
                          merchandiseId: selectedVariant.id,
                          quantity: 1,
                          selectedVariant,
                          attributes: lineItemProperties,
                        },
                        // Surcharge line for ring sizes above 7 (hasRingSize families only).
                        // Only added when the surcharge product variant ID is configured in
                        // app/lib/ring-size-surcharge.ts.
                        ...(surchargeVariantId
                          ? [
                              {
                                merchandiseId: surchargeVariantId,
                                quantity: 1,
                                attributes: [
                                  {key: 'Ring Size Surcharge', value: `Size ${selectedRingSize}`},
                                ],
                              },
                            ]
                          : []),
                      ] as OptimisticCartLineInput[])
                    : [],
                }}
                action={CartForm.ACTIONS.LinesAdd}
              >
                {(fetcher) => (
                  <button
                    type="submit"
                    disabled={!selectedVariant?.availableForSale || fetcher.state !== 'idle'}
                    onClick={() => open('cart')}
                    className="w-full btn-dawn-filled disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {fetcher.state !== 'idle'
                      ? 'Adding...'
                      : selectedVariant?.availableForSale
                        ? 'Add to Cart'
                        : 'Sold Out'}
                  </button>
                )}
              </CartForm>
            </div>

            {/* Configuration Summary */}
            {lineItemProperties.length > 0 && (
              <div className="mt-6 p-4 bg-ivory border border-border/20">
                <h4 className="caps-label text-[9px] text-muted-foreground mb-2">Your Configuration</h4>
                <div className="space-y-1">
                  {lineItemProperties.map((prop) => (
                    <p key={prop.key} className="text-xs text-foreground/70">
                      {prop.key}: <span className="text-foreground">{prop.value}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <ShieldCheck className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-[10px] font-medium">IGI Certified</p>
                </div>
                <div>
                  <Package className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-[10px] font-medium">Made to Order</p>
                </div>
                <div>
                  <Truck className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-[10px] font-medium">Free Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Customer reviews */}
        {family.reviews && (
          <ProductReviews reviews={family.reviews} productName={family.name} />
        )}
      </div>

      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ConfigVariant on ProductVariant {
    availableForSale
    compareAtPrice { amount currencyCode }
    id
    image { __typename id url altText width height }
    price { amount currencyCode }
    product { title handle }
    selectedOptions { name value }
    sku
    title
    unitPrice { amount currencyCode }
  }
` as const;

const PRODUCT_QUERY = `#graphql
  query ConfigurableProduct(
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
          firstSelectableVariant { ...ConfigVariant }
          swatch {
            color
            image { previewImage { url } }
          }
        }
      }
      selectedOrFirstAvailableVariant(
        selectedOptions: $selectedOptions
        ignoreUnknownOptions: true
        caseInsensitiveMatch: true
      ) { ...ConfigVariant }
      adjacentVariants(selectedOptions: $selectedOptions) { ...ConfigVariant }
      seo { description title }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const SURCHARGE_PRICES_QUERY = `#graphql
  query SurchargePrices(
    $country: CountryCode
    $language: LanguageCode
    $ids: [ID!]!
  ) @inContext(country: $country, language: $language) {
    nodes(ids: $ids) {
      ... on ProductVariant {
        id
        price { amount currencyCode }
      }
    }
  }
` as const;
