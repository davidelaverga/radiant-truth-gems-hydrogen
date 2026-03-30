import {useState} from 'react';
import {Link} from 'react-router';
import {motion} from 'framer-motion';
import type {Route} from './+types/mothers-day-set';
import {Gift, Clock} from 'lucide-react';

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Mother's Day Signature Set | Astreas"},
    {
      name: 'description',
      content:
        "The complete Mother's Day diamond jewelry set: tennis bracelet, necklace, stud earrings, and solitaire ring in solid gold.",
    },
  ];
}

const bundleItems = [
  {name: 'Tennis Bracelet', detail: '~4ct total weight', icon: '💎'},
  {name: 'Solitaire Necklace', detail: '1ct pendant', icon: '✨'},
  {name: 'Diamond Stud Earrings', detail: '2ct total weight', icon: '💫'},
  {name: 'Classic Solitaire Ring', detail: '1ct center stone', icon: '💍'},
];

const colorOptions = [
  {name: 'White Gold', value: 'white', image: '/mothers-day-bundle-white.jpg'},
  {name: 'Yellow Gold', value: 'yellow', image: '/mothers-day-bundle-yellow.jpg'},
  {name: 'Rose Gold', value: 'rose', image: '/mothers-day-bundle-rose.jpg'},
];

export default function MothersDaySet() {
  const [selectedColor, setSelectedColor] = useState('white');
  const selectedImage = colorOptions.find((c) => c.value === selectedColor)?.image || colorOptions[0].image;

  const bundlePrice = 4190;
  const retailPrice = 6700;
  const savings = retailPrice - bundlePrice;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6}}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={selectedImage}
                alt={`Mother's Day Set in ${selectedColor} gold`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Color Switcher */}
            <div className="flex gap-3 mt-4 justify-center">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`text-xs px-4 py-2 transition-all duration-300 ${
                    selectedColor === color.value
                      ? 'border border-foreground text-foreground'
                      : 'border border-border/40 text-muted-foreground hover:border-foreground/30'
                  }`}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <div className="lg:py-4">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-4 h-4 text-accent" />
              <span className="caps-label text-accent text-[9px]">Limited Edition</span>
            </div>
            <h1 className="serif-heading text-3xl md:text-4xl mb-3">
              Mother&rsquo;s Day Signature Set
            </h1>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              The complete diamond set — four signature pieces designed to be
              worn together or individually. Each piece is crafted in solid gold
              with IGI-certified lab-grown diamonds.
            </p>

            {/* Bundle Items */}
            <div className="space-y-3 mb-8">
              {bundleItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-3 border border-border/20"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-medium">${bundlePrice.toLocaleString()}</span>
                <s className="text-sm text-muted-foreground">${retailPrice.toLocaleString()}</s>
              </div>
              <p className="text-sm text-accent font-medium">
                Save ${savings.toLocaleString()} with the bundle
              </p>
            </div>

            {/* Urgency */}
            <div className="flex items-center gap-2 mb-8 p-3 bg-ivory border border-border/20">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <p className="text-xs text-muted-foreground">
                Made to order — allow 10-14 business days for delivery.
                Order early for Mother&rsquo;s Day.
              </p>
            </div>

            {/* CTA */}
            <Link
              to={`/products/mothers-day-signature-set`}
              prefetch="intent"
              className="block w-full btn-dawn-filled text-center mb-4"
            >
              View Product
            </Link>
            <Link
              to="/contact"
              prefetch="intent"
              className="block w-full btn-dawn text-center"
            >
              Inquire About This Set
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-ivory">
        <div className="container-wide section-dawn-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              {label: '4 Pieces', desc: 'Complete set'},
              {label: 'IGI Certified', desc: 'Every diamond'},
              {label: 'Solid Gold', desc: '14K or 18K'},
              {label: 'Free Shipping', desc: 'Insured worldwide'},
            ].map((item) => (
              <div key={item.label}>
                <p className="text-sm font-medium mb-1">{item.label}</p>
                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
