<template>
  <section class="faqs pt-50 pb-80 position-re">
    <div class="container">
      <div class="sec-head">
        <h6 class="sub-title main-color mb-25">Our Expertise</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">
            Responsible <span class="fw-200">AI</span>
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
                  <h6>Building Trustworthy AI Systems That Put People First</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    We integrate responsible design, governance, and monitoring to ensure your AI initiatives are transparent, accountable, and aligned with ethical standards.
                  </p>
                </div>
              </div>

              <div class="item active mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>AI Ethics & Compliance Experts</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="mb-30">
                    AI ethicists, legal advisors, ML engineers, and data privacy consultants
                  </p>
                  <p class="mb-10">
                    Guidance across governance, regulatory alignment, and technical validation
                  </p>
                  <p class="">
                    Industry-specific experience in finance, healthcare, education, and government
                  </p>
                </div>
              </div>

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div @click="openAccordion" class="title">
                  <h6>Ethics-by-Design Frameworks</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    Bake responsibility into every step — from data sourcing and model development to deployment and iteration.
                  </p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div @click="openAccordion" class="title">
                  <h6>Bias Detection & Explainability Tools</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    Uncover hidden bias, improve fairness, and deliver transparent AI decisions stakeholders can trust.
                  </p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div @click="openAccordion" class="title">
                  <h6>Secure, Compliant AI Operations</h6>
                  <span class="ico ti-plus"></span>
                </div>
                <div class="accordion-info">
                  <p class="">
                    Ensure your AI meets regulatory standards such as GDPR, AI Act, and sector-specific policies — backed by auditable systems.
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
