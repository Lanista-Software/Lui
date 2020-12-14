<template>
  <div class="promotion-card">
    <div class="promotion-card-icon">
      <PromotionIcon v-bind="$props.icon" />
    </div>
    <div class="promotion-card-text">
      <h4 class="text-dark">
        {{ title }}
      </h4>
      <p class="text-dark_08">
        <slot />
      </p>
    </div>
  </div>
</template>
<script>
import PromotionIcon from "./PromotionIcon";
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: Object,
      required: true
    }
  },
  components: { PromotionIcon }
};
</script>
<style lang="scss" scoped>
.promotion-card {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  &-text {
    text-align: center;
    p {
      margin-top: 1rem;
    }
  }
  &-icon {
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
  }
}
</style>
