// Product domain types — single source of truth for product shapes across UI and API.

export interface Slider {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  redirect_url: string | null;
  display_order: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface SkinConcern {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface SkinType {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface HomeContent {
  heroSliders: Slider[];
  categories: Category[];
  concerns: SkinConcern[];
  types: SkinType[];
  brands: Brand[];
}

export interface ProductDetails {
  id: number;
  productId: number;
  sizes: string[] | null;
  description: string;
  key_ingredient: string;
  how_to_use: string[] | null;
  benefits: string[] | null;
  photos: string[] | null;
}

export interface Product {
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

export interface PaginatedProducts {
  result: Product[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface ProductFilter {
  category?: string[];
  brand?: string[];
  skin_type?: string[];
  skin_concern?: string[];
}

// Filter string shape used by the API: "category:c1|c2,brand:b1"
export function encodeFilters(filters: ProductFilter): string {
  return Object.entries(filters)
    .filter(([, values]) => Array.isArray(values) && values.length > 0)
    .map(([key, values]) => `${key}:${(values as string[]).join("|")}`)
    .join(",");
}
