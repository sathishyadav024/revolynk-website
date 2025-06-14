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
import Header from "@/components/sitemap/Header";
import Content from "@/components/sitemap/Content";

import { onMounted } from "vue";

useHead({
  title: "Sitemap | Explore Revolynk Techs Pvt. Ltd. Website Structure",
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
      "Access the complete sitemap of Revolynk Techs. Quickly explore all pages including services, blogs, contact, careers, and legal sections in one organized view.",
  },
  {
    name: "keywords",
    content:
      "Revolynk sitemap, site structure, page index, web development sitemap, Revolynk website navigation, Hyderabad tech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Sitemap | Revolynk Techs Website Navigation Guide" },
  {
    property: "og:description",
    content:
      "Find your way around Revolynk Techs' website using our detailed sitemap covering all major sections and services.",
  },
  { property: "og:image", content: "https://www.revolynk.com/sitemap-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/sitemap" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Sitemap | Navigate the Revolynk Website",
  },
  {
    name: "twitter:description",
    content:
      "Easily access and navigate all parts of the Revolynk Techs website via the sitemap.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/sitemap-meta-image.jpg" },
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
