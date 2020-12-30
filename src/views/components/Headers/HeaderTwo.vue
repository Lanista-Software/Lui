<template>
  <div class="header-two">
    <div class="desktop-header bg-dark_09">
      <slot name="top" />
      <div>
        <div class="bg-dark">
          <slot name="bottom" />
        </div>
      </div>
    </div>
    <div class="responsive-header bg-primary">
      <div class="responsive-header-container">
        <div class="responsive-header-left">
          <img src="/gochem/res.png" alt="gochem" />
        </div>
        <div class="responsive-header-right">
          <i class="ri-menu-5-line text-white" role="button" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderTwo',
}
</script>
<style lang="scss" scoped>
.desktop-header {
  display: none;
}
.section {
}
.responsive-header {
  &-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 40px;
    align-content: center;
    padding-left: 20px;
    padding-right: 20px;
    div {
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
      i {
        font-size: 20px;
      }
    }
  }
  &-right {
    justify-self: flex-end;
  }
  &-left {
    justify-self: flex-start;
  }
}
@media ($lg) {
  .responsive-header {
    display: none;
  }
  .desktop-header {
    display: block;
  }
}
</style>
