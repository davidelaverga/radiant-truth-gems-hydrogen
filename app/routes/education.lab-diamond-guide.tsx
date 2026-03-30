import {Link} from 'react-router';
import {motion} from 'framer-motion';
import type {Route} from './+types/education.lab-diamond-guide';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Lab-Grown Diamond Guide | Astreas'},
    {
      name: 'description',
      content:
        'Learn about lab-grown diamonds: how they compare to mined diamonds, the 4Cs, common myths, and why quality matters.',
    },
  ];
}

export default function LabDiamondGuide() {
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
            Lab-Grown Diamonds
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Lab-grown diamonds are real diamonds — chemically, physically, and
            optically identical to mined stones. The only difference is their
            origin.
          </p>
        </motion.div>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            What Is a Lab-Grown Diamond?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            A lab-grown diamond is created by replicating the conditions under
            which diamonds form naturally — extreme heat and pressure applied to
            a carbon seed. The result is a crystal that is molecularly identical
            to a mined diamond.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            They share the same hardness (10 on the Mohs scale), the same
            refractive index, the same thermal conductivity, and the same
            brilliant fire. A gemologist cannot distinguish between them without
            specialized equipment.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            Lab-Grown vs. Mined
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="text-left py-3 caps-label text-[10px] text-muted-foreground font-medium">Property</th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">Lab-Grown</th>
                  <th className="text-center py-3 caps-label text-[10px] text-muted-foreground font-medium">Mined</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {prop: 'Chemical Composition', lab: 'Pure Carbon', mined: 'Pure Carbon'},
                  {prop: 'Hardness', lab: '10 Mohs', mined: '10 Mohs'},
                  {prop: 'Brilliance', lab: 'Identical', mined: 'Identical'},
                  {prop: 'Certification', lab: 'IGI / GIA', mined: 'GIA / IGI'},
                  {prop: 'Environmental Impact', lab: 'Significantly Lower', mined: 'Higher'},
                  {prop: 'Price', lab: '40-60% Less', mined: 'Full Market Price'},
                  {prop: 'Origin Traceability', lab: 'Complete', mined: 'Variable'},
                ].map((row) => (
                  <tr key={row.prop} className="border-b border-border/40">
                    <td className="py-3 text-muted-foreground">{row.prop}</td>
                    <td className="py-3 text-center font-medium">{row.lab}</td>
                    <td className="py-3 text-center text-muted-foreground">{row.mined}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">
            The 4Cs — Simply Explained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {title: 'Cut', desc: "How well the diamond is shaped and faceted. Cut determines how much light the diamond captures and reflects — it's the biggest factor in a diamond's brilliance."},
              {title: 'Color', desc: 'Diamond color is graded from D (colorless) to Z (light yellow). Grades D through F are considered colorless, while G through J are near-colorless and excellent value.'},
              {title: 'Clarity', desc: 'Clarity measures internal imperfections (inclusions). VVS1/VVS2 are very, very slightly included — meaning imperfections are invisible to the naked eye.'},
              {title: 'Carat', desc: 'Carat measures weight, not size. A 1-carat diamond is approximately 6.5mm in diameter. Two diamonds of the same carat weight can appear different sizes depending on cut.'},
            ].map((item) => (
              <div key={item.title} className="card-elevated p-6">
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="serif-heading text-2xl font-medium mb-6">Common Myths</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              {q: '"Lab diamonds aren\'t real diamonds"', a: 'This is incorrect. Lab-grown diamonds have the exact same chemical, physical, and optical properties as mined diamonds. They are real diamonds by every scientific and gemological standard.'},
              {q: '"Lab diamonds don\'t hold value"', a: 'All diamonds — mined or lab-grown — depreciate after purchase. Lab-grown diamonds offer significantly better value at the point of purchase, allowing you to invest in a higher quality stone for the same budget.'},
              {q: '"You can tell the difference"', a: 'A trained gemologist cannot distinguish a lab-grown diamond from a mined diamond without specialized equipment. They look, feel, and sparkle identically.'},
            ].map((item, i) => (
              <AccordionItem key={i} value={`m-${i}`} className="border border-border/60 px-6">
                <AccordionTrigger className="text-sm font-medium hover:no-underline py-5">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <div className="text-center py-8 border-t border-border/60">
          <p className="text-muted-foreground mb-4">
            Explore our lab diamond collection
          </p>
          <Link to="/collections" prefetch="intent" className="btn-premium-filled inline-block">
            Shop Lab Diamonds
          </Link>
        </div>
      </section>
    </div>
  );
}
