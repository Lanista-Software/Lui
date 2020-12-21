<template>
  <div class="brands-card" v-bind="$attrs">
    <img :src="img" v-for="img in images" :key="img" />
  </div>
</template>
<script>
export default {
  name: 'BrandsCard',
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.brands-card {
  display: inline-flex;
  align-items: center;
  column-gap: 4rem;
  justify-content: center;
  width: 100%;
  img {
    max-width: 100px;
  }
}
@media ($xl) {
  .brands-card {
    column-gap: 5rem;
    img {
      max-width: 120px;
    }
  }
}
@media ($xxl) {
  .brands-card {
    column-gap: 7rem;
    img {
      max-width: 150px;
    }
  }
}
</style>
