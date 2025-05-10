import { fileURLToPath } from "node:url";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://www.revolynk.com",
    gzip: true,
    routes: [
      "/", // Add other routes as needed
    ],
  },
  modules: ["nuxt-schema-org"],
  schemaOrg: {
    host: "https://www.revolynk.com",
  },
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {},
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  app: {
    head: {
      title: "Inventing the Future... | Revolynk Techs Pvt. Ltd.",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "author",
          content: "Team Voyagers, Revolynk Techs Private Limited",
        },
        {
          name: "description",
          content:
            "Revolynk Techs offers innovative digital solutions including web development, mobile apps, and cloud services to elevate your business.",
        },
        {
          name: "keywords",
          content:
            "Revolynk, digital solutions, web development, mobile apps, cloud services, Hyderabad",
        },
        { name: "robots", content: "index, follow" },
        { name: "geo.country", content: "IN" },
        {
          property: "og:title",
          content: "Revolynk Techs | Empowering Digital Solutions",
        },
        {
          property: "og:description",
          content:
            "Innovative digital solutions including web development, mobile apps, and cloud services.",
        },
        {
          property: "og:image",
          content: "https://www.revolynk.com/og-image.jpg",
        },
        { property: "og:url", content: "https://www.revolynk.com" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Revolynk Techs | Empowering Digital Solutions",
        },
        {
          name: "twitter:description",
          content:
            "Innovative digital solutions including web development, mobile apps, and cloud services.",
        },
        {
          name: "twitter:image",
          content: "https://www.revolynk.com/twitter-image.jpg",
        },
        { name: "fb:app_id", content: "Your_FB_App_ID" },
      ],
      link: [
        { rel: "shortcut icon", href: "assets/imgs/logo/favicon/favicon.ico" },
        { rel: "canonical", href: "https://www.revolynk.com" },
        // Google Fonts
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap",
        },
      ],
      script: [
        { src: "/assets/js/plugins.js" },
        { src: "/assets/js/TweenMax.min.js" },
        { src: "/assets/js/charming.min.js" },
        { src: "/assets/js/countdown.js" },
        { src: "/assets/js/ScrollTrigger.min.js" },
        { src: "/assets/js/gsap.min.js" },
        { src: "/assets/js/splitting.min.js" },
        { src: "/assets/js/isotope.pkgd.min.js" },
        { src: "/assets/js/imgReveal/imagesloaded.pkgd.min.js" },
        { src: "/assets/js/ScrollSmoother.min.js" },
        // { src: '/showcase/dark/assets/js/anime.min.js' },
        { src: "/assets/js/scripts.js", defer: true },
      ],
    },
  },
  css: ["swiper/css/bundle", "@/styles/globals.css"],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
