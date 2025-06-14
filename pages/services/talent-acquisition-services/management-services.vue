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

import Header from "@/components/management-services/Header";
import Whythis from "@/components/management-services/Whythis";
import Whatwedo from "@/components/management-services/Whatwedo";
import Whatclient from "@/components/management-services/Whatclient";
import Casestudies from "@/components/management-services/Casestudies";
import Faqs from "@/components/management-services/Faqs";
import Cta from "@/components/management-services/Cta";

import { onMounted } from "vue";

useHead({
  title: "Management Services | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk’s Management Services streamline operations, improve efficiency, and drive growth through strategic consulting and digital transformation.",
  },
  {
    name: "keywords",
    content:
      "management services, business consulting, operational efficiency, digital transformation, process optimization, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Strategic Management Services" },
  {
    property: "og:description",
    content:
      "Optimize your business performance with Revolynk’s expert management services—strategy, consulting, and process transformation.",
  },
  { property: "og:image", content: "https://www.revolynk.com/management-og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/management-services" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Management Services | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Strategic business management and consulting services from Revolynk—empowering organizations to thrive in the digital age.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/management-twitter-image.jpg" },
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
