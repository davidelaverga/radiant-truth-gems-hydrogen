import {Link} from 'react-router';
import type {Route} from './+types/pricing';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Pricing | Astreas — Transparent Lab-Grown Diamond Jewelry Prices'},
    {
      name: 'description',
      content:
        'Transparent pricing for IGI-certified lab-grown diamond jewelry in solid 14K and 18K gold. No retail markup.',
    },
  ];
}

/* ─────────────────────────────────────────────────────────────
   Real catalog items — display only, no prices shown
───────────────────────────────────────────────────────────────*/
interface EditorialItem {
  name: string;
  sub: string;
  description: string;
  image: string;
  link: string;
}

/**
 * Rings: the 3 design families that actually exist in the catalog.
 * Images sourced from the design configurator (confirmed present in /public).
 * The 4 generic "1ct / 1.5ct / 2ct / 3ct Round Brilliant" cards that
 * previously appeared here did not correspond to real catalog products
 * and have been removed.
 */
const rings: EditorialItem[] = [
  {
    name: 'Classic Solitaire Ring',
    sub: 'Round · Oval · Princess · Pear · Emerald · Cushion · Marquise',
    description: 'A timeless solitaire with refined proportions and everyday elegance.',
    image: '/signature-solitaire-ring.jpg',
    link: '/design/classic-solitaire-ring',
  },
  {
    name: 'Side Stone Ring',
    sub: 'Round · Oval · Princess · Pear · Emerald · Cushion · Marquise',
    description: 'Elegance amplified with delicate accent stones flanking the centre diamond.',
    image: '/signature-sidestone-ring.jpg',
    link: '/design/side-stone-ring',
  },
];

/** Stud earrings — display by carat weight. Prices removed. */
const studEarrings: EditorialItem[] = [
  {
    name: 'Diamond Stud Earrings',
    sub: '1.00 ct Total Weight',
    description: 'Classic sparkle for everyday refinement.',
    image: '/pricing-earrings-1ct.jpg',
    link: '/design/diamond-stud-earrings',
  },
  {
    name: 'Diamond Stud Earrings',
    sub: '2.00 ct Total Weight',
    description: 'Elevated brilliance with timeless appeal.',
    image: '/pricing-earrings-2ct.jpg',
    link: '/design/diamond-stud-earrings',
  },
  {
    name: 'Diamond Stud Earrings',
    sub: '4.00 ct Total Weight',
    description: 'Radiant presence with luxurious impact.',
    image: '/pricing-earrings-4ct.jpg',
    link: '/design/diamond-stud-earrings',
  },
  {
    name: 'Diamond Stud Earrings',
    sub: '6.00 ct Total Weight',
    description: 'Bold and luminous, designed to stand out.',
    image: '/pricing-earrings-6ct.jpg',
    link: '/design/diamond-stud-earrings',
  },
];

/** Tennis bracelet — display only. Price removed. */
const tennisBracelet: EditorialItem[] = [
  {
    name: 'Lab Diamond Tennis Bracelet',
    sub: '5.00 ct Total Weight',
    description: 'Continuous brilliance in a seamless line of light.',
    image: '/pricing-bracelet-5ct.jpg',
    link: '/design/tennis-bracelet',
  },
];

/* ─────────────────────────────────────────────────────────────
   Components
───────────────────────────────────────────────────────────────*/
function EditorialCard({item, eager}: {item: EditorialItem; eager?: boolean}) {
  return (
    <div className="border border-border/30 overflow-hidden group">
      <Link to={item.link} prefetch="intent" className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading={eager ? 'eager' : 'lazy'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-sm font-medium mb-1">{item.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{item.sub}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>
        <Link to={item.link} prefetch="intent" className="block text-center btn-dawn text-xs">
          Explore &amp; Customise
        </Link>
      </div>
    </div>
  );
}

function SectionBlock({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: EditorialItem[];
}) {
  const gridCols =
    items.length === 1
      ? 'max-w-md mx-auto'
      : items.length === 2
      ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
      : items.length === 3
      ? 'grid-cols-1 sm:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="mb-28 last:mb-0">
      <div className="text-center mb-16">
        <p className="caps-label text-[9px] mb-4" style={{color: 'hsl(var(--gold))'}}>
          {label}
        </p>
        <h2 className="serif-heading text-3xl md:text-4xl">{title}</h2>
      </div>
      <div className={`grid gap-6 md:gap-8 ${gridCols}`}>
        {items.map((item, i) => (
          <EditorialCard key={i} item={item} eager={i < 4} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────*/
export default function Pricing() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="section-dawn bg-secondary/30">
        <div className="container-narrow text-center">
          <p
            className="caps-label text-[9px] mb-5 tracking-[0.3em]"
            style={{color: 'hsl(var(--gold))'}}
          >
            Transparent Pricing
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-6 leading-[1.1]">
            Exceptional Craftsmanship. Honest Value.
          </h1>
          <p className="body-refined text-muted-foreground max-w-lg mx-auto leading-[2]">
            At Astreas, every piece is crafted with IGI-certified lab-grown diamonds and solid
            gold, then offered with the clarity and fairness luxury should have always had.
          </p>
        </div>
      </section>

      {/* Editorial product sections — display only, no prices */}
      <section className="section-dawn">
        <div className="container-wide">
          <SectionBlock label="Rings" title="Engagement Rings" items={rings} />
          <SectionBlock label="Studs" title="Diamond Stud Earrings" items={studEarrings} />
          <SectionBlock label="Bracelets" title="Tennis Bracelet" items={tennisBracelet} />
        </div>
      </section>

      {/* Brief pricing philosophy */}
      <section className="section-dawn-sm bg-secondary/30">
        <div className="container-narrow text-center">
          <p
            className="caps-label text-[9px] mb-5 tracking-[0.3em]"
            style={{color: 'hsl(var(--gold))'}}
          >
            No Guesswork
          </p>
          <h2 className="serif-heading text-2xl md:text-3xl mb-6 leading-[1.2]">
            Your price is built around your piece
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Every configuration — diamond carat, gold karat, metal colour — is priced
            transparently in the configurator. No hidden fees. No retail markup.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-dawn-sm bg-secondary/40">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {['IGI Certified', '14k & 18k Solid Gold', 'Free Insured Shipping', 'Made to Order'].map(
              (t) => (
                <p key={t} className="caps-label text-[9px] text-muted-foreground">
                  {t}
                </p>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dawn">
        <div className="container-narrow text-center">
          <h2 className="serif-heading text-3xl mb-6">Ready to Start?</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Every piece is customisable — choose your carat, metal, and diamond shape.
          </p>
          <Link to="/collections" prefetch="intent" className="btn-dawn-filled inline-block">
            Explore the Collection
          </Link>
        </div>
      </section>

    </div>
  );
}
