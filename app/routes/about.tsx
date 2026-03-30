import {motion} from 'framer-motion';
import type {Route} from './+types/about';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'About Astreas | Lab-Grown Diamond Fine Jewelry'},
    {
      name: 'description',
      content:
        'Astreas: lab-grown diamond fine jewelry crafted with transparency. IGI certified, solid gold, made to order.',
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
          >
            <p
              className="caps-label text-[9px] mb-6"
              style={{color: 'hsl(var(--gold))'}}
            >
              Our Story
            </p>
            <h1 className="serif-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
              Built on Transparency
            </h1>
            <p className="body-refined leading-[2] mb-5">
              Astreas was born from a frustration shared by jewelry buyers
              everywhere: beautiful pieces surrounded by vague descriptions,
              unclear materials, and hidden information.
            </p>
            <p className="body-refined leading-[2] mb-5">
              We believe that understanding what you're wearing shouldn't
              require a gemology degree. Every piece in our collection comes
              with complete material specifications, stone grades, and
              certification details — because transparency isn't just our
              policy, it's our purpose.
            </p>
            <p className="body-refined leading-[2]">
              Our jewelry is crafted from solid 14k and 18k gold, set with
              lab-grown diamonds that are chemically identical to mined stones.
              We chose lab-grown not because it's trendy, but because it offers
              complete origin traceability and allows us to invest more in the
              quality of each stone.
            </p>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <img
              src="/collection-all.jpg"
              alt="Our collection"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {[
            {
              title: 'Our Materials',
              desc: 'We use only solid gold (14k and 18k) and certified lab-grown diamonds. No plating, no hollow construction, no compromises on the materials that touch your skin.',
            },
            {
              title: 'Our Education',
              desc: "Every guide, comparison, and explanation on our site is written to empower you — not to sell you. We believe informed customers make better decisions and love their jewelry more.",
            },
            {
              title: 'Our Promise',
              desc: "Every piece ships with complete documentation, certification where applicable, and our 30-day satisfaction guarantee. If you're not confident in your purchase, neither are we.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.1 * i}}
              className="border border-border/30 p-10"
            >
              <h3 className="caps-label text-[10px] text-foreground mb-4">
                {item.title}
              </h3>
              <p className="body-refined leading-[2]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
