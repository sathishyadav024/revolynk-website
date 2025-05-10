<template>
  <header
    class="header main-header bg-img pb-300"
    data-background="/assets/imgs/home/bg1.webp"
    data-overlay-dark="8"
  >
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <div class="text mb-100">
            <h4>
              We prioritizes in providing high-quality design and branding
              solutions to businesses and individuals.
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ontop">
      <div class="container">
        <div class="lg-text">
          <div class="d-flex">
            <h6>Together we</h6>
          </div>
          <h1>Invent the future...</h1>
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
