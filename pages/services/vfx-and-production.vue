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

import Header from "@/components/vfx-and-production/Header";
import Servicesin from "@/components/vfx-and-production/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/vfx-and-production/Casestudies";
import Partners from "@/components/vfx-and-production/Partners";
import Cform from "@/components/vfx-and-production/Cform";
import Cta from "@/components/vfx-and-production/Cta";
import { onMounted } from "vue";

useHead({
  title: "VFX and Production Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers cutting-edge VFX, animation, and media production services for films, commercials, and immersive digital content.",
  },
  {
    name: "keywords",
    content:
      "VFX, visual effects, animation, post-production, video editing, media production, motion graphics, Hyderabad, Revolynk",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | VFX and Media Production Experts" },
  {
    property: "og:description",
    content:
      "Experience world-class VFX, animation, and production services that bring your creative vision to life — from concept to screen.",
  },
  { property: "og:image", content: "https://www.revolynk.com/vfx-og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/vfx-production" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | VFX and Media Production Experts",
  },
  {
    name: "twitter:description",
    content:
      "Creative, cinematic, and cutting-edge VFX & production solutions for modern storytelling.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/vfx-twitter-image.jpg" },
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
