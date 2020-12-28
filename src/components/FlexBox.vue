<template>
  <div class="flex-box" v-bind="$attrs"><slot /></div>
</template>

<script>
export default {
  name: 'FlexBox',
}
</script>

<style scoped lang="scss">
.flex-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
