<template>
  <div class="hero-two">
    <div v-if="$slots.title" class="hero-two-content">
      <div class="hero-two-content-title">
        <slot name="title"></slot>
      </div>
      <div class="hero-two-content-textcontent">
        <slot name="textcontent"></slot>
      </div>
      <div class="hero-two-content-buttons">
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

<style scoped lang="scss"></style>
