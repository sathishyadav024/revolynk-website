<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo icon-img-140" href="/">
        <img src="/assets/imgs/logo/footer-logo.webp" alt="logo" />
      </a>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Insights</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/insights/casestudies">
                Casestudies
              </a>
              <a class="dropdown-item" href="/insights/blogs"> Blogs </a>
              <a class="dropdown-item" href="/insights/podcasts"> Podcasts </a>
              <a class="dropdown-item" href="/insights/live-interviews">
                Live Interviews
              </a>
              <a class="dropdown-item" href="/insights/news"> News</a>
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">What we do</span>
            </a>
            <div class="dropdown-menu mega-menu">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="clumn mb-80">
                      <div class="title">
                        <a href="/services/what-we-are-offering">
                          <h6 class="sub-title ls1 pb-20 bord-thin-bottom">
                            What We Do
                          </h6>
                        </a>
                      </div>
                      <div class="links row">
                        <div class="col-lg-4">
                          <a
                            class="dropdown-item"
                            href="/services/cloud-solutions"
                          >
                            Cloud
                          </a>
                          <a
                            class="dropdown-item"
                            href="/services/cyber-security"
                          >
                            Cyber Security
                          </a>
                          <a
                            class="dropdown-item"
                            href="/services/data-and-artificial-intelligence"
                          >
                            Data and AI
                          </a>
                        </div>
                        <div class="col-lg-4">
                          <a
                            class="dropdown-item"
                            href="/services/technology-transformation"
                          >
                            Technology Transformation
                          </a>
                          <a
                            class="dropdown-item"
                            href="/services/marketing-and-experience"
                          >
                            Marketing and Experience
                          </a>
                          <a
                            class="dropdown-item"
                            href="/services/digital-engineering"
                          >
                            Digital Engineering
                          </a>
                        </div>
                        <div class="col-lg-4">
                          <a
                            class="dropdown-item"
                            href="/services/vfx-and-production"
                          >
                            VFX and Production
                          </a>
                          <a
                            class="dropdown-item"
                            href="/services/talent-acquisition"
                          >
                            Talent Acquisition
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="clumn">
                      <div class="title">
                        <h6 class="sub-title ls1 pb-20 bord-thin-bottom">
                          Industries
                        </h6>
                      </div>
                      <div class="links row">
                        <div class="col-lg-4">
                          <a
                            class="dropdown-item"
                            href="/industries/automotive"
                          >
                            Automotive
                          </a>
                          <a
                            class="dropdown-item"
                            href="/industries/banking-and-finance"
                          >
                            Banking and Finance
                          </a>
                          <a
                            class="dropdown-item"
                            href="/industries/real-estate"
                          >
                            Real Estate
                          </a>
                          <a
                            class="dropdown-item"
                            href="/industries/media-and-communication"
                          >
                            Media and Communication
                          </a>
                        </div>
                        <div class="col-lg-4">
                          <a
                            class="dropdown-item"
                            href="/industries/consumer-goods"
                          >
                            Consumer Goods
                          </a>
                          <a
                            class="dropdown-item"
                            href="/industries/healthcare"
                          >
                            Healthcare
                          </a>
                          <a class="dropdown-item" href="/industries/chemical">
                            Chemical
                          </a>
                          <a class="dropdown-item" href="/industries/education">
                            Education
                          </a>
                        </div>
                        <div class="col-lg-4">
                          <a
                            class="dropdown-item"
                            href="/industries/industrial"
                          >
                            Industrial
                          </a>
                          <a class="dropdown-item" href="/industries/travel">
                            Travel
                          </a>
                          <a
                            class="dropdown-item"
                            href="/industries/beauty-and-cosmetics"
                          >
                            Beauty and Cosmetics
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Viewpoint</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/viewpoint/casestudies">
                Perspectives
              </a>
              <a class="dropdown-item" href="/viewpoint/research-reports"
                >Research Reports</a
              >
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Careers</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/careers/careers-main">
                Careers Main
              </a>
              <a class="dropdown-item" href="/careers/job-openings">
                Job Openings
              </a>
              <a class="dropdown-item" href="/careers/how-we-hire"
                >How We Hire</a
              >
              <a class="dropdown-item" href="/careers/work-environment"
                >Environment</a
              >
              <a class="dropdown-item" href="/legal/work-policy">Work Policy</a>
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">About us</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/about-us/company-info">
                Company Info
              </a>
              <a class="dropdown-item" href="/about-us/our-voyagers"
                >Our Voyagers</a
              >
              <a class="dropdown-item" href="/about-us/locations">Locations</a>
              <a class="dropdown-item" href="/about-us/contact-us"
                >Contact Us</a
              >
            </div>
          </li>
        </ul>
      </div>

      <div class="search-form">
        <div class="search-icon">
          <a href="#0">
            <i class="fab fa-telegram whatsapp-button"></i>
          </a>
        </div>
      </div>
      <div class="topnav">
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo icon-img-140">
      <img src="/assets/imgs/logo/footer-logo.webp" alt="" />
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>MENU</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Insights">
                      Insights
                    </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a href="/insights/casestudies" class="sub-link">
                        Casestudies
                      </a>
                    </li>
                    <li>
                      <a href="/insights/blogs" class="sub-link"> Blogs </a>
                    </li>
                    <li>
                      <a href="/insights/podcasts" class="sub-link">
                        Podcasts
                      </a>
                    </li>
                    <li>
                      <a href="/insights/live-interviews" class="sub-link">
                        Live Interviews
                      </a>
                    </li>
                    <li>
                      <a href="/insights/news" class="sub-link"> News </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="What We Do">
                      What We Do
                    </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu no-bord">
                  <ul>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Our Services">
                            Our Services
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a
                              href="/services/cloud-solutions"
                              class="sub-link"
                            >
                              Cloud
                            </a>
                          </li>
                          <li>
                            <a href="/services/cyber-security" class="sub-link">
                              Cyber Security
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/data-and-artificial-intelligence"
                              class="sub-link"
                            >
                              Data and AI
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/technology-transformation"
                              class="sub-link"
                            >
                              Technology Transformation
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/marketing-and-experience"
                              class="sub-link"
                            >
                              Marketing and Experience
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/digital-engineering"
                              class="sub-link"
                            >
                              Digital Engineering
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/vfx-and-production"
                              class="sub-link"
                            >
                              VFX and Production
                            </a>
                          </li>
                          <li>
                            <a
                              href="/services/talent-acquisition"
                              class="sub-link"
                            >
                              Talent Acquisition
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li @click="toggleSubMenu2">
                      <div class="o-hidden">
                        <div class="link cursor-pointer sub-dmenu">
                          <span class="fill-text" data-text="Industries">
                            Industries
                          </span>
                          <i></i>
                        </div>
                      </div>
                      <div class="sub-menu2">
                        <ul>
                          <li>
                            <a href="/industries/automotive" class="sub-link">
                              Automotive
                            </a>
                          </li>
                          <li>
                            <a
                              href="/industries/banking-and-finance"
                              class="sub-link"
                            >
                              Banking and Finance
                            </a>
                          </li>
                          <li>
                            <a href="/industries/real-estate" class="sub-link">
                              Real Estate
                            </a>
                          </li>
                          <li>
                            <a
                              href="/industries/media-and-communication"
                              class="sub-link"
                            >
                              Media and Communication
                            </a>
                          </li>
                          <li>
                            <a
                              href="/industries/consumer-goods"
                              class="sub-link"
                            >
                              Consumer Goods
                            </a>
                          </li>
                          <li>
                            <a href="/industries/healthcare" class="sub-link">
                              Healthcare
                            </a>
                          </li>
                          <li>
                            <a href="/industries/chemical" class="sub-link">
                              Chemical
                            </a>
                          </li>
                          <li>
                            <a href="/industries/education" class="sub-link">
                              Education
                            </a>
                          </li>
                          <li>
                            <a href="/industries/industrial" class="sub-link">
                              Industrial
                            </a>
                          </li>
                          <li>
                            <a href="/industries/travel" class="sub-link">
                              Travel
                            </a>
                          </li>
                          <li>
                            <a
                              href="/industries/beauty-and-cosmetics"
                              class="sub-link"
                            >
                              Beauty and Cosmetics
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Viewpoint">
                      Viewpoint
                    </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a href="/viewpoint/perspectives" class="sub-link">
                        Perspectives
                      </a>
                    </li>
                    <li>
                      <a href="/viewpoint/research-reports" class="sub-link">
                        Research Reports
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Careers"> Careers </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a class="sub-link" href="/careers/careers-main">
                        Careers Main
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/careers/job-openings">
                        Job Openings
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/careers/how-we-hire">
                        How We Hire
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/careers/work-environment">
                        Environment
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/careers/work-policy">
                        Work Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="About Us">
                      About Us
                    </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a class="sub-link" href="/about-us/company-info">
                        Company Info
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/about-us/our-voyagers">
                        Our Voyagers
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/about-us/locations">
                        Locations
                      </a>
                    </li>
                    <li>
                      <a class="sub-link" href="/about-us/contact-us">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Address</h6>
              <h5>
                1-4-180/112/A, 1st Floor, S B O Colony, Kapra, Secunderabad,<br />
                Telangana, India, 500062
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Social Media</h6>
              <ul class="rest social-text">
                <li class="mb-10">
                  <a
                    href="https://www.facebook.com/revolynk"
                    class="hover-this"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="hover-anim">Facebook</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a
                    href="https://twitter.com/revolynk"
                    class="hover-this"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="hover-anim">Twitter</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a
                    href="https://www.linkedin.com/company/revolynk-techs-private-limited"
                    class="hover-this"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a
                    href="https://www.instagram.com/revolynk"
                    class="hover-this"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@revolynk"
                    class="hover-this"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="hover-anim">Youtube</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contact Us</h6>
              <h5>
                <a href="mailto:helpdesk@revolynk.com">helpdesk@revolynk.com</a>
              </h5>
              <h5 class="underline mt-10">
                <a href="tel:+91 70930 83375">+91 70930 83375</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector(".navbar");

  if (bodyScroll > 300) navbar.classList.add("nav-scroll");
  else navbar.classList.remove("nav-scroll");
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector(".dropdown-menu").classList.remove("show");
}

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector(".dropdown-side").classList.add("show");
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector(".dropdown-side").classList.remove("show");
}

function toggleSearch() {
  let form = document.querySelector(".navbar .search-form");
  let closeBtn = document.querySelector(".search-form .close-search");

  form.classList.toggle("open");
  if (form.classList.contains("open")) closeBtn.style.display = "block";
  else closeBtn.style.display = "none";
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector(".hamenu");
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = "-100%")
      : (hamenu.style.left = "0");
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector(".hamenu");

  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = "-100%";
  }, 300);
}

function handleMouseEnter(event) {
  document.querySelectorAll("ul.main-menu li").forEach((item) => {
    item.classList.add("hoverd");
  });
  event.currentTarget.classList.remove("hoverd");
}

function handleMouseLeave() {
  document
    .querySelectorAll("ul.main-menu li")
    .forEach((item) => item.classList.remove("hoverd"));
}
function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector(".sub-menu");
  const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
  if (subMenu) {
    if (subMenu.classList.contains("sub-open") && SubMenu2 == null) {
      document.querySelectorAll(".sub-menu").forEach((item) => {
        item.classList.remove("sub-open");
        item.style.maxHeight = "0";
        item.previousElementSibling.children[0].classList.remove("dopen");
      });
      subMenu.classList.remove("sub-open");
      subMenu.style.maxHeight = "0";
      subMenu.previousElementSibling.children[0].classList.remove("dopen");
    } else if (!subMenu.classList.contains("sub-open")) {
      if (SubMenu2 == null) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });

        subMenu.classList.add("sub-open");
        subMenu.style.maxHeight = "450px";
        subMenu.previousElementSibling.children[0].classList.add("dopen");
      } else {
        subMenu.classList.add("sub-open");
        subMenu.style.maxHeight = "450px";
        subMenu.previousElementSibling.children[0].classList.add("dopen");
      }
    }
  }
}
function toggleSubMenu2(event) {
  const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
  if (SubMenu2) {
    if (SubMenu2.classList.contains("sub-open")) {
      event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
        item.classList.remove("sub-open");
        item.style.maxHeight = "0";
        item.previousElementSibling.children[0].classList.remove("dopen");
      });
      SubMenu2.classList.remove("sub-open");
      SubMenu2.style.maxHeight = "0";
      SubMenu2.previousElementSibling.children[0].classList.remove("dopen");
    } else if (!SubMenu2.classList.contains("sub-open")) {
      event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
        item.classList.remove("sub-open");
        item.style.maxHeight = "0";
        item.previousElementSibling.children[0].classList.remove("dopen");
      });
      SubMenu2.classList.add("sub-open");
      SubMenu2.style.maxHeight = "450px";
      SubMenu2.previousElementSibling.children[0].classList.add("dopen");
    }
  }
}
</script>
