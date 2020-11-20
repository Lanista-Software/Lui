<template>
  <div class="select-filter bg-light radius-08 shadow ">
    <div class="select-filter-top">
      <div><l-select :items="items" class="dr1" /></div>
      <div><l-select :items="items" class="dr2" /></div>
    </div>
    <div class="select-filter-bottom">
      <div>
        <l-select :items="items" class="dr3" />
      </div>
      <div><l-select :items="items" class="dr4" /></div>
      <div><l-select :items="items" class="dr5" /></div>
    </div>
    <div class="select-filter-btn">
      <l-button
        class="select-filter-btn-responsive"
        size="lg"
        bg-variant="bg-primary"
        text-variant="text-white"
        >Filtreleme yapın</l-button
      >
      <l-button
        class="select-filter-btn-desktop"
        size="md"
        bg-variant="bg-primary"
        text-variant="text-white"
        >Lastik ara</l-button
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
.select-filter {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
  &-top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  &-bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  &-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    &-desktop {
      display: none;
    }
  }
}
@media ($lg) {
  .select-filter {
    height: 70px;
    padding: 2px 20px;
    grid-template-columns: 1fr 1.5fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 30px;
    &-top {
      align-self: center;
      div {
        width: 100%;
      }
    }
    &-bottom {
      align-self: center;
      div {
        width: 100%;
      }
    }
    &-btn {
      align-self: center;
      justify-content: flex-end;
      margin-bottom: 0px;
      &-desktop {
        display: block;
      }
      &-responsive {
        display: none;
      }
    }
  }
}
</style>
