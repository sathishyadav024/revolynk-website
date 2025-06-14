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

import Header from "@/components/creative-empowering/Header";
import Whythis from "@/components/creative-empowering/Whythis";
import Whatwedo from "@/components/creative-empowering/Whatwedo";
import Whatclient from "@/components/creative-empowering/Whatclient";
import Casestudies from "@/components/creative-empowering/Casestudies";
import Faqs from "@/components/creative-empowering/Faqs";
import Cta from "@/components/creative-empowering/Cta";

import { onMounted } from "vue";

useHead({
  title: "Creative Empowering | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs empowers creativity through design, storytelling, visual experiences, and digital innovation tailored to elevate brand identity.",
  },
  {
    name: "keywords",
    content:
      "Creative empowerment, brand storytelling, digital design, creative solutions, visual content, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Creative Empowering | Ignite Innovation with Revolynk" },
  {
    property: "og:description",
    content:
      "From creative design to immersive storytelling, Revolynk helps brands express their vision and connect emotionally with audiences.",
  },
  { property: "og:image", content: "https://www.revolynk.com/creative-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/creative-empowering" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Creative Empowering | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Explore how Revolynk empowers creativity through impactful visuals, designs, and digital brand strategies.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/creative-twitter.jpg" },
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
