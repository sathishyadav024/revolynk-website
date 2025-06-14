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

import Header from "@/components/human-resource-transformation/Header";
import Whythis from "@/components/human-resource-transformation/Whythis";
import Whatwedo from "@/components/human-resource-transformation/Whatwedo";
import Whatclient from "@/components/human-resource-transformation/Whatclient";
import Casestudies from "@/components/human-resource-transformation/Casestudies";
import Faqs from "@/components/human-resource-transformation/Faqs";
import Cta from "@/components/human-resource-transformation/Cta";

import { onMounted } from "vue";

useHead({
  title: "Human Resource Transformation | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk transforms HR through digital tools, automation, and data-driven solutions to enhance workforce efficiency and employee experience.",
  },
  {
    name: "keywords",
    content:
      "HR transformation, digital HR, employee experience, HR automation, workforce management, talent strategy, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "HR Transformation | Modern Workforce Solutions by Revolynk" },
  {
    property: "og:description",
    content:
      "Empowering HR teams with modern solutions—digital onboarding, performance tracking, and AI-powered workforce insights by Revolynk.",
  },
  { property: "og:image", content: "https://www.revolynk.com/hr-transformation-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/human-resource-transformation" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Human Resource Transformation | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Revolutionize HR with automation, employee engagement tools, and data-driven transformation strategies from Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/hr-transformation-twitter.jpg" },
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
