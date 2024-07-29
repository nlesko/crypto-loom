// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-mdi"],
  app: {
    head: {
      title: "Cryptoloom",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    coinRankingApiKey: process.env.COIN_RANKING_API_KEY,
    coinRankingBaseUrl: process.env.COIN_RANKING_BASE_URL,
  }
})