<template>
  <div class="company-logo">
    <div class="company-logo-image">
      <img :src="img" alt="erbay" />
    </div>
    <div class="company-logo-name text-white">
      <h5>
        {{ name }}
      </h5>
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
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    subname: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.company-logo {
  width: 100%;
  display: inline-flex;
  &-image {
    img {
      width: 40px;
      height: 40px;
    }
  }
  &-name {
    align-self: center;
    margin-left: 10px;
    h5 {
      font-family: $titleFont;
    }
    span {
      font-family: $baseFont;
      font-size: 8px;
    }
  }
}
@media ($xxl) {
  .company-logo-image > img {
    width: 60px;
    height: 60px;
  }
  .company-logo-name {
    margin-left: 8px;
  }
}
</style>
