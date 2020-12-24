<template>
  <div class="product-preview-card bg-white shadow radius-08">
    <div class="product-preview-card-responsive-left">
      <div class="product-preview-card-left shadow radius-10">
        <div class="product-preview-card-left-icon">
          <i class="ri-snowy-fill text-blue" />
        </div>
        <div class="product-preview-card-left-container">
          <img :src="img" alt="Erbay" />
        </div>
      </div>
    </div>
    <div class="product-preview-card-desktop-top bg-light-100">
      <div class="product-preview-card-top">
        <div class="bg-warning">
          <span> Popüler </span>
        </div>
        <div>
          <img src="/erbay/trendyol.png" />
        </div>
      </div>
    </div>
    <div class="product-preview-card-img">
      <img :src="product.img" :alt="product.title" />
    </div>
    <div class="product-preview-card-desc">
      <div class="product-preview-card-desc-top">
        <h5 class="text-dark fw-300">
          {{ product.title }}
        </h5>
      </div>
      <div class="product-preview-card-desc-bottom">
        <h6>AMBALAJLI KARGO - 2 YIL GARANTİ</h6>
        <a :href="href">
          <i class="ri-arrow-right-line text-primary" />
        </a>
      </div>
    </div>
    <div class="product-preview-card-desktop-bottom bg-light-100 shadow">
      <div class="product-preview-card-desktop-bottom-inline">
        <h6 class="text-dark product-type">{{ product.type }} LASTİĞİ</h6>
        <span>
          <!-- <i class="ri-snowy-fill text-blue" /> -->
          <img
            :src="
              product.type === 'Kış'
                ? '/icons/snowy.svg'
                : [
                    product.type === 'Yaz'
                      ? '/icons/sun.svg'
                      : '/icons/rainy.svg',
                  ]
            "
          />
        </span>
      </div>
      <p class="text-dark fw-100 product-preview-card-desktop-bottom-model">
        {{ product.title }}
      </p>
      <div>
        <p class="text-dark fw-300 product-preview-card-desktop-bottom-packet">
          AMBALAJLI KARGO - 2 YIL GARANTİ
        </p>
      </div>
      <div class="product-preview-card-desktop-bottom-rating">
        <rating :fill="5" :line="0" />
        <div class="product-preview-card-desktop-bottom-rating-button">
          <l-button
            size="sm"
            bg-variant="bg-primary"
            text-variant="text-white"
            @click="goMarket"
            >Mağazaya git</l-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LButton from '../../LButton.vue'
import Rating from '../Rating.vue'
export default {
  components: {
    Rating,
    LButton,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    // href: {
    //   type: String,
    //   default: null,
    // },
    // img: {
    //   type: String,
    //   default: null,
    // },
    // type: {
    //   type: String,
    //   default: null,
    // },
  },
  computed: {
    href() {
      const data = this.product.title.split(' ')
      const link = `https://www.trendyol.com/${data[0].toLowerCase()}/${data[1].toLowerCase()}-p-${
        this.product.id
      }`
      return link
    },
  },
  methods: {
    goMarket() {
      window.open(this.href, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.product-type {
  text-transform: uppercase;
}
.product-preview-card {
  height: auto;
  display: grid;
  align-items: center;
  font-family: $baseFont;
  gap: 1rem;
  grid-template-columns: 1fr 3fr;
  padding: 1rem;
  &-desktop-top {
    display: none;
    z-index: 5;
  }
  &-desktop-bottom {
    display: none;
    z-index: 5;
  }
  &-img {
    display: none;
  }
  &-desc {
    height: 100%;
    width: 100%;
    z-index: 5;
    justify-self: flex-start;
    &-top {
      display: flex;
      height: 50%;
      align-items: flex-start;
      h5 {
        line-height: 15px;
      }
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
        width: 20px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
@media ($sm) {
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
      overflow: hidden;
      img {
        width: 180px;
      }
    }
  }
}
.product-preview-card-top {
  display: inline-flex;
  align-items: center;
  width: 100%;
  span {
    font-size: 12px;
    font-family: $baseFont;
  }
  div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    padding: 8px 16px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    left: 0px;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    img {
      width: 45px;
      margin-right: 15px;
    }
  }
}
.product-preview-card-left {
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  &-icon {
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
  }
  img {
    width: 100%;
    height: auto;
  }
  &-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100px;
  }
}
</style>
