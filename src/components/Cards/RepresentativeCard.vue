<template>
  <div class="representative-card shadow bg-white radius-08">
    <slot />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.representative-card {
  width: 134px;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
}
@media ($md) {
  .representative-card {
    width: 150px;
    height: 110px;
    img {
      width: 100px;
    }
  }
}
@media ($lg) {
  .representative-card {
    width: 178px;
    height: 125px;
    img {
      width: 125px;
    }
  }
}
</style>
