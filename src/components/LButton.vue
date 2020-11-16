<template>
  <button
    class="l-button"
    :class="['l-button-' + size, bgVariant, textVariant, borderVariant]"
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
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  border: 1px solid transparent;
  font-family: $baseFont;
  &-sm {
    height: 15px;
    font-size: 10px;
  }
  &-md {
    height: 35px;
    font-size: 12px;
  }
  &-lg {
    height: 55px;
    font-size: 18px;
  }
}
</style>
