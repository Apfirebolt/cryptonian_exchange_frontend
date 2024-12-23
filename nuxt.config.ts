import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Cryptonian Exchange Platform",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "A virtual cryptocurrency trading platform",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Apfirebolt" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt',],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});
