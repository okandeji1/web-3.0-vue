export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kandesoft | Blockchain",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components/",
      prefix: "crypt",
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  tailwindcss: {
    jit: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  /*
   ** Nuxt.js modules
   */
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    '@nuxtjs/svg-sprite',

  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build

  publicRuntimeConfig: {
    apiKey: process.env.VITE_GIPHY_API_KEY,
  },

  build: {},

  // Server configuration
  server: {
    host: "0.0.0.0",
    port: 3009,
  },
};
