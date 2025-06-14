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

import Header from "@/components/digital-sales-and-strategy/Header";
import Whythis from "@/components/digital-sales-and-strategy/Whythis";
import Whatwedo from "@/components/digital-sales-and-strategy/Whatwedo";
import Whatclient from "@/components/digital-sales-and-strategy/Whatclient";
import Casestudies from "@/components/digital-sales-and-strategy/Casestudies";
import Faqs from "@/components/digital-sales-and-strategy/Faqs";
import Cta from "@/components/digital-sales-and-strategy/Cta";

import { onMounted } from "vue";

useHead({
  title: "Digital Sales & Strategy | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk’s Digital Sales and Strategy solutions help businesses grow with data-driven marketing, automation, and performance analytics.",
  },
  {
    name: "keywords",
    content:
      "digital sales, digital strategy, marketing automation, lead generation, conversion strategy, performance marketing, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Digital Sales & Strategy | Drive Growth with Revolynk" },
  {
    property: "og:description",
    content:
      "Scale your business through strategic digital sales solutions, including automation, insights, and omnichannel campaigns.",
  },
  { property: "og:image", content: "https://www.revolynk.com/digital-sales-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/digital-sales-strategy" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Digital Sales & Strategy | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Leverage Revolynk’s expertise in digital strategy and sales optimization to boost leads, engagement, and ROI.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/digital-sales-twitter.jpg" },
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
