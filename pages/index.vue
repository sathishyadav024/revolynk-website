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
        <Insights />
        <Services />
        <About />
        <Companyrec />
        <Clientfeed />
        <Number />
        <Latestnews />
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
import Header from "@/components/home/Header";
import Navbar from "@/components/Navbar";
import Insights from "@/components/home/Insights";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Number from "@/components/home/Number";
import Companyrec from "@/components/home/Companyrec";
import Clientfeed from "@/components/home/Clientfeed";
import Latestnews from "@/components/home/Latestnews";

import { onMounted } from "vue";

useHead({
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
