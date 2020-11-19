<template>
  <div class="select-filter bg-light radius-08">
    <div><l-select :items="items" class="dr1" /></div>
    <div><l-select :items="items" class="dr1" /></div>
    <div><l-select :items="items" class="dr1" /></div>
    <div><l-select :items="items" class="dr1" /></div>
    <div><l-select :items="items" class="dr1" /></div>
    <div>
      <l-button
        class="filter-responsive-btn"
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
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0px 20px;
  div {
    width: 100%;
    margin-right: 30px;
  }
}
</style>
