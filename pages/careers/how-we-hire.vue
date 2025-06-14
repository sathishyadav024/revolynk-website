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
        <Process />
        <Faqs />
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
import Intro from "@/components/how-we-hire/Intro";
import Process from "@/components/how-we-hire/Process";
import Faqs from "@/components/how-we-hire/Faqs";
import Jobsp from "@/components/how-we-hire/Jobsp";
import { onMounted } from "vue";

useHead({
  title: "How We Hire | Revolynk Techs Pvt. Ltd.",
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
      "Discover how Revolynk Techs hires top tech talent. Learn about our transparent hiring process, interview stages, and what to expect when you apply.",
  },
  {
    name: "keywords",
    content:
      "Revolynk hiring process, careers at Revolynk, interview steps, job application, hiring flow, tech jobs, recruitment at Revolynk",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "How We Hire | Transparent Recruitment at Revolynk" },
  {
    property: "og:description",
    content:
      "Explore our hiring philosophy and step-by-step recruitment process. At Revolynk, we value transparency, skill, and cultural fit.",
  },
  { property: "og:image", content: "https://www.revolynk.com/how-we-hire-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/how-we-hire" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "How We Hire | Careers at Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Learn how to join Revolynk Techs. Our hiring process is designed to be fair, efficient, and inclusive.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/how-we-hire-meta-image.jpg" },
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
