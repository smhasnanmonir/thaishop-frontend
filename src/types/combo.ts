// Combo domain types — single source of truth for combo shapes across UI and API.
// Mirrors the backend combo module (backend/src/modules/combos/combos.services.ts)
// and db schema (backend/src/db/schema.ts → combos / comboPhotos / comboProducts).

import type { ProductDetails } from "./product";

/** A photo attached to a combo (combo_photos table). */
export interface ComboPhoto {
  id: number;
  comboId: number;
  photoUrl: string;
  order: number;
  createdAt: string;
}

/** A product inside a combo (combo_products table) with its nested product. */
export interface ComboProductItem {
  id: number;
  comboId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: ComboProduct;
}

/** Product shape as returned inside a combo (full product row + optional details). */
export interface ComboProduct {
  id: number;
  name: string;
  slug: string;
  brand_slug: string;
  img: string;
  card_photo: string;
  price: string;
  origin_price: string;
  skin_type: string | null;
  skin_concern: string | null;
  brand: string;
  category: string;
  category_slug: string;
  stock: boolean;
  expiry_date: string;
  origin_country: string;
  details?: ProductDetails;
}

/** Combo as returned by the public list endpoint (combos/fetch). */
export interface ComboListItem {
  id: number;
  name: string;
  slug: string;
  cover_photo: string;
  video: string | null;
  price: string;
  product_count: number;
  description: string | null;
  status: string;
  createdAt: string;
}

/** Combo as returned by the public detail endpoint (combos/fetch/:slug). */
export interface ComboDetail {
  id: number;
  name: string;
  slug: string;
  cover_photo: string;
  video: string | null;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  photos: ComboPhoto[];
  comboProducts: ComboProductItem[];
  price: string;
  product_count: number;
}

/** Paginated combo list response. */
export interface PaginatedCombos {
  result: ComboListItem[];
  total: number;
  totalPages: number;
  currentPage: number;
}

// ── JSON-LD structured data types ──────────────────────────────

export interface JsonLdCombo {
  "@context": "https://schema.org";
  "@type": "CollectionPage" | "Product";
  name: string;
  description: string;
  image: string[];
  url: string;
  sku?: string;
  brand?: { "@type": "Brand"; name: string };
  offers?: {
    "@type": "Offer";
    priceCurrency: string;
    price: number;
    availability: string;
    url: string;
  };
  mainEntity?: {
    "@type": "ItemList";
    numberOfItems: number;
    itemListElement: Array<{
      "@type": "ListItem";
      position: number;
      url: string;
      name: string;
    }>;
  };
}
