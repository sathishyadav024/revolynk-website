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

import Header from "@/components/cyber-security/Header";
import Servicesin from "@/components/cyber-security/Servicesin";
import Number from "@/components/home/Number";
import Casestudies from "@/components/cyber-security/Casestudies";
import Partners from "@/components/cyber-security/Partners";
import Cform from "@/components/cyber-security/Cform";
import Cta from "@/components/cyber-security/Cta";
import { onMounted } from "vue";

useHead({
  title: "Cyber Security | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs offers comprehensive cyber security solutions to protect your business from digital threats, ensuring data privacy and system integrity.",
  },
  {
    name: "keywords",
    content:
      "cyber security, data protection, endpoint security, threat monitoring, Revolynk, network security, Hyderabad, vulnerability assessment, SOC",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Cyber Security | Robust Protection by Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Protect your enterprise with Revolynk’s expert cyber security services—threat detection, vulnerability management, and 24/7 monitoring.",
  },
  { property: "og:image", content: "https://www.revolynk.com/cyber-security-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/cyber-security" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Cyber Security | Advanced Digital Protection by Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Revolynk offers end-to-end cyber security services including penetration testing, risk audits, and incident response.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/cyber-security-twitter.jpg" },
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
