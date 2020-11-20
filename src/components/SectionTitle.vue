<template>
  <div class="section-title">
    <h1 class="text-dark fw-100">
      {{ title }}
    </h1>
    <h3 class="text-dark fw-100">
      <slot />
    </h3>
    <p>
      asdasdasd
    </p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.section-title {
  text-align: center;
  width: 100%;
  h1,
  h3 {
    width: 100%;
    font-family: $baseFont;
  }
  h3 {
    display: flex;
    justify-content: center;
    opacity: 0.8;
    margin-top: 25px;
  }
}
</style>
