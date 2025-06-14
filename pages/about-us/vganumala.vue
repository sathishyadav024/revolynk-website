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
  title: "Vganumala | CEO & Founder | Revolynk Techs Pvt. Ltd.",
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
      "Learn about Vganumala, the visionary CEO and Founder of Revolynk Techs Pvt. Ltd. Discover his leadership journey, values, and mission to drive innovation through digital solutions.",
  },
  {
    name: "keywords",
    content:
      "Vganumala, Revolynk CEO, founder of Revolynk Techs, leadership, tech entrepreneur, startup founder India, digital transformation leader",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Vganumala | CEO & Founder of Revolynk Techs Pvt. Ltd." },
  {
    property: "og:description",
    content:
      "Get to know Vganumala, the entrepreneur and innovator behind Revolynk Techs. Explore his mission, leadership style, and role in building a digital-first future.",
  },
  { property: "og:image", content: "https://www.revolynk.com/vganumala-meta-image.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/vganumala" },
  { property: "og:type", content: "profile" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Vganumala | CEO & Visionary at Revolynk Techs",
  },
  {
    name: "twitter:description",
    content:
      "Meet Vganumala, the driving force behind Revolynk Techs. His leadership is reshaping the digital landscape in India and beyond.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/vganumala-meta-image.jpg" },
  { name: "fb:app_id", content: "Your_FB_App_ID" },
],
  link: [
    { rel: "stylesheet", href: "/assets/light/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/light/css/satoshi.css" },
    { rel: "stylesheet", href: "/assets/light/css/style.css" },
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
