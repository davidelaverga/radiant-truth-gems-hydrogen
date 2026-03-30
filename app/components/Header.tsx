import {useState, useEffect, Suspense} from 'react';
import {Await, Link, NavLink, useAsyncValue} from 'react-router';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {Search, Heart, ShoppingBag, Menu, X, ChevronDown} from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

const shopLinks = [
  {name: 'All Collections', href: '/collections'},
  {name: 'Rings', href: '/collections/rings'},
  {name: 'Earrings', href: '/collections/earrings'},
  {name: 'Bracelets', href: '/collections/bracelets'},
];

const educationLinks = [
  {name: 'Gold Guide', href: '/education/gold-guide'},
  {name: 'Lab Diamond Guide', href: '/education/lab-diamond-guide'},
  {name: 'Stone Comparison', href: '/education/stone-comparison'},
];

export function Header({header, isLoggedIn, cart}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/98 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border)/0.5)]'
          : 'bg-background'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-foreground text-background text-center py-2.5">
        <p className="caps-label text-[9px] tracking-[0.25em]">
          Complimentary Insured Shipping · IGI Certified · Made to Order
        </p>
      </div>

      <nav className="container-wide flex items-center justify-between py-4 sm:py-6 lg:py-7">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-foreground/70" />
          ) : (
            <Menu className="w-5 h-5 text-foreground/70" />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="flex flex-col items-center" prefetch="intent">
          <img
            src="/astreas-logo.svg"
            alt="Astreas"
            className="h-7 md:h-8 w-auto"
          />
          <span className="text-[9px] tracking-[0.28em] uppercase text-muted-foreground font-normal mt-0.5">
            Italy
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {/* Shop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('shop')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/collections"
              className="caps-label text-[10px] flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors duration-500"
              prefetch="intent"
            >
              Shop <ChevronDown className="w-3 h-3 opacity-50" />
            </Link>
            <AnimatePresence>
              {activeDropdown === 'shop' && (
                <motion.div
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 8}}
                  transition={{duration: 0.2, ease: 'easeOut'}}
                  className="absolute top-full left-0 pt-4"
                >
                  <div
                    className="bg-background border border-border/30 py-6 px-8 min-w-[200px]"
                    style={{boxShadow: '0 8px 30px rgb(0 0 0 / 0.04)'}}
                  >
                    {shopLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        prefetch="intent"
                        className="block py-2 text-xs text-foreground/50 hover:text-foreground transition-colors duration-300 tracking-wide"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Education Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('education')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/education"
              className="caps-label text-[10px] flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors duration-500"
              prefetch="intent"
            >
              Education <ChevronDown className="w-3 h-3 opacity-50" />
            </Link>
            <AnimatePresence>
              {activeDropdown === 'education' && (
                <motion.div
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 8}}
                  transition={{duration: 0.2, ease: 'easeOut'}}
                  className="absolute top-full left-0 pt-4"
                >
                  <div
                    className="bg-background border border-border/30 py-6 px-8 min-w-[220px]"
                    style={{boxShadow: '0 8px 30px rgb(0 0 0 / 0.04)'}}
                  >
                    {educationLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        prefetch="intent"
                        className="block py-2 text-xs text-foreground/50 hover:text-foreground transition-colors duration-300 tracking-wide"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/pricing"
            prefetch="intent"
            className="caps-label text-[10px] text-foreground/60 hover:text-foreground transition-colors duration-500"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            prefetch="intent"
            className="caps-label text-[10px] text-foreground/60 hover:text-foreground transition-colors duration-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            prefetch="intent"
            className="caps-label text-[10px] text-foreground/60 hover:text-foreground transition-colors duration-500"
          >
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <SearchToggle />
          <Link to="/wishlist" className="relative" aria-label="Wishlist">
            <Heart className="w-[17px] h-[17px] text-foreground/50 hover:text-foreground transition-colors duration-500" />
          </Link>
          <CartToggle cart={cart} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.3, ease: 'easeOut'}}
            className="lg:hidden border-t border-border/30 overflow-hidden"
          >
            <div className="container-wide py-10 space-y-8">
              <div>
                <p className="caps-label text-muted-foreground/60 mb-4">Shop</p>
                {shopLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="divider-gold" />
              <div>
                <p className="caps-label text-muted-foreground/60 mb-4">
                  Education
                </p>
                {educationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="divider-gold" />
              <Link
                to="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-foreground/60"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-foreground/60"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-foreground/60"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button onClick={() => open('search')} aria-label="Search">
      <Search className="w-[17px] h-[17px] text-foreground/50 hover:text-foreground transition-colors duration-500" />
    </button>
  );
}

function CartBadge({count}: {count: number}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <button
      className="relative"
      aria-label="Cart"
      onClick={() => {
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      <ShoppingBag className="w-[17px] h-[17px] text-foreground/50 hover:text-foreground transition-colors duration-500" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-foreground text-background text-[8px] rounded-full flex items-center justify-center font-medium">
          {count}
        </span>
      )}
    </button>
  );
}

function CartToggle({cart}: {cart: Promise<CartApiQueryFragment | null>}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

// Keep HeaderMenu export for backward compatibility with MobileMenuAside
export {shopLinks, educationLinks};
