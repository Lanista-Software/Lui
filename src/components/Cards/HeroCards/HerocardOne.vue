<template>
  <div class="herocard-one">
    <div v-if="$slots.tag" class="herocard-one-tag">
      <slot name="tag" />
    </div>
    <div v-if="$slots.content" class="herocard-one-content">
      <slot name="content" />
    </div>
    <div v-if="$slots.default" class="herocard-one-text">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HerocardOne'
}
</script>
<style lang="scss" scoped>
.herocard-one {
  display: grid;
  max-width: 470px;
  width: 100%;
  gap: 2rem;
  grid-template-rows: auto 1fr 0.5fr;
  text-align: center;
  &-content {
    display: grid;
    grid-template-rows: auto;
    gap: 1rem;
  }
}
@media ($lg) {
  .herocard-one {
    text-align: left;
  }
}
</style>
