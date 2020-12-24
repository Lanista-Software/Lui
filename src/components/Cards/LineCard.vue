<template>
  <div class="line-card">
    <div class="line-card-top">
      <div v-if="$slots.icon" class="line-card-top-icon">
        <slot name="icon"></slot>
      </div>
      <div v-if="$slots.title" class="line-card-top-Title">
        <slot name="title"></slot>
      </div>
    </div>
    <div v-if="$slots.content" class="line-card-content">
      <slot name="content"></slot>
    </div>
    <div v-if="$slots.footer" class="line-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineCard',
}
</script>

<style lang="scss" scoped>
.line-card {
  padding: 20px;
  width: 100%;
  max-width: 275px;
  min-width: 200px;
  &-top {
    display: inline-flex;
    column-gap: 20px;
    align-items: center;
  }
  &-content {
    margin-top: 20px;
  }
  &-footer {
    margin-top: 20px;
  }
}
</style>
