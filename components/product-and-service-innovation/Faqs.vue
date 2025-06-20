<template>
  <section class="faqs pt-50 pb-80 position-re">
    <div class="container">
      <div class="sec-head">
        <h6 class="sub-title main-color mb-25">Our Expertise</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            Product And Service <span class="fw-200">Innovation</span>
          </h2>
          <div class="ml-auto">
            <a href="/dark/page-about2" class="go-more">
              <span class="text">View More</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="row justify-content-between">
        <div class="col-lg-12">
          <div class="list-serv">
            <div class="accordion bord">
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div @click="openAccordion" class="title">
                  <h6>Turning Vision into Viable, Scalable Market Solutions</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    We blend creativity, strategy, and experimentation to co-create digital products and service models that solve real problems and drive measurable growth.
                  </p>
                </div>
              </div>

              <div class="item active mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>Multidisciplinary Innovation Teams</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="mb-30">
                    Product strategists, designers, developers, and researchers
                  </p>
                  <p class="mb-10">
                    Agile workflows built for iteration, testing, and validation
                  </p>
                  <p class="">
                    Experience across industries, markets, and technologies
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>User-First Innovation Process</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    We start with real-world needs, behaviors, and pain points to ensure relevance and adoption.
                  </p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div @click="openAccordion" class="title">
                  <h6>MVPs & Prototypes at Speed</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    From low-fidelity sketches to fully functional MVPs, we validate fast and learn early.
                  </p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div @click="openAccordion" class="title">
                  <h6>Continuous Learning & Scaling</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    Post-launch support, feedback loops, and roadmap planning to evolve offerings with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-overlay up opacity-7">
      <svg
        viewBox="0 0 1728 1101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
          style="stroke-dasharray: 3246.53, 0"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
function openAccordion(event) {
  document.querySelectorAll(".accordion-info").forEach((element) => {
    element.classList.remove("active");
    element.style.maxHeight = 0;
    element.parentElement.classList.remove("active");
  });
  event.currentTarget.parentElement.classList.add("active");
  event.currentTarget.nextElementSibling.style.maxHeight = "300px";
  event.currentTarget.nextElementSibling.classList.add("active");
}
</script>
