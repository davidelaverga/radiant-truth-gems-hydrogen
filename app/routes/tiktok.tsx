import {useState, useMemo, useEffect} from 'react';
import {Link} from 'react-router';
import type {Route} from './+types/tiktok';
import {motion, AnimatePresence} from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Award,
  Truck,
  Gift,
  Lock,
  Gem,
  Heart,
  Star,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import {getDesignFamily, getConfiguratorImage} from '~/lib/design-families';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Design The Ring She Will Never Stop Showing | Astreas'},
    {
      name: 'description',
      content:
        'Certified lab-grown diamonds handcrafted in 14K or 18K gold. Luxury quality with honest pricing. Design the ring of her dreams.',
    },
    {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5'},
  ];
}

export async function loader({}: Route.LoaderArgs) {
  return {};
}

/* ---------- CONFIG ---------- */

const SHAPES = [
  {value: 'Round', label: 'Round', tag: 'Classic brilliance'},
  {value: 'Oval', label: 'Oval', tag: 'Soft & timeless'},
  {value: 'Emerald', label: 'Emerald', tag: 'Elegant & sophisticated'},
  {value: 'Pear', label: 'Pear', tag: 'Romantic & unique'},
  {value: 'Cushion', label: 'Cushion', tag: 'Vintage softness'},
  {value: 'Princess', label: 'Princess', tag: 'Modern sparkle'},
] as const;

const CARATS = [
  {value: '1.0 ct', label: '1 ct', sub: 'Delicate & refined'},
  {value: '1.5 ct', label: '1.5 ct', sub: 'Elegant presence'},
  {value: '2.0 ct', label: '2 ct', sub: 'Statement sparkle'},
  {value: '3.0 ct', label: '3 ct', sub: 'Unforgettable'},
] as const;

const COLORS = [
  {value: 'yellow', label: 'Yellow Gold', swatch: 'hsl(43 70% 55%)'},
  {value: 'white', label: 'White Gold', swatch: 'hsl(0 0% 88%)'},
  {value: 'rose', label: 'Rose Gold', swatch: 'hsl(10 50% 72%)'},
] as const;

const PURITIES = [
  {value: '14K', label: '14K Gold', sub: 'Durable everyday luxury'},
  {value: '18K', label: '18K Gold', sub: 'Richer color, finer purity'},
] as const;

function buildDesignUrl(opts: {
  shape: string;
  carat: string;
  gold: string;
}) {
  const params = new URLSearchParams();
  params.set('shape', opts.shape);
  params.set('Carat', opts.carat);
  params.set('Gold', opts.gold);
  return `/design/classic-solitaire-ring?${params.toString()}`;
}

/* ---------- PAGE ---------- */

export default function TikTokLanding() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <TrustBar />
      <ShapeExploration />
      <Customizer />
      <EscapePath />
      <BrandStory />
      <WhyLabDiamonds />
      <WhyAstreas />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <StickyMobileCTA />
    </div>
  );
}

/* ---------- 1. HERO ---------- */

function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#1a1410]">
      {/* Background: cinematic looping video (falls back to poster on mobile data) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-ring.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Soft warm gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,15,12,0.15) 0%, rgba(20,15,12,0.35) 55%, rgba(20,15,12,0.75) 100%)',
        }}
      />

      {/* Subtle gold shimmer */}
      <motion.div
        aria-hidden
        initial={{opacity: 0}}
        animate={{opacity: 0.18}}
        transition={{duration: 2.4, ease: 'easeOut'}}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 35%, rgba(212,175,121,0.45) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      <motion.div
        initial={{opacity: 0, y: 28}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.1, ease: [0.22, 1, 0.36, 1]}}
        className="relative z-10 text-center px-6 max-w-[640px] mx-auto pb-24 md:pb-12 pt-20 md:pt-0"
      >
        <p
          className="uppercase text-[10px] md:text-[11px] tracking-[0.4em] mb-6 text-white/70"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Lab-Grown Diamond Engagement Rings
        </p>

        <h1
          className="text-white text-[36px] sm:text-[44px] md:text-[58px] leading-[1.08] font-light mb-5"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            letterSpacing: '0.005em',
            textWrap: 'balance',
          }}
        >
          Design The Ring She Will <em className="italic text-[#e8c98a]">Never Stop</em> Showing
        </h1>

        <p
          className="text-white/80 text-[14px] md:text-[16px] leading-[1.7] max-w-[480px] mx-auto mb-9"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Certified lab-grown diamonds handcrafted in 14K or 18K gold. Luxury quality with honest pricing.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
          <a
            href="#customize"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-500"
            style={{
              background: 'hsl(var(--gold))',
              color: '#1a1410',
              letterSpacing: '0.22em',
            }}
          >
            Design Your Ring
          </a>
          <Link
            to="/collections/rings"
            prefetch="intent"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[11px] font-semibold uppercase border border-white/70 text-white hover:bg-white hover:text-[#1a1410] transition-all duration-500"
            style={{letterSpacing: '0.22em'}}
          >
            Explore Ring Styles
          </Link>
        </div>

        {/* Scroll hint */}
        <motion.div
          aria-hidden
          initial={{opacity: 0}}
          animate={{opacity: 1, y: [0, 8, 0]}}
          transition={{
            opacity: {delay: 1.6, duration: 1},
            y: {repeat: Infinity, duration: 2.2, ease: 'easeInOut'},
          }}
          className="hidden md:block mt-14 text-white/55"
        >
          <ChevronDown className="w-4 h-4 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- TRUST BAR ---------- */

function TrustBar() {
  const items = [
    {Icon: Award, label: 'IGI Certified'},
    {Icon: Sparkles, label: 'DEF Color'},
    {Icon: Gem, label: 'VS1 Clarity'},
    {Icon: Truck, label: 'Free Insured Shipping'},
    {Icon: Gift, label: 'Luxury Packaging'},
    {Icon: Lock, label: 'Secure Checkout'},
  ];

  return (
    <section
      className="border-y border-[#e8dfd1]/60"
      style={{background: 'hsl(var(--ivory))'}}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-12 py-6 md:py-7">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-y-5 gap-x-3 md:gap-x-6">
          {items.map(({Icon, label}, i) => (
            <motion.div
              key={label}
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: i * 0.05}}
              className="flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2.5"
            >
              <Icon
                className="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0"
                style={{color: 'hsl(var(--gold))'}}
                strokeWidth={1.4}
              />
              <span
                className="text-[10px] md:text-[11px] uppercase text-foreground/75 text-center"
                style={{
                  letterSpacing: '0.16em',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. SHAPE EXPLORATION ---------- */

function ShapeExploration() {
  const family = getDesignFamily('classic-solitaire-ring');

  return (
    <section
      id="shapes"
      className="py-20 md:py-28"
      style={{background: '#fbf7f1'}}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-[10px] md:text-[11px] uppercase mb-4"
            style={{
              letterSpacing: '0.3em',
              color: 'hsl(var(--gold-dark))',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Find Your Shape
          </p>
          <h2
            className="text-[32px] md:text-[44px] leading-[1.1] font-light mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              letterSpacing: '0.005em',
              textWrap: 'balance',
            }}
          >
            Not Your Style?
          </h2>
          <p
            className="text-[14px] md:text-[16px] text-foreground/65 max-w-[460px] mx-auto leading-[1.7]"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Explore different diamond shapes and find the one that feels like yours.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {SHAPES.map((shape, i) => {
            const img =
              family?.shapeImages?.[shape.value] ||
              `/shape-${shape.value.toLowerCase()}-solitaire.jpg`;
            return (
              <motion.div
                key={shape.value}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-50px'}}
                transition={{duration: 0.55, delay: i * 0.06}}
              >
                <Link
                  to={buildDesignUrl({
                    shape: shape.value,
                    carat: '1.0 ct',
                    gold: '14K',
                  })}
                  prefetch="intent"
                  className="group block bg-white border border-[#ece4d4] hover:border-[#d4af79] transition-all duration-500"
                >
                  <div className="aspect-square overflow-hidden bg-[#f4ede0]">
                    <img
                      src={img}
                      alt={`${shape.label} cut diamond ring`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                    />
                  </div>
                  <div className="px-3 md:px-5 py-4 md:py-5 text-center">
                    <h3
                      className="text-[18px] md:text-[22px] font-light mb-1"
                      style={{
                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                      }}
                    >
                      {shape.label}
                    </h3>
                    <p
                      className="text-[10px] md:text-[11px] uppercase text-foreground/55"
                      style={{
                        letterSpacing: '0.2em',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}
                    >
                      {shape.tag}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. CUSTOMIZER ---------- */

function Customizer() {
  const family = getDesignFamily('classic-solitaire-ring');
  const [shape, setShape] = useState<string>('Round');
  const [carat, setCarat] = useState<string>('1.0 ct');
  const [color, setColor] = useState<string>('yellow');
  const [purity, setPurity] = useState<string>('14K');

  const previewImage = useMemo(() => {
    if (!family) return '/sol-wg-round.jpg';
    return getConfiguratorImage(family, color, shape);
  }, [family, color, shape]);

  const designUrl = buildDesignUrl({shape, carat, gold: purity});

  return (
    <section
      id="customize"
      className="py-20 md:py-32"
      style={{background: 'hsl(var(--ivory))'}}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-[10px] md:text-[11px] uppercase mb-4"
            style={{
              letterSpacing: '0.3em',
              color: 'hsl(var(--gold-dark))',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Design Studio
          </p>
          <h2
            className="text-[32px] md:text-[44px] leading-[1.1] font-light mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            Design A Ring That Feels Like Yours
          </h2>
          <p
            className="text-[14px] md:text-[16px] text-foreground/65 max-w-[480px] mx-auto leading-[1.7]"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Four gentle choices. One unforgettable ring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Live Preview */}
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-square bg-white border border-[#ece4d4] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={previewImage}
                  src={previewImage}
                  alt={`${shape} cut solitaire in ${color} gold`}
                  initial={{opacity: 0, scale: 1.02}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.55, ease: [0.22, 1, 0.36, 1]}}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-white/85 backdrop-blur-sm px-3 py-1.5 text-[9px] md:text-[10px] uppercase"
                style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Live Preview
              </div>
            </div>
            <div className="mt-5 text-center">
              <p
                className="text-[11px] md:text-[12px] uppercase text-foreground/55"
                style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Classic Solitaire · {shape} · {carat} · {purity} {COLORS.find(c => c.value === color)?.label}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-10 md:space-y-12">
            <Step number="01" label="Choose Your Shape">
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {SHAPES.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setShape(s.value)}
                    className={`group flex flex-col items-center gap-2 p-3 md:p-4 border transition-all duration-400 ${
                      shape === s.value
                        ? 'border-[#bf9255] bg-white'
                        : 'border-[#e6dcc7] bg-white/40 hover:border-[#d4af79] hover:bg-white'
                    }`}
                  >
                    <span
                      className="text-[14px] md:text-[15px] font-light"
                      style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                    >
                      {s.label}
                    </span>
                    <span
                      className="text-[8.5px] md:text-[9.5px] uppercase text-foreground/50 text-center leading-tight"
                      style={{letterSpacing: '0.16em', fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      {s.tag}
                    </span>
                  </button>
                ))}
              </div>
            </Step>

            <Step number="02" label="Choose Carat Size">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                {CARATS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setCarat(c.value)}
                    className={`flex flex-col items-center justify-center py-4 md:py-5 px-2 border transition-all duration-400 ${
                      carat === c.value
                        ? 'border-[#bf9255] bg-white'
                        : 'border-[#e6dcc7] bg-white/40 hover:border-[#d4af79] hover:bg-white'
                    }`}
                  >
                    <span
                      className="text-[18px] md:text-[22px] font-light"
                      style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                    >
                      {c.label}
                    </span>
                    <span
                      className="text-[8.5px] md:text-[9.5px] uppercase text-foreground/50 mt-1 text-center leading-tight"
                      style={{letterSpacing: '0.16em', fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      {c.sub}
                    </span>
                  </button>
                ))}
              </div>
            </Step>

            <Step number="03" label="Choose Gold Color">
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setColor(c.value)}
                    className={`flex flex-col items-center gap-2.5 py-4 px-2 border transition-all duration-400 ${
                      color === c.value
                        ? 'border-[#bf9255] bg-white'
                        : 'border-[#e6dcc7] bg-white/40 hover:border-[#d4af79] hover:bg-white'
                    }`}
                  >
                    <span
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/10 shadow-inner"
                      style={{
                        background: c.swatch,
                        boxShadow:
                          color === c.value
                            ? '0 0 0 2px hsl(var(--gold)), inset 0 0 8px rgba(0,0,0,0.08)'
                            : 'inset 0 0 8px rgba(0,0,0,0.08)',
                      }}
                    />
                    <span
                      className="text-[10px] md:text-[11px] uppercase text-foreground/70"
                      style={{letterSpacing: '0.16em', fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3 mt-3">
                {PURITIES.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setPurity(p.value)}
                    className={`flex items-center justify-between py-3.5 px-4 border transition-all duration-400 ${
                      purity === p.value
                        ? 'border-[#bf9255] bg-white'
                        : 'border-[#e6dcc7] bg-white/40 hover:border-[#d4af79] hover:bg-white'
                    }`}
                  >
                    <span
                      className="text-[14px] md:text-[15px] font-light"
                      style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                    >
                      {p.label}
                    </span>
                    <span
                      className="text-[8.5px] md:text-[9.5px] uppercase text-foreground/50 text-right leading-tight"
                      style={{letterSpacing: '0.14em', fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      {p.sub}
                    </span>
                  </button>
                ))}
              </div>
            </Step>

            <Step number="04" label="Preview Your Ring">
              <Link
                to={designUrl}
                prefetch="intent"
                className="group w-full flex items-center justify-between px-6 py-5 transition-all duration-500"
                style={{
                  background: 'hsl(var(--gold))',
                  color: '#1a1410',
                }}
              >
                <span
                  className="text-[11px] md:text-[12px] font-semibold uppercase"
                  style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}
                >
                  Continue To Your Ring
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
              <p
                className="text-[11px] md:text-[12px] text-foreground/55 mt-3 leading-[1.7]"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Final details — ring size, certification, secure checkout — on the next step.
              </p>
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-4 md:mb-5">
        <span
          className="text-[11px] md:text-[12px]"
          style={{
            color: 'hsl(var(--gold-dark))',
            letterSpacing: '0.3em',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          {number}
        </span>
        <h3
          className="text-[18px] md:text-[22px] font-light"
          style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
        >
          {label}
        </h3>
      </div>
      {children}
    </div>
  );
}

/* ---------- 4. ESCAPE PATH ---------- */

function EscapePath() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #f7ede0 0%, #f0e3cf 50%, #ead5b6 100%)',
        }}
      />
      <div className="relative max-w-[1240px] mx-auto px-5 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p
              className="text-[10px] md:text-[11px] uppercase mb-4"
              style={{
                letterSpacing: '0.3em',
                color: 'hsl(var(--gold-dark))',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              The Full Collection
            </p>
            <h2
              className="text-[32px] md:text-[46px] leading-[1.08] font-light mb-5"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                textWrap: 'balance',
              }}
            >
              Looking For Another Style?
            </h2>
            <p
              className="text-[15px] md:text-[16px] text-foreground/70 leading-[1.8] max-w-[460px] mb-8"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              Explore our full collection of handcrafted engagement rings — solitaires, side-stone settings, vintage cuts, and modern silhouettes.
            </p>
            <Link
              to="/collections/rings"
              prefetch="intent"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background uppercase text-[11px] md:text-[12px] font-semibold hover:bg-foreground/85 transition-all duration-500"
              style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              Explore All Rings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/most-loved-solitaire.jpg" alt="Solitaire ring" loading="lazy" className="w-full aspect-[3/4] object-cover" />
            <img src="/most-loved-oval.jpg" alt="Oval ring" loading="lazy" className="w-full aspect-[3/4] object-cover mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. BRAND STORY ---------- */

function BrandStory() {
  return (
    <section
      className="py-24 md:py-36 relative"
      style={{background: '#fbf7f1'}}
    >
      <div className="max-w-[820px] mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-[10px] md:text-[11px] uppercase mb-8"
          style={{
            letterSpacing: '0.3em',
            color: 'hsl(var(--gold-dark))',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          A Quiet Promise
        </motion.p>
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 1, delay: 0.1}}
          className="space-y-6 md:space-y-8"
        >
          <p
            className="text-[24px] md:text-[34px] leading-[1.4] font-light"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            She will wear it every single day.
          </p>
          <p
            className="text-[24px] md:text-[34px] leading-[1.4] font-light italic"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: 'hsl(var(--gold-dark))',
              textWrap: 'balance',
            }}
          >
            She will look at it during ordinary moments and remember one extraordinary one.
          </p>
          <p
            className="text-[20px] md:text-[26px] leading-[1.5] font-light"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            A ring is never just jewelry. It becomes part of someone's story.
          </p>
        </motion.div>
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-[680px] mx-auto">
          <img src="/moment-couple.jpg" alt="" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          <img src="/moment-bridal.jpg" alt="" loading="lazy" className="w-full aspect-[3/4] object-cover md:mt-10" />
          <img src="/moment-portrait.jpg" alt="" loading="lazy" className="w-full aspect-[3/4] object-cover col-span-2 md:col-span-1 md:mt-0" />
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. WHY LAB DIAMONDS ---------- */

function WhyLabDiamonds() {
  const points = [
    {title: 'Same Chemistry', desc: 'Pure carbon — chemically and optically identical to mined diamonds.'},
    {title: 'Same Brilliance', desc: 'Equal fire, scintillation, and refractive index. Indistinguishable to the eye.'},
    {title: 'Same Durability', desc: '10 on the Mohs scale. Built to be worn forever.'},
    {title: 'IGI Certified', desc: 'Independent grading on color, clarity, cut, and carat.'},
    {title: 'More Ethical', desc: 'Conflict-free origin. Traceable supply. Lower environmental impact.'},
    {title: 'Honest Pricing', desc: 'Modern luxury, without the traditional markup.'},
  ];

  return (
    <section
      className="py-20 md:py-28"
      style={{background: 'hsl(var(--ivory))'}}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <img
              src="/editorial-pendant.jpg"
              alt="Lab-grown diamond detail"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div>
            <p
              className="text-[10px] md:text-[11px] uppercase mb-4"
              style={{
                letterSpacing: '0.3em',
                color: 'hsl(var(--gold-dark))',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              The Smarter Diamond
            </p>
            <h2
              className="text-[32px] md:text-[44px] leading-[1.1] font-light mb-5"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                textWrap: 'balance',
              }}
            >
              Real Diamonds. Smarter Choice.
            </h2>
            <p
              className="text-[15px] md:text-[16px] text-foreground/70 leading-[1.85] mb-10 max-w-[500px]"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              Lab-grown diamonds are not alternatives. They are diamonds — grown in advanced laboratories instead of pulled from the earth. Same stone. Cleaner story. Better value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {points.map((p) => (
                <div key={p.title}>
                  <h4
                    className="text-[16px] md:text-[18px] font-light mb-1.5"
                    style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                  >
                    {p.title}
                  </h4>
                  <p
                    className="text-[13px] md:text-[14px] text-foreground/60 leading-[1.7]"
                    style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. WHY ASTREAS ---------- */

function WhyAstreas() {
  const pillars = [
    {n: '01', title: 'Quality without compromise', desc: 'Solid 14K and 18K gold. DEF color, VS1 clarity diamonds. No hollow shanks, no plating.'},
    {n: '02', title: 'Honest pricing', desc: 'You pay for the diamond and the craftsmanship. Not for the markup of a heritage logo.'},
    {n: '03', title: 'Made for her, by hand', desc: 'Each ring is hand-finished after your order is placed. Not pulled from a shelf.'},
    {n: '04', title: 'Built to be worn forever', desc: 'Lifetime warranty on craftsmanship. Free resizing. Insured shipping, both ways.'},
  ];

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={{background: '#1f1812'}}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(212,175,121,0.55) 0%, rgba(0,0,0,0) 70%)',
        }}
      />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-12">
        <div className="text-center mb-14 md:mb-20">
          <p
            className="text-[10px] md:text-[11px] uppercase mb-4 text-[#d4af79]"
            style={{
              letterSpacing: '0.3em',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Why Astreas
          </p>
          <h2
            className="text-[32px] md:text-[46px] leading-[1.1] font-light mb-5 text-white"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            Luxury, Without The Inflated Story.
          </h2>
          <p
            className="text-[14px] md:text-[16px] text-white/65 leading-[1.85] max-w-[560px] mx-auto"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            We build the rings traditional houses charge five times more for. Same gold. Same diamonds. Same craftsmanship. Without the inherited markup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-14">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{duration: 0.6, delay: i * 0.08}}
            >
              <span
                className="block text-[11px] md:text-[12px] uppercase mb-3 text-[#d4af79]"
                style={{
                  letterSpacing: '0.3em',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                {p.n}
              </span>
              <h3
                className="text-[22px] md:text-[26px] font-light text-white mb-3 leading-[1.25]"
                style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
              >
                {p.title}
              </h3>
              <p
                className="text-[13.5px] md:text-[14.5px] text-white/65 leading-[1.8]"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. SOCIAL PROOF ---------- */

function SocialProof() {
  const reviews = [
    {
      name: 'Sofia M.',
      location: 'Milan',
      text: 'I ordered the round cut in white gold and it exceeded every expectation. It looks even more stunning in person. I receive compliments every single day.',
    },
    {
      name: 'Camille D.',
      location: 'Paris',
      text: 'The oval cut in yellow gold is exactly what I had been searching for. The stone has incredible fire and the setting is so refined.',
    },
    {
      name: 'Eleanor T.',
      location: 'London',
      text: 'The diamond is stunning and the band is perfectly proportioned. It arrived beautifully packaged and felt truly special to unwrap.',
    },
  ];

  return (
    <section
      className="py-20 md:py-28"
      style={{background: '#fbf7f1'}}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-[10px] md:text-[11px] uppercase mb-4"
            style={{
              letterSpacing: '0.3em',
              color: 'hsl(var(--gold-dark))',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Loved By Real People
          </p>
          <h2
            className="text-[32px] md:text-[44px] leading-[1.1] font-light mb-5"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            The Moment She Sees It.
          </h2>
          <div className="flex items-center justify-center gap-2 text-foreground/65 text-[13px] md:text-[14px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 md:w-4 md:h-4"
                fill="hsl(var(--gold))"
                stroke="hsl(var(--gold))"
              />
            ))}
            <span
              className="ml-2"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              4.9 from 1,200+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.55, delay: i * 0.08}}
              className="bg-white border border-[#ece4d4] p-6 md:p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    className="w-3 h-3"
                    fill="hsl(var(--gold))"
                    stroke="hsl(var(--gold))"
                  />
                ))}
              </div>
              <p
                className="text-[14px] md:text-[15px] text-foreground/75 leading-[1.8] mb-5"
                style={{fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic'}}
              >
                "{r.text}"
              </p>
              <div
                className="text-[11px] md:text-[12px] uppercase text-foreground/55"
                style={{letterSpacing: '0.2em', fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                {r.name} — {r.location}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-3 md:grid-cols-6 gap-3">
          {[
            '/most-loved-solitaire.jpg',
            '/most-loved-oval.jpg',
            '/most-loved-marquise.jpg',
            '/moment-couple.jpg',
            '/moment-bridal.jpg',
            '/editorial-lifestyle.jpg',
          ].map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              initial={{opacity: 0, scale: 1.04}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: i * 0.04}}
              className="w-full aspect-[9/16] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. FAQ ---------- */

function FAQ() {
  const items = [
    {
      q: 'Are these real diamonds?',
      a: 'Yes — completely real. Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. Even a gemologist cannot tell them apart without specialized equipment.',
    },
    {
      q: 'Why are your prices lower?',
      a: 'We work directly with our atelier — no intermediaries, no inherited heritage markup. You pay for the gold, the diamond, and the craftsmanship. Nothing else.',
    },
    {
      q: 'Is shipping insured?',
      a: 'Yes. Every order ships fully insured, fully tracked, and signature-required. International express delivery is complimentary.',
    },
    {
      q: 'Are the diamonds certified?',
      a: 'Every center stone 0.30ct and above ships with an independent IGI certificate verifying color, clarity, cut, and carat.',
    },
    {
      q: 'Can I customize my ring?',
      a: 'Yes. Choose your diamond shape, carat size, gold color, and gold purity. For bespoke modifications beyond this, our team is here to help.',
    },
    {
      q: 'Can someone help me choose?',
      a: 'Absolutely. Our concierge team will gently guide you through every detail. Message us anytime and a real human will reply.',
    },
    {
      q: 'How long does production take?',
      a: 'Each ring is handcrafted to order in 15–20 business days. Express options are available for proposals on a deadline.',
    },
    {
      q: 'Can rings be resized?',
      a: 'Yes. Complimentary resizing is included for the first year, and available at cost thereafter.',
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-20 md:py-28"
      style={{background: 'hsl(var(--ivory))'}}
    >
      <div className="max-w-[820px] mx-auto px-5 md:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p
            className="text-[10px] md:text-[11px] uppercase mb-4"
            style={{
              letterSpacing: '0.3em',
              color: 'hsl(var(--gold-dark))',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Calm Answers
          </p>
          <h2
            className="text-[32px] md:text-[44px] leading-[1.1] font-light"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            Everything You're Quietly Wondering.
          </h2>
        </div>

        <div className="border-t border-[#e6dcc7]">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-b border-[#e6dcc7]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left"
                >
                  <span
                    className="text-[16px] md:text-[19px] font-light pr-4"
                    style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                  >
                    {it.q}
                  </span>
                  <span
                    className={`transition-transform duration-500 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    style={{color: 'hsl(var(--gold-dark))'}}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{height: 0, opacity: 0}}
                      animate={{height: 'auto', opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-[14px] md:text-[15px] text-foreground/65 leading-[1.85] pb-6 pr-8"
                        style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                      >
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <p
            className="text-[13px] md:text-[14px] text-foreground/60 mb-4"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Still have a question? We answer every message personally.
          </p>
          <Link
            to="/contact"
            prefetch="intent"
            className="inline-flex items-center gap-2 text-[11px] md:text-[12px] uppercase border-b border-[#bf9255] pb-1"
            style={{
              letterSpacing: '0.22em',
              color: 'hsl(var(--gold-dark))',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Speak With Our Concierge
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. FINAL CTA ---------- */

function FinalCTA() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[680px] flex items-center justify-center overflow-hidden bg-[#1a1410]">
      <img
        src="/editorial-lifestyle.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,15,12,0.4) 0%, rgba(20,15,12,0.7) 100%)',
        }}
      />
      <motion.div
        initial={{opacity: 0, y: 16}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 1}}
        className="relative z-10 text-center px-6 max-w-[680px] py-20"
      >
        <Heart
          className="w-6 h-6 mx-auto mb-6 text-[#e8c98a]"
          strokeWidth={1.2}
          fill="rgba(232,201,138,0.18)"
        />
        <h2
          className="text-white text-[34px] sm:text-[42px] md:text-[56px] leading-[1.1] font-light mb-6"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            textWrap: 'balance',
          }}
        >
          The ring she will wear forever starts here.
        </h2>
        <p
          className="text-white/75 text-[14px] md:text-[16px] leading-[1.85] max-w-[460px] mx-auto mb-10"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Luxury quality. Honest pricing. Designed to become part of your story.
        </p>
        <a
          href="#customize"
          className="inline-flex items-center justify-center px-10 py-4 text-[11px] md:text-[12px] font-semibold uppercase transition-all duration-500"
          style={{
            background: 'hsl(var(--gold))',
            color: '#1a1410',
            letterSpacing: '0.22em',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Design Your Ring
        </a>
      </motion.div>
    </section>
  );
}

/* ---------- STICKY MOBILE CTA ---------- */

function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="bg-white/95 backdrop-blur border-t border-[#e6dcc7] px-3 py-2.5 flex gap-2">
        <Link
          to="/collections/rings"
          prefetch="intent"
          className="flex-1 text-center py-3.5 border border-foreground text-foreground uppercase text-[10.5px] font-semibold"
          style={{letterSpacing: '0.18em', fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          All Rings
        </Link>
        <a
          href="#customize"
          className="flex-[1.4] text-center py-3.5 uppercase text-[10.5px] font-semibold"
          style={{
            background: 'hsl(var(--gold))',
            color: '#1a1410',
            letterSpacing: '0.18em',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Design Your Ring
        </a>
      </div>
    </div>
  );
}
