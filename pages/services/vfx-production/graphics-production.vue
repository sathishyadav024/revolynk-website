<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header />
        <Whythis />
        <Whatwedo />
        <Faqs />
        <Whatclient />
        <Casestudies />
        <Cta />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from "@/components/Lines";
import ProgressScroll from "@/components/ProgressScroll";
import Cursor from "@/components/cusor";
import LoadingScreen from "@/components/loader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Header from "@/components/creative-enhancement/Header";
import Whythis from "@/components/creative-enhancement/Whythis";
import Whatwedo from "@/components/creative-enhancement/Whatwedo";
import Whatclient from "@/components/creative-enhancement/Whatclient";
import Casestudies from "@/components/creative-enhancement/Casestudies";
import Faqs from "@/components/creative-enhancement/Faqs";
import Cta from "@/components/creative-enhancement/Cta";

import { onMounted } from "vue";

useHead({
  title: "Graphics Production | Revolynk Techs Pvt. Ltd.",
meta: [
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { charset: "utf-8" },
  { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
  {
    name: "author",
    content: "Team Voyagers, Revolynk Techs Private Limited",
  },
  {
    name: "description",
    content:
      "Revolynk Techs provides expert graphic production services including brand design, digital assets, illustrations, and multimedia visuals.",
  },
  {
    name: "keywords",
    content:
      "graphic production, branding, design services, digital graphics, illustrations, visual design, creative assets, Hyderabad, Revolynk",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Graphics Production | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "From logos to motion-ready design assets, Revolynk’s graphic production team brings your brand vision to life with professional precision.",
  },
  { property: "og:image", content: "https://www.revolynk.com/graphics-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/graphics-production" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Graphics Production | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Explore professional graphics production services for brands, campaigns, and digital assets by Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/graphics-twitter.jpg" },
  { name: "fb:app_id", content: "Your_FB_App_ID" },
],
  link: [
    { rel: "stylesheet", href: "/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/css/satoshi.css" },
    { rel: "stylesheet", href: "/assets/css/style.css" },
  ],
  // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
});
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
