import {motion} from 'framer-motion';
import type {Route} from './+types/contact';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Contact | Astreas — Lab-Grown Diamond Jewelry'},
    {
      name: 'description',
      content:
        'Get in touch with Astreas. Questions about jewelry, custom orders, or sizing? Our team responds within 24 hours.',
    },
  ];
}

export default function Contact() {
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
            Get in Touch
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-5">
            We're Here to Help
          </h1>
          <p className="body-refined max-w-md mx-auto">
            Have a question about a piece, need guidance, or want to discuss a
            custom order? Our team is here for you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <form
              className="space-y-7"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="caps-label text-[9px] text-muted-foreground/60 mb-3 block">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-border/40 bg-transparent px-5 py-3.5 text-sm outline-none focus:border-foreground/30 transition-colors duration-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="caps-label text-[9px] text-muted-foreground/60 mb-3 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-border/40 bg-transparent px-5 py-3.5 text-sm outline-none focus:border-foreground/30 transition-colors duration-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="caps-label text-[9px] text-muted-foreground/60 mb-3 block">
                  Subject
                </label>
                <select className="w-full border border-border/40 bg-transparent px-5 py-3.5 text-sm outline-none focus:border-foreground/30 transition-colors duration-500">
                  <option>General Inquiry</option>
                  <option>Product Question</option>
                  <option>Order Support</option>
                  <option>Custom Order</option>
                  <option>Returns & Exchanges</option>
                </select>
              </div>
              <div>
                <label className="caps-label text-[9px] text-muted-foreground/60 mb-3 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-border/40 bg-transparent px-5 py-3.5 text-sm outline-none focus:border-foreground/30 transition-colors duration-500 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button type="submit" className="btn-dawn-filled">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-10 lg:pt-2">
            <div>
              <h3 className="caps-label text-[10px] text-foreground mb-3">
                Email
              </h3>
              <a
                href="mailto:support@astreasjewelry.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                support@astreasjewelry.com
              </a>
            </div>
            <div>
              <h3 className="caps-label text-[10px] text-foreground mb-3">
                Response Time
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We typically respond within 24 hours during business days.
              </p>
            </div>
            <div>
              <h3 className="caps-label text-[10px] text-foreground mb-3">
                Need Assistance?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team is here to help — whether it's a question about a
                piece, sizing guidance, or something entirely custom.
              </p>
            </div>
            <div>
              <h3 className="caps-label text-[10px] text-foreground mb-3">
                Custom Creations
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Didn't find what you're looking for? We can create it for you.
              </p>
              <a
                href="mailto:support@astreasjewelry.com"
                className="text-sm transition-colors duration-500"
                style={{color: 'hsl(var(--gold))'}}
              >
                support@astreasjewelry.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
