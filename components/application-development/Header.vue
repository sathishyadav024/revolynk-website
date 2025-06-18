<template>
  <header
    class="blog-header bg-img section-padding pb-0"
    data-background="/dark/assets/imgs/header/bg1.jpg"
  >
    <div class="container mt-80">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="caption">
            <div class="sub-title fz-12">
              <a href="#0">
                <span>Development , </span>
              </a>
              <a href="#0">
                <span>Application Development</span>
              </a>
            </div>
            <h1 class="fz-55 mt-30">
              Smart applications for bold brands in fast-moving markets.
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div
      class="background bg-img mt-80"
      data-background="/dark/assets/imgs/blog/b1.jpg"
    ></div>
  </header>
</template>
<script setup>
import loadBackgroudImages from "@/common/loadBackgroudImages";

onMounted(() => {
  loadBackgroudImages();
});
</script>
