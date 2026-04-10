import {Link} from 'react-router';

export function Footer() {
  return (
    <footer className="bg-foreground text-background/60">
      {/* Newsletter CTA */}
      <div className="border-b border-background/8">
        <div className="container-wide py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="serif-heading text-2xl text-background/90 mb-2">
              Stay Connected
            </h3>
            <p className="text-xs text-background/40 tracking-wide">
              Receive curated updates on new collections and exclusive pieces.
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 md:w-64 bg-transparent border border-background/15 px-5 py-3 text-xs text-background/80 placeholder:text-background/25 outline-none focus:border-background/30 transition-colors"
            />
            <button className="px-8 py-3 text-[9px] uppercase tracking-[0.22em] font-medium border border-background/15 border-l-0 text-background/60 hover:bg-background/10 transition-all duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img
                src="/astreas-logo.svg"
                alt="Astreas"
                className="h-6 w-auto brightness-0 invert opacity-60"
              />
              <span className="block text-[9px] tracking-[0.28em] uppercase text-background/50 font-normal mt-0.5">
                Italy
              </span>
            </div>
            <p className="text-xs leading-[2] text-background/35 max-w-[240px]">
              Lab-grown diamond fine jewelry. IGI certified. Crafted with
              intention, priced with transparency.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <p className="caps-label text-background/25 mb-6 text-[9px]">
              Shop
            </p>
            <div className="space-y-3">
              {[
                {name: 'Rings', href: '/collections/rings'},
                {name: 'Earrings', href: '/collections/earrings'},
                {name: 'Necklaces', href: '/collections/necklaces'},
                {name: 'Bracelets', href: '/collections/bracelets'},
                {name: 'All Jewelry', href: '/collections'},
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  prefetch="intent"
                  className="block text-xs text-background/40 hover:text-background/70 transition-colors duration-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Learn Column */}
          <div>
            <p className="caps-label text-background/25 mb-6 text-[9px]">
              Learn
            </p>
            <div className="space-y-3">
              {[
                {name: 'Gold Guide', href: '/education/gold-guide'},
                {
                  name: 'Lab Diamond Guide',
                  href: '/education/lab-diamond-guide',
                },
                {
                  name: 'Stone Comparison',
                  href: '/education/stone-comparison',
                },
                {name: 'FAQ', href: '/faq'},
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  prefetch="intent"
                  className="block text-xs text-background/40 hover:text-background/70 transition-colors duration-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div>
            <p className="caps-label text-background/25 mb-6 text-[9px]">
              Support
            </p>
            <div className="space-y-3">
              {[
                {name: 'Contact', href: '/contact'},
                {name: 'About Astreas', href: '/about'},
                {name: 'Shipping & Returns', href: '/faq'},
                {name: 'Terms & Conditions', href: '/terms'},
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  prefetch="intent"
                  className="block text-xs text-background/40 hover:text-background/70 transition-colors duration-500"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:support@astreasjewelry.com"
                className="block text-xs text-background/40 hover:text-background/70 transition-colors duration-500"
              >
                support@astreasjewelry.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-background/20 tracking-[0.15em]">
            &copy; {new Date().getFullYear()} Astreas. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-background/20 tracking-wide">
              IGI Certified
            </span>
            <span className="text-background/10">&middot;</span>
            <span className="text-[10px] text-background/20 tracking-wide">
              Lab-Grown Diamonds
            </span>
            <span className="text-background/10">&middot;</span>
            <span className="text-[10px] text-background/20 tracking-wide">
              Made to Order
            </span>
            <span className="text-background/10">&middot;</span>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event('astreas:open-cookie-settings'))
              }
              className="text-[10px] text-background/20 tracking-wide hover:text-background/40 transition-colors duration-300"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
