<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Services />
        <Services2 />
        <Marquee />
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
import Blog from "@/components/dark/home-main/Blog";
import Clients from "@/components/dark/home-main/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/dark/home-main/Header";
import Intro from "@/components/dark/home-main/Intro";
import Marquee from "@/components/dark/home-main/Marquee";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/dark/home-main/Portfolio";
import Services from "@/components/dark/home-main/Services";
import Services2 from "@/components/dark/home-main/Services2";
import Team from "@/components/dark/home-main/Team";
import Testimonials from "@/components/dark/home-main/Testimonials";
import { onMounted } from "vue";

useHead({
  link: [
    { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
    { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
    { rel: "stylesheet", href: "/dark/assets/css/style.css" },
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
