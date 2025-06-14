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

import Header from "@/components/network-engineering/Header";
import Whythis from "@/components/network-engineering/Whythis";
import Whatwedo from "@/components/network-engineering/Whatwedo";
import Whatclient from "@/components/network-engineering/Whatclient";
import Casestudies from "@/components/network-engineering/Casestudies";
import Faqs from "@/components/network-engineering/Faqs";
import Cta from "@/components/network-engineering/Cta";

import { onMounted } from "vue";

useHead({
  title: "Network Engineering | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers enterprise-grade network engineering services, including architecture design, deployment, monitoring, and optimization of secure and scalable networks.",
  },
  {
    name: "keywords",
    content:
      "network engineering, IT networking, network architecture, network security, managed networks, Revolynk, Hyderabad, LAN, WAN, cloud networking",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Network Engineering | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Secure, scalable, and high-performance network engineering solutions by Revolynk Techs — from planning to real-time management.",
  },
  { property: "og:image", content: "https://www.revolynk.com/og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/network-engineering" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Network Engineering | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk Techs offers reliable network engineering services — design, deploy, secure, and scale your enterprise networks efficiently.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/twitter-image.jpg" },
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
