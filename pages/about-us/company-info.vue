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
        <Companyintro />
        <Number />
        <Evolution />
        <Locations />
        <Endmsg />
        <Values />
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
import Header from "@/components/company-info/Header";
import Navbar from "@/components/Navbar";
import Companyintro from "@/components/company-info/Companyintro";
import Evolution from "@/components/company-info/Ourevolution";
import Values from "@/components/company-info/Values";
import Locations from "@/components/company-info/Locations";
import Endmsg from "@/components/company-info/Endmsg";
import Number from "@/components/home/Number";
import { onMounted } from "vue";

useHead({
  title: "Company Info | About Revolynk Techs Pvt. Ltd.",
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
      "Learn about Revolynk Techs – a dynamic IT company delivering web, mobile, and cloud solutions. Explore our mission, vision, and the values that drive us forward.",
  },
  {
    name: "keywords",
    content:
      "Revolynk company info, about Revolynk, Revolynk Techs Private Limited, company profile, IT services company, Hyderabad tech company, company mission and values",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "About Revolynk Techs | Company Info & Vision" },
  {
    property: "og:description",
    content:
      "Get to know Revolynk Techs Pvt. Ltd. – our leadership, innovation journey, and commitment to empowering businesses with cutting-edge digital solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/company-info-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/company-info" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "About Revolynk Techs | Our Story, Vision & Team",
  },
  {
    name: "twitter:description",
    content:
      "Explore who we are at Revolynk Techs – our story, our team, and what drives us to deliver digital innovation every day.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/company-info-meta-image.jpg" },
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
