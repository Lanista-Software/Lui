<template>
  <div
    class="media-card radius-08"
    :style="`background-image: url(${bgImage});`"
  >
    <div class="media-card-container bg-dark_06 radius-08">
      <div class="media-card-button">
        <l-button size="lg" class="link" @click="goVideo">
          <img src="/medias/m1.png" />
          <small class="text-white fw-400">
            Videoyu oynat
          </small>
        </l-button>
      </div>
    </div>
  </div>
</template>
<script>
import LButton from "../../LButton.vue";
export default {
  name: "MediaCard",
  components: { LButton },
  props: {
    href: {
      type: String,
      default: null
    },
    bgImage: {
      type: String,
      default: null
    }
  },
  methods: {
    goVideo() {
      window.open(this.href, "_blank");
    }
  }
};
</script>
<style lang="scss" scoped>
.media-card {
  max-width: 560px;
  height: 450px;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  &-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    button {
      padding: 0;
    }
    small {
      display: block;
      margin-top: 10px;
    }
  }
}
</style>
