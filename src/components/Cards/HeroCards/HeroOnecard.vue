<template>
  <div :class="center ? 'hero-card-container-center' : 'hero-card'">
    <div :class="center ? 'hero-card-top-center' : 'hero-card-top'">
      <div v-if="$slots.top">
        <slot name="top" />
      </div>
      <div class="hero-card-inline" v-if="$slots.topDesc">
        <slot name="topDesc" />
      </div>
    </div>
    <div class="hero-card-center" v-if="$slots.default">
      <slot />
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
import LButton from '../../LButton'
export default {
  name: 'HeroOne',
  components: { LButton },
  props: {
    center: {
      type: Boolean,
      default: false
    },
    buttonVariants: {
      type: Object,
      required: true
    }
  }
}
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
    margin-top: 1.5rem;
    i {
      font-size: 18px;
      margin-left: 40px;
    }
  }
  &-center {
    text-align: left;
    margin: 1.5rem 0px;
    p {
      font-family: $baseFont;
      margin: 0;
      line-height: 25px;
    }
  }
}
</style>
