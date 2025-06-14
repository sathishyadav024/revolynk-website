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

import Header from "@/components/real-estate/Header";
import Servicesin from "@/components/real-estate/Servicesin";
import Segments from "@/components/real-estate/Segments";
import Number from "@/components/real-estate/Number";
import Casestudies from "@/components/real-estate/Casestudies";
import Partners from "@/components/real-estate/Partners";
import Cta from "@/components/real-estate/Cta";
import { onMounted } from "vue";

useHead({
  title: "Real Estate Tech Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Empowering real estate businesses with modern digital solutions including property listing platforms, CRM integrations, mobile apps, and virtual tours.",
  },
  {
    name: "keywords",
    content:
      "real estate software, property listing platform, real estate CRM, proptech, virtual tours, real estate app development, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk | Real Estate Digital Solutions" },
  {
    property: "og:description",
    content:
      "Revolynk Techs delivers smart real estate software—property portals, mobile apps, CRM, virtual tour systems & more.",
  },
  { property: "og:image", content: "https://www.revolynk.com/real-estate-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/real-estate" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Real Estate Tech Solutions | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Explore our innovative digital offerings for real estate—mobile apps, listing platforms, CRM integrations, and more.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/real-estate-meta.jpg" },
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
