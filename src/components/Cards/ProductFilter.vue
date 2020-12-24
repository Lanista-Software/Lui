<template>
  <div class="product-filter">
    <div class="product-filter-top bg-light">
      <div class="product-filter-top-grid-top">
        <l-select
          v-model="form.brand"
          :fit="fit"
          :items="filterData.brands"
          class="dr1"
        />
        <l-select
          v-model="form.season"
          :fit="fit"
          :items="filterData.attributes.seasons"
          class="dr2"
        />
        <l-select
          v-model="form.year"
          :fit="fit"
          :items="filterData.attributes.years"
          class="dr6"
        />
      </div>
      <div class="product-filter-top-grid-bottom">
        <l-select
          v-model="form.baseWidth"
          :fit="fit"
          :items="filterData.attributes.baseWidth"
          class="dr3"
        />
        <l-select
          v-model="form.sectionRatio"
          :fit="fit"
          :items="filterData.attributes.sectionRatio"
          class="dr4"
        />
        <l-select
          v-model="form.wheelDiameter"
          :fit="fit"
          :items="filterData.attributes.wheelDiameter"
          class="dr5"
        />
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
        @click="filter"
        >Lastik araması yap</l-button
      >
      <l-button
        class="filter-responsive-btn"
        size="md"
        bg-variant="bg-primary"
        text-variant="text-white"
        @click="filter"
        >Lastik araması yap</l-button
      >
    </div>
  </div>
</template>
<script>
import LButton from '../LButton.vue'
import LSelect from '../LSelect.vue'
import mixin from '../filter'
export default {
  name: 'ProductFilter',
  components: { LSelect, LButton },
  mixins: [mixin],
}
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
        grid-template-columns: 1fr 1fr 1fr;
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
