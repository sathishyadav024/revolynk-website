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

import Header from "@/components/cyber-production/Header";
import Whythis from "@/components/cyber-production/Whythis";
import Whatwedo from "@/components/cyber-production/Whatwedo";
import Whatclient from "@/components/cyber-production/Whatclient";
import Casestudies from "@/components/cyber-production/Casestudies";
import Faqs from "@/components/cyber-production/Faqs";
import Cta from "@/components/cyber-production/Cta";

import { onMounted } from "vue";

useHead({
  title: "Cyber Production | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers cutting-edge cyber production services including virtual environments, digital assets, and secure content pipelines for modern media and simulations.",
  },
  {
    name: "keywords",
    content:
      "cyber production, virtual production, digital environments, VFX, secure content workflows, simulation design, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Cyber Production | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "From digital assets to virtual environments, explore Revolynk’s cyber production capabilities powering simulations, VFX, and secure media pipelines.",
  },
  { property: "og:image", content: "https://www.revolynk.com/cyber-production-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/cyber-production" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Cyber Production | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk’s cyber production services offer next-gen tools for VFX, simulations, and secure digital content development.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/cyber-production-twitter.jpg" },
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
