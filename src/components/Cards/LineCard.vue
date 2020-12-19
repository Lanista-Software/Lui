<template>
  <div class="line-card">
    <div class="line-card-top">
      <div class="line-card-top-icon"><slot name="icon"></slot></div>
      <div class="line-card-top-Title"><slot name="title"></slot></div>
    </div>
    <div class="line-card-content"><slot name="content"></slot></div>
    <div class="line-card-footer"><slot name="footer"></slot></div>
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
  width: 100%;
  max-width: 275px;
  min-width: 200px;
  &-top {
    display: inline-flex;
    column-gap: 20px;
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
