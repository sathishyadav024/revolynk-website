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
        <Perspectives />
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
import Header from "@/components/perspectives/Header";
import Perspectives from "@/components/perspectives/Perspectives";

import { onMounted } from "vue";

useHead({
  title: "Perspectives | Thought Leadership & Insights | Revolynk Techs Pvt. Ltd.",
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
      "Explore forward-thinking perspectives from Revolynk Techs. Discover insights on technology, design, digital innovation, and industry leadership.",
  },
  {
    name: "keywords",
    content:
      "Revolynk perspectives, tech insights, thought leadership, digital innovation, web development, mobile apps, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Perspectives | Insights from Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Read expert insights and thought leadership articles from Revolynk Techs, covering digital transformation, emerging tech, and business strategy.",
  },
  { property: "og:image", content: "https://www.revolynk.com/perspectives-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/perspectives" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Perspectives | Insights from Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Stay ahead with expert commentary and thought pieces from the team at Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/perspectives-meta-image.jpg" },
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
