import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === "yes",
      components: {
        page: "storyblok/Page",
        home: "storyblok/Home",
        card: "storyblok/Card",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        config: "storyblok/Config",
        navbar: "storyblok/Navbar",
        hero: "storyblok/Hero",
        "featured-articles": "storyblok/FeaturedArticles",
        "all-articles": "storyblok/AllArticles",
        article: "storyblok/Article",
      },
      apiOptions: {
        region: "us",
      },
    }),
    tailwind(),
  ],
  output: env.STORYBLOK_IS_PREVIEW === "yes" ? "server" : "hybrid",
  ...(env.STORYBLOK_ENV === "development" && {
    vite: {
      plugins: [basicSsl()],
      server: {
        https: true,
      },
    },
  }),

  adapter: vercel(),
});
