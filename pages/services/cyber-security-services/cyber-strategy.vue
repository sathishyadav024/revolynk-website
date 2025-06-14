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

import Header from "@/components/cyber-strategy/Header";
import Whythis from "@/components/cyber-strategy/Whythis";
import Whatwedo from "@/components/cyber-strategy/Whatwedo";
import Whatclient from "@/components/cyber-strategy/Whatclient";
import Casestudies from "@/components/cyber-strategy/Casestudies";
import Faqs from "@/components/cyber-strategy/Faqs";
import Cta from "@/components/cyber-strategy/Cta";

import { onMounted } from "vue";

useHead({
  title: "Cyber Strategy | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs empowers organizations with robust cyber strategy services including governance, risk management, compliance, and long-term digital security planning.",
  },
  {
    name: "keywords",
    content:
      "cyber strategy, cybersecurity governance, GRC, risk management, compliance, information security, digital strategy, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Cyber Strategy | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Build a resilient digital future with Revolynk’s cyber strategy services, covering governance, compliance, and enterprise-level security planning.",
  },
  { property: "og:image", content: "https://www.revolynk.com/cyber-strategy-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/cyber-strategy" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Cyber Strategy | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk helps you design and implement powerful cyber strategies aligned with your organization’s security and compliance goals.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/cyber-strategy-twitter.jpg" },
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
