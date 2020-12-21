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
  name: 'HeroThree'
}
</script>

<style lang="scss" scoped>
.hero-three {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  column-gap: 110px;
  &-left {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &-right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
