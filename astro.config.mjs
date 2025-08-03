import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.paginasamedida.com",
  integrations: [
    tailwind(), 
    sitemap({
      filter: (page) => 
        !page.includes('/gracias') && 
        !page.includes('/legal/')
    })
  ]
});
