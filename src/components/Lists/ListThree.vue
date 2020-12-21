<template>
  <ul class="list-three" v-bind="$attrs">
    <li v-if="$slots.title" class="list-title"><slot name="title"/></li>
    <li v-for="(item, index) in list" :key="index" class="list-item">
      <a v-if="item.link" :href="item.link" :class="textVariant">{{
        item.title
      }}</a>
      <span v-else :class="textVariant">{{ item.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListThree',
  props: {
    list: {
      type: Array,
      required: true,
    },
    textVariant: {
      type: String,
      default: 'text-light',
    },
  },
}
</script>

<style scoped lang="scss">
.list-three,
.list-three * {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none !important;
}
.list-three {
  width: 100%;
  li {
    padding-bottom: 8px;
  }
  li:first-child {
    padding-bottom: 12px;
  }
  li:last-child {
    padding-bottom: 0;
  }
}
</style>
