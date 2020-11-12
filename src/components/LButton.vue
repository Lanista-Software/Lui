<template>
  <button @click="clicked">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "LButton",
  methods: {
    clicked() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  color: $kirmizi;
  background-color: $blue;
}
</style>
