<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Intro />
        <Departments />
        <Whereur />
        <Benifits />
        <Numbers />
        <Jobsp />
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
import Intro from "@/components/careers-main/Intro";
import Departments from "@/components/careers-main/Departments";
import Whereur from "@/components/careers-main/Whereur";
import Benifits from "@/components/careers-main/Benifits";
import Numbers from "@/components/careers-main/Numbers";
import Jobsp from "@/components/careers-main/Jobsp";

import { onMounted } from "vue";

useHead({
  title: "Careers | Join Our Team at Revolynk Techs Pvt. Ltd.",
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
      "Explore exciting career opportunities at Revolynk Techs. Join a team driving innovation in digital solutions, web and app development, and cloud technology.",
  },
  {
    name: "keywords",
    content:
      "Revolynk careers, jobs at Revolynk, tech jobs, software careers, web development jobs, Hyderabad, join Revolynk team",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Careers at Revolynk Techs | Be Part of Our Digital Journey" },
  {
    property: "og:description",
    content:
      "Join Revolynk Techs and contribute to cutting-edge projects in technology and digital transformation. Check out our open roles and apply today.",
  },
  { property: "og:image", content: "https://www.revolynk.com/careers-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/careers" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Careers at Revolynk | Innovate With Us",
  },
  {
    name: "twitter:description",
    content:
      "Explore job openings at Revolynk Techs and take your career forward in the tech industry. We’re hiring!",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/careers-meta-image.jpg" },
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
