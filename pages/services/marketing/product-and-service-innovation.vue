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
        <Whythis />
        <Whatwedo />
        <Faqs />
        <Whatclient />
        <Casestudies />
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

import Header from "@/components/product-and-service-innovation/Header";
import Whythis from "@/components/product-and-service-innovation/Whythis";
import Whatwedo from "@/components/product-and-service-innovation/Whatwedo";
import Whatclient from "@/components/product-and-service-innovation/Whatclient";
import Casestudies from "@/components/product-and-service-innovation/Casestudies";
import Faqs from "@/components/product-and-service-innovation/Faqs";
import Cta from "@/components/product-and-service-innovation/Cta";

import { onMounted } from "vue";

useHead({
  title: "Product & Service Innovation | Revolynk Techs Pvt. Ltd.",
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
      "Drive business growth through product and service innovation at Revolynk. We blend creativity with technology to deliver impactful solutions.",
  },
  {
    name: "keywords",
    content:
      "product innovation, service innovation, R&D, emerging technology, product design, UX innovation, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Product & Service Innovation | Transforming Ideas with Revolynk" },
  {
    property: "og:description",
    content:
      "From concept to execution—Revolynk empowers brands through innovative product strategies and breakthrough digital services.",
  },
  { property: "og:image", content: "https://www.revolynk.com/product-innovation-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/product-service-innovation" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Product & Service Innovation | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk Techs crafts innovative products and digital services that solve real-world problems and enable market leadership.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/product-innovation-twitter.jpg" },
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
