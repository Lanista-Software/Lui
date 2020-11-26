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
    font-size: 1rem;
    font-family: $baseFont;
    align-self: center;
    color: $white;
    text-align: left;
  }
  i {
    margin-right: 10px;
    font-size: 16px;
  }
}
@media ($lg) {
  a > span {
    font-size: 0.5rem;
  }
}
@media ($xl) {
  a > span {
    font-size: 0.6rem;
  }
}
@media ($xxl) {
  a > span {
    font-size: 0.7rem;
  }
}
</style>
