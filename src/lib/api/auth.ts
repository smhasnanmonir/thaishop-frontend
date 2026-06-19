// Auth API — user authentication (OTP-based) + profile management.
//
// SECURITY MODEL
// --------------
// The backend stores access/refresh tokens in HttpOnly cookies that are
// NOT accessible to JavaScript (preventing XSS token theft). Every call
// here uses `credentials: "include"` so the browser sends those cookies
// automatically. We never touch the raw token values on the client.
//
// On 401 (expired access token) we transparently call /auth/refresh and
// retry the original request once. If refresh also fails, the caller is
// treated as unauthenticated.

import { API_BASE_URL, ApiError } from "./client";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface UserProfile extends AuthUser {
  phone?: string | null;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  createdAt?: string;
}

export interface UpdateProfileInput {
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
}

// Standard headers for JSON + cross-origin cookie auth.
const JSON_HEADERS: HeadersInit = { "Content-Type": "application/json" };

// Detect device/browser info to send with register/login (matches backend).
function deviceInfo() {
  if (typeof navigator === "undefined") return { deviceType: "unknown", browserType: "unknown" };
  const ua = navigator.userAgent || "";
  const deviceType = /Mobi|Android|iPhone|iPod/i.test(ua) ? "mobile" : /Tablet|iPad/i.test(ua) ? "tablet" : "desktop";
  return { deviceType, browserType: ua };
}

/**
 * Authenticated fetch wrapper.
 * - Sends cookies via credentials: "include"
 * - On 401, attempts a single token refresh then retries the request
 * - Throws ApiError on non-2xx so callers can inspect status
 */
export async function authFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const doFetch = () =>
    fetch(`${API_BASE_URL}${path}`, {
      ...options,
      credentials: "include",
      headers: { ...JSON_HEADERS, ...(options.headers || {}) },
    });

  let response = await doFetch();

  if (response.status === 401) {
    // Try to refresh the access token via the refresh cookie.
    const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
      headers: JSON_HEADERS,
    });
    if (refreshRes.ok) {
      response = await doFetch();
    }
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(response.status, errorText, response.statusText);
  }
  return (await response.json()) as T;
}

// ── Auth flows ──

export async function register(email: string, name: string) {
  const info = deviceInfo();
  return authFetch<{ message: string; user: AuthUser; requiresOTP: boolean }>(
    "/auth/register",
    {
      method: "POST",
      body: JSON.stringify({ email, name, ...info }),
    }
  );
}

export async function requestOTP(email: string) {
  return authFetch<{ message: string }>("/auth/request-otp", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function login(email: string, otp: string) {
  const info = deviceInfo();
  return authFetch<{ message: string; user: AuthUser }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, otp, ...info }),
  });
}

export async function logout() {
  try {
    await authFetch<{ message: string }>("/auth/logout", { method: "POST" });
  } catch {
    // Even if the server call fails, clear local state downstream.
  }
}

// ── Profile ──

export async function getProfile(): Promise<UserProfile> {
  const data = await authFetch<{ message: string; user: UserProfile }>("/auth/profile");
  return data.user;
}

export async function updateProfile(input: UpdateProfileInput): Promise<UserProfile> {
  const data = await authFetch<{ message: string; user: UserProfile }>("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(input),
  });
  return data.user;
}
