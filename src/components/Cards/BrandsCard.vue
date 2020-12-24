<template>
  <div
    class="brands-card"
    :style="`grid-template-columns: repeat(${images.length}, 1fr);`"
    v-bind="$attrs"
  >
    <img :src="img" v-for="img in images" :key="img" />
  </div>
</template>
<script>
export default {
  name: 'BrandsCard',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.brands-card {
  display: grid;
  align-items: center;
  width: 100%;
  img {
    max-width: 150px;
    width: 100%;
    justify-self: center;
    height: auto;
  }
}
</style>
