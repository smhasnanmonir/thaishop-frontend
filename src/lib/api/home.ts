// Home content API — hero sliders, category/concern/type/brand lists.
// All data needed to render the homepage and the nav/filters.

import { apiFetch } from "./client";
import type { HomeContent } from "../../types/product";

export async function getHomeContent(): Promise<HomeContent> {
  const data = await apiFetch<{ success: boolean; result: HomeContent }>("/home-content/fetch");
  return data.result;
}
