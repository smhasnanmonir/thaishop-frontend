// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

const SITE = "https://tokbd.com";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: "server",
  adapter: cloudflare(),
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/checkout") &&
        !page.includes("/cart") &&
        !page.includes("/404") &&
        !page.includes("/account"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
