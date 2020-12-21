<template>
  <div class="footer-two-top">
    <div v-if="$slots.section_1" class="footer-two-top-section">
      <slot name="section_1"></slot>
    </div>
    <div v-if="$slots.section_2" class="footer-two-top-section">
      <slot name="section_2"></slot>
    </div>
    <div v-if="$slots.section_3" class="footer-two-top-section">
      <slot name="section_3"></slot>
    </div>
    <div v-if="$slots.section_4" class="footer-two-top-section">
      <slot name="section_4"></slot>
    </div>
    <div class="footer-two-top-media">
      <slot name="footerMedia"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootertwoTop'
}
</script>

<style scoped lang="scss">
.footer-two-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 50px 0;
  width: 100%;
  &-media {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
