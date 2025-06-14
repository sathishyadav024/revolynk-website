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
        <Segments />
        <Number />
        <Casestudies />
        <Partners />
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

import Header from "@/components/media-and-communication/Header";
import Servicesin from "@/components/media-and-communication/Servicesin";
import Segments from "@/components/media-and-communication/Segments";
import Number from "@/components/media-and-communication/Number";
import Casestudies from "@/components/media-and-communication/Casestudies";
import Partners from "@/components/media-and-communication/Partners";
import Cta from "@/components/media-and-communication/Cta";
import { onMounted } from "vue";

useHead({
  title: "Media & Communication Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs builds robust digital solutions for media and communication businesses, including streaming platforms, content management systems, and publishing automation tools.",
  },
  {
    name: "keywords",
    content:
      "media technology, communication software, OTT app development, streaming platforms, CMS solutions, content delivery, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Media & Communication Tech Solutions" },
  {
    property: "og:description",
    content:
      "Empowering media, publishing, and communication enterprises with next-gen tools like streaming apps, CMS platforms, and content analytics solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/media-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/media-communication" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Media & Communication Solutions | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Explore our digital transformation services for media and communication sectors—custom OTT apps, CMS development, and more.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/media-meta.jpg" },
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
