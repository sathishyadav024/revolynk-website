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
        <Challenge />
        <Story />
        <Next />
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
import Header from "@/components/casestudies-inner/Header";
import Challenge from "@/components/casestudies-inner/Challenge";
import Next from "@/components/casestudies-inner/Next";
import Story from "@/components/casestudies-inner/Story";

import { onMounted } from "vue";

useHead({
  title: "Case Study | Revolynk Techs Pvt. Ltd.",
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
      "Explore detailed case studies showcasing how Revolynk Techs transformed businesses through digital innovation, web development, mobile apps, and cloud solutions.",
  },
  {
    name: "keywords",
    content:
      "Revolynk case studies, digital transformation success, web development results, mobile app achievements, cloud solutions, tech strategy, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Case Study | Revolynk Techs Pvt. Ltd." },
  {
    property: "og:description",
    content:
      "See how Revolynk delivers real results for clients through impactful digital solutions in web, mobile, and cloud platforms.",
  },
  { property: "og:image", content: "https://www.revolynk.com/case-studies-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/case-study" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Client Success Stories | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Discover client success stories and the business impact of Revolynk’s digital transformation strategies.",
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
