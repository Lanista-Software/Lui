<template>
  <div class="hero-three">
    <div class="hero-three-left">
      <slot name="left" />
    </div>
    <div class="hero-three-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroThree',
}
</script>

<style lang="scss" scoped>
.hero-three {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  justify-content: center;
  column-gap: 110px;
  &-left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-right {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
@media ($lg) {
  .hero-three {
    grid-template-columns: 5fr 6fr;
    gap: 1fr;
    &-left {
      justify-content: flex-start;
    }
    &-right {
      justify-content: flex-end;
    }
  }
}
</style>
