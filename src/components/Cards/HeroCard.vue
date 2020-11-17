<template>
  <div class="hero-card">
    <div class="hero-card-top">
      <div class="">
        <h1 class="text-white">
          ERBAY LASTİK
        </h1>
      </div>
      <div class="hero-card-inline">
        <h1 class="text-white">
          Her mevsim yol güvenceniz
        </h1>
        <i class="ri-shield-check-fill text-success" />
      </div>
    </div>
    <div class="hero-card-center">
      <p class="text-white">
        Yılların tecrübesiyle ve uzman kadromuzla bütün sorularınıza yanıt
        vermek için bekliyoruz
      </p>
    </div>
    <div class="hero-card-bottom">
      <l-button size="lg" bgVariant="bg-warning" textVariant="text-dark"
        >İletişime geçin</l-button
      >
    </div>
  </div>
</template>

<script>
import LButton from "../LButton.vue";
export default {
  components: { LButton }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
  font-family: $baseFont;
}
.hero-card {
  display: grid;
  grid-template-rows: auto auto auto;
  width: 500px;
  &-top {
    justify-self: start;
  }
  &-inline {
    display: inline-flex;
    align-items: center;
    margin-top: 20px;
    i {
      font-size: 18px;
      margin-left: 40px;
    }
  }
  &-center {
    text-align: left;
    margin: 30px 0px;
    p {
      opacity: 0.8;
      font-family: $baseFont;
      font-size: 16px;
      margin: 0;
      line-height: 25px;
    }
  }
  &-bottom {
    width: 200px;
  }
}
</style>
