<template>
  <div>
    <select class="l-select shadow">
      <option v-for="item in items" :key="item.key" :value="item.key">{{
        item.label
      }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "LSelect",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.l-select {
  width: 100%;
  border-radius: 5px;
  font-family: $baseFont;
  color: $dark;
  padding: 0.5rem 0.625rem;
  outline: none;
  border-color: $white;
}

select option:checked {
  background-color: $dark;
  color: $white;
}
select option {
  background: $white;
  color: $dark;
  border: none;
  outline: none;
  box-shadow: inset 20px 20px $light;
}
</style>
