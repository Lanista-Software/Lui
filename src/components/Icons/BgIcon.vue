<template>
  <div
    v-bind="$attrs"
    :style="{ width: size[0] + 'px', height: size[1] + 'px' }"
    :class="[typeSelector]"
    class="bg-icon"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "BgIcon",
  props: {
    circle: {
      type: Boolean,
      default: false
    },
    size: {
      type: Array,
      required: false
    }
  },
  computed: {
    typeSelector() {
      return this.circle === true ? "rounded-circle" : "rounded";
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
