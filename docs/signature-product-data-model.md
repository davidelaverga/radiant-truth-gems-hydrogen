# Signature Product Data Model — Shopify-Native Architecture

## Purpose

This document defines how the 8 configurable product families map to Shopify's
native data model (variants, metafields, line item properties) so the Hydrogen
configurator can work without the brittle `signatureShopifyMap.ts` mapping layer.

## Current State (What We're Replacing)

The Vite SPA uses a **3-layer system**:
1. `designFamilies.ts` — frontend-only product definitions with prices, shapes, images
2. `signatureShopifyMap.ts` — manual mapping from config → Shopify variant ID
3. `localCartStore.ts` → `cartStore.ts` sync bridge at checkout

**Problems:**
- Prices are calculated client-side (base × purity × length multipliers)
- ~95 manual variant ID mappings that break if Shopify products change
- Dual cart model requires sync before checkout
- No SSR — all configuration happens client-side

## New Architecture

### Principle: Let Shopify Own the Buyable Configuration

| Dimension | Type | Where It Lives |
|-----------|------|---------------|
| **Carat** | Buyable option | Shopify product option → variant |
| **Purity (14K/18K)** | Buyable option | Shopify product option → variant |
| **Ring Size** | Buyable option (romantic) OR line item property | Variant (romantic) or cart attribute |
| **Bracelet Length** | Buyable option | Shopify product option → variant |
| **Gold Color** | Visual only | Line item property (cart attribute) |
| **Diamond Shape** | Visual only | Line item property (cart attribute) |

### Key Decision: What Becomes a Shopify Variant?

**Variants = dimensions that affect price or SKU.**

| Family | Variant Axes | Total Variants |
|--------|-------------|----------------|
| Classic Solitaire Ring | Carat × Purity | 4 × 2 = 8 |
| Side Stone Ring | Carat × Purity | 4 × 2 = 8 |
| Romantic Ring | Carat × Color × Size | 3 × 3 × 5 = 45 |
| Diamond Stud Earrings | Carat × Purity | 6 × 2 = 12* |
| Statement Drop Earrings | Carat × Purity | 2 × 2 = 4 |
| Tennis Bracelet | Carat × Purity × Length | 7 × 2 × 4 = 56** |
| Statement Bracelet | Carat × Purity | 2 × 2 = 4 |
| Solitaire Necklace | Carat × Purity | 4 × 2 = 8 |

*Stud earrings: Currently only 4 distinct Shopify variants. Need expansion to 12 if pricing differs by purity.
If 14K and 18K have the same SKU/price in Shopify, keep as 6 variants with purity as line item property.

**Tennis bracelet: 56 variants is a lot. If length only affects price via multiplier,
consider keeping length as a line item property and applying the price adjustment
via a Shopify Script or by pre-calculating variant prices for each length.
Alternative: Create 7×2=14 base variants and handle length via cart attribute.

### What Becomes a Line Item Property?

Line item properties appear on the order but don't create separate variants:

```
Gold Color: "Yellow Gold" | "White Gold" | "Rose Gold"
Diamond Shape: "Round" | "Princess" | "Oval" | "Pear" | "Emerald" | "Cushion" | "Marquise"
Ring Size: "4" ... "10" (half sizes) — for non-romantic rings
Bracelet Length: "6 inches" ... "9 inches" — if not using variant-based length pricing
```

### What Becomes a Metafield?

Product-level metafields store configurator data that the Hydrogen frontend reads:

| Metafield Namespace | Key | Type | Purpose |
|-------------------|-----|------|---------|
| `custom.configurator` | `family_id` | `single_line_text` | Design family identifier |
| `custom.configurator` | `is_configurable` | `boolean` | Flag to show configurator UI |
| `custom.configurator` | `available_shapes` | `list.single_line_text` | Diamond shapes offered |
| `custom.configurator` | `available_colors` | `list.single_line_text` | Gold colors offered |
| `custom.configurator` | `has_ring_size` | `boolean` | Whether size selector shows |
| `custom.configurator` | `has_bracelet_length` | `boolean` | Whether length selector shows |
| `custom.configurator` | `category` | `single_line_text` | "ring", "earring", "bracelet", "necklace" |
| `custom.configurator` | `purity_multiplier_18k` | `number_decimal` | 1.15 (for client-side 18K pricing if needed) |

### Image Strategy

**Option A (Recommended): Keep images in code for now.**
The shape × color image matrix (7 shapes × 3 colors = 21 images per family) is complex.
Metafields could store image URLs, but the mapping logic is simpler in code for phase 1.

**Option B (Future): Use metaobjects.**
Create a "Design Family" metaobject with image fields per shape/color combo.
This would let merchandisers update images without code changes.

**Recommendation: Option A for PR 10, migrate to Option B when needed.**

---

## Per-Family Data Model

### 1. Classic Solitaire Ring
```
Product: "Classic Solitaire Lab Diamond Ring"
Options: Carat (1ct, 1.5ct, 2ct, 3ct) × Gold (14K, 18K)
Variants: 8
Line Item Props: Gold Color, Diamond Shape, Ring Size
Metafields: family_id="classic-solitaire-ring", available_shapes=[7], has_ring_size=true
```

### 2. Side Stone Ring
```
Product: "Side Stone Lab Diamond Ring"
Options: Carat (1ct, 1.5ct, 2ct, 3ct) × Gold (14K, 18K)
Variants: 8
Line Item Props: Gold Color, Diamond Shape, Ring Size
Metafields: family_id="side-stone-ring", available_shapes=[7], has_ring_size=true
```

### 3. Romantic Diamond Ring ⚠️ SPECIAL
```
Product: "Romantic Lab Diamond Ring"
Options: Carat (1ct, 2ct, 3ct) × Color (White, Yellow, Rose) × Size (5, 6, 7, 8, 9)
Variants: 45
Line Item Props: Diamond Shape (if applicable)
Metafields: family_id="romantic-ring", has_ring_size=false (size is a variant axis)
NOTE: 14K only. No 18K variants.
```

### 4. Diamond Stud Earrings
```
Product: "Lab Diamond Stud Earrings"
Options: Carat (0.5ct, 1ct, 1.5ct, 2ct, 2.5ct, 3ct) × Gold (14K, 18K)
Variants: 12 (or 6 if purity doesn't affect price)
Line Item Props: Gold Color, Diamond Shape
Metafields: family_id="diamond-stud-earrings", available_shapes=[4]
```

### 5. Statement Drop Earrings
```
Product: "Statement Drop Earrings"
Options: Carat (1ct, 2ct) × Gold (14K, 18K)
Variants: 4
Line Item Props: Gold Color, Diamond Shape
Metafields: family_id="statement-drop-earrings", available_shapes=[4]
```

### 6. Lab Diamond Tennis Bracelet
```
Product: "Lab Diamond Tennis Bracelet"
Options: Carat (1.1ct, 2.8ct, 4.0ct, 5.7ct, 8.5ct, 11.4ct, 17.1ct) × Gold (14K, 18K)
Variants: 14
Line Item Props: Gold Color, Bracelet Length
Metafields: family_id="tennis-bracelet", has_bracelet_length=true,
            bracelet_length_multipliers="6in:0.92,7in:1.0,8in:1.10,9in:1.22"
NOTE: Bracelet length as line item property for now. Price displayed
      uses base variant price × length multiplier (calculated in frontend).
      When Shopify Scripts become available, move pricing to server-side.
```

### 7. Statement Diamond Bracelet
```
Product: "Statement Diamond Bracelet"
Options: Carat (3ct, 5ct) × Gold (14K, 18K)
Variants: 4
Line Item Props: Gold Color
Metafields: family_id="statement-bracelet"
```

### 8. Solitaire Diamond Necklace
```
Product: "Solitaire Diamond Pendant Necklace"
Options: Carat (0.5ct, 1ct, 1.5ct, 2ct) × Gold (14K, 18K)
Variants: 8
Line Item Props: Gold Color, Diamond Shape
Metafields: family_id="solitaire-pendant-necklace", available_shapes=[7]
```

---

## Migration Path: How to Retire signatureShopifyMap.ts

### Phase 1 (PR 10): Build Configurator Against New Model
1. Read `family_id` metafield from product to determine configurator type
2. Use Shopify variant options (Carat × Gold) for variant selection
3. Pass Gold Color + Diamond Shape + Ring Size as line item properties
4. Price comes from the selected Shopify variant (no client-side calculation)
5. Add to cart creates a **real Shopify cart line** with variant ID + properties

### Phase 2 (PR 10): Remove Legacy Code
- `signatureShopifyMap.ts` → DELETE (no longer needed)
- `designFamilies.ts` pricing logic → DELETE (prices from Shopify variants)
- `designFamilies.ts` image mapping → KEEP (moved to Hydrogen component)
- `localCartStore.ts` → DELETE (single cart model)
- `useCartSync.ts` → DELETE (no sync needed)

### Phase 3 (Future): Full Metafield Migration
- Move shape images to metafields/metaobjects
- Move bracelet length pricing to Shopify Scripts
- Add size guide data as metafields

---

## Shopify Admin Tasks (Browser Automation)

### To be done in Shopify admin:

1. **Verify variant structure** for each of the 8 products
   - Confirm Carat and Gold (14K/18K) are product options
   - Confirm variant prices match expected values

2. **Create metafield definitions** (Settings → Custom data → Products):
   - `custom.configurator.family_id` — single_line_text
   - `custom.configurator.is_configurable` — boolean
   - `custom.configurator.available_shapes` — list.single_line_text
   - `custom.configurator.available_colors` — list.single_line_text
   - `custom.configurator.has_ring_size` — boolean
   - `custom.configurator.category` — single_line_text

3. **Set metafield values** on each of the 8 configurable products

4. **Verify romantic ring** has all 45 variants (Carat × Color × Size)

---

## Open Questions for Davide

1. **Tennis bracelet length pricing**: Should we create 56 variants (carat × purity × length)
   or keep length as a line item property with frontend price calculation?
   **Recommendation**: Line item property for now. 56 variants is excessive.

2. **Stud earrings purity**: Do 14K and 18K have different prices in Shopify?
   If not, we can keep 6 variants instead of 12.

3. **Romantic ring 18K**: Should we add 18K variants in the future?
   Currently blocked in UI. If yes, that would expand to 90 variants.

4. **Shape images**: Keep in code (faster) or move to metafields (more flexible)?
   **Recommendation**: Code for now, metafields later.

---

## Acceptance Criteria

- [ ] All 8 products have correct variant structure in Shopify admin
- [ ] Metafield definitions created for configurator data
- [ ] Metafield values set on all 8 configurable products
- [ ] This spec document approved by product owner
- [ ] No changes to existing storefront behavior until PR 10
