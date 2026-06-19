// Server-side session helper for Astro SSR.
//
// The access/refresh tokens live in HttpOnly cookies that JavaScript on
// the client cannot read. On the server (Astro SSR) we CAN read them from
// the incoming request via Astro.cookies. We forward them to the backend
// to validate the session and fetch the user profile.
//
// This lets protected routes (/profile, /orders) decide server-side
// whether to render or redirect to /login — no flash of protected UI.

import { API_BASE_URL } from "./api/client";
import type { UserProfile } from "./api/auth";

const ACCESS_COOKIE = "accessToken";
const REFRESH_COOKIE = "refreshToken";

interface CookieJar {
  get(name: string): { value: string } | undefined;
}

/**
 * Validate the current session using cookies from an Astro request.
 * Tries the access token first; on 401 it attempts a refresh and retries.
 * Returns the user profile if authenticated, otherwise null.
 *
 * SECURITY: tokens are forwarded only to the backend over HTTPS and are
 * never returned to the caller except as the decoded user profile.
 */
export async function getSessionUser(cookies: CookieJar): Promise<UserProfile | null> {
  const accessToken = cookies.get(ACCESS_COOKIE)?.value;
  const refreshToken = cookies.get(REFRESH_COOKIE)?.value;
  if (!accessToken && !refreshToken) return null;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const cookieParts: string[] = [];
  if (accessToken) cookieParts.push(`${ACCESS_COOKIE}=${accessToken}`);
  if (refreshToken) cookieParts.push(`${REFRESH_COOKIE}=${refreshToken}`);
  if (cookieParts.length) headers["Cookie"] = cookieParts.join("; ");

  const fetchProfile = () =>
    fetch(`${API_BASE_URL}/auth/profile`, { headers, credentials: "include" });

  let res = await fetchProfile();

  if (res.status === 401 && refreshToken) {
    // Attempt a refresh using the refresh cookie, then retry.
    const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers,
      credentials: "include",
    });
    if (refreshRes.ok) {
      res = await fetchProfile();
    }
  }

  if (!res.ok) return null;
  const data = (await res.json()) as { user: UserProfile };
  return data.user;
}
