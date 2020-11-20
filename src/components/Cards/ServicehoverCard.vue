<template>
  <div class="service-hover-card radius-10">
    <div class="bg-dark_08 service-hover-card-abs">
      <h4 class="text-white fw-100">
        {{ title }}
      </h4>
      <p class="text-white fw-400">
        <slot />
      </p>
      <l-button bgVariant="bg-primary" textVariant="text-white" size="md"
        >Iletişime geçin</l-button
      >
    </div>
  </div>
</template>

<script>
import LButton from "../LButton.vue";
export default {
  components: { LButton },
  name: "ServicehoverCard",
  props: {
    title: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.service-hover-card {
  display: flex;
  width: 275px;
  transition: 0.8s;
  height: 240px;
  background-image: url("/public/erbay/man.png");
  &-abs {
    align-self: flex-end;
    height: 70px;
    text-align: center;
    display: grid;
    justify-content: center;
    transition: 0.8s;
    align-content: center;
    grid-template-rows: auto auto auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0px 25px;
    p,
    h4 {
      font-family: $baseFont;
      margin: 0px;
    }
    p {
      font-size: 10px;
      opacity: 0.8;
      margin-top: 10px;
    }
    button {
      display: none;
    }
  }
}
.service-hover-card:hover {
  .service-hover-card-abs {
    height: 100%;
    border-radius: 10px;
    transition: 0.8s;
    button {
      display: block;
      margin-top: 50px;
    }
  }
}
@media ($md) {
  .service-hover-card {
    height: 290px;
    &-abs {
      height: 95px;
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
