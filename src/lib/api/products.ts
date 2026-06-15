// Products API — single product, list, search, related, by-taxonomy.

import { apiFetch } from "./client";
import {
  type PaginatedProducts,
  type Product,
  type ProductFilter,
  encodeFilters,
} from "../../types/product";

function buildQuery(params: Record<string, string | number | undefined>): string {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === "") continue;
    query.append(key, String(value));
  }
  return query.toString();
}

export async function getLatestProducts(limit: number = 8): Promise<Product[]> {
  const data = await apiFetch<{ result: Product[] }>(`/products/fetch?limit=${limit}`);
  return data.result;
}

export async function getAllProducts(
  page: number = 1,
  pageSize: number = 12,
  filters: ProductFilter = {}
): Promise<PaginatedProducts> {
  const filtersString = encodeFilters(filters);
  const query = buildQuery({ page, pageSize, filters: filtersString });
  return apiFetch<PaginatedProducts>(`/products/all?${query}`);
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const data = await apiFetch<{ success: boolean; result: Product }>(`/products/fetch/${slug}`);
  if (!data.success || !data.result) {
    throw new Error("Product not found");
  }
  return data.result;
}

export async function getProductsByCategory(
  categorySlug: string,
  page: number = 1,
  pageSize: number = 12,
  filters: ProductFilter = {}
): Promise<PaginatedProducts> {
  const query = buildQuery({ page, pageSize, filters: encodeFilters(filters) });
  return apiFetch<PaginatedProducts>(`/products/search/category/${categorySlug}?${query}`);
}

export async function getProductsByBrand(
  brandSlug: string,
  page: number = 1,
  pageSize: number = 12,
  filters: ProductFilter = {}
): Promise<PaginatedProducts> {
  const query = buildQuery({ page, pageSize, filters: encodeFilters(filters) });
  return apiFetch<PaginatedProducts>(`/products/search/brand/${brandSlug}?${query}`);
}

export async function getProductsBySkinType(
  skinType: string,
  page: number = 1,
  pageSize: number = 12,
  filters: ProductFilter = {}
): Promise<PaginatedProducts> {
  const query = buildQuery({ page, pageSize, filters: encodeFilters(filters) });
  return apiFetch<PaginatedProducts>(`/products/search/skin-type/${skinType}?${query}`);
}

export async function getProductsBySkinConcern(
  skinConcern: string,
  page: number = 1,
  pageSize: number = 12,
  filters: ProductFilter = {}
): Promise<PaginatedProducts> {
  const query = buildQuery({ page, pageSize, filters: encodeFilters(filters) });
  return apiFetch<PaginatedProducts>(`/products/search/skin-concern/${skinConcern}?${query}`);
}

export async function getRandomProducts(limit: number = 8): Promise<Product[]> {
  const data = await apiFetch<{ result: Product[] }>(`/products/random?limit=${limit}`);
  return data.result;
}

export interface SearchResponse extends PaginatedProducts {
  success: boolean;
  searchTerm: string;
  searchType?: string;
}

export async function searchProducts(
  q: string,
  page: number = 1,
  pageSize: number = 12,
  filters: ProductFilter = {}
): Promise<SearchResponse> {
  const query = buildQuery({
    q,
    page,
    pageSize,
    filters: encodeFilters(filters),
  });
  return apiFetch<SearchResponse>(`/products/search?${query}`);
}
