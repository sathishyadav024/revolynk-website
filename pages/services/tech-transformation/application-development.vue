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

import Header from "@/components/application-development/Header";
import Whythis from "@/components/application-development/Whythis";
import Whatwedo from "@/components/application-development/Whatwedo";
import Whatclient from "@/components/application-development/Whatclient";
import Casestudies from "@/components/application-development/Casestudies";
import Faqs from "@/components/application-development/Faqs";
import Cta from "@/components/application-development/Cta";

import { onMounted } from "vue";

useHead({
  title: "Application Development | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs specializes in cutting-edge application development services including mobile apps, web apps, and enterprise solutions tailored to your business goals.",
  },
  {
    name: "keywords",
    content:
      "application development, mobile app development, web app development, enterprise apps, software development, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Application Development | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Explore our mobile and web application development services that bring performance, scalability, and design excellence to your business.",
  },
  { property: "og:image", content: "https://www.revolynk.com/og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/application-development" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Application Development | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Custom mobile and web app development services tailored for growth and innovation. Build with Revolynk.",
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
