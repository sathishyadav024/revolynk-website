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

import Header from "@/components/responsible-ai/Header";
import Whythis from "@/components/responsible-ai/Whythis";
import Whatwedo from "@/components/responsible-ai/Whatwedo";
import Whatclient from "@/components/responsible-ai/Whatclient";
import Casestudies from "@/components/responsible-ai/Casestudies";
import Faqs from "@/components/responsible-ai/Faqs";
import Cta from "@/components/responsible-ai/Cta";

import { onMounted } from "vue";

useHead({
  title: "Responsible AI | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs promotes Responsible AI through ethical, fair, and transparent AI systems that align with societal values and regulatory standards.",
  },
  {
    name: "keywords",
    content:
      "Responsible AI, ethical AI, transparent AI, fair AI, AI governance, AI compliance, AI ethics, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Responsible AI | Ethical Innovation at Revolynk" },
  {
    property: "og:description",
    content:
      "Discover how Revolynk Techs builds AI systems that are ethical, transparent, and aligned with global best practices in Responsible AI.",
  },
  { property: "og:image", content: "https://www.revolynk.com/responsible-ai-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/responsible-ai" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Responsible AI | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk's Responsible AI approach ensures trust, fairness, and governance in AI solutions for modern enterprises.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/responsible-ai-twitter.jpg" },
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
