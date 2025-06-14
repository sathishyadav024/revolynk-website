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

import Header from "@/components/travel/Header";
import Servicesin from "@/components/travel/Servicesin";
import Segments from "@/components/travel/Segments";
import Number from "@/components/travel/Number";
import Casestudies from "@/components/travel/Casestudies";
import Partners from "@/components/travel/Partners";
import Cta from "@/components/travel/Cta";
import { onMounted } from "vue";

useHead({
  title: "Travel Tech Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs builds innovative digital solutions for the travel industry — booking engines, itinerary planners, mobile apps, and travel CRM systems.",
  },
  {
    name: "keywords",
    content:
      "travel software, booking platform development, itinerary planner, travel CRM, tourism apps, travel tech solutions, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Travel & Tourism Tech Solutions" },
  {
    property: "og:description",
    content:
      "Custom digital platforms for travel agencies and tourism companies — from booking systems to mobile apps.",
  },
  { property: "og:image", content: "https://www.revolynk.com/travel-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/travel" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Travel Tech Solutions | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk develops digital platforms for travel & tourism — online booking, mobile apps, travel CRM, and more.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/travel-meta.jpg" },
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
