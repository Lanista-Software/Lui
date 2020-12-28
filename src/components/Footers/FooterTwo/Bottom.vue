<template>
  <FlexBox>
    <div class="section">a</div>
    <div class="section">b</div>
    <div class="section">c</div>
  </FlexBox>
</template>

<script>
import FlexBox from '../../FlexBox.vue'
export default {
  name: 'Bottom',
  components: { FlexBox },
}
</script>

<style lang="scss" scoped>
.section {
  background-color: red;
  width: calc(100% / 3);
}
</style>
