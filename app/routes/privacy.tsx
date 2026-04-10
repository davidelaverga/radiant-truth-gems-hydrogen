import type {Route} from './+types/privacy';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Privacy Policy | Astreas'},
    {
      name: 'description',
      content:
        'How Astreas Jewelry collects, uses, and protects your personal information. We are committed to privacy, transparency, and trust.',
    },
  ];
}

const LAST_UPDATED = 'April 2025';

export default function Privacy() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="section-dawn bg-secondary/30">
        <div className="container-narrow text-center">
          <p
            className="caps-label text-[9px] mb-5 tracking-[0.3em]"
            style={{color: 'hsl(var(--gold))'}}
          >
            Legal
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-5 leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────── */}
      <section className="section-dawn">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">

            {/* Intro note */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-14 pb-10 border-b border-border/20">
              At Astreas Jewelry, we value privacy, trust, and transparency in every part of
              the customer experience. If you have questions, please{' '}
              <a
                href="/contact"
                className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors duration-300"
              >
                contact us
              </a>
              {' '}at any time.
            </p>

            <div className="space-y-12">

              {/* Introduction */}
              <div id="introduction">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Introduction
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    This Privacy Policy explains how we collect, use, store, and protect your
                    personal information when you visit our website, place an order, contact us,
                    or otherwise interact with our brand.
                  </p>
                  <p>
                    By using our website, you agree to the practices described in this policy.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Information We Collect */}
              <div id="information-collected">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Information We Collect
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    When you interact with Astreas Jewelry, we may collect certain personal
                    information needed to provide our services and improve your experience.
                  </p>
                  <p>This may include:</p>
                  <ul className="list-none space-y-2 pl-0 my-4">
                    {[
                      'Your name',
                      'Email address',
                      'Phone number',
                      'Shipping and billing address',
                      'Payment and transaction details',
                      'Order history',
                      'Communication details when you contact us',
                      'Technical information such as browser type, device information, IP address, and browsing behaviour on our website',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-[0.6em] w-1 h-1 rounded-full flex-shrink-0"
                          style={{backgroundColor: 'hsl(var(--gold))'}}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    We collect only the information necessary to operate our store, fulfill orders,
                    communicate with you, and improve the experience we provide.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* How We Use Your Information */}
              <div id="how-we-use">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  How We Use Your Information
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>We may use your information to:</p>
                  <ul className="list-none space-y-2 pl-0 my-4">
                    {[
                      'Process and fulfill your orders',
                      'Provide customer support',
                      'Communicate with you about your order or inquiry',
                      'Send service-related emails and updates',
                      'Improve our website, products, and customer experience',
                      'Prevent fraud, unauthorized transactions, or misuse of our website',
                      'Comply with legal and regulatory obligations',
                      'Send marketing communications where permitted or where you have chosen to receive them',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-[0.6em] w-1 h-1 rounded-full flex-shrink-0"
                          style={{backgroundColor: 'hsl(var(--gold))'}}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Payments */}
              <div id="payments">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Payments
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    Payments made through our website are processed through secure third-party
                    payment providers. Astreas Jewelry does not store full payment card information
                    on its own servers.
                  </p>
                  <p>
                    Payment providers may collect and process payment-related information according
                    to their own privacy and security policies.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Cookies */}
              <div id="cookies">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Cookies and Similar Technologies
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    Our website may use cookies and similar technologies to support essential site
                    functionality, improve performance, remember preferences, and understand how
                    visitors use the site.
                  </p>
                  <p>
                    Where required by law, non-essential cookies such as analytics or marketing
                    cookies will only be used based on your consent. You may manage your
                    preferences through our cookie settings tools where available.
                  </p>
                  <p>
                    For more information, please refer to our{' '}
                    <button
                      type="button"
                      onClick={() =>
                        typeof window !== 'undefined' &&
                        window.dispatchEvent(new Event('astreas:open-cookie-settings'))
                      }
                      className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors duration-300"
                    >
                      Cookie Settings
                    </button>
                    .
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* How We Share Information */}
              <div id="sharing">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  How We Share Information
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>We do not sell your personal information to third parties.</p>
                  <p>
                    We may share your information only where necessary to operate the business
                    and provide our services, including with:
                  </p>
                  <ul className="list-none space-y-2 pl-0 my-4">
                    {[
                      'Payment providers',
                      'Shipping and logistics partners',
                      'Website, ecommerce, and hosting providers',
                      'Fraud prevention and security services',
                      'Marketing or analytics providers where permitted',
                      'Legal or regulatory authorities where required by law',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-[0.6em] w-1 h-1 rounded-full flex-shrink-0"
                          style={{backgroundColor: 'hsl(var(--gold))'}}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Any third-party service providers we work with are expected to handle personal
                    information responsibly and only for the purposes connected to the services
                    they provide.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* International */}
              <div id="international">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  International Data Processing
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    Because Astreas Jewelry may serve customers in different countries and may use
                    service providers operating internationally, your information may be processed
                    or stored in jurisdictions outside your own country.
                  </p>
                  <p>
                    Where this happens, we take reasonable steps to ensure that personal
                    information is handled with appropriate safeguards and in accordance with
                    applicable privacy laws.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Retention */}
              <div id="retention">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Data Retention
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    We retain personal information only for as long as it is reasonably necessary
                    to fulfill the purposes described in this policy, including providing our
                    services, maintaining business records, resolving disputes, enforcing
                    agreements, and complying with legal obligations.
                  </p>
                  <p>
                    When information is no longer required, we will delete it or store it in a
                    form that no longer identifies you, where appropriate.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Your Rights */}
              <div id="your-rights">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Your Rights
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    Depending on your location and applicable law, you may have the right to:
                  </p>
                  <ul className="list-none space-y-2 pl-0 my-4">
                    {[
                      'Request access to the personal information we hold about you',
                      'Request correction of inaccurate or incomplete information',
                      'Request deletion of your personal information',
                      'Object to or restrict certain types of processing',
                      'Withdraw consent where processing is based on consent',
                      'Request a copy of certain personal data in a portable format',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-[0.6em] w-1 h-1 rounded-full flex-shrink-0"
                          style={{backgroundColor: 'hsl(var(--gold))'}}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    If you would like to make a privacy-related request, please contact us using
                    the contact details provided on our website.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Marketing */}
              <div id="marketing">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Marketing Communications
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    If you choose to receive marketing emails or communications from Astreas
                    Jewelry, you may opt out at any time by using the unsubscribe link provided
                    in the message or by contacting us directly.
                  </p>
                  <p>
                    Even if you opt out of marketing messages, we may still send you
                    service-related communications connected to your order, account, or customer
                    support requests.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Security */}
              <div id="security">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Security
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    We take reasonable administrative, technical, and organizational measures to
                    protect personal information from unauthorized access, misuse, loss,
                    alteration, or disclosure.
                  </p>
                  <p>
                    However, no method of data transmission or storage can be guaranteed to be
                    completely secure, and we cannot promise absolute security.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Third-Party Links */}
              <div id="third-party">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Third-Party Links
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    Our website may contain links to third-party websites or services. If you
                    follow those links, please note that their privacy practices are governed by
                    their own policies, not by Astreas Jewelry.
                  </p>
                  <p>
                    We encourage you to review their privacy policies before providing personal
                    information.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Children */}
              <div id="children">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Children&rsquo;s Privacy
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    Astreas Jewelry is not intended for children, and we do not knowingly collect
                    personal information from individuals who are below the age required by
                    applicable law to provide valid consent.
                  </p>
                  <p>
                    If we become aware that personal information has been collected from a child
                    without appropriate authorization, we will take reasonable steps to delete it.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Changes */}
              <div id="changes">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Changes to This Policy
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our
                    practices, legal requirements, or operational needs.
                  </p>
                  <p>
                    Any updates will become effective when posted on this website. We encourage
                    customers to review this page periodically.
                  </p>
                </div>
                <div className="mt-10 border-b border-border/15" />
              </div>

              {/* Contact */}
              <div id="contact">
                <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                  Contact
                </h2>
                <div className="space-y-3.5 text-sm text-muted-foreground leading-[1.9]">
                  <p>
                    If you have any questions about this Privacy Policy or how your personal
                    information is handled, please contact us at{' '}
                    <a
                      href="mailto:support@astreasjewelry.com"
                      className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors duration-300"
                    >
                      support@astreasjewelry.com
                    </a>
                    .
                  </p>
                </div>
              </div>

            </div>

            {/* Footer note */}
            <div className="mt-16 pt-10 border-t border-border/20 text-center">
              <p className="text-xs text-muted-foreground">
                Questions?{' '}
                <a
                  href="mailto:support@astreasjewelry.com"
                  className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors duration-300"
                >
                  support@astreasjewelry.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
