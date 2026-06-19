// Home content API — hero sliders, category/concern/type/brand lists.
// All data needed to render the homepage and the nav/filters.

import { apiFetch } from "./client";
import type { HomeContent } from "../../types/product";

export async function getHomeContent(categoryLimit?: number, brandLimit?: number): Promise<HomeContent> {
  const params = new URLSearchParams();
  if (categoryLimit !== undefined) params.set("categoryLimit", String(categoryLimit));
  if (brandLimit !== undefined) params.set("brandLimit", String(brandLimit));
  const qs = params.toString();
  const data = await apiFetch<{ success: boolean; result: HomeContent }>(`/home-content/fetch${qs ? "?" + qs : ""}`);
  return data.result;
}
