<template>
  <VueSlickCarousel class="carousel-one" v-bind="$attrs" v-on="$listeners">
    <slot />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'CarouselOne',
  components: { VueSlickCarousel },
}
/**  All MEthodst And Props **/
/** https://github.com/gs-shop/vue-slick-carousel/blob/master/docs/API.md#props **/
</script>
<style lang="scss">
.carousel-one {
  overflow: hidden;
}
</style>
