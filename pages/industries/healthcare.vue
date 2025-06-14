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

import Header from "@/components/healthcare/Header";
import Servicesin from "@/components/healthcare/Servicesin";
import Segments from "@/components/healthcare/Segments";
import Number from "@/components/healthcare/Number";
import Casestudies from "@/components/healthcare/Casestudies";
import Partners from "@/components/healthcare/Partners";
import Cta from "@/components/healthcare/Cta";
import { onMounted } from "vue";

useHead({
  title: "Healthcare Technology Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers cutting-edge healthcare technology solutions including telemedicine apps, patient management systems, EHR integrations, and AI-based diagnostics.",
  },
  {
    name: "keywords",
    content:
      "healthcare technology, health tech solutions, telemedicine app, EHR integration, patient portal development, healthcare software, Hyderabad, Revolynk",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Healthcare Technology Solutions" },
  {
    property: "og:description",
    content:
      "Transforming healthcare with secure, scalable digital tools—EHR platforms, teleconsultation apps, AI diagnostics, and hospital management systems.",
  },
  { property: "og:image", content: "https://www.revolynk.com/healthcare-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/healthcare" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Health Tech for a Smarter Future",
  },
  {
    name: "twitter:description",
    content:
      "We build advanced healthcare software—from patient portals to telemedicine systems—designed to improve outcomes and simplify operations.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/healthcare-meta.jpg" },
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
