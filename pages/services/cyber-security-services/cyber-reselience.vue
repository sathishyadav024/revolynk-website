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

import Header from "@/components/cyber-reselience/Header";
import Whythis from "@/components/cyber-reselience/Whythis";
import Whatwedo from "@/components/cyber-reselience/Whatwedo";
import Whatclient from "@/components/cyber-reselience/Whatclient";
import Casestudies from "@/components/cyber-reselience/Casestudies";
import Faqs from "@/components/cyber-reselience/Faqs";
import Cta from "@/components/cyber-reselience/Cta";

import { onMounted } from "vue";

useHead({
  title: "Cyber Resilience | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs strengthens cyber resilience through robust risk management, incident response, threat detection, and business continuity planning.",
  },
  {
    name: "keywords",
    content:
      "cyber resilience, cybersecurity, risk management, threat detection, incident response, disaster recovery, business continuity, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Cyber Resilience | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Enable your business to withstand cyber threats with Revolynk’s end-to-end cyber resilience solutions — from prevention to recovery.",
  },
  { property: "og:image", content: "https://www.revolynk.com/cyber-resilience-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/cyber-resilience" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Cyber Resilience | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Boost your organization’s cyber resilience with Revolynk’s advanced security strategies, rapid response systems, and business continuity frameworks.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/cyber-resilience-twitter.jpg" },
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
