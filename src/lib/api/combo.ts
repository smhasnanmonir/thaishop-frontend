// Combos API — combo bundles list + single combo by slug.

import { apiFetch } from "./client";
import type { ComboListItem, ComboDetail, PaginatedCombos } from "../../types/combo";

function buildQuery(params: Record<string, string | number | undefined>): string {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === "") continue;
    query.append(key, String(value));
  }
  return query.toString();
}

export async function getAllCombos(page: number = 1, pageSize: number = 12): Promise<PaginatedCombos> {
  const query = buildQuery({ page, pageSize });
  const data = await apiFetch<{
    success: boolean;
    result: ComboListItem[];
    pagination: { page: number; pageSize: number; total: number; totalPages: number };
  }>(`/combos/fetch${query ? "?" + query : ""}`);

  return {
    result: data.result || [],
    total: data.pagination?.total || 0,
    totalPages: data.pagination?.totalPages || 0,
    currentPage: data.pagination?.page || 1,
  };
}

export async function getComboBySlug(slug: string): Promise<ComboDetail> {
  const data = await apiFetch<{ success: boolean; result: ComboDetail }>(`/combos/fetch/${slug}`);
  if (!data.success || !data.result) {
    throw new Error("Combo not found");
  }
  return data.result;
}
