<template>
  <div class="search-card">
    <div class="search-card-top bg-light">
      <div class="search-card-top-grid-top">
        <l-select :items="items" class="dr1" />
        <l-select :items="items" class="dr2" />
      </div>
      <div class="search-card-top-grid-bottom">
        <l-select :items="items" class="dr3" />
        <l-select :items="items" class="dr4" />
        <l-select :items="items" class="dr5" />
      </div>
    </div>
    <div class="search-card-center bg-white">
      <img src="/erbay/lastik.png" alt="" srcset="" />
    </div>
    <div class="search-card-bottom bg-light">
      <l-button size="lg" bg-variant="bg-primary" text-variant="text-white"
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
.search-card {
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
      height: 35px;
      font-size: 10px;
    }
  }
}
@media ($sm) {
  .search-card {
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
        height: 40px;
        font-size: 14px;
      }
    }
  }
}
@media ($lg) {
  .search-card {
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
        height: 40px;
        font-size: 14px;
      }
    }
  }
}
@media ($xl) {
  .search-card {
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
        height: 53px;
        font-size: 16px;
      }
    }
  }
}
</style>
