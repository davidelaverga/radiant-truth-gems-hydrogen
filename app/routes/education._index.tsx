import {Link} from 'react-router';
import {motion} from 'framer-motion';
import {
  BookOpen,
  Diamond,
  Scale,
  ShieldCheck,
  Sparkles,
  Ruler,
} from 'lucide-react';
import type {Route} from './+types/education._index';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Jewelry Education Hub | Astreas'},
    {
      name: 'description',
      content:
        'Learn about gold karats, lab-grown diamonds, stone comparisons, certification, and jewelry care. Knowledge is the ultimate luxury.',
    },
  ];
}

const guides = [
  {
    title: 'Gold Guide',
    desc: "Understand the real difference between 9k, 14k, and 18k gold — and which is right for you.",
    icon: Sparkles,
    href: '/education/gold-guide',
    num: '01',
  },
  {
    title: 'Lab Diamond Guide',
    desc: 'Learn what lab-grown diamonds are, how they compare to mined diamonds, and why quality still matters.',
    icon: Diamond,
    href: '/education/lab-diamond-guide',
    num: '02',
  },
  {
    title: 'Stone Comparison',
    desc: 'Compare lab-grown diamond, moissanite, and natural diamond — sparkle, durability, and value.',
    icon: Scale,
    href: '/education/stone-comparison',
    num: '03',
  },
  {
    title: 'Certification Guide',
    desc: 'What IGI certification means, why it matters, and how to read a diamond certificate.',
    icon: ShieldCheck,
    href: '/education/certification-guide',
    num: '04',
  },
  {
    title: 'Jewelry Care',
    desc: 'How to clean, store, and protect your fine jewelry so it lasts for generations.',
    icon: BookOpen,
    href: '/education/jewelry-care',
    num: '05',
  },
  {
    title: 'Sizing Guide',
    desc: 'Find your perfect ring size with our easy-to-follow measurement guide.',
    icon: Ruler,
    href: '/education/sizing-guide',
    num: '06',
  },
];

export default function EducationHub() {
  return (
    <div className="min-h-screen">
      <section className="container-wide py-16">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="caps-label text-accent mb-3">Education</p>
          <h1 className="serif-heading text-4xl md:text-5xl font-medium mb-4">
            The Jewelry Guide
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Knowledge is the ultimate luxury. Our guides are designed to help
            you understand exactly what you're buying — so you can shop with
            clarity and confidence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.title}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: i * 0.1}}
            >
              <Link
                to={guide.href}
                prefetch="intent"
                className="block card-elevated p-8 h-full hover:border-accent/30 transition-colors group"
              >
                <span className="serif-heading text-4xl text-accent/40 font-medium">
                  {guide.num}
                </span>
                <guide.icon className="w-5 h-5 text-accent mt-4 mb-3" />
                <h2 className="serif-heading text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {guide.desc}
                </p>
                <span className="caps-label text-accent">Read Guide →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
