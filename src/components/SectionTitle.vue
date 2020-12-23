<template>
  <div class="section-title">
    <h4 class="text-dark fw-600">
      {{ title }}
    </h4>
    <p class="text-dark_08 fw-400">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: null
    }
  }
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
  p {
    display: flex;
    justify-content: center;
    margin-top: 1.1rem;
  }
}
</style>
