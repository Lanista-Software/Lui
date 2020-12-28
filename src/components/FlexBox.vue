<template>
  <div
    class="flex-box"
    :style="StyleGuide"
    :class="inline ? 'inline' : 'box'"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FlexBox',
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    justify: {
      type: String,
      default: 'flex-start',
    },
    align: {
      type: String,
      default: 'flex-start',
    },
  },
  computed: {
    StyleGuide() {
      return `justify-content:${this.justify}; align-items:${this.align};`
    },
  },
}
</script>

<style scoped lang="scss">
.flex-box {
  width: 100%;
  flex-wrap: wrap;
}
.box {
  display: flex;
}
.inline {
  display: inline-flex;
}
</style>
