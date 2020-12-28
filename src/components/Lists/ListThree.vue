<template>
  <ul class="list-three" :class="direction" v-bind="$attrs">
    <li v-if="$slots.title" class="list-title" :class="textVariant">
      <slot name="title" />
    </li>
    <li v-for="(item, index) in list" :key="index" class="list-item">
      <component
        :is="item.link ? 'a' : 'span'"
        :class="textVariant"
        :href="item.link ? item.link : null"
      >
        <i v-if="item.type === 'icon'" :class="[item.content, textVariant]" />
        <span v-else :class="textVariant">{{ item.content }}</span>
      </component>
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
    direction: {
      type: String,
      required: true,
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
}
.list-v {
  li {
    padding-bottom: 8px;
  }
  li.list-title {
    padding-bottom: 16px;
  }
  li:last-child {
    padding-bottom: 0;
  }
}
.list-h {
  display: inline-flex;
  li {
    padding-right: 12px;
  }
  li.list-title {
    padding-right: 16px;
  }
  li:last-child {
    padding-right: 0;
  }
}
</style>
