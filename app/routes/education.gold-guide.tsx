import {Link} from 'react-router';
import {motion} from 'framer-motion';
import type {Route} from './+types/education.gold-guide';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Gold Karat Guide — 9k, 14k, 18k Compared | Astreas'},
    {
      name: 'description',
      content:
        'Understand gold karats: 9k, 10k, 14k, 18k — purity, durability, color, and which is right for you.',
    },
  ];
}

export default function GoldGuide() {
  return (
    <div className="min-h-screen">
      <section className="container-narrow py-16">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <Link
            to="/education"
            prefetch="intent"
            className="caps-label text-accent mb-6 inline-block"
          >
            &larr; Back to Education
          </Link>
          <h1 className="serif-heading text-4xl md:text-5xl font-medium mb-4">
            Understanding Gold Karats
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Gold karat measures the purity of the gold in your jewelry.
            Understanding the differences helps you choose the right piece for
            your lifestyle, budget, and personal style.
          </p>
        </motion.div>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            What Does Karat Mean?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Karat (abbreviated as "k" or "kt") is a measure of gold purity.
            Pure gold is 24 karats, but pure gold is too soft for everyday
            jewelry. By alloying gold with other metals like copper, silver, and
            zinc, jewelers create durable pieces that maintain gold's
            characteristic beauty.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The karat number tells you the proportion of pure gold in the alloy.
            For example, 14k gold contains 14 parts gold out of 24 total parts —
            that's 58.3% pure gold.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            Karat Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="text-left py-3 caps-label text-[10px] text-muted-foreground font-medium">
                    Karat
                  </th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">
                    Gold Content
                  </th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">
                    Durability
                  </th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">
                    Color
                  </th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {k: '9k', content: '37.5%', durability: 'Highest', color: 'Lighter, more subtle', best: 'Budget-conscious buyers'},
                  {k: '10k', content: '41.7%', durability: 'Very High', color: 'Slightly warmer', best: 'Value with more gold'},
                  {k: '14k', content: '58.3%', durability: 'High', color: 'Warm, classic gold', best: 'Everyday wear (most popular)'},
                  {k: '18k', content: '75.0%', durability: 'Moderate', color: 'Rich, deep gold', best: 'Special pieces, luxury'},
                ].map((row) => (
                  <tr key={row.k} className="border-b border-border/40">
                    <td className="py-3 font-medium">{row.k}</td>
                    <td className="py-3 text-center text-muted-foreground">{row.content}</td>
                    <td className="py-3 text-center text-muted-foreground">{row.durability}</td>
                    <td className="py-3 text-center text-muted-foreground">{row.color}</td>
                    <td className="py-3 text-center text-muted-foreground">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            Which Karat Is Right for You?
          </h2>
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h3 className="font-medium mb-2">Choose 14k if...</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You want a piece that balances beauty, durability, and value.
                14k is the most popular choice worldwide because it offers a
                warm gold color with excellent resistance to everyday wear and
                tear.
              </p>
            </div>
            <div className="card-elevated p-6">
              <h3 className="font-medium mb-2">Choose 18k if...</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You want the richest possible gold color and don't mind slightly
                more careful handling. 18k is ideal for special occasion pieces,
                engagement rings, and jewelry you want to feel unmistakably
                luxurious.
              </p>
            </div>
            <div className="card-elevated p-6">
              <h3 className="font-medium mb-2">Choose 9k or 10k if...</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You want the absolute maximum durability and a more accessible
                price point. These lower karats contain more alloy metals,
                making them the hardest and most scratch-resistant options.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            Frequently Asked
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              {q: 'Does higher karat mean better quality?', a: "Not necessarily. Higher karat means more pure gold, but that also means softer metal. 14k is often considered the best overall choice because it balances purity with practicality."},
              {q: 'Will my gold jewelry tarnish?', a: 'Solid gold does not tarnish. Unlike gold-plated jewelry, solid gold maintains its color and luster indefinitely with basic care.'},
              {q: 'Is 14k gold the same everywhere?', a: "Yes. 14k gold always contains 58.3% pure gold, regardless of where it's made. The hallmark '585' is the international equivalent of 14k."},
            ].map((item, i) => (
              <AccordionItem key={i} value={`g-${i}`} className="border border-border/60 px-6">
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <div className="text-center py-8 border-t border-border/60">
          <p className="text-muted-foreground mb-4">
            Ready to explore our gold jewelry?
          </p>
          <Link to="/collections" prefetch="intent" className="btn-premium-filled inline-block">
            Shop Gold Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
