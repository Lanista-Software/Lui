<template>
  <div class="list-two">
    <span :class="variants('bg')" class="list-two-span"></span>
    <slot />
  </div>
</template>
<script>
export default {
  name: "ListTwo",
  props: {
    variant: {
      type: String,
      default: null
    }
  },
  computed: {
    variants() {
      return mode => mode + "-" + this.variant;
    }
  }
};
</script>
<style lang="scss" scoped>
.list-two {
  display: inline-flex;
  align-items: center;
  &-span {
    margin-right: 10px;
    width: 20px;
    height: 4px;
    border-radius: 2px;
  }
}
</style>
