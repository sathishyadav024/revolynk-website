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

import Header from "@/components/cyber-physical-security/Header";
import Whythis from "@/components/cyber-physical-security/Whythis";
import Whatwedo from "@/components/cyber-physical-security/Whatwedo";
import Whatclient from "@/components/cyber-physical-security/Whatclient";
import Casestudies from "@/components/cyber-physical-security/Casestudies";
import Faqs from "@/components/cyber-physical-security/Faqs";
import Cta from "@/components/cyber-physical-security/Cta";

import { onMounted } from "vue";

useHead({
  title: "Cyber-Physical Security | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers robust cyber-physical security solutions to safeguard critical systems, smart infrastructure, IoT devices, and industrial assets.",
  },
  {
    name: "keywords",
    content:
      "cyber-physical security, IoT security, smart infrastructure protection, threat detection, surveillance systems, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Cyber-Physical Security | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Explore advanced cyber-physical security services from Revolynk—covering IoT, surveillance, and smart system protection for next-gen safety.",
  },
  { property: "og:image", content: "https://www.revolynk.com/cyber-physical-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/cyber-physical-security" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Cyber-Physical Security | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "End-to-end cyber-physical security solutions for connected environments, powered by Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/cyber-physical-twitter.jpg" },
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
