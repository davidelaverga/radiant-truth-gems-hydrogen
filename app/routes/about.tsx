import {motion} from 'framer-motion';
import {Link} from 'react-router';
import type {Route} from './+types/about';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'About Astreas | Lab-Grown Diamond Fine Jewelry — Italy'},
    {
      name: 'description',
      content:
        'Astreas creates timeless fine jewelry with IGI-certified lab-grown diamonds and solid gold. Designed in Italy, made to order, priced with transparency.',
    },
  ];
}

const fade = (delay = 0) => ({
  initial: {opacity: 0, y: 16},
  animate: {opacity: 1, y: 0},
  transition: {duration: 0.6, ease: 'easeOut', delay},
});

export default function About() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="container-wide py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div {...fade()}>
            <p className="caps-label text-[9px] mb-6" style={{color: 'hsl(var(--gold))'}}>
              Our Story
            </p>
            <h1 className="serif-heading text-4xl md:text-5xl mb-8 leading-[1.1]">
              Fine Jewelry, Honestly Made
            </h1>
            <p className="body-refined leading-[2] mb-5">
              Astreas was created for those who believe fine jewelry should feel deeply personal,
              beautifully made, and honestly presented. We create timeless pieces with IGI-certified
              lab-grown diamonds and solid gold, guided by a vision of modern luxury that values
              both beauty and transparency.
            </p>
            <p className="body-refined leading-[2]">
              Designed in Italy and made with intention, every Astreas piece is meant to celebrate
              meaningful moments with elegance, softness, and lasting presence.
            </p>
          </motion.div>
          <motion.div {...fade(0.2)}>
            <img
              src="/collection-all.jpg"
              alt="Astreas fine jewelry collection"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Who We Are ────────────────────────────────────────── */}
      <section className="section-dawn bg-secondary/30">
        <div className="container-narrow text-center">
          <motion.div {...fade()}>
            <p className="caps-label text-[9px] mb-6" style={{color: 'hsl(var(--gold))'}}>
              Who Astreas Is
            </p>
            <h2 className="serif-heading text-3xl md:text-4xl mb-8 leading-[1.2]">
              Luxury That Feels Intimate
            </h2>
            <p className="body-refined leading-[2] mb-5 max-w-2xl mx-auto">
              Astreas is a fine jewelry brand built around the idea that luxury should feel intimate,
              thoughtful, and trustworthy. We believe the pieces you wear closest to you should carry
              beauty, meaning, and clarity — not confusion, unnecessary markups, or compromise
              in quality.
            </p>
            <p className="body-refined leading-[2] max-w-xl mx-auto">
              Our collections are designed for the woman who values refinement, emotional
              significance, and craftsmanship she can feel proud of for years to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Three Pillars ─────────────────────────────────────── */}
      <section className="section-dawn">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                label: 'Lab-Grown Diamonds',
                title: 'Beauty and Integrity',
                body: 'We chose lab-grown diamonds because they offer the same brilliance, structure, and beauty as mined diamonds, while allowing us to create exceptional pieces with a more modern and transparent approach. For us, lab-grown diamonds are not about offering less — they are about offering beauty and integrity in a way that aligns with the future of fine jewelry.',
              },
              {
                label: 'Designed in Italy',
                title: 'A Standard of Taste',
                body: 'Designed in Italy means more than a location. It reflects a standard of taste, restraint, and refinement that shapes every Astreas piece. Our design direction is inspired by timeless elegance: clean lines, graceful proportions, soft femininity, and a sense of quiet luxury. We create pieces meant to feel enduring, elevated, and emotionally resonant.',
              },
              {
                label: 'Made to Order',
                title: 'Created For You',
                body: 'Each Astreas piece is made to order, allowing us to create your jewelry with greater care and intention rather than producing in excess. This deliberate process gives us the ability to focus on quality, detail, and thoughtful finishing — ensuring that your piece is created specifically for you.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...fade(0.1 * i)}
                className="border border-border/30 p-10"
              >
                <p className="caps-label text-[9px] mb-4" style={{color: 'hsl(var(--gold))'}}>
                  {item.label}
                </p>
                <h3 className="serif-heading text-xl mb-5">{item.title}</h3>
                <p className="body-refined leading-[2] text-muted-foreground">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality & Pricing ─────────────────────────────────── */}
      <section className="section-dawn bg-secondary/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div {...fade()}>
              <p className="caps-label text-[9px] mb-5" style={{color: 'hsl(var(--gold))'}}>
                Quality Standards
              </p>
              <h2 className="serif-heading text-2xl md:text-3xl mb-6 leading-[1.2]">
                Every Detail, Considered
              </h2>
              <p className="body-refined leading-[2] mb-4">
                At Astreas, quality begins with the materials we choose and continues through
                every stage of creation.
              </p>
              <p className="body-refined leading-[2]">
                We work with IGI-certified lab-grown diamonds and solid gold, selecting
                combinations that reflect both beauty and durability. Our standards are guided by
                elegance, craftsmanship, and consistency — so that each piece feels refined in
                appearance, secure in wear, and worthy of becoming part of your story.
              </p>
            </motion.div>
            <motion.div {...fade(0.15)}>
              <p className="caps-label text-[9px] mb-5" style={{color: 'hsl(var(--gold))'}}>
                Transparent Pricing
              </p>
              <h2 className="serif-heading text-2xl md:text-3xl mb-6 leading-[1.2]">
                Honest Value
              </h2>
              <p className="body-refined leading-[2] mb-4">
                We believe luxury should be exceptional in quality, but honest in pricing. Astreas
                was created to offer fine jewelry with greater clarity — without the inflated retail
                structure that often separates customers from the real value of what they are buying.
              </p>
              <p className="body-refined leading-[2]">
                By focusing on craftsmanship, certified materials, and a more direct model, we are
                able to present our pricing with transparency and intention. For us, transparent
                pricing is not about making luxury feel cheaper. It is about making it feel more
                truthful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Support & Aftercare ───────────────────────────────── */}
      <section className="section-dawn">
        <div className="container-narrow">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="caps-label text-[9px] mb-5" style={{color: 'hsl(var(--gold))'}}>
              Support &amp; Aftercare
            </p>
            <h2 className="serif-heading text-3xl md:text-4xl mb-6 leading-[1.2]">
              With You After the Purchase
            </h2>
            <p className="body-refined leading-[2] max-w-2xl mx-auto mb-4">
              We want the experience of choosing your jewelry to feel as reassuring as it is
              beautiful. From the moment you place your order, you can expect thoughtful
              communication, careful handling, and support that reflects the importance of the
              piece you are purchasing.
            </p>
            <p className="body-refined leading-[2] max-w-xl mx-auto">
              We are committed to standing behind our work through clear support, guidance, and
              aftercare — so that your Astreas piece continues to feel special long after it arrives.
            </p>
          </motion.div>
          <motion.div {...fade(0.15)} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {stat: 'IGI', label: 'Certified Diamonds'},
              {stat: '14k–18k', label: 'Solid Gold Only'},
              {stat: '30 Days', label: 'Return Policy'},
              {stat: '15–20', label: 'Days to Create'},
            ].map((item) => (
              <div key={item.stat} className="py-8 border border-border/30">
                <p className="serif-heading text-2xl mb-2">{item.stat}</p>
                <p className="caps-label text-[9px] text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="section-dawn bg-secondary/30">
        <div className="container-narrow text-center">
          <motion.div {...fade()}>
            <p className="caps-label text-[9px] mb-6" style={{color: 'hsl(var(--gold))'}}>
              Astreas
            </p>
            <h2 className="serif-heading text-3xl md:text-4xl mb-6 leading-[1.2]">
              Intentional. Elegant. Transparent.
            </h2>
            <p className="body-refined leading-[2] max-w-xl mx-auto mb-10">
              Astreas is our expression of modern fine jewelry — intentional, elegant, and created
              with transparency at its core. Every piece is designed to honor beauty, meaning, and
              the moments that stay with you.
            </p>
            <Link to="/collections" prefetch="intent" className="btn-dawn-filled inline-block">
              Explore the Collection
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
