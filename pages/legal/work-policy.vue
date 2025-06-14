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
import Header from "@/components/work-policy/Header";
import Content from "@/components/work-policy/Content";

import { onMounted } from "vue";

useHead({
  title: "Work Policy | Revolynk Techs Pvt. Ltd.",
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
      "Discover Revolynk Techs’ official Work Policy including employee responsibilities, leave structure, remote work norms, conduct rules, and performance expectations.",
  },
  {
    name: "keywords",
    content:
      "Revolynk work policy, employee guidelines, leave policy, remote work, workplace conduct, HR policy, Hyderabad tech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Work Policy | Revolynk Techs Pvt. Ltd." },
  {
    property: "og:description",
    content:
      "Explore Revolynk’s workplace policies including conduct, attendance, performance, and remote work practices for a healthy work environment.",
  },
  { property: "og:image", content: "https://www.revolynk.com/work-policy-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/work-policy" },
  { property: "og:type", content: "article" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Work Policy | Employee Guidelines at Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Understand the workplace expectations and employee responsibilities at Revolynk Techs Pvt. Ltd.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/work-policy-meta-image.jpg" },
  { name: "fb:app_id", content: "Your_FB_App_ID" },
],
  link: [
    { rel: "stylesheet", href: "/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/css/satoshi.css" },
    { rel: "stylesheet", href: "/assets/css/style.css" },
  ],
  title: "Work policy | Revolynk Techs Pvt. Ltd.",
  meta: [
    {
      name: "description",
      content:
        "Discover the official Work Policy of Revolynk Techs Private Limited, outlining employee responsibilities, workplace conduct, leave rules, remote work guidelines, and performance expectations.",
    },
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
