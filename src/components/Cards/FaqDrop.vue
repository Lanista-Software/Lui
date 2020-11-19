<template>
  <div class="faq-drop-card shadow bg-white radius-08">
    <div class="faq-drop-card-inline">
      <div class="faq-drop-card-inline-left">
        <p class="text-dark">
          {{ question }}
        </p>
      </div>
      <div class="faq-drop-card-inline-right">
        <i
          v-if="!show"
          class="ri-arrow-down-s-line text-dark"
          @click="show = !show"
        ></i>
        <i
          v-else
          class="ri-arrow-up-s-line text-dark"
          @click="show = !show"
        ></i>
      </div>
    </div>
    <div class="faq-drop-card-slot text-dark" v-if="show">
      <slot />
      <div class="faq-drop-card-slot-btn">
        <l-button bgVariant="bg-primary" textVariant="text-white" size="lg"
          >İletişime geçin</l-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import LButton from "../LButton.vue";
export default {
  components: { LButton },
  name: "FaqDrop",
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
      font-size: 12px;
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
    font-size: 10px;
    font-family: $baseFont;
    line-height: 15px;
    &-btn {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      button {
        width: 90%;
      }
    }
  }
}
@media ($sm) {
  .faq-drop-card {
    &-inline {
      p {
        font-size: 14px;
      }
    }
    &-slot {
      line-height: 20px;
      font-size: 12px;
      &-btn {
        button {
          width: 60%;
        }
      }
    }
  }
}
@media ($md) {
  .faq-drop-card {
    &-inline {
      p {
        font-size: 16px;
      }
      i {
        font-size: 20px;
      }
    }
    &-slot {
      line-height: 25px;
      font-size: 13px;
      &-btn {
        button {
          width: 40%;
        }
      }
    }
  }
}
@media ($lg) {
  .faq-drop-card {
    &-inline {
      p {
        font-size: 18px;
      }
    }
    &-slot {
      line-height: 30px;
      font-size: 14px;
    }
  }
}
@media ($xl) {
  .faq-drop-card {
    &-inline {
      p {
        font-size: 18px;
      }
    }
    &-slot {
      line-height: 30px;
      font-size: 14px;
      &-btn {
        button {
          width: 20%;
        }
      }
    }
  }
}
</style>
