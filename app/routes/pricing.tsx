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

const pricingFactors = [
  {
    label: 'Diamond',
    title: 'Lab-Grown Diamond Quality',
    body: 'Every stone is IGI-certified and selected for exceptional cut, clarity, and brilliance. Carat weight is the primary variable in diamond pricing — and with lab-grown, you receive significantly more stone for your investment.',
  },
  {
    label: 'Metal',
    title: 'Solid Gold Setting',
    body: 'All Astreas pieces are crafted in solid 14K or 18K gold — never plated, never hollow. The gold karat and colour you choose (yellow, white, or rose) factor into the final price alongside the diamond.',
  },
  {
    label: 'Craft',
    title: 'Made to Order',
    body: 'Each piece is made to order in our Italian atelier. There is no mass production, no middlemen, and no retail markup. You pay for the materials and the craftsmanship — nothing else.',
  },
];

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
            Exceptional Craftsmanship. Honest Value.
          </h1>
          <p className="body-refined text-muted-foreground max-w-lg mx-auto leading-[2]">
            At Astreas, every piece is crafted with IGI-certified lab-grown diamonds and solid gold,
            then offered with the clarity and fairness luxury should have always had.
          </p>
        </div>
      </section>

      {/* What shapes the price */}
      <section className="section-dawn">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="caps-label text-[9px] mb-4" style={{color: 'hsl(var(--gold))'}}>How We Price</p>
            <h2 className="serif-heading text-3xl md:text-4xl">What Goes Into Every Price</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {pricingFactors.map((factor) => (
              <div key={factor.label} className="text-center">
                <p className="caps-label text-[9px] mb-4 text-accent">{factor.label}</p>
                <h3 className="serif-heading text-xl mb-4">{factor.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{factor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial note */}
      <section className="section-dawn-sm bg-secondary/30">
        <div className="container-narrow text-center">
          <p className="caps-label text-[9px] mb-5 tracking-[0.3em]" style={{color: 'hsl(var(--gold))'}}>
            No Guesswork
          </p>
          <h2 className="serif-heading text-2xl md:text-3xl mb-6 leading-[1.2]">
            Your price is built around your piece
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            When you customise a ring, earring, or bracelet, the final price reflects
            your exact choices — diamond carat, gold karat, and metal colour. No
            hidden fees. No surprise charges.
          </p>
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
