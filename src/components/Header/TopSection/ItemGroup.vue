<template>
  <a href="#">
    <span>
      <i :class="icon"></i>
    </span>
    <span><slot /></span>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: flex;
  text-align: center;
  span {
    font-size: 14px;
    font-family: $baseFont;
    align-self: center;
    color: $white;
  }
  i {
    margin-right: 10px;
    font-size: 16px;
  }
}
</style>
