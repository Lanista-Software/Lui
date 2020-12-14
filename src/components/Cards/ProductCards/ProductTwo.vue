<template>
  <div class="product-three radius-05">
    <div class="product-three-image">
      <img
        class="radius-05"
        src="https://picsum.photos/id/100/100/100"
        alt="Product Image"
      />
    </div>
    <div class="product-three-content">
      <div class="product-three-content-title">
        <small>Karton ve Kağıt</small>
      </div>
      <div class="product-three-content-name">
        <h6>Karton Kahve bardağı 12'li paket - Koli içi 120 adet</h6>
      </div>
      <div class="product-three-content-properties">
        <small>Ebatlar : 12 x 5 cm</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductThree"
};
</script>

<style scoped lang="scss">
.product-three {
  display: grid;
  padding: 12px;
  grid-template-columns: auto 1fr;
  column-gap: 12px;
}
</style>
