<template>
  <div class="hero-two">
    <div class="hero-two-content">
      <div v-if="$slots.title" class="hero-two-content-title">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots.textcontent" class="hero-two-content-textcontent">
        <slot name="textcontent"></slot>
      </div>
      <div v-if="$slots.buttons" class="hero-two-content-buttons">
        <slot name="buttons"></slot>
      </div>
    </div>
    <div v-if="$slots.default" class="hero-two-media">
      <div class="hero-two-media-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroTwo"
};
</script>

<style scoped lang="scss">
.hero-two {
  text-align: center;
  &-content {
    &-title {
      padding-bottom: 12px;
    }
    &-textcontent {
      padding-bottom: 24px;
    }
    &-buttons {
      padding-bottom: 30px;
      text-align: center;
      button {
        margin-bottom: 12px;
      }
    }
  }
  &-media {
    width: 100%;
    text-align: center;
    &-container {
      display: inline-block;
      width: 260px;
      height: 260px;
    }
  }
}
@media ($xss) {
  .hero-two-media-container {
    width: 200px;
    height: 200px;
  }
}
@media ($xs) {
  .hero-two-media-container {
    width: 300px;
    height: 300px;
  }
}

@media ($sm) {
  .hero-two-media-container {
    width: 400px;
    height: 400px;
  }
}

@media ($md) {
  .hero-two {
    &-media {
      &-container {
        width: 400px;
        height: 400px;
      }
    }
  }
}

@media ($lg) {
  .hero-two {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &-content {
      display: grid;
      grid-template-rows: auto 1fr auto;
      justify-content: center;
      &-title {
        padding-bottom: 12px;
      }
      &-textcontent {
        justify-items: center;
        padding-bottom: 24px;
      }
      &-buttons {
        display: flex;
        padding-bottom: 30px;
        text-align: left;
        button {
          margin-bottom: 12px;
        }
      }
    }
    &-media {
      width: 100%;
      text-align: right;
      &-container {
        width: 500px;
        height: 500px;
      }
    }
  }
}
// @media ($xl) {
// }

// @media ($xxl) {
// }
</style>
