<template>
  <div style="width:100%;">
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
  height: 30px;
  border-radius: 5px;
  font-family: $baseFont;
  font-size: 14px;
  color: $dark;
  padding: 0px 10px;
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
