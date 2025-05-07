<template>
  <footer class="sub-bg modern-footer pt-80">
    <div class="footer-container">
      <div class="container ontop">
        <div class="row pb-30 bord-thin-bottom">
          <div class="col-lg-5">
            <div class="logo icon-img-140">
              <img src="/assets/imgs/logo/footer-logo.webp" alt="" />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="social-media d-flex justify-content-end">
              <ul class="rest d-flex align-items-center fz-14">
                <li class="hover-this cursor-pointer">
                  <a
                    href="https://www.facebook.com/revolynk"
                    target="_blank"
                    class="hover-anim"
                  >
                    <i class="fab fa-facebook-f mr-10"></i> Facebook
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a
                    href="https://www.instagram.com/revolynk"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover-anim"
                  >
                    <i class="fab fa-instagram mr-10"></i> Instagram
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a
                    href="https://www.linkedin.com/company/revolynk-techs-private-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover-anim"
                  >
                    <i class="fab fa-linkedin-in mr-10"></i> LinkedIn
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a
                    href="https://twitter.com/revolynk"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover-anim"
                  >
                    <i class="fab fa-twitter mr-10"></i> Twitter X
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a
                    href="https://www.pinterest.com/revolynk"
                    class="hover-anim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-pinterest mr-10"></i> Pinterest
                  </a>
                </li>
                <li class="hover-this cursor-pointer ml-50">
                  <a
                    href="https://www.youtube.com/@revolynk"
                    class="hover-anim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-youtube mr-10"></i> Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row pt-80">
          <div class="col-lg-7">
            <div class="call-action">
              <h2 class="d-slideup wow fz-60 fw-600">
                <span class="sideup-text">
                  <span class="up-text">Have a project in mind?</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text underline">
                    <a href="/about-us/contact-us" class="main-color">
                      Let’s get to work.
                    </a>
                  </span>
                </span>
              </h2>
              <div class="info mt-80 d-flex align-items-center">
                <div>
                  <a
                    href="mailto:helpdesk@revolynk.com"
                    class="butn butn-md butn-bord-thin radius-30"
                  >
                    <span class="text">helpdesk@revolynk.com</span>
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+91 70930 83375"
                    class="butn butn-md butn-bord-thin radius-30 ml-30"
                  >
                    <span class="text">+91 70930 83375</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 bord-left">
            <div class="column">
              <h6 class="sub-title mb-30">Connect With Us</h6>
              <div class="row">
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="/about-us/company-info">About Revolynk</a>
                    </li>
                    <li class="mb-15">
                      <a href="/careers/careers-main">Careers</a>
                    </li>
                    <li class="mb-15">
                      <a href="/insights/blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="/about-us/contact-us">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div class="col-6">
                  <ul class="rest fz-14">
                    <li class="mb-15">
                      <a href="/legal/terms-and-conditions"
                        >Terms & Conditions</a
                      >
                    </li>
                    <li class="mb-15">
                      <a href="/legal/privacy-policy">Privacy Policy</a>
                    </li>
                    <li class="mb-15">
                      <a href="/legal/sitemap">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="subscribe-minimal mt-50">
              <form action="contact.php">
                <div class="form-group rest">
                  <input type="email" placeholder="Type Your Email" />
                  <button type="submit">
                    <i class="ti-arrow-top-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="text-center pt-30 pb-30 main-bg mt-80">
          <p class="fz-14">
            © {{ currentYear }} All Rights Reserved by
            <span class="underline main-color">
              <a href="https://www.revolynk.com"> Revolynk Techs Pvt. Ltd. </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import loadBackgroudImages from "@/common/loadBackgroudImages";

onMounted(() => {
  gsap.set(".footer-container", { yPercent: -50 });
  const uncover = gsap.timeline({ paused: true });
  uncover.to(".footer-container", { yPercent: 0, ease: "none" });

  ScrollTrigger.create({
    trigger: "main",
    start: "bottom bottom",
    end: "+=50%",
    animation: uncover,
    scrub: true,
  });
  loadBackgroudImages();
});
</script>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
