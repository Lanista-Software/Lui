<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.href">
        <nuxt-link
          :class="item.class"
          tag="a"
          :to="item.href"
          :exact="item.exact"
        >
          {{ item.text }}
          <div><span class="span-right"/></div>
          <div v-if="multiBorder">
            <span class="span-left" />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    items: {
      type: Array,
      required: true,
    },
    multiBorder: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
ul {
  padding: 0;
  list-style: none;
  width: 100%;
  margin: 0;
}

li {
  float: left;
  font-family: $baseFont;
  margin: 0;
  color: $white;
  div {
    width: 50%;
    float: left;
  }
  .span-right {
    display: none;
    width: 80%;
    height: 2px;
    background-color: $warning;
    margin-top: 3px;
  }
  .span-left {
    display: none;
    width: 20%;
    height: 2px;
    background-color: $warning;
    margin-top: 3px;
  }
}
.nuxt-link-active {
  span {
    display: block;
  }
}
li:not(:last-child) {
  margin-right: 11px;
}
@media ($xxl) {
  li:not(:last-child) {
    margin-right: 22px;
  }
}
</style>
