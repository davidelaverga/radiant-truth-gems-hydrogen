import {useState, useMemo} from 'react';
import {Link, useLoaderData} from 'react-router';
import {motion} from 'framer-motion';
import type {Route} from './+types/mothers-day-set';
import {Gift, Clock} from 'lucide-react';
import {AddToCartButton} from '~/components/AddToCartButton';

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Mother's Day Signature Set | Astreas"},
    {
      name: 'description',
      content:
        "The complete Mother's Day diamond jewelry set: tennis bracelet, necklace, stud earrings, and solitaire ring in solid gold.",
    },
  ];
}

/* ── Loader ─────────────────────────────────────────────── */
export async function loader({context}: Route.LoaderArgs) {
  const {storefront} = context;
  const {product} = await storefront.query(BUNDLE_PRODUCT_QUERY);
  return {variants: product?.variants.nodes ?? []};
}

/* ── Constants ──────────────────────────────────────────── */
const BASE_PRICE = 4190;   // EUR — single source of truth
const RETAIL_PRICE = 6700; // EUR

const bundleItems = [
  {name: 'Tennis Bracelet',       detail: '~4ct total weight', icon: '💎'},
  {name: 'Solitaire Necklace',    detail: '1ct pendant',       icon: '✨'},
  {name: 'Diamond Stud Earrings', detail: '2ct total weight',  icon: '💫'},
  {name: 'Classic Solitaire Ring',detail: '1ct center stone',  icon: '💍'},
];

const colorOptions = [
  {name: 'White Gold',  value: 'white',  image: '/mothers-day-bundle-white.jpg'},
  {name: 'Yellow Gold', value: 'yellow', image: '/mothers-day-bundle-yellow.jpg'},
  {name: 'Rose Gold',   value: 'rose',   image: '/mothers-day-bundle-rose.jpg'},
];

const purityOptions = [
  {label: '14K', value: '14k', adder: 0,    note: null},
  {label: '18K', value: '18k', adder: 0.12, note: '+12%'},
];

const braceletOptions = [
  {label: '6"', value: '6', adder: 0,    note: null},
  {label: '7"', value: '7', adder: 0,    note: null},
  {label: '8"', value: '8', adder: 0.10, note: '+10%'},
  {label: '9"', value: '9', adder: 0.22, note: '+22%'},
];

const ringSizeOptions = [
  {label: '6', value: '6', adder: 0,    note: null},
  {label: '7', value: '7', adder: 0,    note: null},
  {label: '8', value: '8', adder: 0.05, note: '+5%'},
  {label: '9', value: '9', adder: 0.08, note: '+8%'},
];

/* ── Helpers ─────────────────────────────────────────────── */
function eur(amount: number): string {
  return `€${Math.round(amount).toLocaleString('en-US')}`;
}

/* ── Component ───────────────────────────────────────────── */
export default function MothersDaySet() {
  const {variants} = useLoaderData<typeof loader>();

  const [selectedColor,    setSelectedColor]    = useState('white');
  const [selectedPurity,   setSelectedPurity]   = useState('14k');
  const [selectedBracelet, setSelectedBracelet] = useState('7');
  const [selectedRingSize, setSelectedRingSize] = useState('7');

  const selectedImage =
    colorOptions.find((c) => c.value === selectedColor)?.image ??
    colorOptions[0].image;

  const {finalPrice, purityAdder, braceletAdder, ringAdder, hasUpgrades} =
    useMemo(() => {
      const pa = purityOptions.find((p) => p.value === selectedPurity)?.adder ?? 0;
      const ba = braceletOptions.find((b) => b.value === selectedBracelet)?.adder ?? 0;
      const ra = ringSizeOptions.find((r) => r.value === selectedRingSize)?.adder ?? 0;
      return {
        finalPrice:    BASE_PRICE * (1 + pa + ba + ra),
        purityAdder:   pa,
        braceletAdder: ba,
        ringAdder:     ra,
        hasUpgrades:   pa + ba + ra > 0,
      };
    }, [selectedPurity, selectedBracelet, selectedRingSize]);

  const finalRounded = Math.round(finalPrice);
  const savings      = RETAIL_PRICE - finalRounded;

  /* Match the current selection to a Shopify variant ID */
  const selectedVariantId = useMemo(() => {
    const purity = selectedPurity === '18k' ? '18K' : '14K';
    const color  = selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1);
    const goldVal = `${purity} ${color}`;
    return (
      variants.find(
        (v: {id: string; selectedOptions: {name: string; value: string}[]}) =>
          v.selectedOptions.some(
            (o) => o.name === 'Gold' && o.value === goldVal,
          ) &&
          v.selectedOptions.some(
            (o) => o.name === 'Bracelet' && o.value === selectedBracelet,
          ) &&
          v.selectedOptions.some(
            (o) => o.name === 'Ring Size' && o.value === selectedRingSize,
          ),
      )?.id ?? null
    );
  }, [variants, selectedPurity, selectedColor, selectedBracelet, selectedRingSize]);

  /* Selector helper */
  function SelectorRow({
    label,
    options,
    selected,
    onSelect,
    wide = false,
  }: {
    label: string;
    options: {label: string; value: string; adder: number; note: string | null}[];
    selected: string;
    onSelect: (v: string) => void;
    wide?: boolean;
  }) {
    return (
      <div>
        <h3 className="caps-label text-[10px] text-foreground mb-2">{label}</h3>
        <div className="flex flex-wrap gap-2">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              className={`text-xs transition-all duration-300 ${
                wide ? 'px-4 py-2' : 'w-10 h-10 flex items-center justify-center'
              } ${
                selected === opt.value
                  ? 'border border-foreground text-foreground'
                  : 'border border-border/40 text-muted-foreground hover:border-foreground/30'
              }`}
            >
              {opt.label}
              {opt.note && (
                <span className="ml-1 text-[9px] opacity-60">{opt.note}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Image */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6}}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={selectedImage}
                alt={`Mother's Day Set in ${selectedColor} gold`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`text-xs px-4 py-2 transition-all duration-300 ${
                    selectedColor === color.value
                      ? 'border border-foreground text-foreground'
                      : 'border border-border/40 text-muted-foreground hover:border-foreground/30'
                  }`}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info panel */}
          <div className="lg:py-4">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-4 h-4 text-accent" />
              <span className="caps-label text-accent text-[9px]">Limited Edition</span>
            </div>
            <h1 className="serif-heading text-3xl md:text-4xl mb-3">
              Mother&rsquo;s Day Signature Set
            </h1>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              The complete diamond set — four signature pieces designed to be
              worn together or individually. Each piece is crafted in solid gold
              with IGI-certified lab-grown diamonds.
            </p>

            {/* Bundle items */}
            <div className="space-y-3 mb-8">
              {bundleItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-3 border border-border/20"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Selectors ─────────────────────────────── */}
            <div className="space-y-5 mb-8">
              <SelectorRow
                label="Gold Purity"
                options={purityOptions}
                selected={selectedPurity}
                onSelect={setSelectedPurity}
                wide
              />
              <SelectorRow
                label="Bracelet Length (inches)"
                options={braceletOptions}
                selected={selectedBracelet}
                onSelect={setSelectedBracelet}
                wide
              />
              <SelectorRow
                label="Ring Size (US)"
                options={ringSizeOptions}
                selected={selectedRingSize}
                onSelect={setSelectedRingSize}
              />
            </div>

            {/* ── Price breakdown ────────────────────────── */}
            <div className="mb-4 p-4 bg-ivory border border-border/20 space-y-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Base set (14K · 7&Prime; bracelet · ring 7)</span>
                <span>{eur(BASE_PRICE)}</span>
              </div>

              {purityAdder > 0 && (
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>18K upgrade (+12%)</span>
                  <span>+{eur(BASE_PRICE * purityAdder)}</span>
                </div>
              )}
              {braceletAdder > 0 && (
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Bracelet {selectedBracelet}&Prime; (+{Math.round(braceletAdder * 100)}%)</span>
                  <span>+{eur(BASE_PRICE * braceletAdder)}</span>
                </div>
              )}
              {ringAdder > 0 && (
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Ring size {selectedRingSize} (+{Math.round(ringAdder * 100)}%)</span>
                  <span>+{eur(BASE_PRICE * ringAdder)}</span>
                </div>
              )}

              <div className="border-t border-border/20 pt-2 flex justify-between items-baseline">
                <span className="text-sm font-medium">
                  {hasUpgrades ? 'Final Price' : 'Bundle Price'}
                </span>
                <span className="text-2xl font-medium">{eur(finalRounded)}</span>
              </div>
              <div className="flex justify-between items-center">
                <s className="text-xs text-muted-foreground">{eur(RETAIL_PRICE)}</s>
                {savings > 0 && (
                  <span className="text-xs text-accent font-medium">
                    Save {eur(savings)} with the bundle
                  </span>
                )}
              </div>
            </div>

            {/* Urgency */}
            <div className="flex items-center gap-2 mb-6 p-3 bg-ivory border border-border/20">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <p className="text-xs text-muted-foreground">
                Made to order — allow 10–14 business days for delivery.
                Order early for Mother&rsquo;s Day.
              </p>
            </div>

            {/* Primary CTA — adds selected variant to cart */}
            <div className="mb-4">
              <AddToCartButton
                lines={
                  selectedVariantId
                    ? [{merchandiseId: selectedVariantId, quantity: 1}]
                    : []
                }
                disabled={!selectedVariantId}
              >
                Add to Cart — {eur(finalRounded)}
              </AddToCartButton>
              {!selectedVariantId && (
                <p className="text-xs text-muted-foreground text-center mt-2">
                  This combination is currently unavailable. Please adjust your selections or inquire below.
                </p>
              )}
            </div>
            <Link
              to="/contact"
              prefetch="intent"
              className="block w-full btn-dawn text-center"
            >
              Inquire About This Set
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ──────────────────────────────────────── */}
      <section className="bg-ivory">
        <div className="container-wide section-dawn-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              {label: '4 Pieces',      desc: 'Complete set'},
              {label: 'IGI Certified', desc: 'Every diamond'},
              {label: 'Solid Gold',    desc: '14K or 18K'},
              {label: 'Free Shipping', desc: 'Insured worldwide'},
            ].map((item) => (
              <div key={item.label}>
                <p className="text-sm font-medium mb-1">{item.label}</p>
                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Storefront query ────────────────────────────────────── */
const BUNDLE_PRODUCT_QUERY = `#graphql
  query MothersDayBundle(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product(handle: "mothers-day-signature-set") {
      id
      variants(first: 100) {
        nodes {
          id
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
` as const;
