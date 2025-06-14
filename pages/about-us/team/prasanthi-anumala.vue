<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div
    id="smooth-wrapper"
    class="bg-img vcard-bg"
    data-background="/light/assets/imgs/intro/vcard0.png"
  >
    <Navbar />
    <div id="smooth-content">
      <main>
        <section class="container">
          <div class="row justify-content-end">
            <div class="col-lg-6 bord-thin-top">
              <Intro />
              <Skills />
              <Resume />
              <Services />
              <Portfolio />
              <Testimonials />
              <Contact />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  </div>
</template>
<script setup>
import Lines from "@/components/Linesli";
import ProgressScroll from "@/components/ProgressScrollli";
import Cursor from "@/components/cusorli";
import LoadingScreen from "@/components/loaderli";
import Footer from "@/components/Footerli";
import Navbar from "@/components/Navbarlight";

import Intro from "@/components/team/prasanthi/Intro";
import Skills from "@/components/team/prasanthi/Skills";
import Resume from "@/components/team/prasanthi/Resume";
import Services from "@/components/team/prasanthi/Services";
import Portfolio from "@/components/team/prasanthi/Portfolio";
import Testimonials from "@/components/team/prasanthi/Testimonials";
import Contact from "@/components/team/prasanthi/Contact";
import { onMounted } from "vue";

useHead({
  title: "Prasanthi Anumala | Director at Revolynk Techs Pvt. Ltd.",
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
      "Learn about Prasanthi Anumala, Director at Revolynk Techs Pvt. Ltd. Discover her role in leading innovation, strategic planning, and building next-gen digital solutions.",
  },
  {
    name: "keywords",
    content:
      "Prasanthi Anumala, Revolynk director, leadership, women in tech, tech leader India, digital strategy, Revolynk Techs Pvt. Ltd.",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Prasanthi Anumala | Director at Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Explore the leadership journey of Prasanthi Anumala, a driving force behind Revolynk Techs' success in delivering world-class digital solutions.",
  },
  { property: "og:image", content: "https://www.revolynk.com/prasanthi-anumala-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/prasanthi-anumala" },
  { property: "og:type", content: "profile" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Prasanthi Anumala | Director at Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Meet Prasanthi Anumala, a key leader at Revolynk Techs. Learn about her impactful contributions to digital innovation and strategic leadership.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/prasanthi-anumala-meta.jpg" },
  { name: "fb:app_id", content: "Your_FB_App_ID" },
],
  link: [
    { rel: "stylesheet", href: "/assets/light/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/light/css/satoshi.css" },
    { rel: "stylesheet", href: "/assets/light/css/style.css" },
  ],
  // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
});

import loadBackgroudImages from "@/common/loadBackgroudImages";

onMounted(() => {
  loadBackgroudImages();
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
