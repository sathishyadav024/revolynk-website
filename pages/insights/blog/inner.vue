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

import Recent from "@/components/blog-detail/Recent";
import Blog from "@/components/blog-detail/Blog";
import Slider from "@/components/blog-detail/Slider";

import { onMounted } from "vue";

useHead({
  title: "Blog Details | Revolynk Techs Pvt. Ltd.",
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
      "Explore the latest insights, case studies, and expert blogs from Revolynk Techs on web development, mobile technology, digital strategy, and innovation.",
  },
  {
    name: "keywords",
    content:
      "Revolynk blog, tech blogs, digital innovation, web development tips, mobile app strategies, cloud services, Hyderabad tech company, digital transformation",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Blog Details | Revolynk Techs Pvt. Ltd." },
  {
    property: "og:description",
    content:
      "Read expert insights and digital innovation stories from Revolynk’s blog — covering web, mobile, AI, cloud, and growth strategies.",
  },
  { property: "og:image", content: "https://www.revolynk.com/blogs-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/blog-details" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Blog Details | Insights & Innovations from Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Stay updated with expert blogs and digital insights from Revolynk Techs — helping businesses grow with smart tech.",
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
