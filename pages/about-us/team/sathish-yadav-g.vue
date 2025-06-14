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

import Intro from "@/components/team/sathish/Intro";
import Skills from "@/components/team/sathish/Skills";
import Resume from "@/components/team/sathish/Resume";
import Services from "@/components/team/sathish/Services";
import Portfolio from "@/components/team/sathish/Portfolio";
import Testimonials from "@/components/team/sathish/Testimonials";
import Contact from "@/components/team/sathish/Contact";
import { onMounted } from "vue";

useHead({
  title: "Sathish Gurka | DevOps & Backend Engineer | Revolynk Techs Pvt. Ltd.",
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
      "Explore the profile of Sathish Gurka, DevOps and Backend Engineer at Revolynk Techs Pvt. Ltd. Specialized in scalable infrastructure, robust backend systems, and cross-functional frontend collaboration.",
  },
  {
    name: "keywords",
    content:
      "Sathish Gurka, DevOps engineer, backend developer, Revolynk Techs, cloud engineering, Node.js, CI/CD, infrastructure automation, fullstack collaboration, Hyderabad tech talent",
  },
  { name: "robots", content: "index, follow" },
  { name: "geo.country", content: "IN" },
  { name: "geo.region", content: "IN-TG" },
  { name: "geo.placename", content: "Hyderabad" },
  { name: "ICBM", content: "17.49280282, 78.54749160" },

  { property: "og:title", content: "Sathish Gurka | DevOps & Backend Engineer at Revolynk" },
  {
    property: "og:description",
    content:
      "Sathish Gurka plays a pivotal role at Revolynk Techs, bridging DevOps, backend systems, and frontend collaboration to deliver efficient digital infrastructure.",
  },
  { property: "og:image", content: "https://www.revolynk.com/sathish-gurka-meta.jpg" },
  { property: "og:url", content: "https://www.revolynk.com/sathish-gurka" },
  { property: "og:type", content: "profile" },

  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Sathish Gurka | DevOps & Backend Engineer | Revolynk Techs Pvt. Ltd.",
  },
  {
    name: "twitter:description",
    content:
      "Meet Sathish Gurka, DevOps and Backend Engineer at Revolynk Techs. Expert in backend architecture, CI/CD pipelines, and collaborative frontend integration.",
  },
  { name: "twitter:image", content: "https://www.revolynk.com/sathish-gurka-meta.jpg" },
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
