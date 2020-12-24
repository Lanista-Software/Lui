<template>
  <div class="hero-one">
    <div class="hero-one-right">
      <hero-onecard :buttonVariants="buttonVariants">
        <p>
          Yılların tecrübesiyle ve uzman kadromuzla bütün sorularınıza yanıt
          vermek için bekliyoruz
        </p>
        <template v-slot:top>
          <h3>
            ONLİNE SİPARİŞ KOLAYLIĞI
          </h3>
        </template>
        <template v-slot:top-desc>
          <h3 class="text-dark">
            ÇOK YAKINDA HİZMETİNİZDE
          </h3>
        </template>
      </hero-onecard>
    </div>
    <div class="hero-one-left">
      <ProductFilter></ProductFilter>
    </div>
  </div>
</template>
<script>
import HeroOnecard from '../../Cards/HeroCards/HeroOnecard'
import ProductFilter from '../../Cards/ProductFilter'
export default {
  components: { HeroOnecard, ProductFilter },
  name: 'HeroOne',
  data() {
    return {
      buttonVariants: {
        bgVariant: 'bg-warning',
        textVariant: 'text-dark',
        btnText: 'İletişime geçin',
      },
    }
  },
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
