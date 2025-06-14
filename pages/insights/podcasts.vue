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
        <Podcasts />
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
import Header from "@/components/podcasts/Header";
import Podcasts from "@/components/podcasts/Podcasts";

import { onMounted } from "vue";

useHead({
  title: "Podcasts | Revolynk Techs Pvt. Ltd.",
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
      "Listen to insightful tech podcasts by Revolynk Techs featuring discussions on innovation, digital trends, and industry transformations.",
  },
  {
    name: "keywords",
    content:
      "Revolynk podcasts, tech talks, digital transformation, startup stories, innovation, IT trends, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Podcasts | Revolynk Tech Conversations & Insights" },
  {
    property: "og:description",
    content:
      "Explore Revolynk’s podcast series where we dive into stories, ideas, and experiences shaping the future of technology.",
  },
  { property: "og:image", content: "https://www.revolynk.com/podcasts-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/podcasts" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Podcasts | Tech Stories and Expert Talks by Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Tune in to Revolynk’s tech podcast episodes covering industry insights, innovation journeys, and business growth stories.",
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
