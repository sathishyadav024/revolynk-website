<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Services />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from "@/components/Linesli";
import ProgressScroll from "@/components/ProgressScrollli";
import Cursor from "@/components/cusorli";
import LoadingScreen from "@/components/loaderli";
import About from "@/components/vganumala/About";
import Blog from "@/components/vganumala/Blog";
import Contact from "@/components/vganumala/Contact";
import Footer from "@/components/Footerli";
import Header from "@/components/vganumala/Header";
import Navbar from "@/components/Navbarlight";
import Portfolio from "@/components/vganumala/Portfolio";
import Services from "@/components/vganumala/Services";
import Skills from "@/components/vganumala/Skills";
import Testimonials from "@/components/vganumala/Testimonials";
import { onMounted } from "vue";

useHead({
  link: [
    { rel: "stylesheet", href: "/assets/light/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/light/css/satoshi.css" },
    { rel: "stylesheet", href: "/assets/light/css/style.css" },
  ],

  title: "Vganumala | Revolynk Techs Pvt. Ltd.",
  meta: [
    {
      name: "description",
      content:
        "Learn how Revolynk Techs Private Limited collects, uses, protects, and manages your data. Our Privacy Policy ensures complete transparency and safeguards your personal and business information",
    },
  ],
  // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
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
