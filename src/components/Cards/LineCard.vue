<template>
  <div class="line-card">
    <div class="line-card-top">
      <div class="line-card-top-icon"></div>
      <div class="line-card-top-Title"></div>
    </div>
    <div class="line-card-content"></div>
    <div class="line-card-footer"></div>
  </div>
</template>

<script>
export default {
  name: "LineCard"
};
</script>

<style lang="scss" scoped>
.line-card {
  padding: 20px;
  &-top {
    display: flex;
    align-items: center;
  }
  &-content {
    margin-top: 20px;
  }
  &-footer {
    margin-top: 20px;
  }
}
</style>
