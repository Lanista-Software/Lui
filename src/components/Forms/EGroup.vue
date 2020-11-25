<template>
  <div>
    <label class="fw-400 text-dark">{{ label }}</label>
    <input class="bg-dark_01 radius-05" :type="type" v-on="$listeners" />
  </div>
</template>

<script>
export default {
  name: "EGroup",
  props: {
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    }
  }
};
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

  height: 35px;
}
div {
  width: 100%;
}
@media ($lg) {
  input {
    height: 50px;
  }
}
</style>
