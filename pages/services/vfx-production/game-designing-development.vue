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
        <Whythis />
        <Whatwedo />
        <Faqs />
        <Whatclient />
        <Casestudies />
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

import Header from "@/components/game-designing-development/Header";
import Whythis from "@/components/game-designing-development/Whythis";
import Whatwedo from "@/components/game-designing-development/Whatwedo";
import Whatclient from "@/components/game-designing-development/Whatclient";
import Casestudies from "@/components/game-designing-development/Casestudies";
import Faqs from "@/components/game-designing-development/Faqs";
import Cta from "@/components/game-designing-development/Cta";

import { onMounted } from "vue";

useHead({
  title: "Game Design & Development | Revolynk Techs Pvt. Ltd.",
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
      "Revolynk Techs delivers cutting-edge game design and development services, creating immersive gaming experiences across mobile, web, and consoles.",
  },
  {
    name: "keywords",
    content:
      "Game development, game design, mobile games, Unity, Unreal Engine, AR games, VR games, Revolynk, Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Game Design & Development | Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Expert game design and development services by Revolynk Techs — from ideation to launch across platforms like mobile, web, AR, and VR.",
  },
  { property: "og:image", content: "https://www.revolynk.com/game-dev-og.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/game-design-development" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Game Design & Development | Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "We design and develop engaging games using Unity, Unreal, and WebGL — explore our game studio at Revolynk Techs.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/game-dev-twitter.jpg" },
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
