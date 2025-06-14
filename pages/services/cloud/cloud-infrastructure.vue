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

import Header from "@/components/cloud-infrastructure/Header";
import Whythis from "@/components/cloud-infrastructure/Whythis";
import Whatwedo from "@/components/cloud-infrastructure/Whatwedo";
import Whatclient from "@/components/cloud-infrastructure/Whatclient";
import Casestudies from "@/components/cloud-infrastructure/Casestudies";
import Faqs from "@/components/cloud-infrastructure/Faqs";
import Cta from "@/components/cloud-infrastructure/Cta";

import { onMounted } from "vue";

useHead({
  title: "Cloud Infrastructure Services | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers scalable and secure cloud infrastructure solutions tailored to power digital agility, cost-efficiency, and performance.",
  },
  {
    name: "keywords",
    content:
      "cloud infrastructure, cloud services, data center, IaaS, hybrid cloud, cloud platforms, cloud security, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Cloud Infrastructure Services | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Empower your enterprise with robust cloud infrastructure from Revolynk Techs—engineered for scalability, resilience, and transformation.",
  },
  { property: "og:image", content: "https://www.revolynk.com/og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/cloud-infrastructure" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Cloud Infrastructure Services | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk Techs provides robust cloud infrastructure services built for security, efficiency, and business growth.",
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
