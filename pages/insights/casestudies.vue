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
        <Casestudies />
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
import Header from "@/components/casestudies/Header";
import Casestudies from "@/components/casestudies/Casestudies";

import { onMounted } from "vue";

useHead({
  title: "Case Studies | Revolynk Techs Pvt. Ltd.",
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
      "Explore real-world success stories and digital transformation journeys powered by Revolynk Techs across industries.",
  },
  {
    name: "keywords",
    content:
      "Revolynk case studies, client success, digital transformation, software solutions, business growth, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Case Studies | Real Results by Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Read how Revolynk Techs helped businesses innovate and scale with web, mobile, and cloud solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/case-studies-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/case-studies" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Case Studies | Revolynk Techs' Client Success Stories",
  },
  {
    name: "twitter:description",
    content:
      "Discover how our digital strategies and tech solutions helped businesses achieve measurable growth.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/case-studies-meta-image.jpg" },
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
