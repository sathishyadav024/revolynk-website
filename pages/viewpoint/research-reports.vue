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
        <Researchreports />
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
import Header from "@/components/research-reports/Header";
import Researchreports from "@/components/research-reports/Researchreports";

import { onMounted } from "vue";

useHead({
  title: "Research Reports | Industry Insights & Tech Analysis | Revolynk Techs Pvt. Ltd.",
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
      "Explore in-depth research reports and industry insights from Revolynk Techs on digital innovation, emerging technologies, and strategic transformation.",
  },
  {
    name: "keywords",
    content:
      "Revolynk research reports, industry analysis, technology trends, digital transformation, business insights, data-driven strategy, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Research Reports | Strategic Insights from Revolynk" },
  {
    property: "og:description",
    content:
      "Access strategic research reports and data-backed insights by Revolynk Techs on tech innovation and digital business trends.",
  },
  { property: "og:image", content: "https://www.revolynk.com/research-reports-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/research-reports" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Research Reports | Strategic Insights from Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Discover cutting-edge research reports from Revolynk Techs covering technology, strategy, and market insights.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/research-reports-meta-image.jpg" },
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
