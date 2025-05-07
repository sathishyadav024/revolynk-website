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

import Header from "@/components/infrastructure-management/Header";
import Whythis from "@/components/infrastructure-management/Whythis";
import Whatwedo from "@/components/infrastructure-management/Whatwedo";
import Whatclient from "@/components/infrastructure-management/Whatclient";
import Casestudies from "@/components/infrastructure-management/Casestudies";
import Faqs from "@/components/infrastructure-management/Faqs";
import Cta from "@/components/infrastructure-management/Cta";

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
