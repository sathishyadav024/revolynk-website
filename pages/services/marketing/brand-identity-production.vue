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

import Header from "@/components/brand-identity-production/Header";
import Whythis from "@/components/brand-identity-production/Whythis";
import Whatwedo from "@/components/brand-identity-production/Whatwedo";
import Whatclient from "@/components/brand-identity-production/Whatclient";
import Casestudies from "@/components/brand-identity-production/Casestudies";
import Faqs from "@/components/brand-identity-production/Faqs";
import Cta from "@/components/brand-identity-production/Cta";

import { onMounted } from "vue";

useHead({
  title: "Brand Identity Production | Revolynk Techs Pvt. Ltd.",
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
      "Craft a strong and cohesive brand identity with Revolynk’s expert services in logo design, visual systems, and strategic branding.",
  },
  {
    name: "keywords",
    content:
      "brand identity, logo design, visual identity, brand strategy, typography, branding services, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Brand Identity | Build a Distinctive Brand with Revolynk" },
  {
    property: "og:description",
    content:
      "From concept to creation, Revolynk crafts compelling brand identities that resonate with your audience and reflect your mission.",
  },
  { property: "og:image", content: "https://www.revolynk.com/brand-identity-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/brand-identity" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Brand Identity Production | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Unlock your brand’s full potential with Revolynk’s professional brand identity services, including logo, visuals, and strategy.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/brand-identity-twitter.jpg" },
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
