<template>
  <div :class="center ? 'hero-card-container-center' : 'hero-card'">
    <div :class="center ? 'hero-card-top-center' : 'hero-card-top'">
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
      <p :class="[[textVariant + '_08'], [center ? 'text-center' : null]]">
        <slot />
      </p>
    </div>
    <div class="hero-card-bottom">
      <l-button
        size="lg"
        :bg-variant="buttonVariants.bgVariant"
        :text-variant="buttonVariants.textVariant"
        v-on="$listeners"
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
    center: {
      type: Boolean,
      default: false
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
  &-container-center {
    display: grid;
    grid-template-rows: auto auto auto;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  &-top {
    justify-self: start;
    &-center {
      text-align: center;
      justify-content: center;
    }
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
      margin: 0;
      line-height: 25px;
    }
  }
}
</style>
