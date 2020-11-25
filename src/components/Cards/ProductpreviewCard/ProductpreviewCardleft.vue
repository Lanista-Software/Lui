<template>
  <div class="product-preview-card-left bg-light radius-10">
    <div>
      <i class="ri-snowy-fill text-blue" />
    </div>
    <div>
      <img src="/erbay/lastik.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-preview-card-left {
  width: 55px;
  height: 55px;
  div:nth-child(1) {
    padding-right: 5px;
    padding-top: 5px;
    display: flex;
    justify-content: flex-end;
    i {
      font-size: 8px;
    }
  }
  img {
    width: 35px;
  }
  div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
@media ($xs) {
  .product-preview-card-left {
    width: 80px;
    height: 80px;
    div:nth-child(1) {
      padding-right: 8px;
      padding-top: 8px;
      i {
        font-size: 12px;
      }
    }
    img {
      width: 50px;
    }
  }
}
@media ($md) {
  .product-preview-card-left {
    width: 100px;
    height: 100px;
    div:nth-child(1) {
      padding-right: 10px;
      padding-top: 10px;
      i {
        font-size: 14px;
      }
    }
    img {
      width: 70px;
    }
  }
}
@media ($lg) {
  .product-preview-card-left {
    width: 120px;
    height: 120px;
    div:nth-child(1) {
      padding-right: 12px;
      padding-top: 12px;
      i {
        font-size: 16px;
      }
    }
    img {
      width: 90px;
    }
  }
}
@media ($xl) {
  .product-preview-card-left {
    width: 140px;
    height: 140px;
    div:nth-child(1) {
      padding-right: 14px;
      padding-top: 14px;
      i {
        font-size: 18px;
      }
    }
    img {
      width: 110px;
    }
  }
}
</style>
