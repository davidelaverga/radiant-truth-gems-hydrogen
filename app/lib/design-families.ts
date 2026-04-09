/**
 * Design family definitions for the configurable product system.
 *
 * Each family defines the visual configuration options (shapes, colors)
 * and image mappings. Buyable options (carat, purity) come from Shopify
 * product variants loaded via the Storefront API.
 *
 * Images are served from public/ directory.
 */

/** A single item in the product media gallery (image or short video). */
export interface MediaItem {
  type: 'image' | 'video';
  /** Full-resolution source shown in the main hero area. */
  src: string;
  /** Small square thumbnail (can be same as src; browser will scale it). */
  thumbnail: string;
  alt: string;
  /** Poster frame for video items. */
  poster?: string;
}

/** One featured customer review. */
export interface FeaturedReview {
  id: string;
  author: string;
  location?: string;
  rating: number; // 1–5
  date: string;
  title: string;
  body: string;
  verified?: boolean;
}

/** Aggregate + featured reviews shown in the reviews section. */
export interface ReviewsSummary {
  average: number;
  count: number;
  featured: FeaturedReview[];
}

export interface DesignFamily {
  id: string;
  name: string;
  shopifyHandle: string;
  description: string;
  category: 'ring' | 'earring' | 'bracelet' | 'necklace';
  shapes: string[];
  hasRingSize: boolean;
  hasBraceletLength: boolean;
  is14kOnly: boolean;
  braceletLengthMultipliers?: {label: string; value: string; multiplier: number}[];
  ringSizes?: string[];
  goldColors: {name: string; value: string; color: string; image: string}[];
  /** Default shape images (yellow gold) */
  shapeImages: Record<string, string>;
  /** Shape images by gold color */
  shapeImagesByColor: Record<string, Record<string, string>>;
  /** Additional product views shown in the thumbnail gallery below the main image. */
  media?: MediaItem[];
  /** Customer reviews aggregate + featured items. */
  reviews?: ReviewsSummary;
}

const STANDARD_RING_SIZES = [
  '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10',
];

const ROMANTIC_RING_SIZES = ['5', '6', '7', '8', '9'];

const RING_SHAPES = ['Round', 'Princess', 'Oval', 'Pear', 'Emerald', 'Cushion', 'Marquise'];
const EARRING_SHAPES = ['Round', 'Princess', 'Oval', 'Emerald'];

const BRACELET_LENGTHS = [
  {label: '6 inches', value: '6in', multiplier: 0.92},
  {label: '7 inches', value: '7in', multiplier: 1.0},
  {label: '8 inches', value: '8in', multiplier: 1.1},
  {label: '9 inches', value: '9in', multiplier: 1.22},
];

export const DESIGN_FAMILIES: DesignFamily[] = [
  {
    id: 'classic-solitaire-ring',
    name: 'Classic Solitaire Ring',
    shopifyHandle: 'classic-solitaire-lab-diamond-ring',
    description: 'A timeless solitaire with refined proportions and everyday elegance.',
    category: 'ring',
    shapes: RING_SHAPES,
    hasRingSize: true,
    hasBraceletLength: false,
    is14kOnly: false,
    ringSizes: STANDARD_RING_SIZES,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/signature-solitaire-ring.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/solitaire-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/solitaire-rose-gold.jpg'},
    ],
    shapeImages: {
      Round: '/sol-wg-round.jpg',
      Princess: '/sol-wg-princess.jpg',
      Oval: '/sol-wg-oval.jpg',
      Emerald: '/sol-wg-emerald.jpg',
      Pear: '/sol-wg-pear.jpg',
      Cushion: '/sol-wg-cushion.jpg',
      Marquise: '/sol-wg-marquise.jpg',
    },
    shapeImagesByColor: {
      white: {
        Round: '/sol-wg-round.jpg', Princess: '/sol-wg-princess.jpg', Oval: '/sol-wg-oval.jpg',
        Emerald: '/sol-wg-emerald.jpg', Pear: '/sol-wg-pear.jpg', Cushion: '/sol-wg-cushion.jpg',
        Marquise: '/sol-wg-marquise.jpg',
      },
      rose: {
        Round: '/sol-rg-round.jpg', Princess: '/sol-rg-princess.jpg', Oval: '/sol-rg-oval.jpg',
        Emerald: '/sol-rg-emerald.jpg', Pear: '/sol-rg-pear.jpg', Cushion: '/sol-rg-cushion.jpg',
        Marquise: '/sol-rg-marquise.jpg',
      },
    },
    media: [
      {type: 'image', src: '/signature-solitaire-ring.jpg', thumbnail: '/signature-solitaire-ring.jpg', alt: 'Classic Solitaire — yellow gold studio'},
      {type: 'image', src: '/solitaire-white-gold.jpg', thumbnail: '/solitaire-white-gold.jpg', alt: 'Classic Solitaire — white gold'},
      {type: 'image', src: '/solitaire-rose-gold.jpg', thumbnail: '/solitaire-rose-gold.jpg', alt: 'Classic Solitaire — rose gold'},
      {type: 'image', src: '/sol-wg-oval.jpg', thumbnail: '/sol-wg-oval.jpg', alt: 'Classic Solitaire — oval cut, white gold'},
      {type: 'image', src: '/sol-wg-pear.jpg', thumbnail: '/sol-wg-pear.jpg', alt: 'Classic Solitaire — pear cut, white gold'},
    ],
    reviews: {
      average: 4.9,
      count: 183,
      featured: [
        {
          id: 'csr-1',
          author: 'Sofia M.',
          location: 'Milan',
          rating: 5,
          date: 'March 2025',
          title: 'Absolutely breathtaking',
          body: 'I ordered the round cut in white gold and it exceeded every expectation. The craftsmanship is extraordinary — it looks even more stunning in person. I receive compliments every single day.',
          verified: true,
        },
        {
          id: 'csr-2',
          author: 'Eleanor T.',
          location: 'London',
          rating: 5,
          date: 'January 2025',
          title: 'Worth every penny',
          body: 'The diamond is stunning and the band is perfectly proportioned. I appreciated the guidance in choosing the cut. It arrived beautifully packaged and felt truly special to unwrap.',
          verified: true,
        },
        {
          id: 'csr-3',
          author: 'Camille D.',
          location: 'Paris',
          rating: 5,
          date: 'February 2025',
          title: 'My dream ring',
          body: 'The oval cut in yellow gold is exactly what I had been searching for. The stone has incredible fire and the setting is so refined. I could not be happier with my choice.',
          verified: true,
        },
      ],
    },
  },
  {
    id: 'side-stone-ring',
    name: 'Side Stone Ring',
    shopifyHandle: 'side-stone-lab-diamond-ring',
    description: 'Elegance amplified with delicate accent stones flanking the center diamond.',
    category: 'ring',
    shapes: RING_SHAPES,
    hasRingSize: true,
    hasBraceletLength: false,
    is14kOnly: false,
    ringSizes: STANDARD_RING_SIZES,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/signature-sidestone-ring.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/sidestone-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/sidestone-rose-gold.jpg'},
    ],
    shapeImages: {
      Round: '/shape-oval-sidestone.jpg', Princess: '/shape-princess-sidestone.jpg',
      Oval: '/shape-round-sidestone.jpg', Emerald: '/shape-emerald-sidestone.jpg',
      Pear: '/shape-pear-sidestone.jpg', Cushion: '/shape-cushion-sidestone.jpg',
      Marquise: '/shape-marquise-sidestone.jpg',
    },
    shapeImagesByColor: {
      white: {
        Round: '/ss-wg-round.jpg', Princess: '/ss-wg-princess.jpg', Oval: '/ss-wg-oval.jpg',
        Emerald: '/ss-wg-emerald.jpg', Pear: '/ss-wg-pear.jpg', Cushion: '/ss-wg-cushion.jpg',
        Marquise: '/ss-wg-marquise.jpg',
      },
      rose: {
        Round: '/ss-rg-round.jpg', Princess: '/ss-rg-princess.jpg', Oval: '/ss-rg-oval.jpg',
        Emerald: '/ss-rg-emerald.jpg', Pear: '/ss-rg-pear.jpg', Cushion: '/ss-rg-cushion.jpg',
        Marquise: '/ss-rg-marquise.jpg',
      },
    },
    media: [
      {type: 'image', src: '/signature-sidestone-ring.jpg', thumbnail: '/signature-sidestone-ring.jpg', alt: 'Side Stone Ring — yellow gold studio'},
      {type: 'image', src: '/sidestone-white-gold.jpg', thumbnail: '/sidestone-white-gold.jpg', alt: 'Side Stone Ring — white gold'},
      {type: 'image', src: '/sidestone-rose-gold.jpg', thumbnail: '/sidestone-rose-gold.jpg', alt: 'Side Stone Ring — rose gold'},
      {type: 'image', src: '/ss-wg-oval.jpg', thumbnail: '/ss-wg-oval.jpg', alt: 'Side Stone Ring — oval cut, white gold'},
      {type: 'image', src: '/ss-wg-pear.jpg', thumbnail: '/ss-wg-pear.jpg', alt: 'Side Stone Ring — pear cut, white gold'},
    ],
    reviews: {
      average: 4.8,
      count: 96,
      featured: [
        {
          id: 'ssr-1',
          author: 'Valentina R.',
          location: 'Rome',
          rating: 5,
          date: 'April 2025',
          title: 'The accent stones make all the difference',
          body: 'The side stones catch the light in the most beautiful way. I chose the emerald cut in rose gold and it is truly magnificent. The quality is exceptional for a lab diamond ring.',
          verified: true,
        },
        {
          id: 'ssr-2',
          author: 'Isabelle C.',
          location: 'Geneva',
          rating: 5,
          date: 'February 2025',
          title: 'Elegant and refined',
          body: 'I was looking for something with a little more presence than a plain solitaire, and this was perfect. The proportions are exquisite and the finish is flawless.',
          verified: true,
        },
        {
          id: 'ssr-3',
          author: 'Natasha B.',
          location: 'Vienna',
          rating: 4,
          date: 'March 2025',
          title: 'Stunning ring, fast delivery',
          body: 'Arrived sooner than expected and beautifully packaged. The ring looks exactly as pictured — maybe even better. Very happy with the white gold option.',
          verified: true,
        },
      ],
    },
  },
  {
    id: 'romantic-ring',
    name: 'Romantic Diamond Ring',
    shopifyHandle: 'romantic-lab-diamond-ring',
    description: 'A romantic vintage-inspired design with intricate detail work.',
    category: 'ring',
    shapes: RING_SHAPES,
    hasRingSize: false, // Size is a Shopify variant axis, not a line item property
    hasBraceletLength: false,
    is14kOnly: true,
    ringSizes: ROMANTIC_RING_SIZES,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/signature-romantic-ring.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/romantic-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/romantic-rose-gold.jpg'},
    ],
    shapeImages: {},
    shapeImagesByColor: {},
    media: [
      {type: 'image', src: '/signature-romantic-ring.jpg', thumbnail: '/signature-romantic-ring.jpg', alt: 'Romantic Ring — yellow gold studio'},
      {type: 'image', src: '/romantic-white-gold.jpg', thumbnail: '/romantic-white-gold.jpg', alt: 'Romantic Ring — white gold'},
      {type: 'image', src: '/romantic-rose-gold.jpg', thumbnail: '/romantic-rose-gold.jpg', alt: 'Romantic Ring — rose gold'},
    ],
    reviews: {
      average: 4.9,
      count: 74,
      featured: [
        {
          id: 'rr-1',
          author: 'Aurora L.',
          location: 'Florence',
          rating: 5,
          date: 'March 2025',
          title: 'Romantic in every sense',
          body: 'The vintage-inspired detailing is exquisite. I ordered the round cut in yellow gold and it has such a warm, timeless character. It feels like a family heirloom.',
          verified: true,
        },
        {
          id: 'rr-2',
          author: 'Margot V.',
          location: 'Brussels',
          rating: 5,
          date: 'January 2025',
          title: 'Perfectly crafted',
          body: 'The milgrain detail and the way the stones are set give it a distinctive quality. My fiancée said it was more beautiful than anything she had seen in a traditional jewellery store.',
          verified: true,
        },
        {
          id: 'rr-3',
          author: 'Cecilia H.',
          location: 'Stockholm',
          rating: 5,
          date: 'February 2025',
          title: 'Heirloom quality',
          body: 'I was drawn to the intricate detail and I was not disappointed. The ring is beautifully made, the diamond is brilliant, and the proportions are exactly right.',
          verified: true,
        },
      ],
    },
  },
  {
    id: 'diamond-stud-earrings',
    name: 'Diamond Stud Earrings',
    shopifyHandle: 'lab-diamond-stud-earrings',
    description: 'Classic diamond studs — timeless, versatile, and endlessly wearable.',
    category: 'earring',
    shapes: EARRING_SHAPES,
    hasRingSize: false,
    hasBraceletLength: false,
    is14kOnly: false,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/signature-stud-earrings.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/studs-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/studs-rose-gold.jpg'},
    ],
    shapeImages: {
      Round: '/studs-round-yellow.jpg', Princess: '/studs-princess-yellow.jpg',
      Oval: '/studs-oval-yellow.jpg', Emerald: '/studs-emerald-yellow.jpg',
    },
    shapeImagesByColor: {
      white: {
        Round: '/studs-round-white.jpg', Princess: '/studs-princess-white.jpg',
        Oval: '/studs-oval-white.jpg', Emerald: '/studs-emerald-white.jpg',
      },
      rose: {
        Round: '/studs-round-rose.jpg', Princess: '/studs-princess-rose.jpg',
        Oval: '/studs-oval-rose.jpg', Emerald: '/studs-emerald-rose.jpg',
      },
    },
    media: [
      {type: 'image', src: '/signature-stud-earrings.jpg', thumbnail: '/signature-stud-earrings.jpg', alt: 'Diamond Studs — yellow gold studio'},
      {type: 'image', src: '/studs-white-gold.jpg', thumbnail: '/studs-white-gold.jpg', alt: 'Diamond Studs — white gold'},
      {type: 'image', src: '/studs-rose-gold.jpg', thumbnail: '/studs-rose-gold.jpg', alt: 'Diamond Studs — rose gold'},
      {type: 'image', src: '/studs-round-yellow.jpg', thumbnail: '/studs-round-yellow.jpg', alt: 'Diamond Studs — round cut close-up'},
    ],
    reviews: {
      average: 4.9,
      count: 142,
      featured: [
        {
          id: 'dse-1',
          author: 'Léa F.',
          location: 'Lyon',
          rating: 5,
          date: 'March 2025',
          title: 'My everyday diamonds',
          body: 'I wear these every single day. The brilliance is remarkable and they are comfortable enough for all-day wear. The white gold setting is immaculate.',
          verified: true,
        },
        {
          id: 'dse-2',
          author: 'Hannah K.',
          location: 'Munich',
          rating: 5,
          date: 'January 2025',
          title: 'The perfect gift',
          body: 'I bought these for my mother\'s birthday and she was speechless. The packaging is beautiful and the earrings are just exquisite. Worth every penny.',
          verified: true,
        },
        {
          id: 'dse-3',
          author: 'Silvia M.',
          location: 'Barcelona',
          rating: 5,
          date: 'February 2025',
          title: 'Classic, timeless, perfect',
          body: 'Simple and incredibly elegant. I chose the oval cut in yellow gold and it suits my complexion beautifully. Excellent craftsmanship and very fast delivery.',
          verified: true,
        },
      ],
    },
  },
  {
    id: 'statement-drop-earrings',
    name: 'Statement Drop Earrings',
    shopifyHandle: 'statement-drop-earrings',
    description: 'Bold statement earrings with striking presence.',
    category: 'earring',
    shapes: EARRING_SHAPES,
    hasRingSize: false,
    hasBraceletLength: false,
    is14kOnly: false,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/signature-stud-earrings.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/studs-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/studs-rose-gold.jpg'},
    ],
    shapeImages: {},
    shapeImagesByColor: {},
    media: [
      {type: 'image', src: '/signature-stud-earrings.jpg', thumbnail: '/signature-stud-earrings.jpg', alt: 'Statement Drop Earrings — yellow gold studio'},
      {type: 'image', src: '/studs-white-gold.jpg', thumbnail: '/studs-white-gold.jpg', alt: 'Statement Drop Earrings — white gold'},
      {type: 'image', src: '/studs-rose-gold.jpg', thumbnail: '/studs-rose-gold.jpg', alt: 'Statement Drop Earrings — rose gold'},
    ],
  },
  {
    id: 'tennis-bracelet',
    name: 'Lab Diamond Tennis Bracelet',
    shopifyHandle: 'lab-diamond-tennis-bracelet',
    description: 'A continuous line of brilliant diamonds wrapping elegantly around the wrist.',
    category: 'bracelet',
    shapes: ['Round'],
    hasRingSize: false,
    hasBraceletLength: true,
    is14kOnly: false,
    braceletLengthMultipliers: BRACELET_LENGTHS,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/signature-tennis-bracelet.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/bracelet-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/bracelet-rose-gold.jpg'},
    ],
    shapeImages: {},
    shapeImagesByColor: {},
    media: [
      {type: 'image', src: '/signature-tennis-bracelet.jpg', thumbnail: '/signature-tennis-bracelet.jpg', alt: 'Tennis Bracelet — yellow gold studio'},
      {type: 'image', src: '/bracelet-white-gold.jpg', thumbnail: '/bracelet-white-gold.jpg', alt: 'Tennis Bracelet — white gold'},
      {type: 'image', src: '/bracelet-rose-gold.jpg', thumbnail: '/bracelet-rose-gold.jpg', alt: 'Tennis Bracelet — rose gold'},
    ],
  },
  {
    id: 'statement-bracelet',
    name: 'Statement Diamond Bracelet',
    shopifyHandle: 'statement-diamond-bracelet',
    description: 'A bold bracelet with substantial diamond presence.',
    category: 'bracelet',
    shapes: ['Round'],
    hasRingSize: false,
    hasBraceletLength: false,
    is14kOnly: false,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/signature-tennis-bracelet.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/bracelet-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/bracelet-rose-gold.jpg'},
    ],
    shapeImages: {},
    shapeImagesByColor: {},
    media: [
      {type: 'image', src: '/signature-tennis-bracelet.jpg', thumbnail: '/signature-tennis-bracelet.jpg', alt: 'Statement Bracelet — yellow gold studio'},
      {type: 'image', src: '/bracelet-white-gold.jpg', thumbnail: '/bracelet-white-gold.jpg', alt: 'Statement Bracelet — white gold'},
      {type: 'image', src: '/bracelet-rose-gold.jpg', thumbnail: '/bracelet-rose-gold.jpg', alt: 'Statement Bracelet — rose gold'},
    ],
  },
  {
    id: 'solitaire-pendant-necklace',
    name: 'Solitaire Diamond Necklace',
    shopifyHandle: 'solitaire-diamond-pendant-necklace',
    description: 'A single diamond pendant on a delicate gold chain. Timeless and refined.',
    category: 'necklace',
    shapes: RING_SHAPES,
    hasRingSize: false,
    hasBraceletLength: false,
    is14kOnly: false,
    goldColors: [
      {name: 'Yellow Gold', value: 'yellow', color: 'hsl(43 70% 55%)', image: '/necklace-yellow-gold.jpg'},
      {name: 'White Gold', value: 'white', color: 'hsl(0 0% 85%)', image: '/necklace-white-gold.jpg'},
      {name: 'Rose Gold', value: 'rose', color: 'hsl(10 50% 70%)', image: '/necklace-rose-gold.jpg'},
    ],
    shapeImages: {
      Round: '/necklace-shape-round.jpg', Princess: '/necklace-shape-princess.jpg',
      Oval: '/necklace-shape-oval.jpg', Emerald: '/necklace-shape-emerald.jpg',
      Pear: '/necklace-shape-pear.jpg', Cushion: '/necklace-shape-cushion.jpg',
      Marquise: '/necklace-shape-marquise.jpg',
    },
    shapeImagesByColor: {
      white: {
        Round: '/necklace-wg-round.jpg', Princess: '/necklace-wg-princess.jpg',
        Oval: '/necklace-wg-oval.jpg', Emerald: '/necklace-wg-emerald.jpg',
        Pear: '/necklace-wg-pear.jpg', Cushion: '/necklace-wg-cushion.jpg',
        Marquise: '/necklace-wg-marquise.jpg',
      },
      rose: {
        Round: '/necklace-rg-round.jpg', Princess: '/necklace-rg-princess.jpg',
        Oval: '/necklace-rg-oval.jpg', Emerald: '/necklace-rg-emerald.jpg',
        Pear: '/necklace-rg-pear.jpg', Cushion: '/necklace-rg-cushion.jpg',
        Marquise: '/necklace-rg-marquise.jpg',
      },
    },
    media: [
      {type: 'image', src: '/necklace-yellow-gold.jpg', thumbnail: '/necklace-yellow-gold.jpg', alt: 'Solitaire Necklace — yellow gold studio'},
      {type: 'image', src: '/necklace-white-gold.jpg', thumbnail: '/necklace-white-gold.jpg', alt: 'Solitaire Necklace — white gold'},
      {type: 'image', src: '/necklace-rose-gold.jpg', thumbnail: '/necklace-rose-gold.jpg', alt: 'Solitaire Necklace — rose gold'},
      {type: 'image', src: '/necklace-shape-oval.jpg', thumbnail: '/necklace-shape-oval.jpg', alt: 'Solitaire Necklace — oval pendant detail'},
    ],
  },
];

export function getDesignFamily(id: string): DesignFamily | undefined {
  return DESIGN_FAMILIES.find((f) => f.id === id);
}

/**
 * Look up a design family by its Shopify product handle.
 * Used to determine whether a collection-page product card
 * should link to the custom /design/[id] configurator route.
 */
export function getDesignFamilyByHandle(shopifyHandle: string): DesignFamily | undefined {
  return DESIGN_FAMILIES.find((f) => f.shopifyHandle === shopifyHandle);
}

/**
 * Get the best image for the current configuration.
 * Priority: color-specific shape → default shape → gold color fallback
 */
export function getConfiguratorImage(
  family: DesignFamily,
  selectedColor: string,
  selectedShape?: string,
): string {
  // 1. Color-specific shape image
  if (selectedShape && selectedColor !== 'yellow') {
    const colorShapeImage = family.shapeImagesByColor[selectedColor]?.[selectedShape];
    if (colorShapeImage) return colorShapeImage;
  }

  // 2. Default (yellow gold) shape image
  if (selectedShape) {
    const shapeImage = family.shapeImages[selectedShape];
    if (shapeImage) return shapeImage;
  }

  // 3. Gold color fallback
  const colorEntry = family.goldColors.find((c) => c.value === selectedColor);
  return colorEntry?.image || family.goldColors[0].image;
}
