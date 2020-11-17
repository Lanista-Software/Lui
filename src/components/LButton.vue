<template>
  <button
    class="l-button"
    :class="[
      ['l-button-' + size, bgVariant, textVariant, borderVariant],
      [block ? 'l-button-block' : null]
    ]"
    @click="clicked"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "LButton",
  methods: {
    clicked() {
      this.$emit("clicked");
    }
  },
  props: {
    size: {
      type: String,
      default: null,
      validator: function(value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      }
    },
    bgVariant: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    borderVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.l-button {
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: $baseFont;
  text-align: center;
  &-sm {
    font-size: 10px;
    padding: 8px 16px;
  }
  &-md {
    padding: 12px 36px;
    font-size: 12px;
  }
  &-lg {
    font-size: 18px;
    padding: 16px 48px;
  }
  &-block {
    width: 100%;
  }
}
</style>
