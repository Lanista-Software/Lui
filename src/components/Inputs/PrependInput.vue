<template>
  <div class="prepend-input">
    <input
      v-bind="$attrs"
      class="bg-white_05 radius-05"
      placeholder="Arama Yapın"
      @input="$emit('input', $event)"
    />
    <div class="prepend-input-icon">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.prepend-input {
  position: relative;
  input {
    height: 30px;
    width: 100%;
    max-width: 372px;
    padding-left: 40px;
    outline: none;
    color: $dark;
    border: 1px solid transparent;
    &::placeholder {
      color: rgba($white, 0.6);
    }
  }
  &-icon {
    position: absolute;
    top: 3px;
    left: 12px;
  }
}
</style>
