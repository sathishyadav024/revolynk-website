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
        <Liveinterviews />
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
import Header from "@/components/live-interviews/Header";
import Liveinterviews from "@/components/live-interviews/Liveinterviews";

import { onMounted } from "vue";

useHead({
  title: "Live Interviews | Revolynk Techs Pvt. Ltd.",
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
      "Watch exclusive live interviews with industry leaders, innovators, and digital experts at Revolynk Techs sharing insights and success stories.",
  },
  {
    name: "keywords",
    content:
      "Revolynk live interviews, tech talks, digital experts, industry leaders, insights, innovation, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Live Interviews | Insights from Industry Experts - Revolynk" },
  {
    property: "og:description",
    content:
      "Catch our latest live sessions and interviews featuring thought leaders in technology, innovation, and digital strategy.",
  },
  { property: "og:image", content: "https://www.revolynk.com/live-interviews-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/live-interviews" },
  { property: "og:type", content: "video.other" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Live Interviews | Revolynk Tech Talks & Expert Conversations",
  },
  {
    name: "twitter:description",
    content:
      "Gain insights from interviews with industry leaders and digital innovators featured by Revolynk Techs.",
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
