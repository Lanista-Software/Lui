<template>
  <div class="hero-card">
    <div class="hero-card-top">
      <div class="">
        <component :is="hSize" :class="textVariant">
          {{ titleOne }}
        </component>
      </div>
      <div class="hero-card-inline">
        <component :is="hSize" :class="textVariant">
          {{ titleSecond }}
        </component>
        <slot name="icon" />
      </div>
    </div>
    <div class="hero-card-center">
      <p :class="textVariant + '_08'">
        <slot />
      </p>
    </div>
    <div class="hero-card-bottom">
      <l-button
        v-on="$listeners"
        size="lg"
        :bgVariant="buttonVariants.bgVariant"
        :textVariant="buttonVariants.textVariant"
        >{{ buttonVariants.btnText }}</l-button
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
    textVariant: {
      type: String,
      default: "text-white"
    },
    hSize: {
      type: String,
      default: "h1"
    },
    titleSecond: {
      type: String,
      default: null
    },
    buttonVariants: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
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
      font-size: 1rem;
      margin: 0;
      line-height: 25px;
    }
  }
}
</style>
