import type {ReviewsSummary} from '~/lib/design-families';

interface Props {
  reviews: ReviewsSummary;
  productName: string;
}

function StarsFilled({rating, max = 5}: {rating: number; max?: number}) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({length: max}, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-3.5 h-3.5 ${i < Math.round(rating) ? 'fill-foreground' : 'fill-border'}`}
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Customer reviews section.
 *
 * Renders aggregate score, featured review cards, and a "Write a review" CTA.
 * Designed to sit below the product configuration grid — full-width, no clutter.
 */
export function ProductReviews({reviews, productName}: Props) {
  return (
    <section
      className="mt-20 pt-14 border-t border-border/20"
      aria-label={`Customer reviews for ${productName}`}
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <p className="caps-label text-accent text-[9px] mb-2">Reviews</p>
          <h2 className="serif-heading text-2xl md:text-3xl">What our customers say</h2>
        </div>

        <div className="flex items-center gap-6">
          {/* Aggregate score */}
          <div className="flex items-end gap-3">
            <span className="text-4xl font-extralight tracking-tight leading-none">
              {reviews.average.toFixed(1)}
            </span>
            <div className="pb-0.5 space-y-1">
              <StarsFilled rating={reviews.average} />
              <p className="text-[10px] text-muted-foreground tracking-wide">
                {reviews.count.toLocaleString()} reviews
              </p>
            </div>
          </div>

          <button
            type="button"
            className="btn-dawn text-[11px] px-7 py-3"
            onClick={() => {
              /* TODO: wire to review modal or third-party reviews app */
            }}
          >
            Write a review
          </button>
        </div>
      </div>

      {/* ── Review cards ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.featured.map((review) => (
          <article
            key={review.id}
            className="p-7 bg-ivory border border-border/15 flex flex-col gap-4"
          >
            {/* Top row: stars + verified badge */}
            <div className="flex items-center justify-between">
              <StarsFilled rating={review.rating} />
              {review.verified && (
                <span className="caps-label text-[9px] text-accent/80 tracking-widest">
                  Verified purchase
                </span>
              )}
            </div>

            {/* Body */}
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium leading-snug">{review.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{review.body}</p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-border/15">
              <p className="text-xs text-foreground/70">
                {review.author}
                {review.location ? (
                  <span className="text-muted-foreground">, {review.location}</span>
                ) : null}
              </p>
              <p className="text-[10px] text-muted-foreground">{review.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
