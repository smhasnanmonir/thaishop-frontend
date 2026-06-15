// Shared fetch helper used by every per-domain API module.

export const API_BASE_URL = "https://backend.tokbd.com/api";

export class ApiError extends Error {
  status: number;
  body: string;

  constructor(status: number, body: string, statusText: string) {
    super(`API Error: ${status} - ${body || statusText}`);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(response.status, errorText, response.statusText);
  }
  return (await response.json()) as T;
}
