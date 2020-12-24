<template>
  <div class="section-title">
    <h4 class="text-dark fw-100">
      {{ title }}
    </h4>
    <h5 class="text-dark fw-100">
      <slot />
    </h5>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.section-title {
  text-align: center;
  width: 100%;
  h4,
  h5 {
    width: 100%;
    font-family: $baseFont;
  }
  h5 {
    display: flex;
    justify-content: center;
    opacity: 0.8;
    margin-top: 1rem;
  }
}
</style>
