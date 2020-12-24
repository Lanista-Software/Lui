<template>
  <div class="slide-card">
    <client-only>
      <carousel-one v-bind="settings" :arrows="false" :dots="false">
        <div>
          <PrintCard>
            <template v-slot:img>
              <img src="/erbay/man.png" alt="" />
            </template>
            <template v-slot:title>
              <h4 class="text-dark">Silikon Baskılar</h4>
            </template>
            <template v-slot:footer>
              <a href="#" class="text-primary">
                <h5>Bize ulaşın</h5>
              </a>
              <a href="#">
                <i class="ri-arrow-right-line ri-1x text-dark" />
              </a>
            </template>
            <p class="text-primary_07">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              illum facilis dolorem, laudantium veniam ducimus alias tenetur?
            </p>
          </PrintCard>
        </div>
      </carousel-one>
    </client-only>
  </div>
</template>

<script>
// optional style for arrows & dots
import CarouselOne from '../Carousel/CarouselOne.vue'
import PrintCard from './PrintCard.vue'

export default {
  name: 'SlideCard',
  components: { PrintCard, CarouselOne },
  data() {
    return {
      settings: {
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1.1,
        speed: 200,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.slide-card {
  height: 100%;
}
</style>
