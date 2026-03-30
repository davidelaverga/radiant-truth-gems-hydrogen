import {motion} from 'framer-motion';
import type {Route} from './+types/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'FAQ | Astreas — Lab-Grown Diamond Jewelry'},
    {
      name: 'description',
      content:
        'Frequently asked questions about lab-grown diamonds, gold karats, IGI certification, shipping, and returns at Astreas.',
    },
  ];
}

const faqCategories = [
  {
    title: 'Materials & Quality',
    items: [
      {
        q: 'Is a lab-grown diamond a real diamond?',
        a: "Yes. Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. They share the same hardness (10 on the Mohs scale), brilliance, and fire. The only difference is their origin — created in a controlled environment rather than mined from the earth.",
      },
      {
        q: 'What does 14k gold mean?',
        a: "14k gold contains 58.3% pure gold, alloyed with metals like copper and silver for durability. It's the most popular choice worldwide because it offers the best balance of a warm gold color, excellent scratch resistance, and reasonable price.",
      },
      {
        q: "What's the difference between 14k and 18k?",
        a: "18k gold contains 75% pure gold vs 14k's 58.3%. This gives 18k a richer, deeper color but makes it slightly softer. 14k is better for everyday wear; 18k is prized for its luxurious appearance.",
      },
      {
        q: 'Will my gold tarnish?',
        a: 'Solid gold does not tarnish. Unlike gold-plated or gold-filled jewelry, solid gold maintains its color and luster indefinitely with basic care.',
      },
    ],
  },
  {
    title: 'Certification',
    items: [
      {
        q: 'Do your pieces come with certification?',
        a: "All pieces featuring lab-grown diamonds of 0.30ct or above come with IGI certification. This certificate independently verifies the stone's cut, color, clarity, and carat weight — giving you complete transparency about what you're buying.",
      },
      {
        q: 'What is IGI?',
        a: "The International Gemological Institute (IGI) is one of the world's largest and most respected independent gemological laboratories. They evaluate diamonds and gemstones using rigorous, standardized criteria.",
      },
    ],
  },
  {
    title: 'Shopping & Care',
    items: [
      {
        q: 'How do I choose the right jewelry?',
        a: 'Start with our Education Hub for guides on gold karats, diamond quality, and stone comparisons. Every product page also includes detailed specifications so you can make an informed decision.',
      },
      {
        q: 'Is your jewelry suitable for everyday wear?',
        a: 'Most of our pieces are designed for daily wear. Each product page includes wear suitability information so you know exactly what to expect.',
      },
      {
        q: 'How do I care for my jewelry?',
        a: 'Clean gently with warm soapy water and a soft brush. Remove before swimming or applying lotions. Store separately in soft pouches. Professional cleaning once a year is recommended.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship worldwide with insured shipping. All orders receive complimentary shipping. International orders may be subject to local customs duties.',
      },
      {
        q: 'What is your return policy?',
        a: "We offer 30-day returns on unworn pieces in original packaging. If you're not completely confident in your purchase, we want to make it right.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <section className="container-narrow py-24 md:py-32">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: 'easeOut'}}
          className="text-center mb-20"
        >
          <p
            className="caps-label text-[9px] mb-5"
            style={{color: 'hsl(var(--gold))'}}
          >
            Support
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-5">
            Frequently Asked Questions
          </h1>
          <p className="body-refined max-w-md mx-auto">
            Honest answers to the questions our customers ask most often.
          </p>
        </motion.div>
        {faqCategories.map((cat) => (
          <div key={cat.title} className="mb-16">
            <h2 className="caps-label text-[10px] text-foreground mb-6">
              {cat.title}
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {cat.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`${cat.title}-${i}`}
                  className="border border-border/30 px-6"
                >
                  <AccordionTrigger className="text-[13px] font-normal hover:no-underline py-5 tracking-wide">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="body-refined pb-6 leading-[2]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>
    </div>
  );
}
