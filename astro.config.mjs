import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        card: "storyblok/Card",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        config: "storyblok/Config",
        navbar: "storyblok/Navbar",
        hero: "storyblok/Hero",
      },
      apiOptions: {
        region: "us",
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
