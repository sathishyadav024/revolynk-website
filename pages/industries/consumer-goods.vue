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

import Header from "@/components/consumer-goods/Header";
import Servicesin from "@/components/consumer-goods/Servicesin";
import Segments from "@/components/consumer-goods/Segments";
import Number from "@/components/consumer-goods/Number";
import Casestudies from "@/components/consumer-goods/Casestudies";
import Partners from "@/components/consumer-goods/Partners";
import Cta from "@/components/consumer-goods/Cta";
import { onMounted } from "vue";

useHead({
  title: "Consumer Goods Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs helps consumer goods brands scale with powerful digital solutions—from eCommerce platforms to inventory automation and customer engagement tools.",
  },
  {
    name: "keywords",
    content:
      "consumer goods tech, FMCG software, eCommerce for consumer brands, supply chain tech, inventory automation, D2C solutions, Hyderabad tech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Digital Solutions for Consumer Goods" },
  {
    property: "og:description",
    content:
      "Empowering consumer goods companies with eCommerce platforms, ERP, CRM, and advanced analytics to improve growth and operations.",
  },
  { property: "og:image", content: "https://www.revolynk.com/consumer-goods-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/consumer-goods" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Tech Solutions for Consumer Goods Industry",
  },
  {
    name: "twitter:description",
    content:
      "Boost efficiency and drive sales with custom digital tools for the consumer goods sector, crafted by Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/consumer-goods-meta.jpg" },
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
