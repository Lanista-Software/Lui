<template>
  <div class="tag-one" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TagOne',
}
</script>

<style scoped lang="scss">
.tag-one {
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
