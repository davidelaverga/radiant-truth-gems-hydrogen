import {Link} from 'react-router';
import {motion} from 'framer-motion';
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

const engagementRings = [
  {name: '1 Carat Lab Diamond Ring', carat: '1.00 ct Round Brilliant', retailPrice: 2400, ourPrice: 1590, description: 'Timeless brilliance with a refined silhouette.', bestSeller: true, image: '/pricing-ring-1ct.jpg'},
  {name: '1.5 Carat Lab Diamond Ring', carat: '1.50 ct Round Brilliant', retailPrice: 3000, ourPrice: 2200, description: 'A perfect balance of presence and sophistication.', image: '/pricing-ring-1.5ct.jpg'},
  {name: '2 Carat Lab Diamond Ring', carat: '2.00 ct Round Brilliant', retailPrice: 4000, ourPrice: 2690, description: 'Bold brilliance crafted for unforgettable moments.', image: '/pricing-ring-2ct.jpg'},
  {name: '3 Carat Lab Diamond Ring', carat: '3.00 ct Round Brilliant', retailPrice: 5500, ourPrice: 3890, description: 'Statement luxury with exceptional fire and clarity.', image: '/pricing-ring-3ct.jpg'},
];

const studEarrings = [
  {name: 'Diamond Stud Earrings', carat: '1.00 ct Total Weight', retailPrice: 1200, ourPrice: 890, description: 'Classic sparkle for everyday refinement.', image: '/pricing-earrings-1ct.jpg'},
  {name: 'Diamond Stud Earrings', carat: '2.00 ct Total Weight', retailPrice: 1800, ourPrice: 1290, description: 'Elevated brilliance with timeless appeal.', bestSeller: true, image: '/pricing-earrings-2ct.jpg'},
  {name: 'Diamond Stud Earrings', carat: '4.00 ct Total Weight', retailPrice: 3200, ourPrice: 2190, description: 'Radiant presence with luxurious impact.', image: '/pricing-earrings-4ct.jpg'},
  {name: 'Diamond Stud Earrings', carat: '6.00 ct Total Weight', retailPrice: 4800, ourPrice: 3190, description: 'Bold and luminous, designed to stand out.', image: '/pricing-earrings-6ct.jpg'},
];

const tennisBracelet = [
  {name: 'Lab Diamond Tennis Bracelet', carat: '5.00 ct Total Weight', retailPrice: 8500, ourPrice: 5900, description: 'Continuous brilliance in a seamless line of light.', image: '/pricing-bracelet-5ct.jpg'},
];

function PricingCard({item}: {item: typeof engagementRings[0]}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="border border-border/30 overflow-hidden group"
    >
      {item.image && (
        <div className="aspect-square overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <div className="p-6">
        {item.bestSeller && (
          <span className="caps-label text-[8px] text-accent mb-2 block">Best Seller</span>
        )}
        <h3 className="text-sm font-medium mb-1">{item.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{item.carat}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>
        <div className="flex items-baseline gap-3">
          <span className="text-lg font-medium">${item.ourPrice.toLocaleString()}</span>
          <s className="text-xs text-muted-foreground">${item.retailPrice.toLocaleString()}</s>
        </div>
        <p className="text-[10px] text-accent mt-1">
          Save ${(item.retailPrice - item.ourPrice).toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}

function SectionBlock({label, title, items}: {label: string; title: string; items: typeof engagementRings}) {
  return (
    <div className="mb-28 last:mb-0">
      <div className="text-center mb-16">
        <p className="caps-label text-[9px] mb-4" style={{color: 'hsl(var(--gold))'}}>{label}</p>
        <h2 className="serif-heading text-3xl md:text-4xl">{title}</h2>
      </div>
      <div className={`grid gap-6 md:gap-8 ${items.length === 1 ? 'max-w-md mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
        {items.map((item, i) => (
          <PricingCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-dawn bg-secondary/30">
        <div className="container-narrow text-center">
          <p className="caps-label text-[9px] mb-5 tracking-[0.3em]" style={{color: 'hsl(var(--gold))'}}>
            Transparent Pricing
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-6 leading-[1.1]">
            Fine Jewelry, Honestly Priced
          </h1>
          <p className="body-refined text-muted-foreground max-w-lg mx-auto leading-[2]">
            IGI-certified lab-grown diamonds set in solid gold. No retail markup
            — just exceptional craftsmanship at a price that makes sense.
          </p>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="section-dawn">
        <div className="container-wide">
          <SectionBlock label="Engagement" title="Engagement Rings" items={engagementRings} />
          <SectionBlock label="Studs" title="Diamond Stud Earrings" items={studEarrings} />
          <SectionBlock label="Bracelets" title="Tennis Bracelet" items={tennisBracelet} />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-dawn-sm bg-secondary/40">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {['IGI Certified', '14k & 18k Solid Gold', 'Free Insured Shipping', 'Made to Order'].map((t) => (
              <p key={t} className="caps-label text-[9px] text-muted-foreground">{t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dawn">
        <div className="container-narrow text-center">
          <h2 className="serif-heading text-3xl mb-6">Ready to Start?</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Every piece is customizable — choose your carat, metal, and diamond shape.
          </p>
          <Link to="/collections" prefetch="intent" className="btn-dawn-filled inline-block">
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
