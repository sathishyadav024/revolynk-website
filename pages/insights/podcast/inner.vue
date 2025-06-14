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

import Recent from "@/components/podcastsinner/Recent";
import Blog from "@/components/podcastsinner/Blog";
import Slider from "@/components/podcastsinner/Slider";

import { onMounted } from "vue";

useHead({
  title: "Podcast Details | Revolynk Techs Pvt. Ltd.",
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
      "Tune in to Revolynk Techs' podcast episodes featuring insightful discussions on digital innovation, technology trends, and business growth.",
  },
  {
    name: "keywords",
    content:
      "Revolynk podcasts, tech talks, digital transformation, business growth, innovation discussions, web and mobile technology, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Podcast | Insights from Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Explore episodes featuring conversations on emerging tech, innovation, and digital growth strategies. Powered by Revolynk Techs.",
  },
  { property: "og:image", content: "https://www.revolynk.com/podcasts-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/podcast" },
  { property: "og:type", content: "music.radio_station" }, // or "website" if you're not embedding audio

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs Podcast | Talk. Innovate. Grow.",
  },
  {
    name: "twitter:description",
    content:
      "Catch conversations with tech leaders and experts on our podcast. Innovation meets strategy at Revolynk.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/podcasts-meta-image.jpg" },
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
