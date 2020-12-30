<template>
  <div class="hero-one">
    <div class="hero-one-right">
      <hero-onecard>
        <template v-slot:title>
          <h3 class="text-dark">
            ONLİNE SİPARİŞ KOLAYLIĞI
          </h3>
        </template>
        <template v-slot:content>
          <p class="text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            distinctio.
          </p>
        </template>
        <template v-slot:footer>
          <p class="text-dark">
            <l-button bgVariant="bg-warning" size="lg">
              İletişime geçin
            </l-button>
          </p></template
        >
      </hero-onecard>
    </div>
    <div class="hero-one-left">
      <ProductFilter></ProductFilter>
    </div>
  </div>
</template>
<script>
import HeroOnecard from '../../Cards/LineCard'
import ProductFilter from '../../Cards/ProductFilter'
import LButton from '../../LButton.vue'
export default {
  components: { HeroOnecard, ProductFilter, LButton },
  name: 'HeroOne',
}
</script>
<style lang="scss" scoped>
.hero-one {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  align-items: center;
  &-left {
    justify-self: flex-end;
  }
}
</style>
