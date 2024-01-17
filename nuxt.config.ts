// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/fontaine"],
  css: [`@/assets/scss/main.scss`, "@/static/fonts/font.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  fontMetrics: {
    fonts: [
      {
        family: "Roboto",
        fallbacks: ["Zapfino"],
        fallbackName: "fallback-a",
      },
    ],
  },
});
