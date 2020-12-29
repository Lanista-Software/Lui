<template>
  <FlexBox justify="space-around">
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
  width: calc(75% / 3);
  background-color: red;
}
</style>
