<template>
  <div class="list-one">
    <i class="ri-shield-check-fill text-success" />
    <p class="text-white">
      <slot />
    </p>
  </div>
</template>
<style lang="scss" scoped>
.list-one {
  display: inline-flex;
  column-gap: 1.5rem;
  align-items: flex-start;
}
</style>
