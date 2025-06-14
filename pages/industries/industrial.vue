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
        <Segments />
        <Number />
        <Casestudies />
        <Partners />
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

import Header from "@/components/industrial/Header";
import Servicesin from "@/components/industrial/Servicesin";
import Segments from "@/components/industrial/Segments";
import Number from "@/components/industrial/Number";
import Casestudies from "@/components/industrial/Casestudies";
import Partners from "@/components/industrial/Partners";
import Cta from "@/components/industrial/Cta";
import { onMounted } from "vue";

useHead({
  title: "Industries We Serve | Revolynk Techs Pvt. Ltd.",
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
      "Discover how Revolynk Techs transforms industries with custom digital solutions—from healthcare and education to logistics, fintech, and real estate.",
  },
  {
    name: "keywords",
    content:
      "industry solutions, digital transformation, healthtech, edtech, fintech, logistics tech, real estate apps, web development, mobile apps, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Industry-Focused Digital Solutions" },
  {
    property: "og:description",
    content:
      "From healthcare to fintech, explore how Revolynk delivers tailor-made software and platforms for various industries.",
  },
  { property: "og:image", content: "https://www.revolynk.com/industries-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/industries" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Industries We Serve | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Custom digital solutions crafted for industries like healthcare, education, logistics, fintech, and more.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/industries-meta.jpg" },
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
