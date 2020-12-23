<template>
  <div class="header-two-bottom bg-dark">
    <div class="header-two-bottom-container container">
      <div
        class="header-two-bottom-left"
        style="display: inline-flex; column-gap:20px"
      >
        <slot name="left" />
      </div>
      <div class="header-two-bottom-center">
        <slot name="center" />
      </div>
      <div class="header-two-bottom-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTwo/Bottom'
}
</script>
<style lang="scss" scoped>
.header-two-bottom {
  width: 100%;
  &-container {
    display: grid;
    height: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
  &-right {
    justify-self: flex-end;
  }
  &-center {
    justify-self: center;
  }
  &-left {
    justify-self: flex-start;
  }
}
</style>
