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

import Intro from "@/components/team/raghu/Intro";
import Skills from "@/components/team/raghu/Skills";
import Resume from "@/components/team/raghu/Resume";
import Services from "@/components/team/raghu/Services";
import Portfolio from "@/components/team/raghu/Portfolio";
import Testimonials from "@/components/team/raghu/Testimonials";
import Contact from "@/components/team/raghu/Contact";
import { onMounted } from "vue";

useHead({
  title: "Raghuvarma Kanikaram | Frontend Developer | Revolynk Techs Pvt. Ltd.",
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
      "Meet Raghuvarma Kanikaram, a skilled Frontend Developer at Revolynk Techs Pvt. Ltd., passionate about creating seamless and engaging user experiences with modern web technologies.",
  },
  {
    name: "keywords",
    content:
      "Raghuvarma Kanikaram, frontend developer, Revolynk Techs, UI developer, JavaScript, React, HTML, CSS, web development, tech team Hyderabad",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Raghuvarma Kanikaram | Frontend Developer at Revolynk Techs" },
  {
    property: "og:description",
    content:
      "Explore the profile of Raghuvarma Kanikaram, Frontend Developer at Revolynk Techs. Building responsive and user-friendly digital experiences.",
  },
  { property: "og:image", content: "https://www.revolynk.com/raghuvarma-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/raghuvarma-kanikaram" },
  { property: "og:type", content: "profile" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Raghuvarma Kanikaram | Frontend Developer at Revolynk",
  },
  {
    name: "twitter:description",
    content:
      "Get to know Raghuvarma Kanikaram, Frontend Developer at Revolynk Techs. Crafting clean interfaces and smooth digital journeys.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/raghuvarma-meta.jpg" },
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
