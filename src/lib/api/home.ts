// Home content API — hero sliders, category/concern/type/brand lists.
// All data needed to render the homepage and the nav/filters.

import { apiFetch } from "./client";
import type { HomeContent } from "../../types/product";

interface HomeContentLimits {
  categoryLimit?: number;
  brandLimit?: number;
  typeLimit?: number;
  concernLimit?: number;
}

export async function getHomeContent(limits?: HomeContentLimits): Promise<HomeContent> {
  const params = new URLSearchParams();
  if (limits?.categoryLimit !== undefined) params.set("categoryLimit", String(limits.categoryLimit));
  if (limits?.brandLimit !== undefined) params.set("brandLimit", String(limits.brandLimit));
  if (limits?.typeLimit !== undefined) params.set("typeLimit", String(limits.typeLimit));
  if (limits?.concernLimit !== undefined) params.set("concernLimit", String(limits.concernLimit));
  const qs = params.toString();
  const data = await apiFetch<{ success: boolean; result: HomeContent }>(`/home-content/fetch${qs ? "?" + qs : ""}`);
  return data.result;
}
