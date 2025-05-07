<template>
  <section
    class="inter-links-center vertical d-flex align-items-end section-padding pb-80"
  >
    <div class="container-xxl">
      <div class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div class="links-text">
            <ul class="rest">
              <li
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                data-tab="tab-1"
              >
                <h2>
                  <span class="num">01.</span>
                  <a href="/dark/project1">
                    <span class="text f-bold">Retouch Photo</span>
                  </a>
                </h2>
              </li>
              <li
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                data-tab="tab-2"
              >
                <h2>
                  <span class="num">02.</span>
                  <a href="/dark/project2">
                    <span class="text f-bold">Earthmade Aroma</span>
                  </a>
                </h2>
              </li>
              <li
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                data-tab="tab-3"
              >
                <h2>
                  <span class="num">03.</span>
                  <a href="/dark/project3">
                    <span class="text f-bold">Bank Rebranding</span>
                  </a>
                </h2>
              </li>
              <li
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                data-tab="tab-4"
              >
                <h2>
                  <span class="num">04.</span>
                  <a href="/dark/project4">
                    <span class="text f-bold">The joy of music</span>
                  </a>
                </h2>
              </li>
              <li
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                data-tab="tab-5"
              >
                <h2>
                  <span class="num">05.</span>
                  <a href="/dark/project5">
                    <span class="text f-bold">Blue Adobe MAX</span>
                  </a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="links-img">
      <div class="img" id="tab-1" data-overlay-dark="3">
        <img src="/dark/assets/imgs/works/full/1.jpg" alt="" />
      </div>
      <div class="img" id="tab-2" data-overlay-dark="3">
        <img src="/dark/assets/imgs/works/full/2.jpg" alt="" />
      </div>
      <div class="img" id="tab-3" data-overlay-dark="3">
        <img src="/dark/assets/imgs/works/full/3.jpg" alt="" />
      </div>
      <div class="img" id="tab-4" data-overlay-dark="3">
        <img src="/dark/assets/imgs/works/full/4.jpg" alt="" />
      </div>
      <div class="img" id="tab-5" data-overlay-dark="3">
        <img src="/dark/assets/imgs/works/full/5.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
const handleMouseEnter = (event) => {
  const tab_id = event.currentTarget.dataset.tab;

  document.querySelectorAll(".links-text li").forEach((el) => {
    el.classList.remove("current");
    el.classList.remove("no-active");
  });
  event.currentTarget.classList.add("current");
  event.currentTarget.classList.remove("no-active");

  document
    .querySelectorAll(".links-img .img")
    .forEach((el) => el.classList.remove("current"));
  document.querySelector("#" + tab_id).classList.add("current");

  if (event.currentTarget.classList.contains("current")) return false;
};

const handleMouseLeave = () => {
  document.querySelectorAll(".links-text li").forEach((el) => {
    el.classList.remove("current");
    el.classList.remove("no-active");
  });
  document
    .querySelectorAll(".links-img .img")
    .forEach((el) => el.classList.remove("current"));
};
</script>
