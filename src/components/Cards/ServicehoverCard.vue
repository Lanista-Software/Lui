<template>
  <div class="service-hover-card radius-10" :style="bgStyle">
    <div class="bg-dark_08 service-hover-card-abs">
      <slot v-if="$slots.title" name="title" />
      <slot v-if="$slots.default" />
      <slot v-if="$slots.button" name="button" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicehoverCard',
  props: {
    title: {
      type: String,
      default: null,
    },
    bgUrl: {
      type: String,
      default: null,
    },
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgUrl})`
    },
  },
}
</script>

<style lang="scss" scoped>
.service-hover-card {
  display: flex;
  width: 275px;
  height: 240px;
  &-abs {
    align-self: flex-end;
    height: 25%;
    text-align: center;
    display: grid;
    justify-content: center;
    transition: 1s;
    width: 100%;
    align-content: center;
    grid-template-rows: auto auto auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0px 25px;
    overflow: hidden;
    p,
    h5 {
      font-family: $baseFont;
      margin-top: 10px;
    }
    p {
      opacity: 0.8;
    }
    button {
      display: none;
      margin-top: 50px;
    }
  }
}
.service-hover-card:hover {
  .service-hover-card-abs {
    height: 100%;
    border-radius: 10px;
    transition: 1s;
    button {
      display: block;
    }
  }
}
@media ($md) {
  .service-hover-card {
    height: 290px;
  }
}
</style>
