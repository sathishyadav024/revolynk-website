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

import Header from "@/components/ai-strategy-and-value/Header";
import Whythis from "@/components/ai-strategy-and-value/Whythis";
import Whatwedo from "@/components/ai-strategy-and-value/Whatwedo";
import Whatclient from "@/components/ai-strategy-and-value/Whatclient";
import Casestudies from "@/components/ai-strategy-and-value/Casestudies";
import Faqs from "@/components/ai-strategy-and-value/Faqs";
import Cta from "@/components/ai-strategy-and-value/Cta";

import { onMounted } from "vue";

useHead({
  title: "AI Strategy & Value | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs helps organizations unlock business value through AI strategy, implementation, and intelligent automation across industries.",
  },
  {
    name: "keywords",
    content:
      "AI strategy, artificial intelligence, AI value, machine learning, automation, data science, business intelligence, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "AI Strategy & Business Value | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Drive business growth with Revolynk’s AI strategy services – from roadmap development to intelligent automation and value realization.",
  },
  { property: "og:image", content: "https://www.revolynk.com/ai-strategy-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/ai-strategy" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "AI Strategy & Value | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Transform your organization with AI-driven strategies from Revolynk. Deliver measurable outcomes with data, ML, and automation.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/ai-strategy-twitter.jpg" },
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
