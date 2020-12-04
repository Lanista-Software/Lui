<template>
  <div class="faq-drop-card shadow bg-white radius-08">
    <div class="faq-drop-card-inline">
      <div class="faq-drop-card-inline-left">
        <h5 class="text-dark">
          {{ question }}
        </h5>
      </div>
      <div class="faq-drop-card-inline-right">
        <i
          v-if="!show"
          class="ri-arrow-down-s-line text-dark"
          @click="show = !show"
        />
        <i v-else class="ri-arrow-up-s-line text-dark" @click="show = !show" />
      </div>
    </div>
    <div v-if="show" class="faq-drop-card-slot text-dark">
      <slot />
      <div class="faq-drop-card-slot-btn">
        <l-button bg-variant="bg-primary" text-variant="text-white" size="md"
          >İletişime geçin</l-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import LButton from "../LButton.vue";
export default {
  name: "FaqDrop",
  components: { LButton },
  props: {
    question: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>
<style lang="scss" scoped>
.faq-drop-card {
  height: auto;
  padding: 13px;
  transition: 1s ease-in-out;

  &-inline {
    display: inline-flex;
    align-items: center;
    width: 100%;
    p {
      font-family: $baseFont;
    }
    i {
      font-size: 16px;
      cursor: pointer;
    }
    &-right {
      display: flex;
      justify-content: flex-end;
      width: 10%;
    }
    &-left {
      width: 90%;
      justify-self: start;
    }
  }
  &-slot {
    font-family: $baseFont;
    line-height: 15px;
    margin-top: 1rem;
    &-btn {
      text-align: center;
      width: 100%;
      margin-top: 30px;
    }
  }
}
@media ($sm) {
  .faq-drop-card {
    &-slot {
      line-height: 20px;
    }
  }
}
@media ($md) {
  .faq-drop-card {
    &-inline {
      i {
        font-size: 20px;
      }
    }
    &-slot {
      line-height: 25px;
      font-size: 13px;
    }
  }
}
@media ($lg) {
  .faq-drop-card {
    &-slot {
      line-height: 27px;
      font-size: 14px;
    }
  }
}
@media ($xl) {
  .faq-drop-card {
    &-slot {
      line-height: 30px;
    }
  }
}
</style>
