// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {enabled: false},
    css: ["~/assets/css/main.css"],
    image: {
        inject: true,
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/test-utils/module"],
    fonts: {
        defaults: {
            weights: [100, 200, 300, 400, 500, 600, 700, 900],
        },
    },
});
