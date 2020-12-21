<template>
  <div class="mapform-card shadow radius-05">
    <div class="mapform-card-form">
      <e-form line></e-form>
    </div>
    <div class="mapform-card-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.5466315222907!2d43.36042361566709!3d38.521165776637126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40127ab989b12c95%3A0xb9911b531d5ab773!2sMichelin%20-%20Erbay%20Lastik!5e0!3m2!1str!2str!4v1606392979587!5m2!1str!2str"
        frameborder="0"
        style="border: 0"
        class="radius-05"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
    </div>
  </div>
</template>
<script>
import EForm from '../Forms/EForm.vue'
export default {
  components: { EForm },
  name: 'MapformCard'
}
</script>
<style lang="scss" scoped>
.mapform-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  &-map {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
