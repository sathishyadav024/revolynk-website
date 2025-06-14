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
        <Number />
        <Casestudies />
        <Partners />
        <Cform />
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

import Header from "@/components/cloud/Header";
import Servicesin from "@/components/cloud/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/cloud/Casestudies";
import Partners from "@/components/cloud/Partners";
import Cform from "@/components/cloud/Cform";
import Cta from "@/components/cloud/Cta";
import { onMounted } from "vue";

useHead({
  title: "Cloud Solutions | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs provides secure, scalable, and cost-effective cloud solutions—empowering businesses with infrastructure, migration, and DevOps services.",
  },
  {
    name: "keywords",
    content:
      "cloud solutions, cloud services, cloud migration, DevOps, AWS, Azure, GCP, cloud infrastructure, secure hosting, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Cloud Solutions | Scalable & Secure by Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Discover tailored cloud services from Revolynk—covering infrastructure, DevOps, deployment, and enterprise cloud strategy.",
  },
  { property: "og:image", content: "https://www.revolynk.com/cloud-solutions-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/cloud-solutions" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Cloud Solutions | Secure & Scalable Cloud by Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Boost your business with Revolynk’s cloud expertise—migration, DevOps, hosting, and support on AWS, Azure & GCP.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/cloud-solutions-twitter.jpg" },
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
