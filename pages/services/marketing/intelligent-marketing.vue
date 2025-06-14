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

import Header from "@/components/intelligent-marketing/Header";
import Whythis from "@/components/intelligent-marketing/Whythis";
import Whatwedo from "@/components/intelligent-marketing/Whatwedo";
import Whatclient from "@/components/intelligent-marketing/Whatclient";
import Casestudies from "@/components/intelligent-marketing/Casestudies";
import Faqs from "@/components/intelligent-marketing/Faqs";
import Cta from "@/components/intelligent-marketing/Cta";

import { onMounted } from "vue";

useHead({
  title: "Intelligent Marketing | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk's Intelligent Marketing solutions leverage AI, automation, and analytics to help businesses reach the right audience and boost ROI.",
  },
  {
    name: "keywords",
    content:
      "Intelligent marketing, AI marketing, marketing automation, data-driven strategy, customer insights, digital marketing, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Intelligent Marketing | AI-Driven Growth with Revolynk" },
  {
    property: "og:description",
    content:
      "Empower your business with Revolynk’s intelligent marketing services, combining automation, analytics, and strategy for measurable success.",
  },
  { property: "og:image", content: "https://www.revolynk.com/intelligent-marketing-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/intelligent-marketing" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Intelligent Marketing | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "AI-powered marketing strategies to optimize engagement, conversions, and growth with Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/intelligent-marketing-twitter.jpg" },
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
