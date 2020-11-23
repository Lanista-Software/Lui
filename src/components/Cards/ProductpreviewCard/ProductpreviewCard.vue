<template>
  <div class="product-preview-card bg-white shadow radius-08 ">
    <div>
      <productpreview-cardleft></productpreview-cardleft>
    </div>
    <div class="product-preview-card-desc">
      <div class="product-preview-card-desc-top">
        <h5 class="text-dark fw-300">
          NOKIAN WR Snowproof 205/55 R16 91H(D5) 2019 Üretimi
        </h5>
      </div>
      <div class="product-preview-card-desc-bottom">
        <h6>
          AMBALAJLI KARGO - 2 YIL GARANTİ
        </h6>
        <a href="/">
          <i class="ri-arrow-right-line text-primary"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ProductpreviewCardleft from "./ProductpreviewCardleft.vue";
export default {
  components: { ProductpreviewCardleft }
};
</script>

<style lang="scss" scoped>
.product-preview-card {
  height: auto;
  display: grid;
  align-items: center;
  font-family: $baseFont;
  gap: 1rem;
  grid-template-columns: 0.1fr 1fr;
  padding: 10px;
  &-desc {
    height: 100%;
    width: 100%;

    justify-self: flex-start;
    &-top {
      display: flex;
      width: 60%;
      height: 50%;
      align-items: flex-start;
    }
    &-bottom {
      display: flex;
      height: 50%;
      align-items: flex-end;
      width: 100%;
      h6 {
        opacity: 0.5;
        width: 100%;
      }
      a {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
