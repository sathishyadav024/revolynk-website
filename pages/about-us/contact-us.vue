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
        <Scopes />
        <Enquiry />
        <Cform />
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

import Header from "@/components/contact-us/Header";
import Scopes from "@/components/contact-us/Scopes";
import Enquiry from "@/components/contact-us/Enquiry";
import Cform from "@/components/contact-us/Cform";
import { onMounted } from "vue";

useHead({
  title: "Contact Revolynk | Get in Touch with Revolynk Techs Pvt. Ltd.",
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
      "Looking to connect with Revolynk Techs? Reach out for business inquiries, partnerships, or support. We're here to help with digital solutions tailored to your needs.",
  },
  {
    name: "keywords",
    content:
      "contact Revolynk, Revolynk address, get in touch, tech solutions contact, Revolynk Hyderabad, support, business inquiry, web development contact",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Contact Revolynk | Let’s Build Something Great Together" },
  {
    property: "og:description",
    content:
      "Have a project or question? Contact Revolynk Techs for expert help in web development, mobile apps, and cloud solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/contact-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/contact" },
  { property: "og:type", content: "website" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Contact Revolynk | Let’s Talk About Your Next Project",
  },
  {
    name: "twitter:description",
    content:
      "Connect with the team at Revolynk Techs for digital innovation and tailored tech services.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/contact-meta-image.jpg" },
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
