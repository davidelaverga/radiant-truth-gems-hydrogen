import {Await, useLoaderData, Link} from 'react-router';
import type {Route} from './+types/_index';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import {
  Gem,
  Award,
  BadgeDollarSign,
  Sparkles,
  Paintbrush,
  SlidersHorizontal,
  Hammer,
  PackageCheck,
  Truck,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import type {RecommendedProductsQuery} from 'storefrontapi.generated';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Astreas | Lab-Grown Diamond Fine Jewelry — Italy'},
    {
      name: 'description',
      content:
        'Handcrafted lab-grown diamond jewelry in solid 14K & 18K gold. IGI certified, made to order, complimentary insured shipping worldwide.',
    },
  ];
}

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context}: Route.LoaderArgs) {
  return {};
}

function loadDeferredData({context}: Route.LoaderArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      console.error(error);
      return null;
    });

  return {recommendedProducts};
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <MothersDayBundle />
      <BrandStory />
      <WhyChooseAstreas />
      <HowItWorks />
      <FeaturedShapes />
      <SideStoneRings />
      <RecommendedProducts products={data.recommendedProducts} />
      <TrustSignals />
      <ShippingReturnsWarranty />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}

/* ===== HERO ===== */
function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-[680px] flex items-center justify-center overflow-hidden">
      <img
        src="/hero-dawn.jpg"
        alt="Astreas fine jewelry"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/20" />
      <motion.div
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: 'easeOut'}}
        className="relative z-10 text-center text-background px-6"
      >
        <p className="caps-label text-[10px] text-background/70 mb-6 tracking-[0.3em]">
          Lab-Grown Diamond Fine Jewelry
        </p>
        <h1 className="serif-heading text-5xl md:text-7xl mb-6 leading-[1.05] text-background font-normal">
          Crafted with Intention
        </h1>
        <p className="text-sm text-background/70 max-w-md mx-auto mb-10 leading-relaxed">
          IGI certified lab-grown diamonds set in solid gold. Designed in Italy,
          made to order, priced with transparency.
        </p>
        <Link to="/collections" prefetch="intent" className="btn-dawn-accent">
          Explore the Collection
        </Link>
      </motion.div>
    </section>
  );
}

/* ===== FEATURED CATEGORIES ===== */
function FeaturedCategories() {
  const categories = [
    {name: 'Rings', image: '/category-rings.jpg', href: '/collections/rings'},
    {
      name: 'Earrings',
      image: '/category-earrings.jpg',
      href: '/collections/earrings',
    },
    {
      name: 'Bracelets',
      image: '/category-bracelets.jpg',
      href: '/collections/bracelets',
    },
  ];

  return (
    <section className="container-wide section-dawn">
      <div className="text-center mb-16">
        <p className="caps-label text-accent mb-3">Collections</p>
        <h2 className="serif-heading text-3xl md:text-4xl">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: i * 0.1}}
          >
            <Link
              to={cat.href}
              prefetch="intent"
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-background text-lg font-medium serif-heading">
                  {cat.name}
                </h3>
                <span className="inline-block mt-3 px-5 py-1.5 border border-background/70 text-background text-[10px] uppercase tracking-[0.18em] font-semibold group-hover:bg-background group-hover:text-foreground transition-all duration-500">
                  Shop Now
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ===== MOTHER'S DAY BUNDLE ===== */
function MothersDayBundle() {
  return (
    <section className="bg-ivory">
      <div className="container-wide section-dawn">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src="/mothers-day-bundle-white.jpg"
              alt="Mother's Day Signature Set"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="caps-label text-[9px] bg-accent text-background px-3 py-1.5">
                Limited Edition
              </span>
            </div>
          </div>
          <div>
            <p
              className="caps-label text-[9px] mb-6"
              style={{color: 'hsl(var(--gold))'}}
            >
              Mother's Day
            </p>
            <h2 className="serif-heading text-3xl md:text-4xl mb-4 leading-[1.15]">
              The Complete Signature Set
            </h2>
            <p className="body-refined leading-[2] mb-3">
              Four pieces. One unforgettable gift. Our Mother's Day Signature
              Set brings together a tennis bracelet, solitaire necklace, stud
              earrings, and classic ring — all in matching solid gold.
            </p>
            <p className="body-refined leading-[2] mb-8">
              Available in white, yellow, and rose gold. IGI certified diamonds
              throughout. Made to order in 15–20 days.
            </p>
            <div className="flex items-baseline gap-3 mb-10">
              <span className="serif-heading text-2xl">€4,190</span>
              <span className="text-sm text-muted-foreground line-through">€6,700</span>
              <span className="caps-label text-accent text-[9px]">Save €2,510</span>
            </div>
            <Link
              to="/mothers-day-set"
              prefetch="intent"
              className="btn-dawn-accent"
            >
              View the Set
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== BRAND STORY ===== */
function BrandStory() {
  return (
    <section className="bg-ivory">
      <div className="container-wide section-dawn">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p
              className="caps-label text-[9px] mb-6"
              style={{color: 'hsl(var(--gold))'}}
            >
              Our Philosophy
            </p>
            <h2 className="serif-heading text-3xl md:text-4xl mb-8 leading-[1.15]">
              Transparency Is Our Standard
            </h2>
            <p className="body-refined leading-[2] mb-5">
              Every piece in our collection comes with complete material
              specifications, stone grades, and certification details. We
              believe understanding what you're wearing shouldn't require a
              gemology degree.
            </p>
            <p className="body-refined leading-[2] mb-8">
              Crafted from solid 14k and 18k gold, set with lab-grown diamonds
              that are chemically identical to mined stones — at a fraction of
              the price.
            </p>
            <Link
              to="/about"
              prefetch="intent"
              className="caps-label text-accent text-[10px]"
            >
              Learn Our Story &rarr;
            </Link>
          </div>
          <img
            src="/editorial-lifestyle.jpg"
            alt="Astreas lifestyle"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== WHY CHOOSE ASTREAS ===== */
function WhyChooseAstreas() {
  const values = [
    {
      icon: Gem,
      title: 'Real Diamonds',
      desc: 'Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds.',
    },
    {
      icon: Award,
      title: 'IGI Certified',
      desc: 'Every diamond 0.30ct+ comes with an independent IGI certificate verifying quality.',
    },
    {
      icon: BadgeDollarSign,
      title: 'Transparent Pricing',
      desc: 'No markups, no hidden costs. See exactly what you pay for and why.',
    },
    {
      icon: Sparkles,
      title: 'Solid Gold Only',
      desc: '14k and 18k solid gold — no plating, no hollow construction, no compromises.',
    },
  ];

  return (
    <section className="container-wide section-dawn">
      <div className="text-center mb-16">
        <p className="caps-label text-accent mb-3">Why Astreas</p>
        <h2 className="serif-heading text-3xl md:text-4xl">
          What Sets Us Apart
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: i * 0.1}}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full border border-border/40 flex items-center justify-center mx-auto mb-5">
              <v.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-sm font-medium mb-2">{v.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ===== HOW IT WORKS ===== */
function HowItWorks() {
  const steps = [
    {
      icon: Paintbrush,
      title: 'Choose Your Design',
      desc: 'Browse our signature collection or start from a base design you love.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Customize It',
      desc: 'Select your carat, metal color, diamond shape, and ring size.',
    },
    {
      icon: Hammer,
      title: 'We Craft It',
      desc: 'Your piece is made to order in solid gold with an IGI certified diamond.',
    },
    {
      icon: PackageCheck,
      title: 'Delivered to You',
      desc: 'Complimentary insured shipping with full documentation and certification.',
    },
  ];

  return (
    <section className="bg-ivory">
      <div className="container-wide section-dawn">
        <div className="text-center mb-16">
          <p className="caps-label text-accent mb-3">Process</p>
          <h2 className="serif-heading text-3xl md:text-4xl">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="caps-label text-accent/40 text-[10px] mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <step.icon className="w-6 h-6 text-accent mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== FEATURED SHAPES ===== */
function FeaturedShapes() {
  const shapes = [
    {name: 'Round',    image: '/sol-wg-round.jpg',    shape: 'Round'},
    {name: 'Princess', image: '/sol-wg-princess.jpg', shape: 'Princess'},
    {name: 'Oval',     image: '/sol-wg-oval.jpg',     shape: 'Oval'},
    {name: 'Emerald',  image: '/sol-wg-emerald.jpg',  shape: 'Emerald'},
    {name: 'Cushion',  image: '/sol-wg-cushion.jpg',  shape: 'Cushion'},
    {name: 'Pear',     image: '/sol-wg-pear.jpg',     shape: 'Pear'},
    {name: 'Marquise', image: '/sol-wg-marquise.jpg', shape: 'Marquise'},
  ];

  return (
    <section className="container-wide section-dawn">
      <div className="text-center mb-16">
        <p className="caps-label text-accent mb-3">Signature Solitaire</p>
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">
          Choose Your Diamond Shape
        </h2>
        <p className="text-sm text-muted-foreground">
          Each shape brings its own character and brilliance
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {shapes.map((shape, i) => (
          <motion.div
            key={shape.name}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: i * 0.1}}
          >
            <Link
              to={`/design/classic-solitaire-ring?shape=${shape.shape}`}
              prefetch="intent"
              className="group block"
            >
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={shape.image}
                  alt={`${shape.name} cut diamond`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-center text-sm font-medium">{shape.name}</h3>
              <p className="text-center mt-3">
                <span className="inline-block px-5 py-1.5 border border-foreground/30 text-foreground text-[10px] uppercase tracking-[0.18em] font-semibold group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  Customize
                </span>
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ===== SIDE STONE RINGS ===== */
function SideStoneRings() {
  const shapes = [
    {name: 'Round', image: '/shape-round-sidestone.jpg', shape: 'Round'},
    {name: 'Princess', image: '/shape-princess-sidestone.jpg', shape: 'Princess'},
    {name: 'Oval', image: '/shape-oval-sidestone.jpg', shape: 'Oval'},
    {name: 'Emerald', image: '/shape-emerald-sidestone.jpg', shape: 'Emerald'},
    {name: 'Cushion', image: '/shape-cushion-sidestone.jpg', shape: 'Cushion'},
    {name: 'Pear', image: '/shape-pear-sidestone.jpg', shape: 'Pear'},
    {name: 'Marquise', image: '/shape-marquise-sidestone.jpg', shape: 'Marquise'},
  ];

  return (
    <section className="bg-ivory">
      <div className="container-wide section-dawn">
        <div className="text-center mb-16">
          <p className="caps-label text-accent mb-3">Side Stone Rings</p>
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">
            Choose Your Diamond Shape
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Elegant designs that highlight the center stone with refined side
            details. Crafted to enhance brilliance while maintaining a timeless
            look.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shapes.map((shape, i) => (
            <motion.div
              key={shape.name}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: i * 0.1}}
            >
              <Link
                to={`/design/side-stone-ring?shape=${shape.shape}`}
                prefetch="intent"
                className="group block"
              >
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    src={shape.image}
                    alt={`${shape.name} cut side stone ring`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-center text-sm font-medium">{shape.name}</h3>
                <p className="text-center mt-3">
                  <span className="inline-block px-5 py-1.5 border border-foreground/30 text-foreground text-[10px] uppercase tracking-[0.18em] font-semibold group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                    Customize
                  </span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== RECOMMENDED PRODUCTS (Shopify data) ===== */
function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <section className="bg-ivory">
      <div className="container-wide section-dawn">
        <div className="text-center mb-16">
          <p className="caps-label text-accent mb-3">From Our Store</p>
          <h2 className="serif-heading text-3xl md:text-4xl">
            Featured Pieces
          </h2>
        </div>
        <Suspense
          fallback={
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-muted mb-4" />
                  <div className="h-4 bg-muted w-3/4 mb-2" />
                  <div className="h-4 bg-muted w-1/2" />
                </div>
              ))}
            </div>
          }
        >
          <Await resolve={products}>
            {(response) =>
              response ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {response.products.nodes.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.handle}`}
                      prefetch="intent"
                      className="group"
                    >
                      {product.featuredImage && (
                        <div className="aspect-square overflow-hidden mb-4">
                          <Image
                            data={product.featuredImage}
                            aspectRatio="1/1"
                            sizes="(min-width: 45em) 25vw, 50vw"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}
                      <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <Money
                          data={product.priceRange.minVariantPrice}
                        />
                      </p>
                    </Link>
                  ))}
                </div>
              ) : null
            }
          </Await>
        </Suspense>
      </div>
    </section>
  );
}

/* ===== TRUST SIGNALS ===== */
function TrustSignals() {
  return (
    <section className="container-wide section-dawn-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          {value: '1,200+', label: 'Happy Customers'},
          {value: '4.9/5', label: 'Average Rating'},
          {value: '30-Day', label: 'Return Policy'},
          {value: 'IGI', label: 'Certified Diamonds'},
        ].map((t) => (
          <div key={t.label}>
            <p className="serif-heading text-3xl md:text-4xl text-accent mb-2">
              {t.value}
            </p>
            <p className="caps-label text-[9px] text-muted-foreground">
              {t.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== SHIPPING RETURNS WARRANTY ===== */
function ShippingReturnsWarranty() {
  const items = [
    {
      icon: Truck,
      title: 'Free Insured Shipping',
      desc: 'Complimentary worldwide shipping on every order. Fully insured, tracked, and discreetly packaged.',
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns',
      desc: "Not completely in love? Return unworn pieces within 30 days for a full refund. No questions asked.",
    },
    {
      icon: ShieldCheck,
      title: 'Lifetime Warranty',
      desc: "Every piece is built to last. We stand behind our craftsmanship with a warranty that covers manufacturing defects.",
    },
  ];

  return (
    <section className="bg-ivory">
      <div className="container-wide section-dawn-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="w-6 h-6 text-accent mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== TESTIMONIALS ===== */
function Testimonials() {
  const reviews = [
    {
      text: "The quality exceeded my expectations. The diamond is stunning and the gold feels substantial. Absolutely worth every euro.",
      author: 'Sophie L.',
      location: 'Paris',
    },
    {
      text: "I was skeptical about lab-grown diamonds until I held this ring. It's indistinguishable from my friend's mined diamond — at half the price.",
      author: 'Maria K.',
      location: 'Munich',
    },
    {
      text: 'The transparency is what sold me. I knew exactly what I was getting. The IGI certificate gave me complete confidence.',
      author: 'Elena R.',
      location: 'Milan',
    },
  ];

  return (
    <section className="container-wide section-dawn">
      <div className="text-center mb-16">
        <p className="caps-label text-accent mb-3">Testimonials</p>
        <h2 className="serif-heading text-3xl md:text-4xl">
          What Our Customers Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, i) => (
          <motion.div
            key={review.author}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: i * 0.1}}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-accent text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="serif-italic text-lg leading-relaxed mb-6 text-foreground/80">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="caps-label text-[10px]">{review.author}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {review.location}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ===== FINAL CTA ===== */
function FinalCTA() {
  return (
    <section className="bg-foreground text-background">
      <div className="container-wide section-dawn text-center">
        <p className="caps-label text-background/40 mb-6 text-[9px]">
          Begin Your Journey
        </p>
        <h2 className="serif-heading text-3xl md:text-5xl text-background/90 mb-6 font-normal">
          Find Your Perfect Piece
        </h2>
        <p className="text-sm text-background/50 max-w-md mx-auto mb-10 leading-relaxed">
          Every Astreas piece is made to order — crafted specifically for you,
          with the diamond shape, gold color, and size you choose.
        </p>
        <Link
          to="/collections"
          prefetch="intent"
          className="inline-block px-12 py-4 border border-background/20 text-background/70 uppercase text-[11px] font-semibold tracking-[0.2em] hover:bg-background/10 transition-all duration-700"
        >
          Start Exploring
        </Link>
      </div>
    </section>
  );
}

/* ===== GRAPHQL QUERIES ===== */
const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
