<template>
  <div class="promotion-icon radius-05 bg-white shadow">
    <i :class="[iconName, iconColor]" />
  </div>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.promotion-icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
