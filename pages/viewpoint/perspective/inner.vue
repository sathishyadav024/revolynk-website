<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Slider />
        <Blog />
        <Recent />
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

import Recent from "@/components/perspectives-inner/Recent";
import Blog from "@/components/perspectives-inner/Blog";
import Slider from "@/components/perspectives-inner/Slider";

import { onMounted } from "vue";

useHead({
  title: "Perspectives | Insights & Thought Leadership | Revolynk Techs Pvt. Ltd.",
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
      "Explore expert perspectives and insights from Revolynk Techs on technology trends, innovation, and digital transformation.",
  },
  {
    name: "keywords",
    content:
      "Revolynk perspectives, thought leadership, tech insights, digital innovation, industry trends, expert articles, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Perspectives | Expert Views from Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Discover expert insights and thought leadership from Revolynk Techs on emerging technologies and business innovation.",
  },
  { property: "og:image", content: "https://www.revolynk.com/perspectives-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/perspectives" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Perspectives | Expert Views from Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Gain insights into technology, design, AI, and digital strategy with Revolynk’s perspectives.",
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
