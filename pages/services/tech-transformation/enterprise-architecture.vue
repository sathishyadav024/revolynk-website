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

import Header from "@/components/enterprise-architecture/Header";
import Whythis from "@/components/enterprise-architecture/Whythis";
import Whatwedo from "@/components/enterprise-architecture/Whatwedo";
import Whatclient from "@/components/enterprise-architecture/Whatclient";
import Casestudies from "@/components/enterprise-architecture/Casestudies";
import Faqs from "@/components/enterprise-architecture/Faqs";
import Cta from "@/components/enterprise-architecture/Cta";

import { onMounted } from "vue";

useHead({
  title: "Enterprise Architecture | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers enterprise architecture solutions to align your business goals with IT strategies, ensuring scalability, agility, and operational efficiency.",
  },
  {
    name: "keywords",
    content:
      "enterprise architecture, IT strategy, digital transformation, scalable architecture, business alignment, Hyderabad, Revolynk Techs",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Enterprise Architecture | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Strategic enterprise architecture services to enhance your organization's digital infrastructure and technology alignment.",
  },
  { property: "og:image", content: "https://www.revolynk.com/og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/enterprise-architecture" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Enterprise Architecture | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Empower your business with strategic enterprise architecture services that ensure scalability and efficiency.",
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
