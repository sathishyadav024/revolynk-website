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

import Header from "@/components/technology-transformation/Header";
import Servicesin from "@/components/technology-transformation/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/technology-transformation/Casestudies";
import Partners from "@/components/technology-transformation/Partners";
import Cform from "@/components/technology-transformation/Cform";
import Cta from "@/components/technology-transformation/Cta";
import { onMounted } from "vue";

useHead({
  title: "Technology Transformation | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs drives technology transformation by modernizing legacy systems, integrating digital tools, and enabling innovation to scale business impact.",
  },
  {
    name: "keywords",
    content:
      "technology transformation, digital modernization, IT transformation, legacy modernization, enterprise tech, cloud migration, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Technology Transformation Experts" },
  {
    property: "og:description",
    content:
      "Modernize your business with strategic technology transformation — from cloud adoption to digital infrastructure upgrades.",
  },
  { property: "og:image", content: "https://www.revolynk.com/technology-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/technology-transformation" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Technology Transformation Experts",
  },
  {
    name: "twitter:description",
    content:
      "Accelerate innovation and growth with Revolynk’s technology transformation services — built for the modern enterprise.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/technology-twitter.jpg" },
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
