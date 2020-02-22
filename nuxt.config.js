const config = require("./contentful.json");
import i18n from "./i18n";
const PrismicConfig = require("./prismic.config");

const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/raisense-nuxt/"
        }
      }
    : {};

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        innerHTML:
          '{ window.prismic = { endpoint: "' +
          PrismicConfig.apiEndpoint +
          '"} }'
      },
      { src: "//static.cdn.prismic.io/prismic.min.js" }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#00c58e" },

  ...routerBase,

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },

  /*
   ** Global CSS
   */
  css: [
    "splitting/dist/splitting.css",
    "splitting/dist/splitting-cells.css",
    "~/assets/css/media.css",
    "~/assets/css/global.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/contentful.js",
    "~/plugins/prismic-vue.js",
    { src: "~/plugins/smoothscrollbar.js", ssr: false },
    { src: "~/plugins/lottie.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    ["nuxt-i18n", i18n],

    "@bazzite/nuxt-optimized-images"
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
};
