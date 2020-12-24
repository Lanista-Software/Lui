<template>
  <div>
    <select
      class="l-select shadow"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-for="(item, index) in items"
        :key="index"
        :value="item.key"
        v-bind="$attrs"
        :selected="!fit ? $attrs.selected === item.value : null"
        v-on="$listeners"
      >
        {{ item.value }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'LSelect',
  props: {
    items: {
      type: Array,
      required: true,
    },
    fit: {
      type: Boolean,
      required: false,
    },
  },
}
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
