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

import Header from "@/components/research-and-development/Header";
import Whythis from "@/components/research-and-development/Whythis";
import Whatwedo from "@/components/research-and-development/Whatwedo";
import Whatclient from "@/components/research-and-development/Whatclient";
import Casestudies from "@/components/research-and-development/Casestudies";
import Faqs from "@/components/research-and-development/Faqs";
import Cta from "@/components/research-and-development/Cta";

import { onMounted } from "vue";

useHead({
  title: "Research & Development | Revolynk Techs Pvt. Ltd.",
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
      "Explore how Revolynk Techs drives innovation through cutting-edge research and development in emerging technologies, AI, and digital engineering.",
  },
  {
    name: "keywords",
    content:
      "research and development, R&D, innovation, emerging technology, AI research, digital transformation, tech innovation, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Research & Development | Driving Innovation at Revolynk" },
  {
    property: "og:description",
    content:
      "Discover Revolynk’s R&D initiatives focused on intelligent systems, future-ready platforms, and transformative digital solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/rd-og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/research-and-development" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk R&D | Technology Research & Innovation",
  },
  {
    name: "twitter:description",
    content:
      "Advancing the future with groundbreaking research, development, and tech innovation at Revolynk.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/rd-twitter-image.jpg" },
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
