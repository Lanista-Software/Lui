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
      <slot></slot>
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
      // display: flex;
      // justify-self: center;
      // justify-content: center;
      text-align: center;
      button {
        margin-bottom: 12px;
      }
    }
  }
  &-media {
    background-color: red;
    padding: 36px;
    overflow: hidden;
  }
}
</style>
