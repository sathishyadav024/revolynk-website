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
  link: [
    { rel: "stylesheet", href: "/assets/light/css/plugins.css" },
    { rel: "stylesheet", href: "/assets/light/css/satoshi.css" },
    { rel: "stylesheet", href: "/assets/light/css/style.css" },
  ],

  title: "Prasanthi Anumala | Revolynk Techs Pvt. Ltd.",
  meta: [
    {
      name: "description",
      content:
        "Learn how Revolynk Techs Private Limited collects, uses, protects, and manages your data. Our Privacy Policy ensures complete transparency and safeguards your personal and business information",
    },
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
