<template>
  <div class="product-filter">
    <div class="product-filter-top bg-light">
      <div class="product-filter-top-grid-top">
        <l-select :items="items" class="dr1" />
        <l-select :items="items" class="dr2" />
      </div>
      <div class="product-filter-top-grid-bottom">
        <l-select :items="items" class="dr3" />
        <l-select :items="items" class="dr4" />
        <l-select :items="items" class="dr5" />
      </div>
    </div>
    <div class="product-filter-center bg-white">
      <img src="/erbay/lastik.png" alt="" srcset="" />
    </div>
    <div class="product-filter-bottom bg-light">
      <l-button
        class="filter-desktop-btn"
        size="lg"
        bg-variant="bg-primary"
        text-variant="text-white"
        >Lastik araması yap</l-button
      >
      <l-button
        class="filter-responsive-btn"
        size="md"
        bg-variant="bg-primary"
        text-variant="text-white"
        >Lastik araması yap</l-button
      >
    </div>
  </div>
</template>
<script>
import LButton from "../LButton.vue";
import LSelect from "../LSelect.vue";
export default {
  components: { LSelect, LButton },
  name: "ProductFilter",
  data() {
    return {
      items: [
        {
          label: "Marka",
          key: null
        },
        {
          label: "Audi",
          key: "audi"
        },
        {
          label: "Bmw",
          key: "bmw"
        },
        {
          label: "Toyota",
          key: "toyota"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.filter-desktop-btn {
  display: none;
}
.product-filter {
  display: grid;
  grid-template-rows: 1fr 1.5fr 1fr;
  width: 278px;
  height: 264px;
  &-top {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 20px 10px;
    &-grid {
      &-top {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      &-bottom {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
      }
    }
  }
  &-center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
    }
  }
  &-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    button {
      width: 75%;
      font-size: 10px;
    }
  }
}
@media ($sm) {
  .product-filter {
    width: 320px;
    height: 320px;
    &-center {
      img {
        width: 120px;
        height: 120px;
      }
    }
    &-bottom {
      button {
        font-size: 14px;
      }
    }
  }
}
@media ($lg) {
  .product-filter {
    width: 340px;
    height: 340px;
    &-center {
      img {
        width: 130px;
        height: 130px;
      }
    }
    &-bottom {
      button {
        font-size: 14px;
      }
    }
  }
}
@media ($xl) {
  .product-filter {
    width: 372px;
    height: 372px;
    &-center {
      img {
        width: 140px;
        height: 140px;
      }
    }
    &-bottom {
      button {
        font-size: 16px;
      }
    }
  }
}
</style>
