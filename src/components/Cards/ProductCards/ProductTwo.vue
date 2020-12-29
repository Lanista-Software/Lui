<template>
  <div v-bind="$attrs" class="product-two radius-05 shadow">
    <div class="product-two-tag">
      <slot name="tag"></slot>
    </div>
    <div class="product-two-image">
      <img
        class="radius-05"
        src="https://picsum.photos/id/100/100/100"
        alt="Product Image"
      />
    </div>
    <div class="product-two-content">
      <div class="product-two-content-title">
        <slot name="title"></slot>
      </div>
      <div class="product-two-content-name">
        <slot name="name"></slot>
      </div>
      <div class="product-two-content-properties">
        <slot name="properties"></slot>
      </div>
    </div>
    <transition name="fade">
      <div class="hover-pr bg-dark_09 radius-05">
        <div class="hover-pr-top">
          <p class="text-white">
            Ürün fiyatlarını öğrenmek ve teklif almak için
          </p>
        </div>
        <div class="hover-pr-button ">
          <l-button size="sm" textVariant="text-white" bgVariant="bg-success"
            >Bize ulaşın</l-button
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import LButton from '../../LButton.vue'
export default {
  components: { LButton },
  name: 'Producttwo',
}
</script>

<style scoped lang="scss">
.hover-pr {
  display: grid;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  grid-template-rows: 1fr auto;
  padding: 5px;
  gap: 10px;
  align-items: center;
  &-top {
    display: flex;
    justify-content: center;
    text-align: center;
    p {
      width: 100%;
    }
  }
  &-button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
.product-two {
  display: grid;
  padding: 12px;
  grid-template-columns: 2fr 4fr;
  column-gap: 12px;
  width: 100%;
  min-width: 280px;
  max-width: 600px;
  position: relative;
  &-tag {
    position: absolute;
    top: 0;
    right: 0;
    .tag-one {
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 0.3rem 1rem;
    }
  }
  &-content {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    &-title {
      display: flex;
      align-self: start;
    }
    &-name {
      display: flex;
      align-self: center;
    }
    &-properties {
      display: flex;
      align-self: end;
    }
  }
  &-image {
    width: 100%;
    display: flex;
    align-self: center;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.product-two:hover {
  .hover-pr {
    opacity: 1;
    transition: 1s;
  }
}
@media ($lg) {
  .hover-pr {
    padding: 25px 0px;
    gap: 20px;
    &-top {
      p {
        width: 70%;
      }
    }
  }
}
</style>
