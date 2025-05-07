<template>
  <header
    class="header main-header bg-img"
    data-background="/assets/imgs/home/bg1.webp"
    data-overlay-dark="8"
  >
    <div class="container pt-100">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <div class="text mb-100">
            <h4>
              We are a creative studio that specializes in providing
              high-quality design and branding solutions to businesses and
              individuals.
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ontop">
      <div class="container">
        <div class="lg-text">
          <div class="d-flex">
            <h6>BUILIDNG DIGITAL DESIGN</h6>
            <h6 class="ml-auto">Inventing the future..</h6>
          </div>
          <h1 class="pb-50">Inventing the future..</h1>
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
