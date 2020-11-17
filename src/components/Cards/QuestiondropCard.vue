<template>
  <div class="quesiton-drop-card shadow bg-white radius-08">
    <div class="quesiton-drop-card-inline">
      <div class="quesiton-drop-card-inline-left">
        <p class="text-dark">
          Paket fiyatları aylık mı, yıllık mı ?
        </p>
      </div>
      <div class="quesiton-drop-card-inline-right">
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
    <div class="quesiton-drop-card-slot" v-if="show">
      <p class="text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sed?
        Obcaecati aperiam nemo, neque quam quasi dolores omnis sit voluptas
        asperiores, accusantium laboriosam maxime mollitia voluptatibus fugit
        sunt laborum iure reprehenderit soluta atque nihil ab quaerat recusandae
        sequi est! Iste quidem nostrum voluptatibus ducimus illum laboriosam
        harum, asperiores praesentium fuga!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestiondropCard",
  data() {
    return {
      show: false
    };
  }
};
</script>
<style lang="scss" scoped>
.quesiton-drop-card {
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
  }
}
@media ($sm) {
  .quesiton-drop-card {
    &-inline {
      p {
        font-size: 14px;
      }
    }
    &-slot {
      font-size: 12px;
    }
  }
}
@media ($md) {
  .quesiton-drop-card {
    &-inline {
      p {
        font-size: 16px;
      }
      i {
        font-size: 20px;
      }
    }
    &-slot {
      font-size: 13px;
    }
  }
}
@media ($lg) {
  .quesiton-drop-card {
    &-inline {
      p {
        font-size: 18px;
      }
    }
    &-slot {
      font-size: 14px;
    }
  }
}
</style>
