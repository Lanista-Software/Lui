<template>
  <div class="service-hover-card radius-10" :style="bgStyle">
    <div class="bg-dark_08 service-hover-card-abs">
      <h5 class="text-white fw-100">
        {{ title }}
      </h5>
      <p class="text-white fw-400">
        <slot />
      </p>
      <l-button bg-variant="bg-primary" text-variant="text-white" size="md"
        >Iletişime geçin</l-button
      >
    </div>
  </div>
</template>

<script>
import LButton from "../LButton.vue";
export default {
  name: "ServicehoverCard",
  components: { LButton },
  props: {
    title: {
      type: String,
      default: null
    },
    bgUrl: {
      type: String,
      default: null
    }
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgUrl})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.service-hover-card {
  display: flex;
  width: 275px;
  height: 240px;
  &-abs {
    align-self: flex-end;
    height: 40%;
    text-align: center;
    display: grid;
    justify-content: center;
    transition: 1s;
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
