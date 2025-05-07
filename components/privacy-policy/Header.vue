<template>
  <header class="header-project1">
    <div class="container pt-100">
      <div class="row align-items-end">
        <div class="col-lg-8 md-mb50">
          <div>
            <h1 class="fz-70">
              Revolynk techs<br />
              privacy statement<span class="color-brand-sec">.</span>
            </h1>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="info">
            <div class="row">
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Category :</span>
                  <h6>Legal</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Author :</span>
                  <h6>Team Voyagers</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Published Date :</span>
                  <h6>03 September 2024</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="item">
                  <span class="opacity-8 mb-5">Latest Updated On :</span>
                  <h6>19 April 2025</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from "@/common/loadBackgroudImages";

onMounted(() => {
  loadBackgroudImages();
});
</script>
