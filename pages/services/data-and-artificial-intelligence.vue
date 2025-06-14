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
        <Servicesin />
        <Number />
        <Casestudies />
        <Partners />
        <Cform />
        <Cta />
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

import Header from "@/components/data-and-ai/Header";
import Servicesin from "@/components/data-and-ai/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/data-and-ai/Casestudies";
import Partners from "@/components/data-and-ai/Partners";
import Cform from "@/components/data-and-ai/Cform";
import Cta from "@/components/data-and-ai/Cta";
import { onMounted } from "vue";

useHead({
  title: "Data & Artificial Intelligence | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers data-driven AI solutions including machine learning, predictive analytics, NLP, and data engineering to drive intelligent business outcomes.",
  },
  {
    name: "keywords",
    content:
      "artificial intelligence, data analytics, machine learning, AI solutions, NLP, data science, data engineering, business intelligence, Hyderabad, Revolynk",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "AI & Data Intelligence | Smart Solutions by Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Harness the power of AI and data with Revolynk—offering smart automation, data strategy, ML models, and actionable insights.",
  },
  { property: "og:image", content: "https://www.revolynk.com/ai-data-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/data-ai" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "AI & Data Solutions | Transform with Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk's AI-driven services empower businesses with data strategy, ML, and predictive insights for future-ready growth.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/ai-data-twitter.jpg" },
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
