import type {Route} from './+types/terms';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Terms & Conditions | Astreas'},
    {
      name: 'description',
      content:
        'Terms and conditions for Astreas Jewelry — covering made-to-order production, customization, returns, warranty, shipping, and more.',
    },
  ];
}

const LAST_UPDATED = 'April 2025';

type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  listAfter?: string;
};

const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'Welcome to Astreas Jewelry. By accessing our website or placing an order with us, you agree to the following Terms & Conditions. These terms are intended to provide clarity around how we operate, what you can expect from us, and what we ask from our customers in return.',
      'Please read them carefully before making a purchase.',
    ],
  },
  {
    id: 'general',
    title: 'General Information',
    paragraphs: [
      'Astreas Jewelry offers fine jewelry made with lab-grown diamonds and solid gold. Our pieces are designed with care, made to order, and presented with a commitment to quality, transparency, and trust.',
      'We reserve the right to update or revise these Terms & Conditions at any time. Any changes will take effect once published on this website.',
    ],
  },
  {
    id: 'product-information',
    title: 'Product Information',
    paragraphs: [
      'We make every effort to present our jewelry as accurately as possible through product descriptions, images, videos, and specifications. However, slight differences may occur due to screen settings, lighting, photography, hand-finishing, and the natural variation of materials.',
      'Carat weight, dimensions, proportions, and final appearance may vary slightly within accepted industry tolerances.',
    ],
  },
  {
    id: 'made-to-order',
    title: 'Made-to-Order Production',
    paragraphs: [
      'Many Astreas pieces are made to order. This means your jewelry is created specifically for you after purchase rather than held as ready-made stock.',
      'Because of this made-to-order process, production times may vary depending on the design, selected specifications, and order volume. Estimated timelines are provided as guidance and are not guaranteed delivery dates.',
    ],
  },
  {
    id: 'customization',
    title: 'Customization',
    paragraphs: [
      'Some Astreas pieces can be customized by selecting options such as metal type, carat weight, ring size, or other available specifications.',
      'Once an order for a customized or made-to-order piece has entered production, changes may no longer be possible. Please review your selections carefully before completing your purchase.',
    ],
  },
  {
    id: 'sizing',
    title: 'Ring Sizing Responsibility',
    paragraphs: [
      'Customers are responsible for selecting the correct ring size when placing an order. If you are unsure of your size, we recommend confirming it before purchasing.',
      'Astreas is not responsible for sizing issues caused by incorrect size selection at checkout. If resizing is possible for a particular piece, it may involve additional time and cost.',
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing and Payment',
    paragraphs: [
      'All prices are shown in the currency displayed on the website at the time of purchase. We reserve the right to update prices, product details, or availability at any time without prior notice.',
      'Payment must be completed in full before an order enters production or is prepared for shipment.',
      'In the event of a pricing error, technical issue, or incorrect listing, we reserve the right to cancel or decline the order and issue a refund if payment has already been made.',
    ],
  },
  {
    id: 'certification',
    title: 'Certification',
    paragraphs: [
      'Where stated on the product page, diamonds may include certification such as IGI certification. Certification details, when applicable, are provided according to the specific piece purchased.',
      'Not every item may include an individual certificate unless clearly stated in the product description.',
    ],
  },
  {
    id: 'shipping',
    title: 'Shipping and Delivery',
    paragraphs: [
      'We aim to prepare and ship all orders within the estimated timeframe shown on the website or shared during the ordering process. Delivery times may vary depending on destination, customs clearance, courier performance, and other factors outside our control.',
      'Astreas is not responsible for delays caused by shipping carriers, customs processes, force majeure events, or incorrect shipping details provided by the customer.',
      'Customers are responsible for providing complete and accurate shipping information.',
    ],
  },
  {
    id: 'duties',
    title: 'Duties, Taxes, and Import Fees',
    paragraphs: [
      'Depending on the destination country, your order may be subject to import duties, taxes, or customs charges. These charges are the responsibility of the customer unless otherwise stated by Astreas.',
      'We recommend checking local import rules before placing an international order.',
    ],
  },
  {
    id: 'returns',
    title: 'Returns and Exchanges',
    paragraphs: [
      'Please refer to our Shipping & Returns policy for the most current return and exchange terms.',
      'Because many Astreas pieces are made to order or customized, certain items may not be eligible for return or exchange unless they arrive damaged, defective, or materially different from what was ordered.',
      'Returned items must be sent back in original condition and packaging, subject to our return approval process where applicable.',
    ],
  },
  {
    id: 'warranty',
    title: 'Warranty and Aftercare',
    paragraphs: [
      'Astreas stands behind the quality of its jewelry and aims to provide a supportive aftercare experience. Please refer to our warranty policy or contact us directly for questions related to wear, care, or possible manufacturing issues.',
      'Our warranty does not cover damage resulting from misuse, accidental impact, improper storage, unauthorized repairs, normal wear and tear, or loss of stones caused by improper handling after delivery.',
    ],
  },
  {
    id: 'care',
    title: 'Care of Jewelry',
    paragraphs: [
      'Fine jewelry should be treated with care. We recommend removing jewelry before activities that may expose it to impact, chemicals, abrasion, or excessive force.',
      'Astreas is not responsible for damage caused by improper care, neglect, or everyday use outside normal jewelry wear expectations.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Order Refusal and Cancellation',
    paragraphs: [
      'We reserve the right to refuse, limit, or cancel any order at our discretion. This may include cases involving suspected fraud, payment issues, product availability errors, or situations where accurate fulfillment is not possible.',
      'If an order is cancelled after payment, the customer will receive a refund for the amount paid.',
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    paragraphs: [
      'All content on this website, including text, branding, images, videos, graphics, and design elements, belongs to Astreas Jewelry unless otherwise stated.',
      'This content may not be copied, reproduced, distributed, or used without prior written permission.',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, Astreas Jewelry shall not be liable for indirect, incidental, consequential, or special damages arising from the use of this website, the purchase of our products, or delays and issues outside our reasonable control.',
      'Our total liability in connection with any order shall not exceed the amount paid by the customer for the product in question.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy',
    paragraphs: [
      'Your use of this website is also subject to our Privacy Policy and Cookie Policy, which explain how your information is collected, stored, and used.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'If you have any questions regarding these Terms & Conditions, please contact us through the contact information provided on our website.',
    ],
  },
];

export default function Terms() {
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
            Terms &amp; Conditions
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
              These terms govern all purchases made through{' '}
              <span className="text-foreground/70">astreasjewelry.com</span>.
              If you have questions at any point, please{' '}
              <a
                href="/contact"
                className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors duration-300"
              >
                contact us
              </a>
              {' '}before purchasing.
            </p>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="caps-label text-[10px] text-foreground mb-5 tracking-[0.2em]">
                    {section.title}
                  </h2>
                  <div className="space-y-3.5">
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground leading-[1.9]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-10 border-b border-border/15" />
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-16 text-center">
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
