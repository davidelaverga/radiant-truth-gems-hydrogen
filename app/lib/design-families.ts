/**
 * Design family definitions for the configurable product system.
 *
 * Each family defines the visual configuration options (shapes, colors)
 * and image mappings. Buyable options (carat, purity) come from Shopify
 * product variants loaded via the Storefront API.
 *
 * Images are served from public/ directory.
 */

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
      Round: '/shape-round-solitaire.jpg',
      Princess: '/shape-princess-solitaire.jpg',
      Oval: '/shape-oval-solitaire.jpg',
      Emerald: '/shape-emerald-solitaire.jpg',
      Pear: '/shape-pear-solitaire.jpg',
      Cushion: '/shape-cushion-solitaire.jpg',
      Marquise: '/shape-marquise-solitaire.jpg',
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
  },
];

export function getDesignFamily(id: string): DesignFamily | undefined {
  return DESIGN_FAMILIES.find((f) => f.id === id);
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
