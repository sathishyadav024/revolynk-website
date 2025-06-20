<template>
  <section class="faqs pt-50 pb-80 position-re">
    <div class="container">
      <div class="sec-head">
        <h6 class="sub-title main-color mb-25">Our Expertise</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            AI <span class="fw-200">Strategy And Value</span>
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
                  <h6>Turning AI Potential into Tangible Business Outcomes</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    We partner with organizations to identify high-impact opportunities, define actionable AI strategies, and build frameworks that drive innovation and operational efficiency.
                  </p>
                </div>
              </div>

              <div class="item active mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>Cross-Functional AI Strategy Teams</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="mb-30">
                    AI strategists, data scientists, domain consultants, and business analysts
                  </p>
                  <p class="mb-10">
                    Bridging leadership and technical teams to align AI with enterprise goals
                  </p>
                  <p class="">
                    Industry-aware and use-case-driven strategy development
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>Business-Aligned AI Planning</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    AI roadmaps that are grounded in your objectives, capabilities, and market context.
                  </p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div @click="openAccordion" class="title">
                  <h6>Prioritized, Value-Focused Use Cases</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    Identify where AI will deliver the greatest ROI and competitive advantage.
                  </p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div @click="openAccordion" class="title">
                  <h6>Ethical & Responsible AI Governance</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    Ensure fairness, transparency, and compliance in every model and decision process.
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
