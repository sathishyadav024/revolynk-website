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
        <Advisoryboard />
        <Leaders />
        <Joinus />
        <Teamstories />
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

import Header from "@/components/our-voyagers/Header";
import Leaders from "@/components/our-voyagers/Leaders";
import Advisoryboard from "@/components/our-voyagers/Advisoryboard";
import Joinus from "@/components/our-voyagers/Joinus";
import Teamstories from "@/components/our-voyagers/Teamstories";
import { onMounted } from "vue";

useHead({
  title: "Our Voyagers | Meet the Team Behind Revolynk Techs Pvt. Ltd.",
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
      "Meet the brilliant minds at Revolynk Techs. Our team of innovators, developers, and strategists is driving the future of digital solutions with creativity and expertise.",
  },
  {
    name: "keywords",
    content:
      "Revolynk team, meet the team, tech experts, software engineers, company culture, development team, Hyderabad tech company, Revolynk Voyagers",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Meet Our Voyagers | The Team Powering Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Get to know the passionate individuals who make up Revolynk Techs. We’re more than a company—we're a team shaping the digital world.",
  },
  { property: "og:image", content: "https://www.revolynk.com/team-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/our-voyagers" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Meet the Voyagers | The Team Behind Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Discover the people shaping Revolynk Techs. From developers to designers, our team builds the future of digital innovation.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/team-meta-image.jpg" },
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
