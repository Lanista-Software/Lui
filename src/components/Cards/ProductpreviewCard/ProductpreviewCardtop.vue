<template>
  <div class="product-preview-card-top">
    <div class="bg-warning">
      <span> Popüler </span>
    </div>
    <div>
      <img src="/erbay/trendyol.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-preview-card-top {
  display: inline-flex;
  align-items: center;
  width: 100%;
  span {
    font-size: 12px;
    font-family: $baseFont;
  }
  div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    padding: 8px 16px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    left: 0px;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    img {
      width: 45px;
      margin-right: 15px;
    }
  }
}
</style>
