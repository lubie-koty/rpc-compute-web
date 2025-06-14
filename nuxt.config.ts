export default defineNuxtConfig({
  fonts: {
    provider: "google",
  },

  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint"],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  runtimeConfig: {
    HTTPServiceSimpleUrl: "",
    HTTPServiceComplexUrl: "",
    HTTPServiceCombinedUrl: "",
    gRPCServiceSimpleUrl: "",
    gRPCServiceComplexUrl: "",
    gRPCServiceCombinedUrl: "",
  },
});
