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

import Header from "@/components/chemical/Header";
import Servicesin from "@/components/chemical/Servicesin";
import Segments from "@/components/chemical/Segments";
import Number from "@/components/chemical/Number";
import Casestudies from "@/components/chemical/Casestudies";
import Partners from "@/components/chemical/Partners";
import Cta from "@/components/chemical/Cta";
import { onMounted } from "vue";

useHead({
  title: "Chemical Industry Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers tailored digital solutions for the chemical industry, including process automation, inventory systems, safety compliance platforms, and real-time analytics.",
  },
  {
    name: "keywords",
    content:
      "chemical industry software, process automation, safety compliance, chemical manufacturing IT, digital transformation chemicals, ERP for chemical companies, Hyderabad tech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Digital Solutions for Chemical Industry | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Streamline chemical manufacturing and operations with innovative IT solutions—built by Revolynk Techs for compliance, automation, and efficiency.",
  },
  { property: "og:image", content: "https://www.revolynk.com/chemical-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/chemical-industry" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Digital Solutions for the Chemical Industry",
  },
  {
    name: "twitter:description",
    content:
      "Custom IT solutions for chemical manufacturers: automation, compliance, and operational excellence with Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/chemical-meta.jpg" },
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
