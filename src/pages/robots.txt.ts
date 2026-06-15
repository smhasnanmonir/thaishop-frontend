import type { APIRoute } from "astro";

const SITE = "https://tokbd.com";

const body = `User-agent: *
Allow: /

Disallow: /checkout/
Disallow: /account/
Disallow: /cart

Sitemap: ${SITE}/sitemap-index.xml
`;

export const GET: APIRoute = () => {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
