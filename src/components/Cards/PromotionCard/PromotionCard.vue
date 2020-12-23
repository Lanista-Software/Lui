<template>
  <div class="promotion-card">
    <div class="promotion-card-icon" v-if="$slots.icon">
      <slot name="icon" />
    </div>
    <div class="promotion-card-text" v-if="$slots.title || $slots.default">
      <slot name="title" />
      <div class="promotion-card-text-tx">
        <slot />
      </div>
    </div>
    <div class="promotion-card-button" v-if="$slots.buttons">
      <slot name="buttons" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    borderMode: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.line-span {
  display: block;
  width: 20px;
  height: 3px;
  margin-right: 15px;
  border-radius: 3px;
}
.promotion-card {
  display: grid;
  grid-template-rows: auto;
  gap: 16px;
  &-text {
    text-align: center;
    &-tx {
      margin-top: 12px;
    }
  }
  &-icon {
    justify-self: center;
  }
  &-button {
    justify-self: center;
  }
}
@media ($lg) {
  .promotion-card {
    &-icon {
      justify-self: start;
    }
    &-text {
      text-align: left;
    }
    &-button {
      justify-self: left;
    }
  }
}
</style>
