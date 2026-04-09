import {useState, useEffect, useRef} from 'react';
import type {MediaItem} from '~/lib/design-families';

interface Props {
  items: MediaItem[];
  /** Image driven by the configurator (color + shape selectors). Used when no gallery item is selected. */
  fallbackSrc: string;
  fallbackAlt: string;
}

/**
 * Renders the main product media hero + a horizontal thumbnail strip.
 *
 * Clicking a thumbnail sets that item as the active view. When the parent
 * changes `fallbackSrc` (user picks a different color or shape), the gallery
 * selection resets so the configurator image is restored.
 *
 * Videos render with native browser controls and no autoplay.
 */
export function ProductMediaGallery({items, fallbackSrc, fallbackAlt}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset gallery selection whenever the configurator image changes
  useEffect(() => {
    setSelectedIndex(-1);
  }, [fallbackSrc]);

  // Reload video element when a different video is selected
  const active = selectedIndex >= 0 ? items[selectedIndex] : null;
  const isVideo = active?.type === 'video';

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [isVideo, active?.src]);

  const mainSrc = active?.src ?? fallbackSrc;
  const mainAlt = active?.alt ?? fallbackAlt;

  return (
    <div>
      {/* ── Main media area ─────────────────────────────────────────── */}
      <div className="aspect-square overflow-hidden bg-muted">
        {isVideo ? (
          <video
            ref={videoRef}
            src={active!.src}
            poster={active!.poster}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            key={mainSrc}
            src={mainSrc}
            alt={mainAlt}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        )}
      </div>

      {/* ── Thumbnail strip ─────────────────────────────────────────── */}
      {items.length > 0 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-px" style={{scrollbarWidth: 'none'}}>
          {items.map((item, i) => {
            const isSelected = selectedIndex === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedIndex(isSelected ? -1 : i)}
                aria-label={item.alt}
                aria-pressed={isSelected}
                className={[
                  'flex-none w-16 h-16 overflow-hidden bg-muted transition-all duration-200 focus:outline-none',
                  isSelected
                    ? 'ring-1 ring-foreground ring-offset-1'
                    : 'opacity-55 hover:opacity-100',
                ].join(' ')}
              >
                {item.type === 'video' ? (
                  <span className="relative block w-full h-full">
                    <img
                      src={item.poster ?? item.thumbnail}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Minimal play indicator */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-5 h-5 bg-white/75 rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 8 10" className="w-2 h-2 fill-foreground ml-px">
                          <path d="M0 0L8 5L0 10Z" />
                        </svg>
                      </span>
                    </span>
                  </span>
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
