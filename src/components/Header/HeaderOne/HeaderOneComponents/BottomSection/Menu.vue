<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.href">
        <nuxt-link
          class="text-white"
          tag="a"
          :to="item.href"
          :exact="item.exact"
        >
          {{ item.text }} <span />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
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
  span {
    display: none;
    width: 30px;
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
