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
  Play,
  X,
  Check,
  Mail,
  PackageCheck,
  MapPin,
  BadgeCheck,
} from 'lucide-react';
import {getDesignFamily, getConfiguratorImage} from '~/lib/design-families';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'The Ring She Will Never Stop Looking At | Astreas'},
    {
      name: 'description',
      content:
        'Luxury lab-grown diamond rings designed to be worn, admired, and remembered forever. Honest pricing. IGI certified. Handcrafted to order.',
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
  {value: '1.0 ct', label: '1 ct', sub: 'Delicate & feminine'},
  {value: '1.5 ct', label: '1.5 ct', sub: 'Elegant presence'},
  {value: '2.0 ct', label: '2 ct', sub: 'Impossible to ignore'},
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

// Public-facing welcome offer code (luxury framing — not a flash sale)
const WELCOME_CODE = 'ASTREAS10';

/* ---------- PAGE ---------- */

export default function TikTokLanding() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <AnnouncementBar />
      <Hero />
      <LuxuryOffer />
      <TrustBar />
      <Customizer />
      <ImagineReaction />
      <ShapeExploration />
      <DesignedToBeAdmired />
      <EscapePath />
      <UGCWall />
      <BrandStory />
      <WhyLabDiamonds />
      <PriceAnchoring />
      <ShippingTrust />
      <WhyAstreas />
      <SocialProof />
      <FAQ />
      <PrivateList />
      <SparkleObsession />
      <FinalCTA />
      <StickyMobileCTA />
    </div>
  );
}

/* ---------- 0. ANNOUNCEMENT BAR ---------- */

function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      className="relative w-full text-white"
      style={{
        background:
          'linear-gradient(90deg, #1a1410 0%, #2a1f17 50%, #1a1410 100%)',
        borderBottom: '1px solid rgba(212,175,121,0.25)',
      }}
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-2.5 md:py-3 flex items-center justify-center gap-3 text-center">
        <Sparkles
          className="w-3.5 h-3.5 shrink-0 hidden sm:block"
          style={{color: '#e8c98a'}}
          strokeWidth={1.4}
        />
        <p
          className="text-[11px] md:text-[12.5px] tracking-[0.05em] leading-snug"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          <span className="font-medium">Enjoy 10% Off Your Ring Today</span>
          <span className="hidden sm:inline" style={{color: '#e8c98a'}}>
            {' '}+ An Extra 5% For Astreas Members
          </span>
          <span className="mx-2 hidden md:inline text-white/35">·</span>
          <span className="hidden md:inline text-white/60 italic">
            Exclusive Online Offer
          </span>
        </p>
        <Sparkles
          className="w-3.5 h-3.5 shrink-0 hidden sm:block"
          style={{color: '#e8c98a'}}
          strokeWidth={1.4}
        />
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white/40 hover:text-white/80 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

/* ---------- LUXURY OFFER CARD ---------- */

function LuxuryOffer() {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(WELCOME_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section
      className="relative py-14 md:py-20"
      style={{
        background:
          'linear-gradient(180deg, #fbf7f1 0%, hsl(var(--ivory)) 100%)',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-12">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1]}}
          className="relative overflow-hidden border bg-white"
          style={{
            borderColor: 'rgba(191,146,85,0.35)',
            boxShadow: '0 30px 80px -40px rgba(102,72,30,0.35)',
          }}
        >
          {/* Gold thread accents */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, hsl(var(--gold)) 50%, transparent 100%)',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, hsl(var(--gold)) 50%, transparent 100%)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">
            {/* Left: emotional offer copy */}
            <div className="px-7 py-10 md:px-12 md:py-14 border-b md:border-b-0 md:border-r" style={{borderColor: 'rgba(191,146,85,0.18)'}}>
              <p
                className="text-[10px] md:text-[11px] uppercase mb-5 flex items-center gap-2"
                style={{
                  letterSpacing: '0.3em',
                  color: 'hsl(var(--gold-dark))',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{background: 'hsl(var(--gold))'}} />
                Limited Launch Offer · TikTok Exclusive
              </p>
              <h2
                className="text-[28px] md:text-[40px] leading-[1.08] font-light mb-5"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  textWrap: 'balance',
                }}
              >
                A Welcome Offer — <em className="italic" style={{color: 'hsl(var(--gold-dark))'}}>From Us To Her.</em>
              </h2>
              <p
                className="text-[14px] md:text-[15.5px] text-foreground/65 leading-[1.85] mb-7 max-w-[480px]"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Because you found us through TikTok, your first ring comes with a private welcome — applied at checkout, on top of our already direct, honest pricing.
              </p>

              {/* Tier breakdown */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3.5">
                  <span
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold"
                    style={{
                      background: 'hsl(var(--gold))',
                      color: '#1a1410',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                  >
                    10%
                  </span>
                  <div>
                    <p
                      className="text-[15px] md:text-[16px] font-light"
                      style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                    >
                      Off your ring today
                    </p>
                    <p
                      className="text-[12px] md:text-[12.5px] text-foreground/55"
                      style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      Auto-applied with code <span className="font-semibold tracking-[0.1em]" style={{color: 'hsl(var(--gold-dark))'}}>{WELCOME_CODE}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-medium border"
                    style={{
                      borderColor: 'hsl(var(--gold))',
                      color: 'hsl(var(--gold-dark))',
                      letterSpacing: '0.05em',
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                  >
                    +5%
                  </span>
                  <div>
                    <p
                      className="text-[15px] md:text-[16px] font-light"
                      style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                    >
                      Additional for Astreas Private List members
                    </p>
                    <p
                      className="text-[12px] md:text-[12.5px] text-foreground/55"
                      style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      Stacks on top of your welcome offer · <a href="#private-list" className="underline underline-offset-2" style={{color: 'hsl(var(--gold-dark))'}}>Become a member</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center">
                <a
                  href="#customize"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-semibold uppercase transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'hsl(var(--gold))',
                    color: '#1a1410',
                    letterSpacing: '0.22em',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  Create Her Ring
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={copyCode}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[10.5px] font-medium uppercase border transition-all duration-400 hover:bg-[#fbf6ec]"
                  style={{
                    borderColor: 'rgba(191,146,85,0.45)',
                    color: 'hsl(var(--gold-dark))',
                    letterSpacing: '0.2em',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Code Copied
                    </>
                  ) : (
                    <>
                      Copy Code · {WELCOME_CODE}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: validation + scarcity column */}
            <div
              className="relative px-7 py-10 md:px-10 md:py-14"
              style={{
                background:
                  'linear-gradient(160deg, #fbf6ec 0%, #f4ead7 100%)',
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                  background:
                    'radial-gradient(70% 50% at 100% 0%, rgba(212,175,121,0.25) 0%, rgba(0,0,0,0) 70%)',
                }}
              />
              <div className="relative">
                <p
                  className="text-[10px] md:text-[11px] uppercase mb-5"
                  style={{
                    letterSpacing: '0.3em',
                    color: 'hsl(var(--gold-dark))',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  What's Included
                </p>
                <ul className="space-y-3.5">
                  {[
                    'Free insured express shipping',
                    'Luxury signature packaging',
                    'IGI certified center stone',
                    'Lifetime craftsmanship warranty',
                    'Free resizing within the first year',
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px] md:text-[15px]" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                      <Check
                        className="w-4 h-4 shrink-0 mt-[3px]"
                        style={{color: 'hsl(var(--gold-dark))'}}
                        strokeWidth={2}
                      />
                      <span className="text-foreground/75 leading-[1.5]">{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-8 pt-6 border-t"
                  style={{borderColor: 'rgba(191,146,85,0.22)'}}
                >
                  <p
                    className="text-[11px] md:text-[12px] italic leading-[1.7]"
                    style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      color: 'hsl(var(--gold-dark))',
                      fontSize: '14px',
                    }}
                  >
                    "We open this welcome offer only to TikTok visitors — quietly, and not for long."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- PRICE ANCHORING ---------- */

function PriceAnchoring() {
  const rows = [
    {label: 'Solid 14K / 18K gold', astreas: true, traditional: 'Often hollow or plated'},
    {label: 'IGI certified DEF / VS1 diamond', astreas: true, traditional: 'Lower color & clarity grades'},
    {label: 'Handcrafted to order', astreas: true, traditional: 'Mass produced'},
    {label: 'Direct atelier pricing', astreas: true, traditional: 'Multi-step retail markup'},
    {label: 'Free insured shipping', astreas: true, traditional: 'Additional fees'},
    {label: 'Lifetime warranty', astreas: true, traditional: 'Limited terms'},
  ];

  return (
    <section
      className="py-20 md:py-28"
      style={{background: 'hsl(var(--ivory))'}}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-[10px] md:text-[11px] uppercase mb-4"
            style={{
              letterSpacing: '0.3em',
              color: 'hsl(var(--gold-dark))',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Honest Pricing
          </p>
          <h2
            className="text-[32px] md:text-[46px] leading-[1.08] font-light mb-5"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            Luxury Jewelry Without Traditional Retail Markups.
          </h2>
          <p
            className="text-[14px] md:text-[16px] text-foreground/65 max-w-[560px] mx-auto leading-[1.85]"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            The same gold, the same diamonds, the same craftsmanship — at the price you'd pay if the heritage logo wasn't part of the cost.
          </p>
        </div>

        <div className="overflow-hidden border bg-white" style={{borderColor: '#ece4d4'}}>
          <div className="grid grid-cols-[1.4fr_1fr_1fr] text-[10px] md:text-[11px] uppercase" style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}>
            <div className="px-4 md:px-7 py-4 md:py-5 text-foreground/45 border-b" style={{borderColor: '#ece4d4'}}>
              What You Get
            </div>
            <div
              className="px-3 md:px-7 py-4 md:py-5 text-center border-b border-l"
              style={{
                borderColor: '#ece4d4',
                background: 'linear-gradient(180deg, #fbf6ec 0%, #f4ead7 100%)',
                color: 'hsl(var(--gold-dark))',
                fontWeight: 600,
              }}
            >
              Astreas
            </div>
            <div className="px-3 md:px-7 py-4 md:py-5 text-center text-foreground/45 border-b border-l" style={{borderColor: '#ece4d4'}}>
              Traditional Retail
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-[1.4fr_1fr_1fr] items-center ${
                i % 2 === 1 ? 'bg-[#fbf7f1]' : ''
              }`}
            >
              <div
                className="px-4 md:px-7 py-4 md:py-5 text-[13px] md:text-[15px] text-foreground/80 border-t"
                style={{borderColor: '#ece4d4', fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                {r.label}
              </div>
              <div
                className="px-3 md:px-7 py-4 md:py-5 text-center border-t border-l"
                style={{borderColor: '#ece4d4', background: 'rgba(232,201,138,0.08)'}}
              >
                <Check
                  className="w-4 h-4 md:w-5 md:h-5 mx-auto"
                  style={{color: 'hsl(var(--gold-dark))'}}
                  strokeWidth={2.4}
                />
              </div>
              <div
                className="px-3 md:px-7 py-4 md:py-5 text-center text-[11.5px] md:text-[13px] text-foreground/50 border-t border-l italic"
                style={{borderColor: '#ece4d4', fontFamily: 'Cormorant Garamond, Georgia, serif'}}
              >
                {typeof r.traditional === 'string' ? r.traditional : '—'}
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-8 md:mt-10 text-center text-[12px] md:text-[13px] text-foreground/55 italic max-w-[560px] mx-auto leading-[1.8]"
          style={{fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '15px'}}
        >
          The kind of ring people assume cost far more — because, until now, it always did.
        </p>
      </div>
    </section>
  );
}

/* ---------- SHIPPING TRUST ---------- */

function ShippingTrust() {
  const points = [
    {Icon: PackageCheck, title: 'Fully Tracked Delivery', desc: 'Real-time tracking from atelier to her hands.'},
    {Icon: ShieldCheck, title: 'Fully Insured', desc: 'Every shipment is insured end-to-end.'},
    {Icon: BadgeCheck, title: 'Signature On Delivery', desc: 'Required signature — never left at the door.'},
    {Icon: Gift, title: 'Luxury Packaging', desc: 'Hand-finished signature box, sealed for the moment.'},
  ];

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{background: '#fbf7f1'}}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 md:gap-16 items-center">
          <div>
            <p
              className="text-[10px] md:text-[11px] uppercase mb-4 flex items-center gap-2"
              style={{
                letterSpacing: '0.3em',
                color: 'hsl(var(--gold-dark))',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.6} />
              Ships To USA &amp; Canada
            </p>
            <h2
              className="text-[30px] md:text-[44px] leading-[1.08] font-light mb-5"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                textWrap: 'balance',
              }}
            >
              Free Insured Shipping. <em className="italic" style={{color: 'hsl(var(--gold-dark))'}}>Always.</em>
            </h2>
            <p
              className="text-[15px] md:text-[16px] text-foreground/70 leading-[1.85] max-w-[500px] mb-8"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              Your ring is handcrafted in our European atelier and shipped fully insured, signature-required, with real-time tracking — including all customs, duties, and import fees, prepaid by us. You never pay extra at the door.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
              {points.map(({Icon, title, desc}) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{color: 'hsl(var(--gold-dark))'}}
                    strokeWidth={1.4}
                  />
                  <div>
                    <p
                      className="text-[14px] md:text-[15px] font-light mb-0.5"
                      style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                    >
                      {title}
                    </p>
                    <p
                      className="text-[12.5px] md:text-[13px] text-foreground/60 leading-[1.6]"
                      style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-9 pt-7 border-t flex items-center gap-3"
              style={{borderColor: 'rgba(191,146,85,0.22)'}}
            >
              <Mail
                className="w-4 h-4 shrink-0"
                style={{color: 'hsl(var(--gold-dark))'}}
                strokeWidth={1.4}
              />
              <p
                className="text-[12.5px] md:text-[13.5px] text-foreground/65 leading-[1.7]"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                Dedicated concierge support — a real human replies within hours, not days.
              </p>
            </div>
          </div>

          <div className="relative aspect-[5/6] overflow-hidden">
            <img
              src="/moment-portrait.jpg"
              alt="Luxury signature packaging"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(20,15,12,0.0) 50%, rgba(20,15,12,0.5) 100%)',
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 text-white">
              <p
                className="text-[10px] uppercase mb-1.5"
                style={{
                  letterSpacing: '0.3em',
                  color: '#e8c98a',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                The Moment It Arrives
              </p>
              <p
                className="text-[18px] md:text-[22px] font-light italic"
                style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
              >
                Sealed. Signed for. Unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRIVATE LIST (VIP EMAIL CAPTURE) ---------- */

function PrivateList() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Soft submit — the actual capture wiring (Klaviyo / Shopify customer list)
    // can be added later. This gives users immediate confirmation.
    setSubmitted(true);
    // Persist locally so the user sees a calm "you're in" state on next visit
    try {
      localStorage.setItem('astreas_private_list', email.trim());
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="private-list"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{background: '#1f1812'}}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(212,175,121,0.5) 0%, rgba(0,0,0,0) 70%)',
        }}
      />
      <div className="relative max-w-[760px] mx-auto px-5 md:px-12 text-center">
        <motion.p
          initial={{opacity: 0, y: 8}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="text-[10px] md:text-[11px] uppercase mb-5 text-[#e8c98a] flex items-center justify-center gap-2"
          style={{
            letterSpacing: '0.3em',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{background: '#e8c98a'}} />
          The Astreas Private List
        </motion.p>
        <motion.h2
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.9, delay: 0.1}}
          className="text-white text-[28px] md:text-[42px] leading-[1.1] font-light mb-5"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            textWrap: 'balance',
          }}
        >
          An Extra <em className="italic text-[#e8c98a]">5%</em> — Quietly Yours.
        </motion.h2>
        <p
          className="text-white/65 text-[14px] md:text-[16px] leading-[1.85] max-w-[520px] mx-auto mb-9"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Members of our private list receive an additional 5% — stacked on top of your welcome offer — plus first access to new collections and limited pieces. No newsletter noise. One quiet note when it matters.
        </p>

        {submitted ? (
          <motion.div
            initial={{opacity: 0, y: 8}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="inline-flex flex-col items-center"
          >
            <div className="flex items-center gap-2 text-[#e8c98a] mb-4">
              <Check className="w-4 h-4" strokeWidth={2} />
              <span
                className="text-[11px] md:text-[12px] uppercase"
                style={{letterSpacing: '0.25em', fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                You're On The List
              </span>
            </div>
            <p
              className="text-white/75 text-[14px] md:text-[15px] max-w-[420px] leading-[1.7]"
              style={{fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: '16px'}}
            >
              Your member code will arrive in your inbox shortly. It stacks automatically with your welcome offer at checkout.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="max-w-[480px] mx-auto"
          >
            <div
              className="flex flex-col sm:flex-row gap-2.5 p-2 border"
              style={{
                borderColor: 'rgba(232,201,138,0.3)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/35 px-4 py-3 text-[14px] md:text-[15px] outline-none"
                style={{fontFamily: 'Inter, system-ui, sans-serif'}}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[10.5px] md:text-[11px] font-semibold uppercase whitespace-nowrap transition-all duration-500 hover:scale-[1.02]"
                style={{
                  background: 'hsl(var(--gold))',
                  color: '#1a1410',
                  letterSpacing: '0.22em',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                Join Privately
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p
              className="mt-5 text-[11px] md:text-[12px] text-white/40 leading-[1.7]"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              We treat your inbox the way we treat our pieces — with restraint. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------- 1. HERO ---------- */

function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#140e0a]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-ring.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Romantic warm overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,14,10,0.12) 0%, rgba(20,14,10,0.32) 50%, rgba(20,14,10,0.78) 100%)',
        }}
      />
      {/* Gold halo */}
      <motion.div
        aria-hidden
        initial={{opacity: 0}}
        animate={{opacity: 0.22}}
        transition={{duration: 2.4, ease: 'easeOut'}}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(55% 38% at 50% 38%, rgba(232,201,138,0.55) 0%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Sparkle micro-particles */}
      <Sparks />

      <motion.div
        initial={{opacity: 0, y: 28}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
        className="relative z-10 text-center px-6 max-w-[680px] mx-auto pb-24 md:pb-12 pt-20 md:pt-0"
      >
        <p
          className="uppercase text-[10px] md:text-[11px] tracking-[0.4em] mb-7 text-[#e8c98a]"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Designed To Be Worn, Admired, Remembered.
        </p>

        <h1
          className="text-white text-[40px] sm:text-[50px] md:text-[68px] leading-[1.05] font-light mb-6"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            letterSpacing: '0.005em',
            textWrap: 'balance',
          }}
        >
          The Ring She Will <em className="italic text-[#e8c98a]">Never Stop</em> Looking At.
        </h1>

        <p
          className="text-white/85 text-[15px] md:text-[17px] leading-[1.7] max-w-[500px] mx-auto mb-10"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Luxury lab-grown diamond rings handcrafted in solid 14K or 18K gold — designed to be the favorite thing she owns.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
          <a
            href="#customize"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-[11px] font-semibold uppercase transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: 'hsl(var(--gold))',
              color: '#1a1410',
              letterSpacing: '0.22em',
              boxShadow: '0 0 0 0 rgba(232,201,138,0.0), 0 10px 40px -10px rgba(232,201,138,0.4)',
            }}
          >
            Create Her Ring
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <Link
            to="/collections/rings"
            prefetch="intent"
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-[11px] font-semibold uppercase border border-white/60 text-white hover:bg-white hover:text-[#1a1410] transition-all duration-500"
            style={{letterSpacing: '0.22em'}}
          >
            Explore Ring Styles
          </Link>
        </div>

        <p
          className="mt-8 text-[11px] md:text-[12px] text-white/55"
          style={{
            letterSpacing: '0.22em',
            fontFamily: 'Inter, system-ui, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          IGI Certified · Free Insured Shipping · Lifetime Warranty
        </p>

        <motion.div
          aria-hidden
          initial={{opacity: 0}}
          animate={{opacity: 1, y: [0, 8, 0]}}
          transition={{
            opacity: {delay: 1.6, duration: 1},
            y: {repeat: Infinity, duration: 2.2, ease: 'easeInOut'},
          }}
          className="hidden md:block mt-12 text-white/55"
        >
          <ChevronDown className="w-4 h-4 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Sparks() {
  // Deterministic seeded sparkle positions so SSR matches client
  const seeds = [
    [12, 22, 0.0], [78, 30, 0.4], [22, 65, 0.8], [88, 70, 1.2],
    [42, 18, 1.6], [62, 80, 2.0], [8, 50, 2.4], [92, 45, 2.8],
    [33, 88, 3.2], [70, 12, 3.6], [50, 55, 4.0], [18, 35, 4.4],
  ];
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {seeds.map(([x, y, delay], i) => (
        <motion.span
          key={i}
          className="absolute block rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: 3,
            height: 3,
            background: '#fff8e3',
            boxShadow:
              '0 0 8px 2px rgba(232,201,138,0.6), 0 0 22px 4px rgba(232,201,138,0.25)',
          }}
          initial={{opacity: 0, scale: 0.4}}
          animate={{opacity: [0, 1, 0], scale: [0.4, 1.4, 0.4]}}
          transition={{
            duration: 3.2,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
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
    {Icon: Lock, label: 'Lifetime Warranty'},
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

/* ---------- 2. STOP-SCROLL — SPARKLE OBSESSION ---------- */

function SparkleObsession() {
  return (
    <section
      className="relative w-full h-[85vh] md:h-[88vh] overflow-hidden bg-black"
      aria-label="Diamond brilliance"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/sol-wg-round.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/sparkle-macro.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      <Sparks />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{opacity: 0, letterSpacing: '0.5em'}}
          whileInView={{opacity: 1, letterSpacing: '0.3em'}}
          viewport={{once: true}}
          transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
          className="text-[10px] md:text-[11px] uppercase mb-7 text-[#e8c98a]"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          The Sparkle People Notice Instantly
        </motion.p>

        <motion.h2
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1]}}
          className="text-white text-[36px] sm:text-[48px] md:text-[72px] leading-[1.05] font-light max-w-[820px]"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            letterSpacing: '0.005em',
            textWrap: 'balance',
          }}
        >
          Impossible <em className="italic text-[#e8c98a]">Not</em> To Stare At.
        </motion.h2>

        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1, delay: 0.5}}
          className="mt-8 text-white/65 text-[14px] md:text-[16px] max-w-[440px] leading-[1.75]"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Made to catch light — and attention. Every facet, every angle, every glance.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- 3. SHAPE EXPLORATION ---------- */

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
            Prefer A Different Shape?
          </p>
          <h2
            className="text-[32px] md:text-[46px] leading-[1.08] font-light mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              letterSpacing: '0.005em',
              textWrap: 'balance',
            }}
          >
            Not Your Style?
          </h2>
          <p
            className="text-[14px] md:text-[16px] text-foreground/65 max-w-[460px] mx-auto leading-[1.75]"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Six diamond shapes. Six different personalities. Pick the one that feels like hers — we'll take it from there.
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
                  <div className="aspect-square overflow-hidden bg-[#f4ede0] relative">
                    <img
                      src={img}
                      alt={`${shape.label} cut diamond ring`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

/* ---------- 4. IMAGINE HER REACTION ---------- */

function ImagineReaction() {
  return (
    <section
      className="relative overflow-hidden"
      style={{background: '#1a1410'}}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <img
            src="/moment-bridal.jpg"
            alt="The moment she sees the ring"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,20,16,0.0) 40%, rgba(26,20,16,0.55) 100%)',
            }}
          />
        </div>
        <div className="relative flex items-center justify-center px-7 md:px-16 py-20 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                'radial-gradient(60% 50% at 30% 50%, rgba(212,175,121,0.25) 0%, rgba(0,0,0,0) 70%)',
            }}
          />
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            className="relative max-w-[460px]"
          >
            <p
              className="text-[10px] md:text-[11px] uppercase mb-5 text-[#e8c98a]"
              style={{
                letterSpacing: '0.3em',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              Imagine Her Reaction
            </p>
            <h2
              className="text-white text-[30px] md:text-[44px] font-light leading-[1.12] mb-7"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                textWrap: 'balance',
              }}
            >
              She won't stop staring at it.
            </h2>
            <div className="space-y-4 text-white/75 text-[15px] md:text-[16px] leading-[1.85]"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              <p>The way the light hits it on the drive home. The friends who notice without being told. The first time someone reaches for her hand.</p>
              <p className="text-white/90 italic" style={{fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px'}}>
                "I keep looking at my own hand. I can't help it."
              </p>
            </div>
            <a
              href="#customize"
              className="inline-flex items-center gap-2 mt-9 text-[11px] md:text-[12px] uppercase border-b pb-1 transition-all duration-500 hover:gap-3"
              style={{
                letterSpacing: '0.22em',
                color: '#e8c98a',
                borderColor: '#e8c98a',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
            >
              Design The Ring She'll Never Forget
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. CUSTOMIZER ---------- */

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
      className="py-20 md:py-32 relative"
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
            Design Her Ring
          </p>
          <h2
            className="text-[32px] md:text-[46px] leading-[1.08] font-light mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            Watch It Become <em className="italic">Hers</em>.
          </h2>
          <p
            className="text-[14px] md:text-[16px] text-foreground/65 max-w-[480px] mx-auto leading-[1.75]"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Four gentle choices. One unforgettable ring. The preview updates as you go — so you'll know the second it looks right.
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
                  initial={{opacity: 0, scale: 1.03}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-white/85 backdrop-blur-sm px-3 py-1.5 text-[9px] md:text-[10px] uppercase flex items-center gap-1.5"
                style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{background: 'hsl(var(--gold))'}} />
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
            <Step number="01" label="Choose Her Shape" hint="Her personality decides this — not yours.">
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

            <Step number="02" label="Choose Her Carat" hint="How present should the sparkle feel?">
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

            <Step number="03" label="Choose Her Gold" hint="Each gold tells a slightly different story.">
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
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/10"
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

            <Step number="04" label="See Her Ring" hint="One more step — and you'll see exactly what she will.">
              <Link
                to={designUrl}
                prefetch="intent"
                className="group w-full flex items-center justify-between px-6 py-5 transition-all duration-500 hover:scale-[1.01]"
                style={{
                  background: 'hsl(var(--gold))',
                  color: '#1a1410',
                  boxShadow: '0 12px 40px -16px rgba(212,175,121,0.6)',
                }}
              >
                <span
                  className="text-[11px] md:text-[12px] font-semibold uppercase"
                  style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}
                >
                  Create The Ring She'll Treasure Forever
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>

              {/* Offer reminder chip — luxury, not flashy */}
              <div
                className="mt-4 flex items-start gap-2.5 px-4 py-3 border"
                style={{
                  borderColor: 'rgba(191,146,85,0.3)',
                  background: 'rgba(232,201,138,0.08)',
                }}
              >
                <Sparkles
                  className="w-3.5 h-3.5 shrink-0 mt-[3px]"
                  style={{color: 'hsl(var(--gold-dark))'}}
                  strokeWidth={1.6}
                />
                <p
                  className="text-[11.5px] md:text-[12px] leading-[1.6] text-foreground/75"
                  style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                >
                  <span className="font-semibold" style={{color: 'hsl(var(--gold-dark))'}}>10% off applied at checkout</span>
                  <span className="text-foreground/55"> with code <span className="font-semibold tracking-[0.1em]" style={{color: 'hsl(var(--gold-dark))'}}>{WELCOME_CODE}</span> — auto-applied for TikTok visitors.</span>
                </p>
              </div>

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
  hint,
  children,
}: {
  number: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-2">
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
      {hint && (
        <p
          className="text-[12px] md:text-[13px] text-foreground/55 mb-4 md:mb-5 italic"
          style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
        >
          {hint}
        </p>
      )}
      {children}
    </div>
  );
}

/* ---------- 6. DESIGNED TO BE ADMIRED ---------- */

function DesignedToBeAdmired() {
  const cards = [
    {
      title: 'Designed To Be Admired',
      copy: 'The kind of ring that catches attention instantly — without trying. The first comment is never asked for.',
      img: '/most-loved-solitaire.jpg',
    },
    {
      title: 'Her Favorite Piece Forever',
      copy: 'Worn at breakfast. Worn at the gym. Worn to bed. Designed to become part of her — not part of a jewelry box.',
      img: '/most-loved-oval.jpg',
    },
    {
      title: 'A Compliment Magnet',
      copy: 'Brilliance you can see across a room. The kind of sparkle people ask about before they ask her name.',
      img: '/most-loved-marquise.jpg',
    },
  ];

  return (
    <section
      className="py-20 md:py-28"
      style={{background: '#f7ede0'}}
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
            What She'll Feel
          </p>
          <h2
            className="text-[32px] md:text-[46px] leading-[1.08] font-light"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            Not Just A Ring. <em className="italic">An Identity.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-50px'}}
              transition={{duration: 0.6, delay: i * 0.08}}
              className="bg-white border border-[#ece4d4] overflow-hidden group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#f4ede0]">
                <img
                  src={c.img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
                />
              </div>
              <div className="px-6 py-7 md:px-8 md:py-9">
                <h3
                  className="text-[22px] md:text-[26px] font-light mb-3 leading-[1.2]"
                  style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[14px] md:text-[15px] text-foreground/65 leading-[1.85]"
                  style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                >
                  {c.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. ESCAPE PATH ---------- */

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
              Want To See Every Style?
            </h2>
            <p
              className="text-[15px] md:text-[16px] text-foreground/70 leading-[1.85] max-w-[460px] mb-8"
              style={{fontFamily: 'Inter, system-ui, sans-serif'}}
            >
              Solitaires, side-stone settings, vintage cuts, modern silhouettes. Every ring in our collection — handcrafted, certified, and made for the one who'll never take it off.
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

/* ---------- 8. UGC WALL ---------- */

function UGCWall() {
  // Vertical slots ready for real TikTok/UGC clips at /ugc-1.mp4 ... /ugc-6.mp4
  // Falls back to lifestyle image posters until videos are uploaded.
  const slots = [
    {video: '/ugc-1.mp4', poster: '/moment-bridal.jpg', caption: '"I can\'t stop looking at it."', author: '@sofia.m'},
    {video: '/ugc-2.mp4', poster: '/moment-portrait.jpg', caption: '"He nailed it. Every single detail."', author: '@camille.d'},
    {video: '/ugc-3.mp4', poster: '/moment-couple.jpg', caption: '"Everyone keeps asking where it\'s from."', author: '@eleanor.t'},
    {video: '/ugc-4.mp4', poster: '/romantic-rose-gold.jpg', caption: '"The sparkle in real sunlight…"', author: '@chiara.r'},
    {video: '/ugc-5.mp4', poster: '/romantic-white-gold.jpg', caption: '"It looks even better in person."', author: '@aria.l'},
    {video: '/ugc-6.mp4', poster: '/editorial-lifestyle.jpg', caption: '"I haven\'t taken it off since."', author: '@valentina'},
  ];

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{background: '#1a1410'}}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(70% 50% at 50% 0%, rgba(212,175,121,0.35) 0%, rgba(0,0,0,0) 70%)',
        }}
      />
      <div className="relative max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-[10px] md:text-[11px] uppercase mb-4 text-[#e8c98a]"
            style={{
              letterSpacing: '0.3em',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Real Hands · Real Reactions
          </p>
          <h2
            className="text-white text-[32px] md:text-[46px] leading-[1.08] font-light mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            See It On <em className="italic text-[#e8c98a]">Her</em>.
          </h2>
          <p
            className="text-white/65 text-[14px] md:text-[16px] max-w-[480px] mx-auto leading-[1.75]"
            style={{fontFamily: 'Inter, system-ui, sans-serif'}}
          >
            Real fingers. Real sunlight. Real reactions filmed by the people who own one.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 md:gap-3">
          {slots.map((s, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-30px'}}
              transition={{duration: 0.55, delay: i * 0.05}}
              className="group relative aspect-[9/16] overflow-hidden bg-black/40"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={s.poster}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
              >
                <source src={s.video} type="video/mp4" />
              </video>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%)',
                }}
              />
              <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center opacity-80">
                <Play className="w-3 h-3 text-white" fill="white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p
                  className="text-white text-[12px] md:text-[13px] leading-[1.4] mb-1.5 italic"
                  style={{fontFamily: 'Cormorant Garamond, Georgia, serif'}}
                >
                  {s.caption}
                </p>
                <p
                  className="text-[#e8c98a] text-[9px] md:text-[10px] uppercase"
                  style={{
                    letterSpacing: '0.18em',
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  {s.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <a
            href="#customize"
            className="inline-flex items-center gap-2 px-8 py-4 text-[11px] md:text-[12px] uppercase font-semibold transition-all duration-500 hover:scale-[1.02]"
            style={{
              background: 'hsl(var(--gold))',
              color: '#1a1410',
              letterSpacing: '0.22em',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Start Your Dream Ring
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. BRAND STORY ---------- */

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
            She'll wear it every single day.
          </p>
          <p
            className="text-[24px] md:text-[34px] leading-[1.4] font-light italic"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: 'hsl(var(--gold-dark))',
              textWrap: 'balance',
            }}
          >
            She'll look at it during ordinary moments and remember one extraordinary one.
          </p>
          <p
            className="text-[20px] md:text-[26px] leading-[1.5] font-light"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              textWrap: 'balance',
            }}
          >
            A ring is never just jewelry. It becomes part of her story.
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

/* ---------- 10. WHY LAB DIAMONDS ---------- */

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
              Lab-grown diamonds aren't alternatives. They <em>are</em> diamonds — grown in advanced laboratories instead of pulled from the earth. Same stone. Cleaner story. Better value.
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

/* ---------- 11. LUXURY VALIDATION ---------- */

function LuxuryValidation() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{background: 'linear-gradient(180deg, hsl(var(--ivory)) 0%, #f7ede0 100%)'}}
    >
      <div className="max-w-[860px] mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{opacity: 0, y: 14}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 1}}
          className="text-[26px] md:text-[40px] leading-[1.2] font-light"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            textWrap: 'balance',
          }}
        >
          The kind of ring people <em className="italic" style={{color: 'hsl(var(--gold-dark))'}}>assume</em> cost far more.
        </motion.h2>
        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1, delay: 0.2}}
          className="mt-6 text-[14px] md:text-[16px] text-foreground/65 leading-[1.85] max-w-[560px] mx-auto"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Luxury jewelry without traditional retail markups. Designed to look and feel exceptional — because it is.
        </motion.p>
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {[
            'Solid 14K & 18K Gold',
            'IGI Certified Diamonds',
            'DEF Color · VS1 Clarity',
            'Handcrafted To Order',
          ].map((b) => (
            <div key={b} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{background: 'hsl(var(--gold-dark))'}} />
              <span
                className="text-[11px] md:text-[12px] uppercase text-foreground/70"
                style={{letterSpacing: '0.22em', fontFamily: 'Inter, system-ui, sans-serif'}}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 12. WHY ASTREAS ---------- */

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

/* ---------- 13. SOCIAL PROOF ---------- */

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
                &ldquo;{r.text}&rdquo;
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
      </div>
    </section>
  );
}

/* ---------- 14. FAQ ---------- */

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
                      <div
                        className="text-[14px] md:text-[15px] text-foreground/65 leading-[1.85] pb-6 pr-8"
                        style={{fontFamily: 'Inter, system-ui, sans-serif'}}
                      >
                        {it.a}
                      </div>
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

/* ---------- 15. FINAL CTA ---------- */

function FinalCTA() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#1a1410]">
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
            'linear-gradient(180deg, rgba(20,15,12,0.45) 0%, rgba(20,15,12,0.72) 100%)',
        }}
      />
      <Sparks />
      <motion.div
        initial={{opacity: 0, y: 16}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 1}}
        className="relative z-10 text-center px-6 max-w-[720px] py-20"
      >
        <Heart
          className="w-6 h-6 mx-auto mb-6 text-[#e8c98a]"
          strokeWidth={1.2}
          fill="rgba(232,201,138,0.22)"
        />
        <h2
          className="text-white text-[36px] sm:text-[46px] md:text-[60px] leading-[1.06] font-light mb-7"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            textWrap: 'balance',
          }}
        >
          The ring she'll wear <em className="italic text-[#e8c98a]">forever</em> starts here.
        </h2>
        <p
          className="text-white/80 text-[15px] md:text-[17px] leading-[1.85] max-w-[480px] mx-auto mb-10"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          Luxury quality. Honest pricing. Designed to become part of her story — every single day.
        </p>
        <a
          href="#customize"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 text-[11px] md:text-[12px] font-semibold uppercase transition-all duration-500 hover:scale-[1.03]"
          style={{
            background: 'hsl(var(--gold))',
            color: '#1a1410',
            letterSpacing: '0.22em',
            fontFamily: 'Inter, system-ui, sans-serif',
            boxShadow: '0 14px 50px -10px rgba(232,201,138,0.45)',
          }}
        >
          Find Your Forever Ring
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <p
          className="mt-7 text-[11px] md:text-[12px] uppercase text-[#e8c98a]/85 flex items-center justify-center gap-2"
          style={{letterSpacing: '0.28em', fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          <span className="w-1 h-1 rounded-full" style={{background: '#e8c98a'}} />
          10% Welcome Offer · Free Insured Shipping · Lifetime Warranty
          <span className="w-1 h-1 rounded-full" style={{background: '#e8c98a'}} />
        </p>
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
          className="flex-[1.5] text-center py-3.5 uppercase text-[10.5px] font-semibold"
          style={{
            background: 'hsl(var(--gold))',
            color: '#1a1410',
            letterSpacing: '0.18em',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Create Her Ring
        </a>
      </div>
    </div>
  );
}
