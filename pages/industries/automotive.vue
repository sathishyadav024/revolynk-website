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

import Header from "@/components/automotive/Header";
import Servicesin from "@/components/automotive/Servicesin";
import Segments from "@/components/automotive/Segments";
import Number from "@/components/automotive/Number";
import Casestudies from "@/components/automotive/Casestudies";
import Partners from "@/components/automotive/Partners";
import Cta from "@/components/automotive/Cta";
import { onMounted } from "vue";

useHead({
  title: "Automotive Industry Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Empowering the automotive industry with cutting-edge digital solutions—IoT integration, vehicle data analytics, fleet management systems, and custom app development by Revolynk Techs.",
  },
  {
    name: "keywords",
    content:
      "automotive software solutions, vehicle IoT, fleet management systems, automotive app development, Revolynk, auto tech, smart mobility, Hyderabad tech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Automotive Industry Solutions | Revolynk Techs Pvt. Ltd." },
  {
    property: "og:description",
    content:
      "Explore how Revolynk Techs transforms the automotive industry with advanced digital tools including IoT, fleet tech, and vehicle tracking systems.",
  },
  { property: "og:image", content: "https://www.revolynk.com/automotive-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/automotive" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Automotive Industry Solutions | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Digital solutions for the automotive sector: IoT, vehicle data analytics, fleet apps, and more—by Revolynk Techs Pvt. Ltd.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/automotive-meta.jpg" },
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
