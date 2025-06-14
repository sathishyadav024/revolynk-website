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

import Header from "@/components/banking-and-finance/Header";
import Servicesin from "@/components/banking-and-finance/Servicesin";
import Segments from "@/components/banking-and-finance/Segments";
import Number from "@/components/banking-and-finance/Number";
import Casestudies from "@/components/banking-and-finance/Casestudies";
import Partners from "@/components/banking-and-finance/Partners";
import Cta from "@/components/banking-and-finance/Cta";
import { onMounted } from "vue";

useHead({
  title: "Banking & Finance Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs empowers the banking and finance sector with secure fintech solutions, digital banking platforms, mobile banking apps, and cloud-based financial tools.",
  },
  {
    name: "keywords",
    content:
      "banking technology, fintech solutions, digital banking, mobile banking apps, financial software, Revolynk finance, secure finance systems, Hyderabad fintech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Banking & Finance Tech Solutions | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Discover how Revolynk Techs is transforming the banking and finance sector with secure, scalable, and user-friendly digital solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/finance-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/finance" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Fintech & Banking Digital Services | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Fintech solutions, banking software, and secure digital platforms tailored for the financial industry—delivered by Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/finance-meta.jpg" },
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
