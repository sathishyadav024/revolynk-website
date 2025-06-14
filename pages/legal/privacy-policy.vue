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
        <Content />
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/privacy-policy/Header";
import Content from "@/components/privacy-policy/Content";

import { onMounted } from "vue";

useHead({
  title: "Privacy Policy | Revolynk Techs Pvt. Ltd.",
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
      "Learn how Revolynk Techs collects, uses, and protects your personal and business data. Our Privacy Policy reflects our commitment to transparency and data security.",
  },
  {
    name: "keywords",
    content:
      "Revolynk privacy policy, data protection, personal information, data collection, user privacy, digital security, Revolynk Techs Pvt Ltd",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Privacy Policy | Revolynk Techs Pvt. Ltd." },
  {
    property: "og:description",
    content:
      "This Privacy Policy explains how Revolynk Techs handles user data and safeguards personal information.",
  },
  { property: "og:image", content: "https://www.revolynk.com/privacy-policy-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/privacy-policy" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Privacy Policy | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Review how Revolynk Techs collects, stores, and secures your data through its Privacy Policy.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/privacy-policy-meta-image.jpg" },
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
