<template>
  <div class="rating">
    <i class="ri-star-fill text-warning" v-for="i in fill" :key="i * 2" />
    <i class="ri-star-line text-warning" v-for="i in line" :key="i * 22" />
  </div>
</template>

<script>
export default {
  props: {
    line: {
      type: Number,
      default: null
    },
    fill: {
      type: Number,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
.rating {
  display: inline-flex;
  i {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  i:not(:last-child) {
    margin-right: 2px;
  }
}
</style>
