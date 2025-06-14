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

import Header from "@/components/intelligent-management/Header";
import Whythis from "@/components/intelligent-management/Whythis";
import Whatwedo from "@/components/intelligent-management/Whatwedo";
import Whatclient from "@/components/intelligent-management/Whatclient";
import Casestudies from "@/components/intelligent-management/Casestudies";
import Faqs from "@/components/intelligent-management/Faqs";
import Cta from "@/components/intelligent-management/Cta";

import { onMounted } from "vue";

useHead({
  title: "Intelligent Management Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Streamline your operations with Revolynk's Intelligent Management systems — from smart analytics to automated workflows for better business control.",
  },
  {
    name: "keywords",
    content:
      "intelligent management, smart systems, business intelligence, process optimization, automation, AI-driven solutions, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Intelligent Management | Smart Business Solutions by Revolynk" },
  {
    property: "og:description",
    content:
      "Revolynk’s intelligent management platform helps you drive productivity, efficiency, and decision-making with advanced analytics and automation.",
  },
  { property: "og:image", content: "https://www.revolynk.com/intelligent-management-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/intelligent-management" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Intelligent Management Solutions | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk delivers AI-driven management tools for smarter operations and real-time business insights.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/intelligent-management-twitter.jpg" },
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
