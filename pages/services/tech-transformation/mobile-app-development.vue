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

import Header from "@/components/mobile-app-development/Header";
import Whythis from "@/components/mobile-app-development/Whythis";
import Whatwedo from "@/components/mobile-app-development/Whatwedo";
import Whatclient from "@/components/mobile-app-development/Whatclient";
import Casestudies from "@/components/mobile-app-development/Casestudies";
import Faqs from "@/components/mobile-app-development/Faqs";
import Cta from "@/components/mobile-app-development/Cta";

import { onMounted } from "vue";

useHead({
  title: "Mobile App Development | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs builds scalable, high-performance mobile apps for iOS and Android. From design to deployment, we deliver seamless user experiences.",
  },
  {
    name: "keywords",
    content:
      "Mobile app development, iOS apps, Android apps, cross-platform apps, Flutter, React Native, mobile UX, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Mobile App Development | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Build powerful mobile applications with Revolynk Techs. Expert solutions in Android, iOS, and cross-platform development.",
  },
  { property: "og:image", content: "https://www.revolynk.com/og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/mobile-app-development" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Mobile App Development | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Expert mobile app development services by Revolynk Techs — from idea to launch on iOS and Android platforms.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/twitter-image.jpg" },
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
