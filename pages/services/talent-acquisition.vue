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

import Header from "@/components/talent-acquisition/Header";
import Servicesin from "@/components/talent-acquisition/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/talent-acquisition/Casestudies";
import Partners from "@/components/talent-acquisition/Partners";
import Cform from "@/components/talent-acquisition/Cform";
import Cta from "@/components/talent-acquisition/Cta";
import { onMounted } from "vue";

useHead({
  title: "Talent Acquisition | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs helps organizations attract and hire top talent through strategic recruitment solutions, employer branding, and tech-enabled hiring processes.",
  },
  {
    name: "keywords",
    content:
      "talent acquisition, recruitment solutions, hiring services, employer branding, HR tech, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Strategic Talent Acquisition Services" },
  {
    property: "og:description",
    content:
      "We help companies scale by finding the right talent through advanced sourcing, recruitment marketing, and digital hiring solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/talent-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/talent-acquisition" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Strategic Talent Acquisition Services",
  },
  {
    name: "twitter:description",
    content:
      "Attract, assess, and hire the best talent with Revolynk’s modern recruitment and employer branding solutions.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/talent-twitter.jpg" },
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
