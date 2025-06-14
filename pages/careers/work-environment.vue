<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Intro />
        <Workingwi />
        <Recognisation />
        <Powork />
        <Whatnext />
        <Jobsp />
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
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Intro from "@/components/work-environment/Intro";
import Workingwi from "@/components/work-environment/Workingwi";
import Recognisation from "@/components/work-environment/Recognisation";
import Powork from "@/components/work-environment/Powork";
import Whatnext from "@/components/work-environment/Whatnext";
import Jobsp from "@/components/work-environment/Jobsp";
import { onMounted } from "vue";

useHead({
  title: "Life at Revolynk | Work Culture & Environment | Revolynk Techs Pvt. Ltd.",
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
      "Discover what it's like to work at Revolynk Techs — a collaborative, growth-driven culture empowering innovation, creativity, and work-life balance.",
  },
  {
    name: "keywords",
    content:
      "Life at Revolynk, Revolynk culture, Revolynk work environment, tech company culture, employee experience, careers, work-life balance, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Life at Revolynk | A Culture of Innovation & Growth" },
  {
    property: "og:description",
    content:
      "Get an inside look at Revolynk Techs — where collaboration, creativity, and career development thrive in a dynamic tech environment.",
  },
  { property: "og:image", content: "https://www.revolynk.com/life-at-revolynk-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/life-at-revolynk" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Life at Revolynk | Work Culture at Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Explore the workplace culture and employee experiences that make Revolynk Techs a great place to work and grow.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/life-at-revolynk-meta-image.jpg" },
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
