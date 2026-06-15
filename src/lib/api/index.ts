// Barrel re-export. All existing call sites import from "../../lib/api"
// or "../lib/api" — this barrel preserves those paths so no consumers
// need to change.

export { API_BASE_URL, ApiError, apiFetch } from "./client";
export { getHomeContent } from "./home";
export {
  getLatestProducts,
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getProductsByBrand,
  getProductsBySkinType,
  getProductsBySkinConcern,
  getRandomProducts,
  searchProducts,
  type SearchResponse,
} from "./products";
export {
  getGuestCart,
  addToGuestCart,
  updateGuestCartQuantity,
  removeFromGuestCart,
  clearGuestCart,
  placeGuestOrder,
  getGuestOrder,
} from "./orders";

// Re-export all domain types for callers that imported types from this module.
export type {
  Slider,
  Category,
  SkinConcern,
  SkinType,
  Brand,
  HomeContent,
  Product,
  ProductDetails,
  PaginatedProducts,
  ProductFilter,
} from "../../types/product";
export { encodeFilters } from "../../types/product";

export type {
  OfflineCartItem,
  ServerCartItem,
  UserInfo,
  PlaceOrderPayload,
  OrderItemSummary,
  OrderSummary,
  OrderCheckoutInfo,
  OrderLookupResponse,
} from "../../types/cart";

export type { NavItem, FooterColumn } from "../../types/navigation";
export type { SEOMeta, BreadcrumbItem } from "../../types/seo";

// Backwards-compatible namespace object. Many call sites use
// `import { api } from "../../lib/api"` and then `api.getXxx()`.
// The barrel re-exports individual functions above, and this
// `api` object preserves the previous aggregated surface.
import { getHomeContent } from "./home";
import {
  getLatestProducts,
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getProductsByBrand,
  getProductsBySkinType,
  getProductsBySkinConcern,
  getRandomProducts,
  searchProducts,
} from "./products";
import {
  getGuestCart,
  addToGuestCart,
  updateGuestCartQuantity,
  removeFromGuestCart,
  clearGuestCart,
  placeGuestOrder,
  getGuestOrder,
} from "./orders";

export const api = {
  getHomeContent,
  getLatestProducts,
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getProductsByBrand,
  getProductsBySkinType,
  getProductsBySkinConcern,
  getRandomProducts,
  searchProducts,
  getGuestCart,
  addToGuestCart,
  updateGuestCartQuantity,
  removeFromGuestCart,
  clearGuestCart,
  placeGuestOrder,
  getGuestOrder,
};
