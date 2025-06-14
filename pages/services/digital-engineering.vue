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

import Header from "@/components/digital-engineering/Header";
import Servicesin from "@/components/digital-engineering/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/digital-engineering/Casestudies";
import Partners from "@/components/digital-engineering/Partners";
import Cform from "@/components/digital-engineering/Cform";
import Cta from "@/components/digital-engineering/Cta";
import { onMounted } from "vue";

useHead({
  title: "Data Engineering | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs offers scalable data engineering services including ETL pipelines, data lake architecture, real-time processing, and cloud data integration.",
  },
  {
    name: "keywords",
    content:
      "data engineering, ETL, data pipelines, data lakes, big data, data integration, real-time data, cloud data services, Hyderabad, Revolynk",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Data Engineering Services | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Build modern, scalable, and secure data pipelines with Revolynk’s data engineering expertise.",
  },
  { property: "og:image", content: "https://www.revolynk.com/data-engineering-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/data-engineering" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Expert Data Engineering Solutions",
  },
  {
    name: "twitter:description",
    content:
      "Delivering high-performance data engineering solutions to support your analytics and AI initiatives.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/data-engineering-twitter.jpg" },
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
