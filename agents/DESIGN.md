---
version: alpha
name: Petal-design-system
description: |
  A skincare-first ecommerce design system built around a warm dusty-rose palette, deliberate retro personality, and zero border-radius on every surface. The aesthetic nods to 1970s apothecary and vintage beauty catalogues — think printed labels, editorial serif headlines, and a cream-tinted canvas — without becoming costume. Sharp-cornered components sit on blush and warm-cream surfaces while a deep raspberry red-pink acts as the single accent for CTAs. Display typography uses a high-contrast editorial serif (Cormorant Garamond or equivalent) and body copy uses a clean geometric sans (DM Sans), creating the two-voice contrast that defines the retro tone. The masonry product grid is the load-bearing visual element: square and portrait product tiles in a column grid with tight 8px gutters, each card fully sharp-cornered with a barely-there blush background.

colors:
  primary: "#C8365A"
  on-primary: "#FFFDF9"
  primary-pressed: "#A32848"
  ink: "#1A0E14"
  ink-soft: "#2E1A22"
  body: "#3B2530"
  charcoal: "#291820"
  mute: "#6B4F5A"
  ash: "#9E8090"
  stone: "#C9B5BC"
  hairline: "#DDD0D4"
  hairline-soft: "#EAE0E4"
  on-secondary: "#1A0E14"
  secondary-bg: "#EAE0E4"
  secondary-pressed: "#D6C8CE"
  canvas: "#FFFDF9"
  surface-soft: "#FAF5F0"
  surface-card: "#F5EDF0"
  surface-blush: "#EFE0E5"
  surface-elevated: "#FFFDF9"
  on-dark: "#FFFDF9"
  on-dark-mute: "rgba(255,253,249,0.7)"
  surface-dark: "#1A0E14"
  focus-outer: "#C8365A"
  focus-inner: "#FFFDF9"
  accent-warm: "#E8895A"
  accent-gold: "#C89A4A"
  success-deep: "#103C25"
  success-pale: "#C7F0DA"
  error: "#9E0A0A"
  error-deep: "#CC001F"
  badge-new: "#C8365A"
  badge-sale: "#291820"

typography:
  display-xl:
    fontFamily: Cormorant Garamond
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: Cormorant Garamond
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: Cormorant Garamond
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.8px
  heading-xl:
    fontFamily: Cormorant Garamond
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  heading-md:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-strong:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm-strong:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0
  caption-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.5px
  caption-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.3px
  overline:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 2px
  label-retro:
    fontFamily: Cormorant Garamond
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 3px
  link-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 1.2px
  button-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 1px
  price-lg:
    fontFamily: Cormorant Garamond
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.3px
  price-md:
    fontFamily: Cormorant Garamond
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0

rounded:
  none: 0px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 72px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 14px 28px
    height: 48px
    border: none
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 12px 26px
    height: 48px
    border: "2px solid {colors.ink}"
  button-secondary-pressed:
    backgroundColor: "{colors.surface-blush}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "2px solid {colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    border: none
  button-icon-square:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: 44px
    border: "1px solid {colors.hairline}"
  button-tag-on-image:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-retro}"
    rounded: "{rounded.none}"
    padding: 5px 10px
    border: "1px solid {colors.hairline}"
  button-disabled:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ash}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline}"
  badge-new:
    backgroundColor: "{colors.badge-new}"
    textColor: "{colors.on-primary}"
    typography: "{typography.overline}"
    rounded: "{rounded.none}"
    padding: 4px 8px
  badge-sale:
    backgroundColor: "{colors.badge-sale}"
    textColor: "{colors.on-dark}"
    typography: "{typography.overline}"
    rounded: "{rounded.none}"
    padding: 4px 8px
  badge-bestseller:
    backgroundColor: "{colors.surface-blush}"
    textColor: "{colors.primary}"
    typography: "{typography.overline}"
    rounded: "{rounded.none}"
    padding: 4px 8px
    border: "1px solid {colors.primary}"
  search-bar:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px 16px
    height: 48px
    border: "1px solid {colors.hairline}"
  search-bar-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "2px solid {colors.ink}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px 16px
    height: 48px
    border: "1px solid {colors.stone}"
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "2px solid {colors.ink}"
  product-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 0px
    border: none
  product-card-hover:
    backgroundColor: "{colors.surface-blush}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline}"
  product-card-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 0px
    border: "1px solid {colors.hairline}"
  product-tag-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label-retro}"
    rounded: "{rounded.none}"
    padding: 5px 10px
    border: "1px solid {colors.hairline}"
  filter-chip:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
    padding: 8px 16px
    border: "1px solid {colors.hairline}"
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.ink}"
  category-tile:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
    padding: 20px
    border: "1px solid {colors.hairline}"
  ingredient-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 24px
    border: "1px solid {colors.hairline}"
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: 40px
    border: "1px solid {colors.hairline}"
  feature-card-blush:
    backgroundColor: "{colors.surface-blush}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: 40px
    border: none
  modal-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 40px
    border: "1px solid {colors.hairline}"
  cart-drawer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 24px
    border-left: "1px solid {colors.hairline}"
  hero-cta-strip:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 56px 48px
  marquee-banner:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.overline}"
    rounded: "{rounded.none}"
    padding: 10px 0
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.none}"
    height: 68px
    border-bottom: "1px solid {colors.hairline}"
  announcement-bar:
    backgroundColor: "{colors.surface-blush}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.none}"
    padding: 8px 24px
    height: 36px
  footer-section:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.mute}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 48px 24px
    border-top: "1px solid {colors.hairline}"
  product-image-frame:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline-soft}"
  rating-star:
    color: "{colors.accent-gold}"
  divider-retro:
    border: "1px solid {colors.hairline}"
    decorative-inset: "{colors.surface-blush}"
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.link-md}"
    textDecoration: underline
---

## Overview

Petal is a skincare ecommerce design system built on a single structural decision: **every border is a right angle**. There are no rounded corners anywhere in the system — buttons, inputs, product cards, modals, and navigation all share `{rounded.none}` (0px). This sharp geometry, borrowed from vintage apothecary labels and 1970s beauty print catalogues, creates the retro personality without theatrical costume. The rest of the system is modern enough to feel premium: clean spacing, a warm blush-cream neutral palette, and a carefully restrained use of `{colors.primary}` (a dusty raspberry-pink) as the single saturated action color.

Typography is the system's second retro signal. Display and heading tiers use **Cormorant Garamond**, a high-contrast editorial serif with the narrow elegance of vintage cosmetics packaging. Body and UI copy uses **DM Sans**, a neutral geometric sans that keeps forms and product grids readable. The two-voice contrast — editorial serif headlines, pragmatic sans body — is the system's defining typographic gesture.

The product grid is the load-bearing visual surface. Square and portrait product tiles tile in a column-based grid with `{spacing.sm}` (8px) gutters. Every card is fully sharp-cornered on `{colors.surface-card}` with the product image full-bleed and metadata stacked below. A rotating `{component.marquee-banner}` in `{colors.primary}` at the very top of every page anchors the site's promotional voice before the nav even appears.

**Key Characteristics:**
- Zero border-radius on every component and surface — `{rounded.none}` (0px) is the only value in the system
- Two-voice typography: Cormorant Garamond serif for display and headings, DM Sans geometric sans for body and UI
- Single accent: `{colors.primary}` (#C8365A, dusty raspberry-pink) for all primary CTAs, badges, and active states
- Warm blush-cream chrome (`{colors.surface-card}` — #F5EDF0, `{colors.surface-soft}` — #FAF5F0) that recedes behind product photography
- Uppercase letter-spaced overlines (`{typography.overline}`) and retro label type (`{typography.label-retro}`) as the system's signature decorative text roles
- Marquee announcement banner in `{colors.primary}` pinned above the nav on every page
- Prominent ingredient and ritual storytelling surfaces alongside the standard product grid

---

## Colors

> **Source contexts:** home (hero + category grid), product listing page (PLP), product detail page (PDP), cart drawer, checkout, about/ingredient story pages. Chrome is identical across all.

### Brand & Accent
- **Raspberry Pink** (`{colors.primary}` — `#C8365A`): the system's only saturated color. Primary CTAs ("Add to Bag", "Shop Now"), the marquee announcement banner, NEW badges, active filter chips, focus rings, and the brand wordmark.
- **Raspberry Pressed** (`{colors.primary-pressed}` — `#A32848`): pressed state for the primary button — one notch deeper.
- **Warm Terracotta** (`{colors.accent-warm}` — `#E8895A`): editorial accent used sparingly in ingredient story cards and seasonal landing pages. Never used on interactive chrome.
- **Antique Gold** (`{colors.accent-gold}` — `#C89A4A`): rating stars only.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFDF9`): warm near-white. The base surface for the nav, modals, feature cards, and the cart drawer.
- **Soft Surface** (`{colors.surface-soft}` — `#FAF5F0`): page-body wash used under the hero and ingredient story sections.
- **Surface Card** (`{colors.surface-card}` — `#F5EDF0`): warm blush-cream for product cards, category tiles, and search-bar default fill.
- **Surface Blush** (`{colors.surface-blush}` — `#EFE0E5`): deeper blush for the feature-card-blush variant and announcement bar — one notch warmer than surface-card.
- **Surface Dark** (`{colors.surface-dark}` — `#1A0E14`): deep warm near-black used in the dark hero CTA strip on editorial landing pages.
- **Secondary BG** (`{colors.secondary-bg}` — `#EAE0E4`): fill behind secondary ghost buttons when a filled secondary is required.
- **Hairline** (`{colors.hairline}` — `#DDD0D4`): 1px borders on cards, inputs, footer column rules, and all structural dividers.
- **Hairline Soft** (`{colors.hairline-soft}` — `#EAE0E4`): lighter divider; used on image frame borders and low-emphasis separators.

### Text
- **Ink** (`{colors.ink}` — `#1A0E14`): primary headlines, button labels, nav links, price display.
- **Ink Soft** (`{colors.ink-soft}` — `#2E1A22`): secondary display copy and sub-headlines where pure ink is too heavy.
- **Body** (`{colors.body}` — `#3B2530`): default paragraph text on `{colors.canvas}` — a warm dark plum-brown.
- **Charcoal** (`{colors.charcoal}` — `#291820`): slightly softer than ink for long-form ingredient story copy.
- **Mute** (`{colors.mute}` — `#6B4F5A`): metadata text, footer links, secondary captions, review dates.
- **Ash** (`{colors.ash}` — `#9E8090`): disabled button text, placeholder copy in inputs.
- **Stone** (`{colors.stone}` — `#C9B5BC`): least-emphasis text; default input border at rest.
- **On Dark** (`{colors.on-dark}` — `#FFFDF9`): primary text on `{colors.surface-dark}`.
- **On Dark Mute** (`{colors.on-dark-mute}` — `rgba(255,253,249,0.7)`): secondary text on dark surfaces.
- **On Primary** (`{colors.on-primary}` — `#FFFDF9`): text and icons on the raspberry-pink primary button and marquee.

### Semantic
- **Error** (`{colors.error}` — `#9E0A0A`): validation messages and destructive copy.
- **Error Deep** (`{colors.error-deep}` — `#CC001F`): elevated error on dark or blush backgrounds.
- **Success Deep** (`{colors.success-deep}` — `#103C25`): confirmation messaging ("Your order is on its way").
- **Success Pale** (`{colors.success-pale}` — `#C7F0DA`): pale success banner background.
- **Focus Outer** (`{colors.focus-outer}` — `#C8365A`): 2px outer focus ring matching brand primary — keeps keyboard navigation on-brand.
- **Focus Inner** (`{colors.focus-inner}` — `#FFFDF9`): white inner gap inside the focus ring stack.

---

## Typography

### Font Families
**Cormorant Garamond** is a high-contrast, old-style serif used for all display and heading tiers (`{typography.display-xl}` through `{typography.heading-xl}`). Its thin hairline strokes and classical proportions are the primary carrier of the system's retro personality. Weights used: 600 (semibold) and 700 (bold). Fallback stack: `Georgia → "Times New Roman" → serif`.

**DM Sans** is a neutral low-contrast geometric sans-serif used for all body, UI, and utility tiers. Its clean geometry keeps forms, product metadata, and nav links readable and contemporary, balancing the editorial serif above it. Weights used: 400, 500, 600, 700. Fallback stack: `-apple-system → system-ui → "Segoe UI" → sans-serif`.

### Hierarchy

| Token | Size | Weight | Family | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | Cormorant Garamond | 1.05 | -1.5px | Home hero headline ("Your ritual, redefined") |
| `{typography.display-lg}` | 48px | 700 | Cormorant Garamond | 1.1 | -1px | Dark CTA strip hero, editorial landing headline |
| `{typography.display-md}` | 36px | 600 | Cormorant Garamond | 1.15 | -0.8px | Feature card headline, campaign section title |
| `{typography.heading-xl}` | 28px | 700 | Cormorant Garamond | 1.2 | -0.5px | Section heading ("Best Sellers", "Our Ingredients") |
| `{typography.heading-lg}` | 22px | 600 | DM Sans | 1.25 | 0 | Sub-section heading, modal title, PDP product name |
| `{typography.heading-md}` | 18px | 600 | DM Sans | 1.3 | 0 | Card title, ingredient card heading |
| `{typography.body-md}` | 16px | 400 | DM Sans | 1.5 | 0 | Body copy, product description, modal body |
| `{typography.body-strong}` | 16px | 600 | DM Sans | 1.5 | 0 | Form labels, inline emphasis, nav links |
| `{typography.body-sm}` | 14px | 400 | DM Sans | 1.5 | 0 | Footer copy, product metadata, helper text |
| `{typography.body-sm-strong}` | 14px | 700 | DM Sans | 1.4 | 0 | Review count, stock label, table headers |
| `{typography.caption-md}` | 12px | 500 | DM Sans | 1.5 | 0.5px | Caption text, size guide labels |
| `{typography.caption-sm}` | 11px | 400 | DM Sans | 1.4 | 0.3px | Smallest utility text, copyright |
| `{typography.overline}` | 11px | 700 | DM Sans | 1 | 2px | Section overlines ("BESTSELLER", "NEW ARRIVAL"), badge text — uppercase |
| `{typography.label-retro}` | 13px | 600 | Cormorant Garamond | 1 | 3px | In-image tag overlays, product-tag pills — uppercase, retro character |
| `{typography.link-md}` | 16px | 600 | DM Sans | 1.5 | 0 | Inline anchor links in prose |
| `{typography.button-md}` | 13px | 700 | DM Sans | 1 | 1.2px | Standard button label — uppercase |
| `{typography.button-sm}` | 11px | 700 | DM Sans | 1 | 1px | Compact filter chips, in-card secondary button — uppercase |
| `{typography.price-lg}` | 26px | 700 | Cormorant Garamond | 1 | -0.3px | PDP primary price display |
| `{typography.price-md}` | 20px | 600 | Cormorant Garamond | 1 | 0 | PLP product card price |

### Principles
The system deliberately mixes two historical registers: classical serif for anything editorial or emotional (headlines, prices, in-image labels), and modern sans for anything functional (body copy, buttons, forms). Button labels and overlines are set in **all-caps** with tracked letter-spacing (`{typography.button-md}` at 1.2px, `{typography.overline}` at 2px) — a typographic gesture directly borrowed from vintage cosmetics packaging that reinforces the retro identity without requiring decorative illustration. Prices use Cormorant Garamond (`{typography.price-lg}`, `{typography.price-md}`) rather than DM Sans, treating the price as a typographic centerpiece of the product story rather than a utilitarian number.

### Font Substitutes
If Cormorant Garamond is unavailable: **Playfair Display** (400/700) is the closest open-source substitute for the display and heading roles, with similar old-style contrast. **EB Garamond** is lighter in weight but preserves the classical proportions more faithfully at small sizes. If DM Sans is unavailable: **Inter** or **Manrope** are drop-in equivalents at body and UI sizes.

---

## Layout

### Spacing System
- **Base unit:** 8px with a 4px fine-step for tight button padding and chip gaps.
- **Tokens:** `{spacing.xxs}` (4px) · `{spacing.xs}` (6px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (72px).
- **Section rhythm:** `{spacing.section}` (72px) between every major content block. Product grids use `{spacing.sm}` (8px) gutters between tiles.
- **Card padding:** `{component.feature-card}` and `{component.ingredient-card}` use 40px and 24px internal padding respectively.
- **Modal padding:** `{component.modal-card}` uses 40px (`{spacing.xxl}` + 8px) on all sides.

### Grid & Container
- **Max width:** ~1320px content area at desktop with 24px outer gutters.
- **Product grid:** auto-fitting column layout — 4 columns at desktop-large, 3 at desktop, 2 at tablet, 1 at mobile. Each tile preserves its natural aspect ratio (square 1:1 for category, 3:4 portrait for product). Gutters are `{spacing.sm}` (8px) horizontal and vertical.
- **Home hero:** full-bleed editorial layout with the headline column at left (~55%) and the hero product image at right (~45%), flush to the viewport edge with no card border.
- **Feature rows:** alternating 2-column split (text left + image right, then image left + text right) at `{spacing.section}` rhythm, mirroring the product-storytelling cadence of vintage beauty catalogues.
- **PDP layout:** 2-column at desktop — product image gallery at left (60%) and product info panel at right (40%) with a `{spacing.xxl}` gap. Collapses to single-column vertical stack at tablet.
- **Footer:** 4-column link grid at desktop, 2-up at tablet, single accordion at mobile.

### Whitespace Philosophy
Marketing surfaces are airy and editorial; discovery surfaces are tighter and catalog-like. The homepage holds sections 72px apart with generous internal padding, while the PLP collapses to an 8px-gutter product grid that tiles imagery edge-to-edge in the tradition of a printed product catalog. The system reads as two tools sharing the same chrome: a beauty editorial (hero / ingredient story / ritual / CTA) and a product catalog (filter row / product grid / pagination).

---

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Product cards on grid, hero sections, footer — dominant treatment |
| 1 — Hairline border | 1px solid `{colors.hairline}` | Feature cards, inputs, category tiles, image frames |
| 2 — Inked outline | 2px solid `{colors.ink}` | Secondary outlined buttons, focused inputs, focused search bar |
| 3 — Modal scrim + shadow | Modal floats on a 50%-opacity dark scrim with a 12px ambient shadow | Cart drawer, login/signup modal, quick-view modal |

The system avoids decorative drop shadows on all content surfaces. Depth comes from border contrast (1px hairline on blush-cream) and from the photography itself — product shots with high contrast and clean studio lighting carry the visual weight that a shadow system would otherwise provide. The only shadow in the entire system is the `{component.modal-card}` and `{component.cart-drawer}` layer.

### Decorative Depth
- **Product photography** on `{colors.surface-card}` creates implicit depth through light contrast — the warm blush background recedes behind a clean white-studio product shot without needing chrome effects.
- **`{component.product-tag-pill}`** anchored to the corner of a category tile or lifestyle image provides a vintage-label "sticker" gesture, giving the grid a handcrafted editorial quality.
- **`{component.marquee-banner}`** in solid `{colors.primary}` creates a strong visual anchor above the nav that reads as a printed price tag or promotional stamp — the system's boldest decorative surface.
- **`{component.divider-retro}`** uses a thin `{colors.hairline}` rule with a short center inset in `{colors.surface-blush}` to evoke the double-rule section dividers of vintage cosmetics catalogues.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | **Every component and surface in the system** — the only radius value |

There is exactly one shape value. No exceptions. Every interactive element, every card, every modal, every input, every button is square-cornered. The system's entire shape vocabulary is a right angle. This is the primary carrier of the retro apothecary aesthetic.

### Photography Geometry
- **Product card image:** 3:4 portrait (standard skincare bottle / tube) displayed full-bleed at the top of `{component.product-card}` with no internal padding. Sharp corners align with the card's square geometry.
- **Category tile thumbnails:** square 1:1 inside `{component.category-tile}`, typically lifestyle or ingredient macro photography.
- **Hero image:** typically 4:5 or full-bleed editorial, flush to the right edge of the viewport without any card border.
- **Ingredient macro photography:** square 1:1 or 16:9 landscape inside `{component.ingredient-card}`, focused on texture (clay, oil, botanical).
- **Lifestyle editorial photography:** uncropped, bleeds full-width across feature rows with product-tag pill (`{component.product-tag-pill}`) anchored to the lower-left.

---

## Components

> **No hover states documented.** Each spec covers Default and Active/Pressed only.

### Buttons

**`button-primary`** — the universal add-to-bag CTA
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}` (uppercase, tracked), padding `14px 28px`, height ~48px, `{rounded.none}`, no border.
- Used for "Add to Bag", "Shop Now", "Complete Order" — every primary purchase action.
- Pressed: `button-primary-pressed` drops background to `{colors.primary-pressed}`.

**`button-secondary`** — outlined ghost button
- Background transparent, 2px `{colors.ink}` border, text `{colors.ink}`, type `{typography.button-md}`, padding `12px 26px`, height ~48px, `{rounded.none}`.
- Used for "Add to Wishlist", "Learn More", "Continue Shopping" — paired alongside the primary.
- Pressed: `button-secondary-pressed` fills to `{colors.surface-blush}` while keeping the 2px ink border.

**`button-ghost`** — low-emphasis text action
- Background transparent, no border, text `{colors.mute}`, type `{typography.button-md}`.
- Used for "Remove", "Edit", low-priority dialog actions.

**`button-icon-square`** — square icon button
- Background `{colors.surface-card}`, 1px `{colors.hairline}` border, size 44×44px, `{rounded.none}`.
- Quantity increment/decrement in cart, gallery navigation paddles, close-button on modal.

**`button-tag-on-image`** — retro label overlay on photography
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, type `{typography.label-retro}` (uppercase, Cormorant Garamond, 3px tracked), padding `5px 10px`, `{rounded.none}`.
- The signature vintage-label gesture: anchored to the lower-left of lifestyle photography with a product or ingredient name ("Rose Hip Oil", "Velvet Moisture Creme").

**`button-disabled`**
- Background `{colors.surface-card}`, 1px `{colors.hairline}` border, text `{colors.ash}` — soft and clearly inactive.

### Badges

**`badge-new`** — NEW ARRIVAL stamp
- Background `{colors.badge-new}` (raspberry primary), text `{colors.on-primary}`, type `{typography.overline}`, padding `4px 8px`, `{rounded.none}`.

**`badge-sale`** — SALE price reduction
- Background `{colors.badge-sale}` (deep warm black), text `{colors.on-dark}`, type `{typography.overline}`, padding `4px 8px`.

**`badge-bestseller`** — editorial recommendation
- Background `{colors.surface-blush}`, text `{colors.primary}`, 1px `{colors.primary}` border, type `{typography.overline}`, padding `4px 8px`.

All three badges sit at the top-left corner of `{component.product-card}` image tiles, stacked vertically when multiple apply.

### Filter & Sort

**`filter-chip`** + **`filter-chip-active`**
- Default: background `{colors.surface-card}`, 1px `{colors.hairline}` border, text `{colors.ink}`, type `{typography.button-sm}` (uppercase), padding `8px 16px`, `{rounded.none}`.
- Active: background `{colors.ink}`, no border, text `{colors.on-dark}` — the chip inverts fully on selection.
- Used on the PLP filter strip ("Moisturisers", "Serums", "SPF", "Vegan", "Under £25").

### Inputs & Forms

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.canvas}`, 1px `{colors.stone}` border, type `{typography.body-md}`, padding `12px 16px`, height ~48px, `{rounded.none}`.
- Focused: 2px `{colors.ink}` inner border + 3px `{colors.focus-outer}` outer outline — the raspberry double-ring focus signal.
- Used for email, password, address, and promo-code fields throughout checkout and account modals.

**`search-bar`** + **`search-bar-focused`**
- Default: background `{colors.surface-card}`, 1px `{colors.hairline}` border, type `{typography.body-md}`, padding `12px 16px`, height ~48px, `{rounded.none}`, with a magnifier glyph at the left and "Search for a product or ingredient..." placeholder.
- Focused: background `{colors.canvas}`, 2px `{colors.ink}` border.

### Cards & Containers

**`product-card`** — the standard PLP tile
- Container: background `{colors.surface-card}`, `{rounded.none}`, no border, no padding.
- Layout: full-bleed 3:4 portrait product image at the top. Below: product name in `{typography.heading-md}`, size/variant note in `{typography.body-sm}` `{colors.mute}`, price in `{typography.price-md}`, and an optional inline "Add to Bag" link in `{typography.button-sm}`. Badges stack at the top-left of the image.

**`product-card-featured`** — editorial featured product
- Identical layout to `product-card` but background `{colors.canvas}`, 1px `{colors.hairline}` border — used in "Editors' Picks" and homepage feature rows where the card needs to lift slightly from the page.

**`ingredient-card`** — ingredient story surface
- Background `{colors.surface-soft}`, 1px `{colors.hairline}` border, padding 24px, `{rounded.none}`.
- Layout: 1:1 square ingredient macro photograph at the top, ingredient name in `{typography.heading-md}`, one-line sourcing note in `{typography.caption-md}` `{colors.mute}`, short description in `{typography.body-sm}`.
- Used in the "Inside the Formula" section linking ingredient stories to their PDPs.

**`category-tile`**
- Background `{colors.surface-card}`, 1px `{colors.hairline}` border, padding 20px, `{rounded.none}`.
- 3- or 4-up grid on the home page "Shop by Concern" section. Each tile: 1:1 category lifestyle image + a category label in `{typography.body-strong}` + an overline in `{typography.overline}` `{colors.mute}` ("MOISTURISERS", "SERUMS", "EYE CARE").

**`feature-card`** + **`feature-card-blush`**
- Standard: background `{colors.canvas}`, 1px `{colors.hairline}` border, padding 40px. Pairs a 4:5 portrait or lifestyle editorial image with a `{typography.display-md}` headline + `{typography.body-md}` description + `{component.button-primary}` CTA.
- Blush: background `{colors.surface-blush}`, no border — the alternating warm variant for the second card in each feature row.

**`modal-card`** — login, signup, quick-view overlay
- Background `{colors.canvas}`, 1px `{colors.hairline}` border, padding 40px, `{rounded.none}`.
- Floats on a 50%-opacity dark scrim with a 12px ambient shadow. Used for login/signup ("Welcome Back"), quick-view product preview, and size guide.

**`cart-drawer`** — slide-in cart panel
- Background `{colors.canvas}`, 1px left `{colors.hairline}` border, padding 24px, `{rounded.none}`, slides in from the right.
- Layout: title "Your Bag" in `{typography.heading-lg}`, item list with product thumbnail + name + price + `{component.button-icon-square}` quantity control, subtotal in `{typography.price-lg}`, `{component.button-primary}` "Checkout" CTA spanning full-width.

**`hero-cta-strip`** — dark editorial hero on landing pages
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.display-lg}` (Cormorant Garamond, warm near-white), padding `56px 48px`, `{rounded.none}`.
- Used on editorial and campaign landing pages. One `{component.button-primary}` CTA at the right.

### Navigation

**`announcement-bar`** — top micro-banner
- Background `{colors.surface-blush}`, text `{colors.ink}`, type `{typography.caption-md}`, height 36px, `{rounded.none}`.
- Carries "Free delivery on orders over £40 · Free returns · Earn points with every purchase" in rotating copy above the primary nav.

**`marquee-banner`** — the promotional stamp
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.overline}` (uppercase, 2px tracked), `{rounded.none}`.
- The system's signature surface — a solid raspberry-pink horizontal band with scrolling promotional copy ("LAUNCH OFFER: 20% OFF YOUR FIRST ORDER · NEW: CERAMIDE REPAIR SERUM · FREE GIFT WITH ORDERS OVER £60"). Appears immediately above `{component.primary-nav}` on every page.

**`primary-nav`**
- Background `{colors.canvas}`, 1px `{colors.hairline}` bottom border, height ~68px, type `{typography.body-strong}`, `{rounded.none}`.
- Layout (desktop): brand wordmark at left, horizontal category links in `{typography.body-strong}` at center ("Skincare · Serums · Moisturisers · SPF · Body · Gifts"), right cluster: search icon → wishlist icon → account icon → bag icon with item count, plus one `{component.button-primary}` "Shop Now" or "Join" CTA only on homepage.
- On scroll: nav compresses to 52px height and gains a soft 4px box-shadow — the only in-scroll shadow in the system.

**`footer-section`**
- Background `{colors.surface-soft}`, text `{colors.mute}`, type `{typography.body-sm}`, padding `48px 24px`, 1px `{colors.hairline}` top border, `{rounded.none}`.
- Layout: 4-column grid (Brand story + social links · Shop — category links · Help — FAQ / Returns / Contact · Newsletter sign-up with `{component.text-input}` + `{component.button-primary}`).
- Column headers in `{typography.overline}` `{colors.ink}` (uppercase, tracked). Bottom row: wordmark + "© 2025 Petal Beauty" + certifications (Cruelty-Free, Vegan Society) in `{typography.caption-sm}` `{colors.mute}`.

### Inline

**`link-inline`** — body-prose anchor link
- `{colors.primary}` text with underline, type `{typography.link-md}`.
- Used inline in ingredient story prose, PDP description, and blog-style editorial content. This is the only place `{colors.primary}` appears in running text outside of CTAs.

**`rating-star`**
- `{colors.accent-gold}` (#C89A4A) — antique gold. Used as filled / half / empty star icons in the PDP star rating and product card rating row.

---

## Do's and Don'ts

### Do
- Use `{rounded.none}` (0px) on every single component without exception. There are no rounded corners in the system.
- Reserve `{colors.primary}` for primary CTAs, badges, the marquee banner, active filter states, focus rings, and inline links. It is never decorative fill.
- Set all button labels and overlines in uppercase with tracked letter-spacing (`{typography.button-md}` 1.2px, `{typography.overline}` 2px).
- Use `{typography.label-retro}` (Cormorant Garamond, uppercase, 3px tracking) exclusively for in-image tag overlays (`{component.button-tag-on-image}`) and `{component.product-tag-pill}` — this is the system's most distinctive retro gesture.
- Display prices in Cormorant Garamond (`{typography.price-lg}`, `{typography.price-md}`) — the serif price is a typographic centerpiece.
- Keep the `{component.marquee-banner}` in solid `{colors.primary}` on every page. It is the first visual element above the nav and anchors the brand's promotional voice.
- Stack content sections at `{spacing.section}` (72px) rhythm; tighten product grids to `{spacing.sm}` (8px) gutters.
- Use `{component.ingredient-card}` to surface ingredient storytelling alongside standard product tiles — the brand's editorial voice lives in these cards.

### Don't
- Don't round any corner anywhere. `{rounded.none}` is absolute.
- Don't introduce drop shadows on cards or buttons. The only shadows in the system are on `{component.modal-card}` and `{component.cart-drawer}`.
- Don't use `{colors.primary}` (raspberry) as a decorative fill on content surfaces — it is a functional action color and should appear at most once per fold.
- Don't use `{typography.label-retro}` (Cormorant Garamond uppercase) for body copy or navigation — it is strictly a label and overlay gesture.
- Don't pad `{component.product-card}` internally — the product image is full-bleed to the top edge of the card.
- Don't introduce a second accent color in the UI chrome. `{colors.accent-warm}` and `{colors.accent-gold}` are editorial and rating-only respectively; they never appear on interactive elements.
- Don't use serif typography (Cormorant Garamond) for button labels, filter chips, or form inputs — those roles belong to DM Sans exclusively.
- Don't replace `{colors.primary}` with another pink. The raspberry is precise — `#C8365A`.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| ultrawide | 1920px+ | Product grid expands to 5 columns; max-width holds at ~1320px |
| desktop-large | 1440px | Default — 4-column product grid, full primary nav |
| desktop | 1280px | Same layout, slightly narrower outer gutters |
| desktop-small | 1024px | Product grid collapses to 3 columns |
| tablet | 768px | Product grid to 2 columns; nav becomes hamburger drawer; category nav scrolls horizontally |
| mobile | 480px | Single-column product grid; `{typography.display-xl}` scales 72px → 44px |
| mobile-narrow | 320px | Hero headline further scales to ~36px; section padding tightens to 32px |

### Touch Targets
All interactive elements meet WCAG AA (≥ 44×44px). `{component.button-primary}` and `{component.button-secondary}` sit at ~48px height. `{component.search-bar}` and `{component.text-input}` both at 48px. `{component.filter-chip}` at ~38px height extends to 44px via inline padding. `{component.button-icon-square}` is exactly 44×44px.

### Collapsing Strategy
- **Marquee banner:** stays full-width at all breakpoints; scrolling speed slows on mobile.
- **Primary nav:** desktop horizontal category links → tablet hamburger drawer at 768px. The nav always includes the bag icon and its item count.
- **Search bar:** desktop inline in nav → tablet icon-only expanding to full-width overlay on tap.
- **Product grid:** 4-up → 3-up → 2-up → 1-up at 1024, 768, and 480px. Gutters hold at 8px through tablet, drop to 6px on mobile.
- **Hero feature row:** desktop 2-column alternating → tablet vertical stack (image above, text below) → mobile single-column full-bleed image.
- **PDP layout:** desktop 60/40 two-column → tablet single-column (image gallery above, info panel below).
- **Cart drawer:** desktop side-panel (400px wide) → mobile full-screen sheet.
- **Modal:** desktop centered ~480px card → mobile full-width, bottom-anchored CTA.
- **Section padding:** `{spacing.section}` (72px) → 48px tablet → 32px mobile.
- **Hero headline:** `{typography.display-xl}` (72px) → 56px → 44px → 36px down the breakpoint stack.
- **Footer:** 4-up link columns → 2-up at tablet → accordion at mobile.

### Image Behavior
- Product card images preserve 3:4 portrait ratio at every breakpoint; column count changes, not the aspect ratio.
- Category tiles maintain 1:1 across all sizes.
- Hero editorial imagery uses art-direction crops (4:5 → 1:1 square at mobile) so the product stays centered when the layout collapses.
- All non-hero imagery is lazy-loaded as the user scrolls into the next grid row.
- All product images use `{component.product-image-frame}` — background `{colors.surface-card}`, 1px `{colors.hairline-soft}` border — as the loading state placeholder.

---

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry and verify every property resolves to a token.
2. Reference tokens directly (`{colors.primary}`, `{rounded.none}`, `{typography.label-retro}`) — never paraphrase.
3. When adding a new component, confirm it uses `{rounded.none}` — there is no exception to this rule.
4. Button labels go in uppercase DM Sans with letter-spacing; headlines go in mixed-case Cormorant Garamond. Do not swap these roles.
5. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues.
6. Keep `{colors.primary}` scarce — at most one raspberry CTA per fold, not counting the persistent marquee banner.
7. New components should ask: can this be expressed with the existing product-card + surface-card + 1px hairline border vocabulary before adding new tokens?

---

## Known Gaps

- **Mobile screenshots not captured** — responsive behavior is synthesized from the documented breakpoint stack and standard ecommerce pattern.
- **Hover states not documented** by system policy.
- **PDP image gallery** (zoom, swatch selector, video player) introduces sub-components not detailed here.
- **Authenticated user chrome** (account dashboard, order history, wishlists) not documented — this covers the pre-checkout and discovery experience.
- **Form validation states** (inline error and success messages) not fully documented; only focused input state is specified.
- **Loyalty / rewards program surfaces** (points counter, tier badge) not included — likely require a dedicated `badge-tier` component and `{colors.accent-gold}` surface treatment.
