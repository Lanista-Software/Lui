<template>
  <div>
    <label class="fw-400 text-dark">{{ label }}</label>
    <input
      class="bg-dark_01 radius-05"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'EGroup',
  props: {
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  display: block;
  font-family: $baseFont;
  margin-bottom: 10px;
}
input {
  border: none;
  outline: none;
  width: 100%;
  height: 30px;
}
div {
  width: 100%;
}
</style>
