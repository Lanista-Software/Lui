<template>
  <div class="company-logo">
    <div class="company-logo-image">
      <img :src="img" alt="erbay" />
    </div>
    <div class="company-logo-name text-white">
      <h4>
        {{ name }}
      </h4>
      <span class="fw-400">
        {{ subname }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    subname: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.company-logo {
  width: 100%;
  display: inline-flex;
  &-image {
    img {
      width: 60px;
      height: 60px;
    }
  }
  &-name {
    align-self: center;
    margin-left: 10px;
    h4 {
      margin: 0;
      font-family: $titleFont;
    }
    span {
      font-family: $baseFont;
      font-size: 8px;
    }
  }
}
</style>
