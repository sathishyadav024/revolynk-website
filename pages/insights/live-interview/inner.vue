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

import Recent from "@/components/live-in-inner/Recent";
import Blog from "@/components/live-in-inner/Blog";
import Slider from "@/components/live-in-inner/Slider";

import { onMounted } from "vue";

useHead({
  title: "Live Interview Details | Revolynk Techs Pvt. Ltd.",
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
      "Watch exclusive live interviews with tech leaders, innovators, and experts at Revolynk Techs. Gain insights into digital trends, business transformation, and emerging technologies.",
  },
  {
    name: "keywords",
    content:
      "Revolynk live interviews, tech leaders, digital transformation, innovation talks, expert discussions, web development insights, mobile apps, cloud strategies, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Live Interviews | Industry Experts at Revolynk" },
  {
    property: "og:description",
    content:
      "Join engaging live interviews with industry experts and innovators discussing digital trends, business growth, and tech evolution.",
  },
  { property: "og:image", content: "https://www.revolynk.com/live-interviews-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/live-interview" },
  { property: "og:type", content: "video.other" },  // use 'video.other' if video stream is involved

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Live Interviews | Digital Talks at Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Watch live conversations with digital leaders and innovators hosted by Revolynk Techs. Stay ahead in tech.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/live-interviews-meta-image.jpg" },
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
