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

import Header from "@/components/operating-model-and-design/Header";
import Whythis from "@/components/operating-model-and-design/Whythis";
import Whatwedo from "@/components/operating-model-and-design/Whatwedo";
import Whatclient from "@/components/operating-model-and-design/Whatclient";
import Casestudies from "@/components/operating-model-and-design/Casestudies";
import Faqs from "@/components/operating-model-and-design/Faqs";
import Cta from "@/components/operating-model-and-design/Cta";

import { onMounted } from "vue";

useHead({
  title: "Operating Model & Design | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk helps enterprises build agile, scalable operating models with strategic design, process optimization, and digital transformation.",
  },
  {
    name: "keywords",
    content:
      "operating model, business design, process optimization, digital transformation, enterprise agility, strategic consulting, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Operating Model & Business Design | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Transform your enterprise with operating model design focused on efficiency, agility, and innovation. Discover Revolynk's approach.",
  },
  { property: "og:image", content: "https://www.revolynk.com/operating-model-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/operating-model-design" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Operating Model & Design | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk empowers businesses with modern operating models, enhancing structure, scalability, and performance.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/operating-model-twitter.jpg" },
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
