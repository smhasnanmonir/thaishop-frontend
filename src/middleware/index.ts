// Edge middleware: security headers, canonical host enforcement, and
// noindex/nofollow injection for checkout and account routes.
//
// This runs on every request that goes through the Cloudflare adapter.

import { defineMiddleware } from "astro:middleware";

const NOINDEX_PATHS = ["/checkout", "/cart", "/profile", "/orders", "/login", "/auth"];
const CANONICAL_HOST = "tokbd.com";

const STATIC_ASSET_PREFIXES = ["/_astro/", "/favicon", "/og/", "/fonts/"];

function isStaticAsset(pathname: string): boolean {
  return STATIC_ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, url, redirect } = context;
  const response = next();

  // 1) Canonical host: redirect www to apex (301). Skipped for static assets
  //    and previews.
  const host = request.headers.get("host") || "";
  if (host.startsWith("www.") && host.endsWith(CANONICAL_HOST)) {
    return redirect(url.toString().replace("://www.", "://"), 301);
  }

  const finalResponse = await response;

  // 2) Security headers on every response
  finalResponse.headers.set("X-Content-Type-Options", "nosniff");
  finalResponse.headers.set("X-Frame-Options", "SAMEORIGIN");
  finalResponse.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  finalResponse.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // 3) noindex on private routes
  if (NOINDEX_PATHS.some((path) => url.pathname.startsWith(path))) {
    finalResponse.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  // 4) Long-lived caching for hashed Astro assets
  if (isStaticAsset(url.pathname)) {
    finalResponse.headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  return finalResponse;
});
