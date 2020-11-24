<template>
  <div class="product-preview-card bg-white shadow radius-08 ">
    <div class="product-preview-card-responsive-left">
      <productpreview-cardleft></productpreview-cardleft>
    </div>
    <div class="product-preview-card-desktop-top bg-light-100">
      <productpreview-cardtop></productpreview-cardtop>
    </div>
    <div class="product-preview-card-img">
      <img src="/erbay/lastik.png" />
    </div>
    <div class="product-preview-card-desc">
      <div class="product-preview-card-desc-top">
        <h5 class="text-dark fw-300">
          <slot />
        </h5>
      </div>
      <div class="product-preview-card-desc-bottom">
        <h6>
          AMBALAJLI KARGO - 2 YIL GARANTİ
        </h6>
        <a :href="href">
          <i class="ri-arrow-right-line text-primary"></i>
        </a>
      </div>
    </div>
    <div class="product-preview-card-desktop-bottom bg-light-100">
      <div class="product-preview-card-desktop-bottom-inline">
        <h6 class="text-dark">
          KIŞ LASTİĞİ
        </h6>
        <span>
          <i class="ri-snowy-fill text-blue" />
        </span>
      </div>
      <p class="text-dark fw-100 product-preview-card-desktop-bottom-model">
        <slot />
      </p>
      <div>
        <p class="text-dark fw-300 product-preview-card-desktop-bottom-packet">
          AMBALAJLI KARGO - 2 YIL GARANTİ
        </p>
      </div>
      <div class="product-preview-card-desktop-bottom-rating">
        <rating :fill="3" :line="2"></rating>
        <div class="product-preview-card-desktop-bottom-rating-button">
          <l-button size="sm" bgVariant="bg-primary" textVariant="text-white"
            >Mağazaya git</l-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LButton from "../../LButton.vue";
import ProductpreviewCardleft from "./ProductpreviewCardleft.vue";
import ProductpreviewCardtop from "./ProductpreviewCardtop.vue";
import Rating from "./rating.vue";
export default {
  components: {
    ProductpreviewCardleft,
    ProductpreviewCardtop,
    Rating,
    LButton
  },
  props: {
    href: {
      type: String,
      default: null
    }
  }
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
    grid-template-columns: 1fr;
    grid-template-rows: 60px 170px 170px;
    padding: 0px;
    gap: 10px;
    width: 275px;
    max-height: 440px;
    &-responsive-left {
      display: none;
    }
    &-desc {
      display: none;
    }
    &-desktop-bottom {
      display: block;
      padding: 15px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      &-model {
        margin-top: 18px;
        font-size: 14px;
      }
      &-packet {
        font-size: 12px;
        font-family: $baseFont;
        opacity: 0.5;
        margin: 0;
        padding-top: 14px;
        font-weight: bolder;
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
      &-rating {
        display: inline-flex;
        align-items: center;
        margin-top: 20px;

        width: 100%;
        &-button {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
      }
    }
    &-desktop-top {
      display: flex;
      align-items: center;
      height: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    &-img {
      display: block;
      justify-self: center;
      align-self: center;
      img {
        width: 180px;
      }
    }
  }
}
</style>
