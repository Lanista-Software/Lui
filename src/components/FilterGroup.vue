<template>
  <div class="filter-group shadow radius-05 bg-light">
    <l-button
      :bgVariant="active === 0 ? 'bg-white' : 'bg-light'"
      textVariant="text-dark"
      size="sm"
      @click="activeEmit(0)"
      >Ödeme</l-button
    >
    <l-button
      :bgVariant="active === 1 ? 'bg-white' : 'bg-light'"
      textVariant="text-dark"
      size="sm"
      @click="activeEmit(1)"
      >Teknik</l-button
    >
    <l-button
      :bgVariant="active === 2 ? 'bg-white' : 'bg-light'"
      textVariant="text-dark"
      size="sm"
      @click="activeEmit(2)"
      >İletişim</l-button
    >
  </div>
</template>

<script>
import LButton from "./LButton.vue";
export default {
  name: "FilterGroup",
  components: { LButton },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    activeEmit(i) {
      this.active = i;
      this.$emit("activefaq", i);
    }
  }
};
</script>
<style lang="scss" scoped>
.filter-group {
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
