<template>
  <div class="footer-two-top">
    <div class="footer-two-top-content">
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
    </div>
    <div class="footer-two-top-media">
      <slot name="footerMedia"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FootertwoTop',
}
</script>

<style scoped lang="scss">
.footer-two-top {
  padding: 50px 0;
  &-content {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr;
    width: 100%;
    padding-bottom: 50px;
    column-gap: calc(100% / 12); //Fraction verilmediğinden. 3fr aldık.
  }
  &-media {
    margin-bottom: 50px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
