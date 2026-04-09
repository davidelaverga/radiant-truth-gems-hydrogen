import {Link} from 'react-router';
import {motion} from 'framer-motion';
import type {Route} from './+types/education.stone-comparison';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Stone Comparison — Lab Diamond vs Moissanite vs Natural | Astreas'},
    {
      name: 'description',
      content:
        'Compare lab-grown diamonds, moissanite, and natural diamonds: sparkle, durability, price, and certification.',
    },
  ];
}

export default function StoneComparison() {
  return (
    <div className="min-h-screen">
      <section className="container-narrow py-16">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <Link to="/education" prefetch="intent" className="caps-label text-accent mb-6 inline-block">
            &larr; Back to Education
          </Link>
          <h1 className="serif-heading text-4xl md:text-5xl font-medium mb-4">
            Stone Comparison
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Understanding the differences between lab-grown diamond, moissanite,
            and natural diamond helps you make the right choice for your
            lifestyle and values.
          </p>
        </motion.div>

        <section className="mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="text-left py-3 caps-label text-[10px] text-muted-foreground font-medium">Property</th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">Lab Diamond</th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">Moissanite</th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">Natural Diamond</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {prop: 'Composition', lab: 'Carbon', mois: 'Silicon Carbide', nat: 'Carbon'},
                  {prop: 'Hardness (Mohs)', lab: '10', mois: '9.25', nat: '10'},
                  {prop: 'Brilliance', lab: 'Exceptional', mois: 'Very High (more fire)', nat: 'Exceptional'},
                  {prop: 'Sparkle Type', lab: 'White light return', mois: 'Rainbow fire', nat: 'White light return'},
                  {prop: 'Durability', lab: 'Lifetime', mois: 'Lifetime', nat: 'Lifetime'},
                  {prop: 'Price (1ct equiv.)', lab: '€1,000–€3,000', mois: '€300–€600', nat: '€4,000–€10,000+'},
                  {prop: 'Certification', lab: 'IGI / GIA', mois: 'Limited', nat: 'GIA / IGI'},
                  {prop: 'Visual Identity', lab: 'Identical to mined', mois: 'Distinct rainbow effect', nat: 'Traditional benchmark'},
                ].map((row) => (
                  <tr key={row.prop} className="border-b border-border/40">
                    <td className="py-3 text-muted-foreground">{row.prop}</td>
                    <td className="py-3 text-center font-medium">{row.lab}</td>
                    <td className="py-3 text-center text-muted-foreground">{row.mois}</td>
                    <td className="py-3 text-center text-muted-foreground">{row.nat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            Who Is Each Stone For?
          </h2>
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <h3 className="font-medium mb-2">Lab-Grown Diamond</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For buyers who want a real diamond with maximum transparency and
                value. Ideal if certification, quality grading, and traditional
                diamond appearance matter to you.
              </p>
            </div>
            <div className="card-elevated p-6">
              <h3 className="font-medium mb-2">Moissanite</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For buyers who want maximum sparkle at an accessible price
                point. Moissanite has more rainbow fire than diamond and is
                nearly as hard. It's a beautiful stone in its own right — just
                different from diamond.
              </p>
            </div>
            <div className="card-elevated p-6">
              <h3 className="font-medium mb-2">Natural Diamond</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For buyers who value the geological rarity and tradition of
                mined diamonds. Natural diamonds carry cultural significance and
                perceived investment value, though they come at a significantly
                higher price.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center py-8 border-t border-border/60">
          <p className="text-muted-foreground mb-4">
            Ready to find your perfect stone?
          </p>
          <Link to="/collections" prefetch="intent" className="btn-premium-filled inline-block">
            Shop Lab Diamonds
          </Link>
        </div>
      </section>
    </div>
  );
}
