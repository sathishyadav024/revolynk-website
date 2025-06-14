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

import Header from "@/components/advanced-automation/Header";
import Whythis from "@/components/advanced-automation/Whythis";
import Whatwedo from "@/components/advanced-automation/Whatwedo";
import Whatclient from "@/components/advanced-automation/Whatclient";
import Casestudies from "@/components/advanced-automation/Casestudies";
import Faqs from "@/components/advanced-automation/Faqs";
import Cta from "@/components/advanced-automation/Cta";

import { onMounted } from "vue";

useHead({
  title: "Advanced Automation Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Discover Revolynk's advanced automation services to streamline processes, reduce manual tasks, and accelerate digital transformation with intelligent systems.",
  },
  {
    name: "keywords",
    content:
      "advanced automation, intelligent automation, process automation, hyperautomation, digital transformation, AI automation, robotic process automation, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Advanced Automation Solutions | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Revolynk empowers enterprises with smart automation systems and intelligent engineering to drive efficiency and growth.",
  },
  { property: "og:image", content: "https://www.revolynk.com/automation-og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/advanced-automation" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Advanced Automation | Tech Engineering | Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Leverage next-gen automation technologies with Revolynk's expert engineering solutions. Simplify operations, amplify results.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/automation-twitter-image.jpg" },
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
