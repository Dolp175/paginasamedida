import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: "https://www.paginasamedida.com",
  integrations: [
    mdx(),
    tailwind(), 
    sitemap({
      filter: (page) => 
        !page.includes('/gracias') && 
        !page.includes('/legal/')
    })
  ]
});
