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

import Header from "@/components/talent-transformation-and-upskilling/Header";
import Whythis from "@/components/talent-transformation-and-upskilling/Whythis";
import Whatwedo from "@/components/talent-transformation-and-upskilling/Whatwedo";
import Whatclient from "@/components/talent-transformation-and-upskilling/Whatclient";
import Casestudies from "@/components/talent-transformation-and-upskilling/Casestudies";
import Faqs from "@/components/talent-transformation-and-upskilling/Faqs";
import Cta from "@/components/talent-transformation-and-upskilling/Cta";

import { onMounted } from "vue";

useHead({
  title: "Talent Transformation & Upskilling | Revolynk Techs Pvt. Ltd.",
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
      "Empower your workforce with Revolynk's Talent Transformation and Upskilling programs. Boost skills, productivity, and business impact.",
  },
  {
    name: "keywords",
    content:
      "talent transformation, upskilling, workforce development, employee training, digital skills, learning solutions, career growth, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Talent Transformation & Upskilling | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Revolynk's upskilling solutions transform your workforce through industry-relevant training and continuous learning initiatives.",
  },
  { property: "og:image", content: "https://www.revolynk.com/talent-og-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/talent-transformation" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Talent Transformation & Upskilling | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Upskill your teams with Revolynk’s dynamic training programs. Prepare your workforce for the digital future.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/talent-twitter-image.jpg" },
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
