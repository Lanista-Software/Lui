<template>
  <div class="product-preview-card bg-white shadow radius-08 ">
    <div class="product-preview-card-responsive-left">
      <productpreview-cardleft></productpreview-cardleft>
    </div>
    <div class="product-preview-card-desktop-top bg-light">
      <productpreview-cardtop></productpreview-cardtop>
    </div>
    <div class="product-preview-card-img">
      <img src="/erbay/lastik.png" />
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
    <div class="product-preview-card-desktop-bottom bg-light">
      <div class="product-preview-card-desktop-bottom-inline">
        <h6 class="text-dark">
          KIŞ LASTİĞİ
        </h6>
        <span>
          <i class="ri-snowy-fill text-blue" />
        </span>
      </div>
      <h6 class="text-dark fw-300 product-preview-card-desktop-bottom-model">
        NOKIAN WR Snowproof 205/55 R16 91H(D5) 2019 Üretimi
      </h6>
      <div>
        <span
          class="text-dark fw-300 product-preview-card-desktop-bottom-packet"
        >
          AMBALAJLI KARGO - 2 YIL GARANTİ
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ProductpreviewCardleft from "./ProductpreviewCardleft.vue";
import ProductpreviewCardtop from "./ProductpreviewCardtop.vue";
export default {
  components: { ProductpreviewCardleft, ProductpreviewCardtop }
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
  &-desktop-top {
    display: none;
  }
  &-desktop-bottom {
    display: none;
  }
  &-img {
    display: none;
  }
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
@media ($lg) {
  .product-preview-card {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    padding: 0px;
    width: 275px;
    &-responsive-left {
      display: none;
    }
    &-desc {
      display: none;
    }
    &-desktop-bottom {
      display: block;
      padding: 15px;
      &-model {
        margin-top: 18px;
        width: 80%;
      }
      &-packet {
        font-size: 12px;
        font-family: $baseFont;
        opacity: 0.5;
        padding-top: 14px;
        font-weight: bold;
      }
      &-inline {
        display: inline-flex;
        align-items: center;
        width: 100%;
        h6 {
          width: 100%;
          opacity: 0.5;
        }
        i {
          font-size: 24px;
        }
        span {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
    &-desktop-top {
      display: flex;
      align-items: center;
      height: 70px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    &-img {
      display: block;
      justify-self: center;
    }
  }
}
</style>
