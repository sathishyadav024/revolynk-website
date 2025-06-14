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

import Header from "@/components/marketing-and-experience/Header";
import Servicesin from "@/components/marketing-and-experience/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/marketing-and-experience/Casestudies";
import Partners from "@/components/marketing-and-experience/Partners";
import Cform from "@/components/marketing-and-experience/Cform";
import Cta from "@/components/marketing-and-experience/Cta";
import { onMounted } from "vue";

useHead({
  title: "Marketing & Experience | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs enhances brand presence through digital marketing, customer engagement, content strategy, and seamless user experiences.",
  },
  {
    name: "keywords",
    content:
      "digital marketing, customer experience, branding, SEO, social media, performance marketing, UI/UX, Hyderabad, Revolynk",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Digital Marketing & Experience Experts" },
  {
    property: "og:description",
    content:
      "Boost your digital presence with Revolynk’s expert marketing strategies, UX design, and performance-driven campaigns.",
  },
  { property: "og:image", content: "https://www.revolynk.com/marketing-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/marketing-experience" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Digital Marketing & Experience Services",
  },
  {
    name: "twitter:description",
    content:
      "Achieve business growth with our strategic marketing, content, and design solutions built for modern audiences.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/marketing-twitter.jpg" },
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
