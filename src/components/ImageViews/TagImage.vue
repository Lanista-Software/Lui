<template>
  <div class="tag-image radius-10" v-bind="$attrs">
    <img class="radius-10 shadow" :src="url" alt="Test" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TagImage',
  props: {
    url: {
      type: String,
      default: 'https://picsum.photos/id/236/600/600',
    },
  },
  computed: {
    styleFilter() {
      let url = this.url

      return {
        backgroundImage: `url("${url}")`,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.tag-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  max-height: 566px;
  img {
    width: 100%;
    height: 100%;
    min-width: 200px;
    max-width: 566px;
  }
  .tag-one {
    position: absolute;
    bottom: 10%;
    left: 0px;
  }
}
</style>
