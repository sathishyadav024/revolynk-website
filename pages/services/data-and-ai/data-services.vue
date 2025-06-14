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

import Header from "@/components/data-services/Header";
import Whythis from "@/components/data-services/Whythis";
import Whatwedo from "@/components/data-services/Whatwedo";
import Whatclient from "@/components/data-services/Whatclient";
import Casestudies from "@/components/data-services/Casestudies";
import Faqs from "@/components/data-services/Faqs";
import Cta from "@/components/data-services/Cta";

import { onMounted } from "vue";

useHead({
  title: "Data Services | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers robust data services including engineering, analytics, warehousing, and intelligence to help businesses make informed decisions.",
  },
  {
    name: "keywords",
    content:
      "data services, data engineering, data analytics, business intelligence, data warehousing, big data, data integration, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Data Services | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Unlock the power of your data with Revolynk’s end-to-end services in analytics, warehousing, and intelligence.",
  },
  { property: "og:image", content: "https://www.revolynk.com/data-services-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/data-services" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Data Services | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk’s data services empower organizations with modern solutions in data analytics, intelligence, and engineering.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/data-services-twitter.jpg" },
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
