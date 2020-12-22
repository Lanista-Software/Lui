<template>
  <div class="detail-modal" v-bind="$attrs">
    <div class="detail-modal-header">
      <slot name="header" />
      <div class="detail-modal-header-icon">
        <l-button class="link" v-on="$listeners">
          <slot v-if="$slots.icon" name="icon" />
          <i v-else class="ri-arrow-down-s-line ri-2x text-white" />
        </l-button>
      </div>
    </div>
    <div class="detail-modal-body" v-if="$slots.body">
      <slot name="body" />
    </div>
    <div class="detail-modal-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
import LButton from '../LButton.vue'
export default {
  components: { LButton },
  name: 'DetailModal'
}
</script>
<style lang="scss" scoped>
.detail-modal {
  width: 100%;
  height: 100%;
  z-index: 999;
  &-header {
    width: 100%;
    position: relative;
    max-height: 225px;
    &-icon {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
  &-body {
    width: 100%;
  }
  &-footer {
    width: 100%;
  }
}
</style>
