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
        <Content />
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/terms-and-conditions/Header";
import Content from "@/components/terms-and-conditions/Content";

import { onMounted } from "vue";

useHead({
  title: "Terms and Conditions | Revolynk Techs Pvt. Ltd.",
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
      "Review the Terms and Conditions of Revolynk Techs. Learn about your legal rights, obligations, and the rules governing the use of our services and website.",
  },
  {
    name: "keywords",
    content:
      "Revolynk terms and conditions, user agreement, service terms, legal policy, usage rules, digital services, web services policy",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Terms and Conditions | Revolynk Techs Pvt. Ltd." },
  {
    property: "og:description",
    content:
      "Understand the rules and conditions for using Revolynk Techs’ digital platforms and services.",
  },
  { property: "og:image", content: "https://www.revolynk.com/terms-and-conditions-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/terms-and-conditions" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Terms and Conditions | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Read the terms governing the use of Revolynk Techs services, including user responsibilities and limitations.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/terms-and-conditions-meta-image.jpg" },
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
