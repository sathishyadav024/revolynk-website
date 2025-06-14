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
        <Services />
        <Partners />
        <Industries />
        <Clientstories />
        <Recognisation />
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

import Header from "@/components/all-services/Header";
import Services from "@/components/all-services/Services";
import Partners from "@/components/all-services/Partners";
import Industries from "@/components/all-services/Industries";
import Clientstories from "@/components/all-services/Clientstories";
import Recognisation from "@/components/all-services/Recognisation";
import { onMounted } from "vue";

useHead({
  title: "What We Offer | Revolynk Techs Pvt. Ltd.",
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
      "Explore the wide range of digital solutions offered by Revolynk Techs — from web and mobile development to AI, marketing, cloud services, and more.",
  },
  {
    name: "keywords",
    content:
      "Revolynk, services, digital solutions, software development, mobile apps, cloud, AI, VFX, marketing, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Our Services & Offerings" },
  {
    property: "og:description",
    content:
      "Discover what Revolynk Techs offers — comprehensive services in development, AI, marketing, VFX, and digital transformation.",
  },
  { property: "og:image", content: "https://www.revolynk.com/what-we-offer-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/what-we-offer" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Our Services & Offerings",
  },
  {
    name: "twitter:description",
    content:
      "Explore the innovative digital services we offer to help businesses grow in a connected world.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/what-we-offer-twitter.jpg" },
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
