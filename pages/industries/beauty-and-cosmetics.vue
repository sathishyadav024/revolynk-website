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

import Header from "@/components/beauty-and-cosmetics/Header";
import Servicesin from "@/components/beauty-and-cosmetics/Servicesin";
import Segments from "@/components/beauty-and-cosmetics/Segments";
import Number from "@/components/beauty-and-cosmetics/Number";
import Casestudies from "@/components/beauty-and-cosmetics/Casestudies";
import Partners from "@/components/beauty-and-cosmetics/Partners";
import Cta from "@/components/beauty-and-cosmetics/Cta";
import { onMounted } from "vue";

useHead({
  title: "Beauty & Cosmetics Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Empowering beauty and cosmetics brands with stunning eCommerce platforms, personalized user experiences, and digital marketing tools—delivered by Revolynk Techs.",
  },
  {
    name: "keywords",
    content:
      "beauty tech, cosmetics website development, eCommerce for beauty, skincare brand solutions, beauty industry tech, digital branding, Hyderabad tech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Beauty & Cosmetics Digital Solutions | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Revolynk Techs transforms beauty brands with elegant digital solutions including eCommerce, mobile apps, and marketing automation.",
  },
  { property: "og:image", content: "https://www.revolynk.com/beauty-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/beauty-cosmetics" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Digital Solutions for Beauty & Cosmetics | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "From skincare to salon services, our tailored digital tools help beauty brands grow online—powered by Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/beauty-meta.jpg" },
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
