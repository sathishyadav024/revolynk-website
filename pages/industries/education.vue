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

import Header from "@/components/education/Header";
import Servicesin from "@/components/education/Servicesin";
import Segments from "@/components/education/Segments";
import Number from "@/components/education/Number";
import Casestudies from "@/components/education/Casestudies";
import Partners from "@/components/education/Partners";
import Cta from "@/components/education/Cta";
import { onMounted } from "vue";

useHead({
  title: "Education Technology Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs builds modern EdTech platforms—online learning systems, virtual classrooms, and AI-driven education tools that drive better student engagement and institutional growth.",
  },
  {
    name: "keywords",
    content:
      "EdTech solutions, online learning platforms, education technology, virtual classroom, LMS development, school ERP, digital education, Hyderabad tech company",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | EdTech & Digital Learning Solutions" },
  {
    property: "og:description",
    content:
      "We empower schools, colleges, and edtech startups with scalable digital platforms like LMS, virtual classrooms, and AI-based tools.",
  },
  { property: "og:image", content: "https://www.revolynk.com/education-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/education" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs | Smart Education Technology Solutions",
  },
  {
    name: "twitter:description",
    content:
      "Explore cutting-edge education solutions including online learning systems, student apps, and digital transformation for institutions.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/education-meta.jpg" },
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
