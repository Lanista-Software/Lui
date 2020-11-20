<template>
  <div class="hero-card">
    <div class="hero-card-top">
      <div class="">
        <h1 class="text-white">
          {{ titleOne }}
        </h1>
      </div>
      <div class="hero-card-inline">
        <h1 class="text-white">
          {{ titleSecond }}
        </h1>
        <i class="ri-shield-check-fill text-success" />
        <!-- slot eklenecek -->
      </div>
    </div>
    <div class="hero-card-center">
      <p class="text-white_08">
        <slot />
      </p>
    </div>
    <div class="hero-card-bottom">
      <l-button
        v-on="$listeners"
        size="lg"
        bgVariant="bg-warning"
        textVariant="text-dark"
        >{{ btnText }}</l-button
      >
    </div>
  </div>
</template>

<script>
import LButton from "../LButton.vue";
export default {
  components: { LButton },
  props: {
    titleOne: {
      type: String,
      default: null
    },
    icon: {
      type: Boolean,
      default: false
    },
    titleSecond: {
      type: String,
      default: null
    },
    btnText: {
      type: String,
      default: null
    }
  }
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
      font-family: $baseFont;
      font-size: 16px;
      margin: 0;
      line-height: 25px;
    }
  }
}
</style>
