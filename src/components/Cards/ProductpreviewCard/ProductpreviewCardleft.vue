<template>
  <div class="product-preview-card-left shadow radius-10">
    <div class="product-preview-card-left-icon">
      <i class="ri-snowy-fill text-blue" />
    </div>
    <div class="product-preview-card-left-container">
      <img :src="img" alt="Erbay" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.product-preview-card-left {
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  &-icon {
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
  }
  img {
    width: 100%;
    height: auto;
  }
  &-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100px;
  }
}
// @media ($xs) {
//   .product-preview-card-left {
//     width: 80px;
//     height: 80px;
//     &-img {
//       width: 50px;
//     }
//   }
// }
// @media ($md) {
//   .product-preview-card-left {
//     width: 100px;
//     height: 100px;
//     &-img {
//       width: 70px;
//     }
//   }
// }
// @media ($lg) {
//   .product-preview-card-left {
//     width: 120px;
//     height: 120px;
//     &-img {
//       width: 90px;
//     }
//   }
// }
// @media ($xl) {
//   .product-preview-card-left {
//     width: 140px;
//     height: 140px;
//     &-img {
//       width: 110px;
//     }
//   }
// }
</style>
