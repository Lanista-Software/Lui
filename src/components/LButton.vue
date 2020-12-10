<template>
  <button
    class="l-button"
    :class="[
      ['l-button-' + size, bgVariant, textVariant, borderVariant],
      [block ? 'l-button-block' : null]
    ]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "LButton",
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return ["sm", "md", "lg"].includes(value);
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
  },
  methods: {
    clicked() {
      this.$emit("clicked");
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
    padding: 8px 16px;
  }
  &-md {
    padding: 12px 36px;
  }
  &-lg {
    padding: 16px 48px;
  }
  &-block {
    width: 100%;
  }
}
</style>
