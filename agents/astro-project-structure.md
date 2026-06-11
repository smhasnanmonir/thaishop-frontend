# Petal — Astro Project Structure
## Skincare Ecommerce · SEO-First · Performance-First

---

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Astro 5.x | Zero-JS by default, island architecture, file-based routing, Content Collections |
| Rendering | SSG (default) + SSR for cart/account routes | Static for all public pages = fastest TTFB; dynamic only where session state is required |
| Styling | CSS custom properties + scoped `<style>` per component | No runtime style overhead; tokens from design system map directly to CSS vars |
| UI components | Fully custom in `src/components/ui/` | No third-party UI bundle weight |
| Image handling | `astro:assets` (`<Image>` + `<Picture>`) | Automatic WebP/AVIF conversion, responsive srcsets, lazy loading |
| Content | Astro Content Collections (`src/content/`) | Type-safe, Zod-validated schema; co-locates content with its type definition |
| Sitemap | `@astrojs/sitemap` integration | Auto-generated, zero manual maintenance |
| SEO metadata | Custom `src/components/seo/` components | Full control over every tag; no black-box third-party injection |
| Analytics | Server-side event endpoint + minimal client beacon | No analytics script blocks render |

---

## Full Folder Tree

```
petal/
├── public/
│   ├── fonts/
│   │   ├── cormorant-garamond/
│   │   │   ├── CormorantGaramond-Regular.woff2
│   │   │   ├── CormorantGaramond-SemiBold.woff2
│   │   │   └── CormorantGaramond-Bold.woff2
│   │   └── dm-sans/
│   │       ├── DMSans-Regular.woff2
│   │       ├── DMSans-Medium.woff2
│   │       ├── DMSans-SemiBold.woff2
│   │       └── DMSans-Bold.woff2
│   ├── icons/
│   │   └── sprite.svg
│   ├── og/
│   │   └── default-og.jpg
│   ├── manifest.webmanifest
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   ├── products/
│   │   │   ├── ingredients/
│   │   │   ├── categories/
│   │   │   └── editorial/
│   │   └── svgs/
│   │       ├── logo.svg
│   │       └── wordmark.svg
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── actions/
│   │   │   │   ├── Button.astro
│   │   │   │   ├── IconButton.astro
│   │   │   │   ├── TagButton.astro
│   │   │   │   └── index.ts
│   │   │   ├── badges/
│   │   │   │   ├── Badge.astro
│   │   │   │   ├── StockBadge.astro
│   │   │   │   └── index.ts
│   │   │   ├── cards/
│   │   │   │   ├── ProductCard.astro
│   │   │   │   ├── ProductCardFeatured.astro
│   │   │   │   ├── IngredientCard.astro
│   │   │   │   ├── FeatureCard.astro
│   │   │   │   ├── CategoryTile.astro
│   │   │   │   └── index.ts
│   │   │   ├── disclosure/
│   │   │   │   ├── Accordion.astro
│   │   │   │   ├── AccordionItem.astro
│   │   │   │   └── index.ts
│   │   │   ├── feedback/
│   │   │   │   ├── Skeleton.astro
│   │   │   │   ├── Spinner.astro
│   │   │   │   ├── Toast.astro
│   │   │   │   ├── EmptyState.astro
│   │   │   │   └── index.ts
│   │   │   ├── forms/
│   │   │   │   ├── Input.astro
│   │   │   │   ├── Textarea.astro
│   │   │   │   ├── Select.astro
│   │   │   │   ├── Checkbox.astro
│   │   │   │   ├── RadioGroup.astro
│   │   │   │   ├── SearchBar.astro
│   │   │   │   ├── FilterChip.astro
│   │   │   │   ├── QuantityStepper.astro
│   │   │   │   └── index.ts
│   │   │   ├── layout/
│   │   │   │   ├── Container.astro
│   │   │   │   ├── Grid.astro
│   │   │   │   ├── Stack.astro
│   │   │   │   ├── Divider.astro
│   │   │   │   ├── Section.astro
│   │   │   │   └── index.ts
│   │   │   ├── media/
│   │   │   │   ├── ProductImage.astro
│   │   │   │   ├── HeroImage.astro
│   │   │   │   ├── ImageGallery.astro
│   │   │   │   ├── VideoEmbed.astro
│   │   │   │   └── index.ts
│   │   │   ├── navigation/
│   │   │   │   ├── Breadcrumb.astro
│   │   │   │   ├── Pagination.astro
│   │   │   │   ├── TabStrip.astro
│   │   │   │   └── index.ts
│   │   │   ├── overlays/
│   │   │   │   ├── Modal.astro
│   │   │   │   ├── Scrim.astro
│   │   │   │   ├── Tooltip.astro
│   │   │   │   └── index.ts
│   │   │   ├── rating/
│   │   │   │   ├── StarRating.astro
│   │   │   │   ├── ReviewCard.astro
│   │   │   │   └── index.ts
│   │   │   └── typography/
│   │   │       ├── Heading.astro
│   │   │       ├── Overline.astro
│   │   │       ├── Price.astro
│   │   │       ├── RetroLabel.astro
│   │   │       └── index.ts
│   │   │
│   │   ├── features/
│   │   │   ├── cart/
│   │   │   │   ├── CartDrawer.astro
│   │   │   │   ├── CartItem.astro
│   │   │   │   ├── CartSummary.astro
│   │   │   │   └── index.ts
│   │   │   ├── hero/
│   │   │   │   ├── HomeHero.astro
│   │   │   │   ├── CampaignHero.astro
│   │   │   │   ├── DarkCtaStrip.astro
│   │   │   │   └── index.ts
│   │   │   ├── ingredients/
│   │   │   │   ├── IngredientGrid.astro
│   │   │   │   ├── IngredientStory.astro
│   │   │   │   └── index.ts
│   │   │   ├── marquee/
│   │   │   │   ├── MarqueeBanner.astro
│   │   │   │   └── index.ts
│   │   │   ├── product/
│   │   │   │   ├── ProductGrid.astro
│   │   │   │   ├── ProductFilterPanel.astro
│   │   │   │   ├── ProductInfo.astro
│   │   │   │   ├── ProductImageGallery.astro
│   │   │   │   ├── RelatedProducts.astro
│   │   │   │   ├── QuickViewModal.astro
│   │   │   │   └── index.ts
│   │   │   ├── reviews/
│   │   │   │   ├── ReviewList.astro
│   │   │   │   ├── ReviewSummary.astro
│   │   │   │   └── index.ts
│   │   │   └── search/
│   │   │       ├── SearchResults.astro
│   │   │       ├── SearchSuggestions.astro
│   │   │       └── index.ts
│   │   │
│   │   ├── navigation/
│   │   │   ├── PrimaryNav.astro
│   │   │   ├── AnnouncementBar.astro
│   │   │   ├── MobileDrawer.astro
│   │   │   ├── MegaMenu.astro
│   │   │   ├── Footer.astro
│   │   │   └── index.ts
│   │   │
│   │   └── seo/
│   │       ├── MetaTags.astro
│   │       ├── OpenGraph.astro
│   │       ├── TwitterCard.astro
│   │       ├── CanonicalUrl.astro
│   │       ├── JsonLd.astro
│   │       ├── schemas/
│   │       │   ├── ProductSchema.astro
│   │       │   ├── BreadcrumbSchema.astro
│   │       │   ├── OrganizationSchema.astro
│   │       │   ├── ArticleSchema.astro
│   │       │   └── FAQSchema.astro
│   │       └── index.ts
│   │
│   ├── content/
│   │   ├── config.ts
│   │   ├── products/
│   │   │   └── [slug].md
│   │   ├── collections/
│   │   │   └── [slug].md
│   │   ├── ingredients/
│   │   │   └── [slug].md
│   │   ├── blog/
│   │   │   └── [slug].md
│   │   └── pages/
│   │       ├── about.md
│   │       ├── sustainability.md
│   │       └── faq.md
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ProductLayout.astro
│   │   ├── CollectionLayout.astro
│   │   ├── ArticleLayout.astro
│   │   ├── AccountLayout.astro
│   │   └── CheckoutLayout.astro
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── products.ts
│   │   │   ├── collections.ts
│   │   │   ├── cart.ts
│   │   │   ├── account.ts
│   │   │   └── reviews.ts
│   │   ├── seo/
│   │   │   ├── buildMeta.ts
│   │   │   ├── buildJsonLd.ts
│   │   │   └── buildCanonical.ts
│   │   └── utils/
│   │       ├── formatPrice.ts
│   │       ├── formatDate.ts
│   │       ├── slugify.ts
│   │       ├── truncate.ts
│   │       └── cn.ts
│   │
│   ├── middleware/
│   │   └── index.ts
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── products/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── collections/
│   │   │   └── [collection].astro
│   │   ├── ingredients/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── search/
│   │   │   └── index.astro
│   │   ├── account/
│   │   │   ├── index.astro
│   │   │   ├── orders.astro
│   │   │   └── wishlist.astro
│   │   ├── checkout/
│   │   │   ├── index.astro
│   │   │   └── confirmation.astro
│   │   ├── about.astro
│   │   ├── sustainability.astro
│   │   ├── faq.astro
│   │   ├── cart.astro
│   │   ├── 404.astro
│   │   ├── sitemap.xml.ts
│   │   └── robots.txt.ts
│   │
│   ├── store/
│   │   ├── cart.ts
│   │   ├── ui.ts
│   │   └── wishlist.ts
│   │
│   ├── styles/
│   │   ├── global/
│   │   │   ├── reset.css
│   │   │   ├── base.css
│   │   │   ├── fonts.css
│   │   │   └── animations.css
│   │   └── tokens/
│   │       ├── colors.css
│   │       ├── typography.css
│   │       ├── spacing.css
│   │       └── index.css
│   │
│   ├── types/
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   ├── review.ts
│   │   ├── navigation.ts
│   │   └── seo.ts
│   │
│   └── env.d.ts
│
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Folder-by-Folder Reference

### `public/`

Static assets served directly without Astro processing. Nothing here goes through the build pipeline.

| Subfolder | Contents | Rule |
|---|---|---|
| `public/fonts/` | Self-hosted `.woff2` font files only. One subfolder per typeface. | Self-hosting eliminates the Google Fonts render-blocking DNS lookup. Only `.woff2` — no `.ttf`, `.eot`, `.woff`. |
| `public/icons/` | Single SVG sprite file (`sprite.svg`) | One HTTP request for all icons. Use `<use href="/icons/sprite.svg#icon-name">` everywhere. Never inline SVG outside of `src/assets/svgs/`. |
| `public/og/` | Static Open Graph fallback image (`default-og.jpg`) | 1200×630px JPEG. Dynamic OG images generated at build time live in `src/pages/og/`. |
| `public/manifest.webmanifest` | PWA manifest | Required for "Add to Home Screen" on mobile. Links to icon set in the same directory. |
| `public/robots.txt` | Crawl rules | Managed as a static file (not generated) since rules are stable. Point `Sitemap:` to the generated sitemap URL. |

> **Do not put images here.** Product and editorial images go in `src/assets/images/` and are processed by `astro:assets` for automatic WebP conversion and responsive srcsets.

---

### `src/assets/`

Source assets that Astro processes at build time through `astro:assets`. Every image imported from here is automatically optimised.

| Subfolder | Contents |
|---|---|
| `src/assets/images/hero/` | Full-bleed homepage and campaign hero images. Format: high-res JPEG or PNG source. Astro outputs WebP/AVIF. |
| `src/assets/images/products/` | Product photography. Naming convention: `[product-slug]-[variant]-[shot-number].jpg` e.g. `velvet-creme-rose-01.jpg`. |
| `src/assets/images/ingredients/` | Ingredient macro photography (1:1 square sources). |
| `src/assets/images/categories/` | Category tile lifestyle images. |
| `src/assets/images/editorial/` | Blog and feature row editorial photography. |
| `src/assets/svgs/` | Brand mark files (`logo.svg`, `wordmark.svg`) imported as components. Never placed in `public/` as they need to be inlined. |

---

### `src/components/`

Three distinct namespaces, each serving a different abstraction level.

```
components/
  ui/         → Pure presentational atoms and molecules. No data fetching. No business logic.
  features/   → Composed page sections. May import from lib/api/.
  navigation/ → Global chrome (nav, footer, announcement bar). Page-level singletons.
  seo/        → Head tag injection only. No visual output.
```

Every subfolder must have an `index.ts` barrel file that re-exports its public surface. This keeps import paths clean (`import { Button, IconButton } from '@components/ui/actions'`).

---

### `src/components/ui/`

Custom component library. Zero third-party UI dependencies. Every component is a self-contained `.astro` file with scoped `<style>`. All visual tokens are consumed via CSS custom properties defined in `src/styles/tokens/`.

#### `ui/actions/`

| File | Props | Notes |
|---|---|---|
| `Button.astro` | `variant: 'primary' \| 'secondary' \| 'ghost'`, `size: 'md' \| 'sm'`, `href?: string`, `disabled?: boolean`, `type?: string` | Renders `<a>` when `href` is provided, `<button>` otherwise. All-caps label with letter-spacing via CSS token. Sharp corners — `border-radius: var(--rounded-none)`. |
| `IconButton.astro` | `icon: string`, `label: string`, `size: 'sm' \| 'md' \| 'lg'` | Accessible: `aria-label` required. Renders an SVG `<use>` referencing `sprite.svg`. |
| `TagButton.astro` | `label: string`, `href?: string` | In-image retro label overlay. Cormorant Garamond uppercase. Sharp corners. |

#### `ui/badges/`

| File | Props | Notes |
|---|---|---|
| `Badge.astro` | `variant: 'new' \| 'sale' \| 'bestseller'`, `label?: string` | Defaults to "NEW", "SALE", "BESTSELLER" if no label. Uppercase overline type. |
| `StockBadge.astro` | `stock: number` | Shows "Low Stock", "In Stock", or "Sold Out". Semantic colour changes via variant. |

#### `ui/cards/`

| File | Props | Notes |
|---|---|---|
| `ProductCard.astro` | `product: ProductCardData`, `loading?: 'lazy' \| 'eager'` | Consumes the `ProductCardData` type from `src/types/product.ts`. Image is full-bleed top, no padding. |
| `ProductCardFeatured.astro` | Same as `ProductCard` + `featured: true` | Adds the hairline border; used in Editors' Picks rows. |
| `IngredientCard.astro` | `ingredient: IngredientCardData` | 1:1 macro image + name + sourcing note + short description. |
| `FeatureCard.astro` | `variant: 'canvas' \| 'blush'`, `headline: string`, `body: string`, `ctaLabel: string`, `ctaHref: string`, `image: ImageMetadata` | Used in alternating feature rows. Variant maps to surface-card vs canvas background. |
| `CategoryTile.astro` | `category: CategoryData` | 1:1 image + category label + overline. |

#### `ui/disclosure/`

Accordion components for FAQs and ingredient detail sections.

| File | Props | Notes |
|---|---|---|
| `Accordion.astro` | `items: AccordionItem[]`, `allowMultiple?: boolean` | Wraps `<details>`/`<summary>` natively — no JS required for basic open/close. |
| `AccordionItem.astro` | `question: string`, `answer: string`, `open?: boolean` | Uses native `<details open>` attribute. |

#### `ui/feedback/`

| File | Notes |
|---|---|
| `Skeleton.astro` | CSS-only shimmer placeholder. Used as loading state for product grids and the cart drawer. |
| `Spinner.astro` | Small circular CSS spinner for form submission states. |
| `Toast.astro` | Fixed-position notification strip. Triggered client-side only. |
| `EmptyState.astro` | Illustrated empty state for wishlists, search results with no matches, empty cart. |

#### `ui/forms/`

| File | Props | Notes |
|---|---|---|
| `Input.astro` | `label: string`, `name: string`, `type?: string`, `error?: string`, `required?: boolean`, `placeholder?: string` | Always renders a visible `<label>`. Error state triggers 2px `var(--color-error)` border + inline error message. |
| `Textarea.astro` | Same as `Input.astro` | Auto-expanding height via `field-sizing: content` where supported. |
| `Select.astro` | `label: string`, `name: string`, `options: {value, label}[]` | Custom styled `<select>` — no JS required. |
| `Checkbox.astro` | `label: string`, `name: string`, `checked?: boolean` | Custom checkbox with CSS-only checked state using `accent-color`. |
| `RadioGroup.astro` | `label: string`, `name: string`, `options: {value, label}[]` | Renders a `<fieldset>` + `<legend>` for accessibility. |
| `SearchBar.astro` | `placeholder?: string`, `action?: string`, `value?: string` | Renders as a `<form role="search">` with `<input type="search">`. Submits to `/search`. |
| `FilterChip.astro` | `label: string`, `value: string`, `active?: boolean`, `name: string` | Inverts (ink background) when active. |
| `QuantityStepper.astro` | `value: number`, `min?: number`, `max?: number`, `name: string` | Renders three `<button>` elements around a display. Requires minimal client JS for state. |

#### `ui/layout/`

Structural composition helpers. No visual chrome.

| File | Props | Notes |
|---|---|---|
| `Container.astro` | `as?: string`, `maxWidth?: string` | Applies `max-width: var(--container-max)` with auto horizontal margins. |
| `Grid.astro` | `cols: number \| ResponsiveCols`, `gap?: string` | CSS Grid wrapper. Breakpoint-aware via `--grid-cols` custom property. |
| `Stack.astro` | `gap?: string`, `direction?: 'row' \| 'column'` | Flexbox stack with a single `gap` token. |
| `Section.astro` | `as?: string`, `spacing?: 'default' \| 'tight' \| 'none'` | Applies `padding-block: var(--spacing-section)`. Reduces to 48px/32px on narrower breakpoints via scoped media queries. |
| `Divider.astro` | `variant?: 'default' \| 'retro'` | The retro variant adds the centre-inset blush decorative rule. |

#### `ui/media/`

| File | Props | Notes |
|---|---|---|
| `ProductImage.astro` | `src: ImageMetadata`, `alt: string`, `sizes?: string`, `loading?: 'lazy' \| 'eager'` | Wraps Astro's `<Image>` with the `product-image-frame` surface (blush card background for placeholder). Sharp-cornered. |
| `HeroImage.astro` | `src: ImageMetadata`, `alt: string`, `priority?: boolean` | When `priority` is true: renders with `loading="eager"`, `fetchpriority="high"`, and injects a `<link rel="preload">` into the document head via a `<slot name="head">`. |
| `ImageGallery.astro` | `images: GalleryImage[]`, `activeIndex?: number` | Thumbnail strip + main image. Requires a small client island for active-index toggling (`client:visible`). |
| `VideoEmbed.astro` | `src: string`, `poster: ImageMetadata`, `autoplay?: boolean` | Lazy-loads the `<video>` via `IntersectionObserver`. |

#### `ui/navigation/`

Sub-navigation components (not the global nav — that lives in `src/components/navigation/`).

| File | Notes |
|---|---|
| `Breadcrumb.astro` | Accepts `crumbs: {label, href}[]`. Renders a `<nav aria-label="Breadcrumb">` + `<ol>`. Pairs with `BreadcrumbSchema.astro` for structured data. |
| `Pagination.astro` | Renders accessible `<nav aria-label="Pagination">`. Prev/Next + numbered links. |
| `TabStrip.astro` | Horizontal scrollable tab strip for PDP "Details / Ingredients / How to Use" sections. CSS-only using `:has()` where supported. |

#### `ui/overlays/`

| File | Notes |
|---|---|
| `Modal.astro` | Uses the native `<dialog>` element with `::backdrop` for the scrim. No JS polyfill needed in modern browsers. `showModal()` / `close()` are called with a tiny inline script. |
| `Scrim.astro` | Standalone scrim overlay for non-dialog contexts (cart drawer, mobile menu). |
| `Tooltip.astro` | CSS-only tooltip using `:hover` + `:focus-within`. No JS. |

#### `ui/rating/`

| File | Notes |
|---|---|
| `StarRating.astro` | Renders 5 SVG stars from the sprite. Accepts `rating: number` (0–5, half steps supported) and `count?: number`. |
| `ReviewCard.astro` | Full review card: star rating + headline + body + author + date in `body-sm` + `mute`. |

#### `ui/typography/`

| File | Props | Notes |
|---|---|---|
| `Heading.astro` | `level: 1-6`, `size?: 'xl' \| 'lg' \| 'md' \| 'display-xl' \| 'display-lg' \| 'display-md'`, `as?: string` | Separates semantic heading level from visual size — e.g. an `<h2>` can render at display-xl scale. |
| `Overline.astro` | `text: string`, `as?: string` | Uppercase, 2px letter-spaced DM Sans. Renders `<span>` by default. |
| `Price.astro` | `amount: number`, `currency?: string`, `compareAt?: number`, `size?: 'md' \| 'lg'` | Formats using `Intl.NumberFormat`. Cormorant Garamond. Strikethrough compare-at price in `ash`. |
| `RetroLabel.astro` | `text: string` | Uppercase Cormorant Garamond, 3px tracking. Used inside `TagButton` and overlaid on product photography. |

---

### `src/components/features/`

Page-section components composed from `ui/` atoms. Each subfolder is a product domain.

| Component | What it does |
|---|---|
| `features/hero/HomeHero.astro` | Full-bleed hero with `HeroImage` + display-xl headline + primary CTA. Injects `<link rel="preload">` for the hero image. |
| `features/hero/DarkCtaStrip.astro` | Full-width dark surface strip with display-lg headline + primary CTA. Used on campaign landing pages. |
| `features/marquee/MarqueeBanner.astro` | CSS-animated scrolling text in `var(--color-primary)`. Pure CSS — no JS. Respects `prefers-reduced-motion`. |
| `features/product/ProductGrid.astro` | Renders a `Grid` of `ProductCard` components. Accepts `products: ProductCardData[]`. |
| `features/product/ProductFilterPanel.astro` | Filter chip strip + sort dropdown. State managed via URL search params (no JS required for basic filter — form `GET` submit). |
| `features/product/ProductInfo.astro` | PDP right panel: product name, rating, price, variant selector, quantity stepper, add-to-bag CTA, description accordion. |
| `features/cart/CartDrawer.astro` | Slide-in cart panel using native `<dialog>`. Hydrated with `client:idle`. |
| `features/ingredients/IngredientGrid.astro` | 3-up or 4-up grid of `IngredientCard` tiles. |
| `features/reviews/ReviewList.astro` | Paginated list of `ReviewCard` components. |

---

### `src/components/navigation/`

Global chrome components that appear on every page. These are instantiated once per layout, not re-used like `ui/` components.

| File | Notes |
|---|---|
| `PrimaryNav.astro` | Brand wordmark + category links + icon cluster (search, wishlist, account, bag). Sticky on scroll via CSS `position: sticky`. |
| `AnnouncementBar.astro` | Thin blush-surface rotating message bar above the nav. Content driven from `src/data/announcements.ts`. |
| `MobileDrawer.astro` | Off-canvas navigation drawer. Uses `<dialog>`. Triggered by the hamburger button in `PrimaryNav`. |
| `MegaMenu.astro` | Desktop dropdown mega-menu for the category nav links. CSS-only using `:hover` + `:focus-within`. |
| `Footer.astro` | 4-column footer grid. Newsletter signup form. Social links. |

---

### `src/components/seo/`

No visual output. Every component here injects only into `<head>` via a head slot.

| File | What it injects |
|---|---|
| `MetaTags.astro` | `<title>`, `<meta name="description">`, `<meta name="robots">`, `<link rel="canonical">` |
| `OpenGraph.astro` | All `og:` tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name` |
| `TwitterCard.astro` | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` |
| `CanonicalUrl.astro` | Single `<link rel="canonical">` tag. Accepts `url` prop — never relies on `Astro.url` default alone to prevent duplicate content from pagination. |
| `JsonLd.astro` | Base wrapper that injects a `<script type="application/ld+json">` tag. All structured data schemas use this as a shell. |

#### `seo/schemas/`

| File | Schema type | Used on |
|---|---|---|
| `ProductSchema.astro` | `schema.org/Product` | PDP (`/products/[slug]`) — includes `name`, `description`, `image`, `offers`, `aggregateRating` |
| `BreadcrumbSchema.astro` | `schema.org/BreadcrumbList` | Every page with a breadcrumb nav |
| `OrganizationSchema.astro` | `schema.org/Organization` | Home page only |
| `ArticleSchema.astro` | `schema.org/Article` | Blog post pages |
| `FAQSchema.astro` | `schema.org/FAQPage` | FAQ page; also usable on PDP for FAQ accordions |

---

### `src/content/`

Astro Content Collections. `config.ts` defines and validates every collection schema with Zod.

#### `config.ts` — Schema Reference

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    tagline: z.string(),
    price: z.number(),
    compareAtPrice: z.number().optional(),
    category: z.enum(['moisturiser', 'serum', 'cleanser', 'spf', 'eye', 'body', 'gift']),
    concern: z.array(z.string()),
    badges: z.array(z.enum(['new', 'sale', 'bestseller'])).optional(),
    images: z.array(image()),
    ingredients: z.array(z.string()),
    rating: z.number().min(0).max(5),
    reviewCount: z.number(),
    stock: z.number(),
    isVegan: z.boolean().default(false),
    isCrueltyFree: z.boolean().default(true),
    publishedAt: z.date(),
    seo: z.object({
      metaTitle: z.string().max(60).optional(),
      metaDescription: z.string().max(155).optional(),
      ogImage: image().optional(),
    }).optional(),
  }),
});

const ingredients = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    slug: z.string(),
    sourcingNote: z.string().max(80),
    image: image(),
    category: z.enum(['botanical', 'acid', 'oil', 'mineral', 'peptide']),
    keyBenefit: z.string().max(120),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().max(155),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    author: z.string(),
    category: z.enum(['routine', 'ingredients', 'skintype', 'news']),
    image: image(),
    tags: z.array(z.string()),
    seo: z.object({
      metaTitle: z.string().max(60).optional(),
      metaDescription: z.string().max(155).optional(),
      ogImage: image().optional(),
    }).optional(),
  }),
});

export const collections = { products, ingredients, blog };
```

---

### `src/layouts/`

Layouts compose the global chrome around page content. Each layout imports from `navigation/` and `seo/`.

| File | Used by | Head slot |
|---|---|---|
| `BaseLayout.astro` | All pages (other layouts extend it) | `MetaTags` + `OpenGraph` + `TwitterCard` + `CanonicalUrl` + font preloads + CSS tokens |
| `ProductLayout.astro` | `/products/[slug]` | Extends `BaseLayout`. Adds `ProductSchema`, `BreadcrumbSchema`. Imports `AnnouncementBar` + `PrimaryNav` + `Footer`. |
| `CollectionLayout.astro` | `/collections/[collection]` | Extends `BaseLayout`. Adds `BreadcrumbSchema`. |
| `ArticleLayout.astro` | `/blog/[slug]` | Extends `BaseLayout`. Adds `ArticleSchema`, `BreadcrumbSchema`. Sets `article` OG type. |
| `AccountLayout.astro` | `/account/*` | Extends `BaseLayout`. Sets `noindex, nofollow` robots tag. SSR mode. |
| `CheckoutLayout.astro` | `/checkout/*` | Extends `BaseLayout`. Sets `noindex, nofollow`. No nav or footer — clean checkout chrome. |

#### `BaseLayout.astro` — Head Slot Pattern

```astro
---
// src/layouts/BaseLayout.astro
import MetaTags from '@components/seo/MetaTags.astro';
import OpenGraph from '@components/seo/OpenGraph.astro';
import CanonicalUrl from '@components/seo/CanonicalUrl.astro';
import type { SEOMeta } from '@types/seo';

interface Props {
  seo: SEOMeta;
}
const { seo } = Astro.props;
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <MetaTags {...seo} />
    <OpenGraph {...seo} />
    <CanonicalUrl url={seo.canonicalUrl} />
    <!-- Font preloads injected here — see Font Strategy -->
    <slot name="head" />
    <link rel="stylesheet" href="/styles/tokens/index.css" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

### `src/lib/`

Pure TypeScript — no Astro components. Importable from pages, layouts, and feature components.

#### `lib/api/`

Data access layer. All functions return typed data. Server-side only in `.astro` frontmatter.

| File | Exports |
|---|---|
| `products.ts` | `getProduct(slug)`, `getProducts(filters)`, `getFeaturedProducts()`, `getRelatedProducts(slug)` |
| `collections.ts` | `getCollection(slug)`, `getCollections()` |
| `cart.ts` | `getCart(sessionId)`, `addToCart(...)`, `updateCartItem(...)`, `removeCartItem(...)` |
| `account.ts` | `getAccount(sessionId)`, `getOrders(accountId)`, `getWishlist(accountId)` |
| `reviews.ts` | `getReviews(productId)`, `getAverageRating(productId)` |

#### `lib/seo/`

| File | Exports |
|---|---|
| `buildMeta.ts` | `buildProductMeta(product)`, `buildBlogMeta(post)`, `buildCollectionMeta(collection)` — returns a typed `SEOMeta` object for each content type |
| `buildJsonLd.ts` | `buildProductJsonLd(product)`, `buildBreadcrumbJsonLd(crumbs)`, `buildOrgJsonLd()` — returns raw JSON-LD objects to pass to `JsonLd.astro` |
| `buildCanonical.ts` | `buildCanonical(path)` — prepends `SITE_URL` env var, strips trailing slashes, normalises pagination params |

#### `lib/utils/`

| File | Exports |
|---|---|
| `formatPrice.ts` | `formatPrice(amount, currency?)` — wraps `Intl.NumberFormat` |
| `formatDate.ts` | `formatDate(date, locale?)` — wraps `Intl.DateTimeFormat` |
| `slugify.ts` | `slugify(str)` — URL-safe slug generation |
| `truncate.ts` | `truncate(str, length)` — trims to word boundary |
| `cn.ts` | `cn(...classes)` — lightweight class-name joiner (no dependencies) |

---

### `src/middleware/`

#### `index.ts`

Single middleware file. Handles:
- Session cookie reading for cart and account (SSR routes)
- Redirect of `www.` to apex domain (canonical URL enforcement)
- `X-Robots-Tag` header injection for account and checkout routes (`noindex, nofollow`)
- Response header hardening (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)

---

### `src/pages/`

File-based routing. All filenames are lowercase with hyphens. No `index.astro` outside of directory roots — every route is intentional.

| Route | File | Rendering | Notes |
|---|---|---|---|
| `/` | `index.astro` | SSG | Home page. Prerendered. |
| `/products` | `products/index.astro` | SSG | PLP. Static paths with filter state in URL params. |
| `/products/[slug]` | `products/[slug].astro` | SSG | PDP. `getStaticPaths()` from Content Collections. |
| `/collections/[collection]` | `collections/[collection].astro` | SSG | Collection landing pages. |
| `/ingredients` | `ingredients/index.astro` | SSG | Ingredient index. |
| `/ingredients/[slug]` | `ingredients/[slug].astro` | SSG | Ingredient story page. |
| `/blog` | `blog/index.astro` | SSG | Blog index with pagination. |
| `/blog/[slug]` | `blog/[slug].astro` | SSG | Individual post. |
| `/search` | `search/index.astro` | SSR | Dynamic search results. |
| `/cart` | `cart.astro` | SSR | Cart page (session-dependent). |
| `/checkout` | `checkout/index.astro` | SSR | Checkout. `noindex`. |
| `/checkout/confirmation` | `checkout/confirmation.astro` | SSR | Order confirmation. `noindex`. |
| `/account` | `account/index.astro` | SSR | Account dashboard. `noindex`. |
| `/sitemap.xml` | `sitemap.xml.ts` | SSG | Generated from Content Collections. |
| `/robots.txt` | `robots.txt.ts` | SSG | Dynamic — points `Sitemap:` to generated sitemap. |
| `404` | `404.astro` | SSG | Custom error page. |

---

### `src/store/`

Lightweight client-side state using Astro's recommended `nanostores` pattern (or native JS module singletons). No external state library.

| File | Manages |
|---|---|
| `cart.ts` | Cart item array, total, item count. Persisted to `localStorage`. Synced to server on mutation. |
| `ui.ts` | Cart drawer open/close state, mobile menu state, active modal. |
| `wishlist.ts` | Wishlist product IDs. Persisted to `localStorage`. |

> Store files export reactive atoms imported by `client:` islands only. Server-rendered `.astro` components never import from `src/store/`.

---

### `src/styles/`

All CSS. No CSS-in-JS. No Tailwind at runtime.

#### `styles/tokens/`

Design system tokens from the Petal design system mapped to CSS custom properties. These are the single source of truth — all component `<style>` blocks reference these variables, never raw values.

```css
/* src/styles/tokens/colors.css */
:root {
  --color-primary: #C8365A;
  --color-primary-pressed: #A32848;
  --color-on-primary: #FFFDF9;
  --color-ink: #1A0E14;
  --color-ink-soft: #2E1A22;
  --color-body: #3B2530;
  --color-mute: #6B4F5A;
  --color-ash: #9E8090;
  --color-stone: #C9B5BC;
  --color-hairline: #DDD0D4;
  --color-hairline-soft: #EAE0E4;
  --color-canvas: #FFFDF9;
  --color-surface-soft: #FAF5F0;
  --color-surface-card: #F5EDF0;
  --color-surface-blush: #EFE0E5;
  --color-surface-dark: #1A0E14;
  --color-on-dark: #FFFDF9;
  --color-secondary-bg: #EAE0E4;
  --color-accent-gold: #C89A4A;
  --color-error: #9E0A0A;
  --color-success-deep: #103C25;
  --color-focus-outer: #C8365A;
  --color-focus-inner: #FFFDF9;
}
```

```css
/* src/styles/tokens/typography.css */
:root {
  --font-serif: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-sans: 'DM Sans', -apple-system, system-ui, 'Segoe UI', sans-serif;

  --text-display-xl: 72px;
  --text-display-lg: 48px;
  --text-display-md: 36px;
  --text-heading-xl: 28px;
  --text-heading-lg: 22px;
  --text-heading-md: 18px;
  --text-body-md: 16px;
  --text-body-sm: 14px;
  --text-caption: 12px;
  --text-overline: 11px;

  --leading-tight: 1.05;
  --leading-snug: 1.15;
  --leading-normal: 1.4;
  --leading-relaxed: 1.5;

  --tracking-tight: -1.5px;
  --tracking-button: 1.2px;
  --tracking-overline: 2px;
  --tracking-retro-label: 3px;
}
```

```css
/* src/styles/tokens/spacing.css */
:root {
  --spacing-xxs: 4px;
  --spacing-xs: 6px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-xxl: 32px;
  --spacing-section: 72px;

  --rounded-none: 0px; /* The only border-radius value in the system */

  --container-max: 1320px;
  --container-gutter: 24px;
}
```

```css
/* src/styles/tokens/index.css — imports all token files */
@import './colors.css';
@import './typography.css';
@import './spacing.css';
```

#### `styles/global/`

| File | Purpose |
|---|---|
| `reset.css` | Minimal modern reset (box-sizing, margin, padding, default font inheritance). Import order: first. |
| `base.css` | `body` background, default `color`, `font-family`, `line-height`. Sets `scroll-behavior: smooth` respecting `prefers-reduced-motion`. |
| `fonts.css` | `@font-face` rules for Cormorant Garamond and DM Sans — all four weights each. `font-display: swap`. |
| `animations.css` | `@keyframes` definitions (marquee scroll, skeleton shimmer, toast slide-in). All wrapped in `@media (prefers-reduced-motion: no-preference)`. |

---

### `src/types/`

All TypeScript type and interface definitions. Never imported on the client side — server-side and build-time only.

| File | Key types |
|---|---|
| `product.ts` | `Product`, `ProductCardData`, `ProductVariant`, `ProductFilter` |
| `cart.ts` | `Cart`, `CartItem`, `CartSummary` |
| `review.ts` | `Review`, `ReviewSummary` |
| `navigation.ts` | `NavItem`, `MegaMenuColumn`, `FooterColumn`, `Breadcrumb` |
| `seo.ts` | `SEOMeta`, `JsonLdProduct`, `JsonLdBreadcrumb`, `JsonLdOrg` |

---

## SEO Strategy

### On-Page SEO Checklist (per page type)

#### All Pages
- `<title>` — max 60 characters. Format: `{Page Name} | Petal`
- `<meta name="description">` — max 155 characters. Unique per page. Never duplicated.
- `<link rel="canonical">` — always set. Strips `?` pagination and filter params from canonical on collection/search pages.
- Open Graph: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`, `og:site_name`
- Twitter Card: `summary_large_image`
- `lang="en"` on `<html>` — extend with `hreflang` when adding localisation
- Semantic heading hierarchy: one `<h1>` per page, `<h2>` for sections, no skipped levels
- All images: descriptive `alt` text, never empty except decorative SVGs

#### Product Detail Pages (`/products/[slug]`)
- `Product` JSON-LD: `name`, `description`, `image`, `sku`, `offers` (price, availability), `aggregateRating`
- `BreadcrumbList` JSON-LD: Home → Category → Product
- Product images served at ≥800px width with descriptive filenames: `velvet-moisture-creme-rose-jar.jpg`
- `<meta name="robots" content="index, follow">`

#### Collection Pages (`/collections/[collection]`)
- Unique `<h1>` per collection
- Paginated collections: `<link rel="next">` and `<link rel="prev">` (Astro head slot)
- Canonical points to page 1 for all subsequent pages
- `BreadcrumbList` JSON-LD

#### Blog Posts (`/blog/[slug]`)
- `Article` JSON-LD: `headline`, `author`, `datePublished`, `dateModified`, `image`
- `<meta property="article:published_time">` and `<meta property="article:modified_time">`
- Canonical set explicitly (no `?utm_*` leak)

#### Accounts, Checkout (`/account/*`, `/checkout/*`)
- `<meta name="robots" content="noindex, nofollow">`
- `X-Robots-Tag: noindex, nofollow` header set in `src/middleware/index.ts`

### Sitemap
- Generated by `@astrojs/sitemap` integration
- Configured to include: all SSG pages
- Excludes: `/account/*`, `/checkout/*`, `/cart`
- Submitted to Google Search Console post-deploy
- `robots.txt` references sitemap URL

### `robots.txt` (generated at build)
```
User-agent: *
Allow: /

Disallow: /account/
Disallow: /checkout/
Disallow: /cart
Disallow: /search?

Sitemap: https://yoursite.com/sitemap.xml
```

---

## Performance Strategy

### Rendering Budget Rules

| Route type | Default rendering | Reason |
|---|---|---|
| All public marketing, PLP, PDP, blog, ingredient pages | SSG (pre-rendered) | Fastest possible TTFB — served from CDN edge |
| Search results, cart, account, checkout | SSR | Session-dependent data |
| Interactive UI islands | `client:visible` (default) / `client:idle` for cart | Deferred hydration — JS loads only when the element enters the viewport |

**Never use `client:load` unless the component must be interactive before first scroll.** The homepage should ship with near-zero JS.

### Image Performance

Every product and editorial image uses Astro's `<Image>` or `<Picture>` component from `astro:assets`.

```astro
---
// Example: ProductImage.astro
import { Image } from 'astro:assets';
---
<Image
  src={src}
  alt={alt}
  width={600}
  height={800}
  format="webp"
  quality={82}
  loading={loading}
  decoding="async"
/>
```

- Format: `webp` default, `avif` for hero images via `<Picture>` with format fallback
- Hero images: `loading="eager"`, `fetchpriority="high"`, plus a `<link rel="preload" as="image">` injected via `HeroImage.astro`'s head slot
- All other images: `loading="lazy"`, `decoding="async"`
- `sizes` attribute always set to match the grid column widths at each breakpoint
- Filenames are descriptive before import (affects nothing at runtime but documents intent)

### Font Performance

```css
/* src/styles/global/fonts.css */
@font-face {
  font-family: 'Cormorant Garamond';
  src: url('/fonts/cormorant-garamond/CormorantGaramond-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
/* Repeat for each weight */
```

In `BaseLayout.astro`, preload only the above-the-fold weights:
```astro
<!-- Preload only the two weights visible before scroll -->
<link rel="preload" href="/fonts/cormorant-garamond/CormorantGaramond-Bold.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/dm-sans/DMSans-Regular.woff2" as="font" type="font/woff2" crossorigin />
```

All other weights load normally via `@font-face` — `font-display: swap` prevents FOIT.

### CSS Performance

- All design tokens in `src/styles/tokens/` are injected once in `BaseLayout.astro` — never duplicated
- Component `<style>` blocks are scoped automatically by Astro — no class-name collision
- No CSS-in-JS, no runtime style computation
- `animations.css` is only parsed by browsers that support `prefers-reduced-motion: no-preference`
- Critical above-the-fold CSS for `PrimaryNav` and hero is inlined by extracting it to a `<style>` tag in `BaseLayout.astro` — reduces render-blocking

### JavaScript Performance

- Astro's zero-JS default: every `.astro` component ships no JS unless a `client:` directive is present
- `client:visible` — default for interactive islands (image gallery, accordion, filter panel)
- `client:idle` — cart drawer (loaded after browser is idle, not blocking first paint)
- `client:media="(max-width: 768px)"` — mobile-only interactive components (mobile drawer)
- The marquee banner is pure CSS animation — zero JS
- Filter panel state lives in URL search params — form `GET` with native browser navigation, no JS required for basic filtering
- The SVG icon system uses a single `sprite.svg` in `public/icons/` — one HTTP request for all icons

### Core Web Vitals Targets

| Metric | Target | Strategy |
|---|---|---|
| LCP (Largest Contentful Paint) | < 1.8s | Hero `<Image>` with `fetchpriority="high"` + font preloads + CDN edge delivery of SSG pages |
| CLS (Cumulative Layout Shift) | < 0.05 | Explicit `width` + `height` on every `<Image>`; font `size-adjust` in `@font-face`; skeleton placeholders for deferred content |
| INP (Interaction to Next Paint) | < 150ms | Minimal JS; no heavy event listeners on main thread; store updates are synchronous nanostores |
| FID / TBT | < 50ms | Near-zero main-thread JS budget; deferred hydration with `client:idle` / `client:visible` |

### Astro Config Reference

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourpetalsite.com',
  output: 'static', // default; switch specific routes to 'server' via adapter

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/account') &&
        !page.includes('/checkout') &&
        !page.includes('/cart'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  image: {
    // astro:assets configuration
    remotePatterns: [], // add external image domains if needed
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  vite: {
    build: {
      // Separate vendor chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            store: ['src/store/cart.ts', 'src/store/ui.ts', 'src/store/wishlist.ts'],
          },
        },
      },
    },
  },

  compressHTML: true,   // Minifies HTML output
  prefetch: {
    prefetchAll: false,  // Only prefetch explicitly marked links
    defaultStrategy: 'hover', // Prefetch on hover — not on page load
  },
});
```

### `tsconfig.json` Path Aliases

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@lib/*": ["src/lib/*"],
      "@types/*": ["src/types/*"],
      "@styles/*": ["src/styles/*"],
      "@store/*": ["src/store/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```

---

## File Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Astro components | PascalCase | `ProductCard.astro`, `HeroImage.astro` |
| TypeScript modules | camelCase | `buildMeta.ts`, `formatPrice.ts` |
| CSS files | kebab-case | `colors.css`, `fonts.css` |
| Content collection entries | kebab-case slug | `velvet-moisture-creme.md` |
| Image source files | kebab-case with descriptor | `velvet-creme-rose-jar-01.jpg` |
| Page files | kebab-case | `about.astro`, `sustainability.astro` |
| Dynamic segments | bracket notation | `[slug].astro`, `[collection].astro` |
| Barrel exports | always `index.ts` | `src/components/ui/actions/index.ts` |

---

## Do's and Don'ts

### Do
- Every subfolder under `src/components/ui/` has an `index.ts` barrel file — import from the barrel, not directly from the `.astro` file.
- All images in `src/assets/` must be imported and rendered with `<Image>` or `<Picture>` from `astro:assets` — never with a raw `<img>` tag.
- Set explicit `width` and `height` on every `<Image>` to eliminate CLS.
- Use `client:visible` as the default hydration strategy for all interactive islands.
- Put session-dependent routes (`/account`, `/checkout`, `/cart`) on SSR. Every other page is SSG.
- Set `<meta name="robots" content="noindex, nofollow">` and the matching `X-Robots-Tag` header on all SSR authenticated routes.
- Keep all CSS custom property tokens in `src/styles/tokens/` — component styles reference only `var(--...)`, never raw hex or pixel values.
- Use `--rounded-none: 0px` as the only border-radius token; no component may define its own `border-radius` value.
- Use the `<dialog>` element for all modals and drawers — no custom overlay stack.
- Use `font-display: swap` on all `@font-face` declarations and preload only the weights visible above the fold.
- Every page must pass through a layout — no orphan `.astro` page files that instantiate their own `<html>` shell.

### Don't
- Don't put any image in `public/` that should go through `astro:assets` processing. `public/` is for fonts, the SVG sprite, the web manifest, and OG fallback images only.
- Don't import store files (`src/store/`) in `.astro` component frontmatter — stores are client-only and will break SSG.
- Don't use `client:load` unless the component must be interactive on first paint. Prefer `client:visible` or `client:idle`.
- Don't create orphan files at any level. Every `.ts`, `.astro`, `.css`, and `.md` file must live under a named subfolder — no files directly in `src/`.
- Don't add a third-party UI library (Radix, shadcn, Headless UI, etc.) — all components live in `src/components/ui/`.
- Don't duplicate meta tag logic in individual pages. All head injection goes through `src/components/seo/` and is composed in the layout.
- Don't skip the `index.ts` barrel in any `ui/` subfolder — loose imports from deep paths break refactoring.
- Don't hardcode colours, spacing, or type sizes in component `<style>` blocks. Reference `var(--color-*)`, `var(--spacing-*)`, `var(--text-*)` exclusively.
- Don't generate the sitemap manually. Let `@astrojs/sitemap` handle it and verify the `filter` config excludes private routes.
- Don't add inline `<script>` tags in page files for analytics or third-party trackers — all scripts go through a dedicated component in `src/components/analytics/` and are loaded with `is:inline` only when necessary.
