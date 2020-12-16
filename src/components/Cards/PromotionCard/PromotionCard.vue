<template>
  <div class="promotion-card">
    <div class="promotion-card-icon">
      <PromotionIcon v-if="!borderMode" v-bind="$props.icon" />
    </div>
    <div class="promotion-card-text">
      <div class="line-gr">
        <span v-if="borderMode" class="line-span bg-success"></span>
        <h4 class="text-dark">
          {{ title }}
        </h4>
      </div>
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
    borderMode: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object,
      required: false
    }
  },
  components: { PromotionIcon }
};
</script>
<style lang="scss" scoped>
.line-span {
  display: block;
  width: 20px;
  height: 3px;
  margin-right: 15px;
  border-radius: 3px;
}
.line-gr {
  display: inline-flex;
  align-items: center;
}
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
