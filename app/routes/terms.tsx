import type {Route} from './+types/terms';

export function meta({}: Route.MetaArgs) {
  return [
    {title: 'Terms & Conditions | Astreas'},
    {
      name: 'description',
      content:
        'Terms and conditions for purchasing from Astreas, including made-to-order production, returns, warranty, and shipping.',
    },
  ];
}

const LAST_UPDATED = 'April 2025';

const sections: {id: string; title: string; body: React.ReactNode}[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <>
        <p>
          These Terms and Conditions govern all purchases made through astreasjewelry.com
          (the &ldquo;Site&rdquo;). By placing an order with Astreas, you confirm that you have
          read, understood, and agreed to these terms in full.
        </p>
        <p>
          Astreas is a fine jewelry brand offering IGI-certified lab-grown diamond jewelry in solid
          gold, designed in Italy and made to order. Our goal is to provide an experience that is
          as clear and trustworthy as the jewelry itself.
        </p>
        <p>
          If you have any questions before or after your purchase, please contact us at{' '}
          <a
            href="mailto:support@astreasjewelry.com"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            support@astreasjewelry.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'made-to-order',
    title: 'Made-to-Order Production',
    body: (
      <>
        <p>
          All Astreas pieces are made to order. This means your jewelry is crafted specifically for
          you after your purchase is confirmed, rather than dispatched from existing stock.
        </p>
        <p>
          Production typically takes <strong>15 to 20 business days</strong> from the date of
          confirmed payment, depending on the complexity of the piece and your selected
          specifications. This timeline is an estimate and may vary during periods of high demand
          or due to circumstances outside our control.
        </p>
        <p>
          We will notify you by email when your order has been confirmed and again when it has been
          dispatched. If there is any significant delay, we will communicate this to you promptly.
        </p>
      </>
    ),
  },
  {
    id: 'customization',
    title: 'Customization',
    body: (
      <>
        <p>
          Many Astreas pieces can be configured with your choice of diamond shape, carat weight,
          metal type, gold purity, and where applicable, ring size or bracelet length. These
          selections are confirmed at the time of purchase and form part of your order.
        </p>
        <p>
          Because each piece is created to your individual specifications, customized or
          made-to-order items may have limited return eligibility. Please refer to the Returns and
          Exchanges section below for full details.
        </p>
        <p>
          We are not able to accept changes to your order after production has begun. Please review
          your configuration carefully before completing your purchase.
        </p>
      </>
    ),
  },
  {
    id: 'sizing',
    title: 'Sizing Responsibility',
    body: (
      <>
        <p>
          Ring sizes and bracelet lengths are selected by the customer at the time of purchase.
          Astreas provides guidance on our site to help you determine your correct size, but the
          final selection remains your responsibility.
        </p>
        <p>
          We strongly recommend verifying your size carefully before placing your order. If you are
          uncertain, we recommend consulting a local jeweler for a professional sizing before
          completing your purchase.
        </p>
        <p>
          Astreas is not responsible for pieces that do not fit due to an incorrect size being
          selected. Resizing services may be available on a case-by-case basis; please contact us
          to discuss your options.
        </p>
      </>
    ),
  },
  {
    id: 'pricing-payment',
    title: 'Pricing and Payment',
    body: (
      <>
        <p>
          All prices are displayed in <strong>Euros (EUR)</strong> and are inclusive of any
          applicable taxes where stated. Prices are subject to change without prior notice, but any
          price change will not affect an order that has already been confirmed.
        </p>
        <p>
          Payment is required in full at the time of purchase. We accept all major payment methods
          as displayed at checkout. Your order will not enter production until payment has been
          successfully received and confirmed.
        </p>
        <p>
          In the event of a pricing error on our Site, we reserve the right to cancel an order and
          offer a full refund. We will always communicate any such error before proceeding.
        </p>
      </>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping and Delivery',
    body: (
      <>
        <p>
          Astreas offers complimentary insured shipping on all orders. Delivery timelines begin once
          your piece has been completed and dispatched, which occurs after the production period
          described above.
        </p>
        <p>
          Estimated delivery times after dispatch are typically <strong>3 to 7 business days</strong>{' '}
          within Europe, and <strong>7 to 14 business days</strong> for international destinations,
          depending on the destination country and local customs procedures.
        </p>
        <p>
          International orders may be subject to import duties, taxes, or customs fees levied by
          the destination country. These charges are the responsibility of the recipient and are
          not included in the purchase price. Astreas is not responsible for delays caused by
          customs clearance processes.
        </p>
        <p>
          A tracking number will be provided once your order has been dispatched.
        </p>
      </>
    ),
  },
  {
    id: 'returns',
    title: 'Returns and Exchanges',
    body: (
      <>
        <p>
          We want you to feel completely confident in your Astreas purchase. If for any reason you
          are not satisfied, you may return your item within <strong>30 days</strong> of the
          delivery date for a full refund, subject to the conditions below.
        </p>
        <p>To be eligible for a return, your item must be:</p>
        <ul>
          <li>Unworn, undamaged, and in its original condition</li>
          <li>Returned in the original packaging with all documentation</li>
          <li>Accompanied by proof of purchase</li>
        </ul>
        <p>
          Items that have been resized, engraved, or otherwise altered after delivery are not
          eligible for return. Certain made-to-order pieces with highly specific customizations may
          also be exempt; this will be communicated clearly at the time of purchase if applicable.
        </p>
        <p>
          To initiate a return, please contact us at{' '}
          <a
            href="mailto:support@astreasjewelry.com"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            support@astreasjewelry.com
          </a>{' '}
          before sending any item back. Unauthorised returns may not be processed.
        </p>
        <p>
          Refunds are issued to the original payment method within 7 to 10 business days of
          receiving the returned item and confirming its condition.
        </p>
      </>
    ),
  },
  {
    id: 'warranty',
    title: 'Warranty',
    body: (
      <>
        <p>
          Each Astreas piece comes with a <strong>lifetime craftsmanship warranty</strong> against
          manufacturing defects in materials and workmanship under normal conditions of wear.
        </p>
        <p>
          This warranty covers structural defects in the setting, band, or clasp arising from the
          manufacturing process. It does not cover damage resulting from accidents, improper care,
          normal wear and tear, or modifications made by third parties.
        </p>
        <p>
          To make a warranty claim, please contact us with a description of the issue and
          photographic evidence. We will assess your claim and advise on the appropriate course of
          action, which may include repair, replacement, or a credit at our discretion.
        </p>
      </>
    ),
  },
  {
    id: 'certification',
    title: 'Certification',
    body: (
      <>
        <p>
          All Astreas diamonds of <strong>0.30 carats or above</strong> are supplied with an
          independent IGI (International Gemological Institute) certificate, verifying the stone's
          cut, color, clarity, and carat weight.
        </p>
        <p>
          The IGI certificate is issued for the diamond itself and travels with your piece. It is
          your independent verification of the stone's quality, provided by a third-party authority
          with no affiliation to Astreas.
        </p>
        <p>
          Diamonds below 0.30 carats are carefully selected for quality but may not include a
          certificate. If certification is important to you, please contact us before purchasing
          and we will confirm the certification status of the specific piece.
        </p>
      </>
    ),
  },
  {
    id: 'appearance',
    title: 'Product Appearance',
    body: (
      <>
        <p>
          We take great care to present our jewelry accurately through photography. However, the
          appearance of color, scale, and detail may vary depending on your screen settings,
          display calibration, and lighting conditions.
        </p>
        <p>
          Lab-grown diamonds, like all natural and cultivated gemstones, display individual
          characteristics. Minor variations in brilliance, tone, and reflection are natural and do
          not constitute a defect.
        </p>
        <p>
          Images showing diamond shapes on ring settings are for illustrative purposes. The
          relative scale of the stone to the band may appear larger or smaller depending on the
          specific carat weight and shape selected.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: (
      <>
        <p>
          Astreas&rsquo; liability in connection with any purchase is limited to the purchase price
          of the item in question. We are not liable for any indirect, consequential, or incidental
          damages arising from the purchase or use of our products.
        </p>
        <p>
          Nothing in these terms limits or excludes our liability for fraud, death, or personal
          injury caused by our negligence, or any other liability that cannot be limited or excluded
          by applicable law.
        </p>
        <p>
          These Terms and Conditions are governed by and construed in accordance with Italian law.
          Any disputes arising from or in connection with these terms shall be subject to the
          jurisdiction of the courts of Italy, unless otherwise required by applicable consumer
          protection laws in your country of residence.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact and Support',
    body: (
      <>
        <p>
          If you have any questions, concerns, or requests relating to your order or these Terms
          and Conditions, our team is available to assist you.
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:support@astreasjewelry.com"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            support@astreasjewelry.com
          </a>
        </p>
        <p>
          We aim to respond to all enquiries within <strong>2 business days</strong>. For urgent
          matters relating to an active order, please include your order number in your message.
        </p>
        <p>
          We value every customer and are committed to making every part of your Astreas experience
          feel as considered and reassuring as the jewelry itself.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-dawn bg-secondary/30">
        <div className="container-narrow text-center">
          <p className="caps-label text-[9px] mb-5" style={{color: 'hsl(var(--gold))'}}>
            Legal
          </p>
          <h1 className="serif-heading text-4xl md:text-5xl mb-6 leading-[1.1]">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="section-dawn">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto space-y-14">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="caps-label text-[10px] text-foreground mb-5 pb-3 border-b border-border/30">
                  {section.title}
                </h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-foreground [&_a]:text-foreground/60">
                  {section.body}
                </div>
              </div>
            ))}
          </div>

          {/* Back to top */}
          <div className="max-w-2xl mx-auto mt-20 pt-10 border-t border-border/20 text-center">
            <p className="text-xs text-muted-foreground">
              Questions?{' '}
              <a
                href="mailto:support@astreasjewelry.com"
                className="text-foreground/60 underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Contact us
              </a>
              {' '}at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
