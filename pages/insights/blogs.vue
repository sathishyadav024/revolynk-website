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
        <Blogs />
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
import Header from "@/components/blogs/Header";
import Blogs from "@/components/blogs/Blogs";

import { onMounted } from "vue";

useHead({
  title: "Our Latest Blogs | Revolynk Techs Pvt. Ltd.",
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
      "Explore Revolynk Techs' latest blogs on technology, digital innovation, business strategies, and development trends shaping the future.",
  },
  {
    name: "keywords",
    content:
      "Revolynk blog, tech insights, digital transformation, development trends, innovation, business strategies, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Latest Tech Blogs | Insights from Revolynk" },
  {
    property: "og:description",
    content:
      "Read expert-written articles on web development, mobile apps, cloud solutions, and the latest in digital innovation from Revolynk Techs.",
  },
  { property: "og:image", content: "https://www.revolynk.com/blogs-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/blogs" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Blogs | Tech & Innovation Insights",
  },
  {
    name: "twitter:description",
    content:
      "Explore blog posts on cutting-edge technologies, digital growth strategies, and innovative development practices.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/blogs-meta-image.jpg" },
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
