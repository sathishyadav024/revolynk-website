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

import Header from "@/components/creative-enhancement/Header";
import Whythis from "@/components/creative-enhancement/Whythis";
import Whatwedo from "@/components/creative-enhancement/Whatwedo";
import Whatclient from "@/components/creative-enhancement/Whatclient";
import Casestudies from "@/components/creative-enhancement/Casestudies";
import Faqs from "@/components/creative-enhancement/Faqs";
import Cta from "@/components/creative-enhancement/Cta";

import { onMounted } from "vue";

useHead({
  link: [
    { rel: "stylesheet", href: "/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/css/satoshi.css" },
    { rel: "stylesheet", href: "/assets/css/style.css" },
  ],
  title: "Creative Enhancement | Revolynk Techs Pvt. Ltd.",
  meta: [
    {
      name: "description",
      content:
        "Learn how Revolynk Techs Private Limited collects, uses, protects, and manages your data. Our Privacy Policy ensures complete transparency and safeguards your personal and business information",
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
