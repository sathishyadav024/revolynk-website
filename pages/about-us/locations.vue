<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Locations />
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
import Locations from "@/components/locations/Locations";
import { onMounted } from "vue";

useHead({
  title: "Our Locations | Offices of Revolynk Techs Pvt. Ltd.",
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
      "Explore the various office locations of Revolynk Techs across India and beyond. Get directions, contact details, and find the nearest office to connect with our team.",
  },
  {
    name: "keywords",
    content:
      "Revolynk office locations, Revolynk Techs branches, Revolynk Hyderabad office, tech company locations, Revolynk India, IT company locations",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Revolynk Techs | Our Global & Local Presence" },
  {
    property: "og:description",
    content:
      "Discover where we work. Find all the Revolynk Techs office locations and stay connected with us across regions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/locations-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/locations" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Revolynk Techs Locations | Connect With Our Offices",
  },
  {
    name: "twitter:description",
    content:
      "Explore Revolynk’s offices and get in touch with teams near you. Hyderabad and other strategic locations.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/locations-meta-image.jpg" },
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
