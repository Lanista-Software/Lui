<template>
  <div class="section-text">
    <h3 class="text-white fw-200">
      {{ title }}
    </h3>
    <div class="section-text-slot">
      <p class="text-white section-text-slot-mobile">
        {{ !more ? slot.responsiveText : slot.desktopText }}
      </p>
      <p class="text-white section-text-slot-desktop">
        {{ slot.desktopText }}
      </p>
    </div>
    <div class="section-text-more">
      <span class="text-white fw-400"> Devamını okuyun </span>
      <i
        role="button"
        class="text-white"
        :class="!more ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'"
        @click="more = !more"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionText",
  props: {
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      more: false
    };
  },
  computed: {
    slot() {
      const responsiveText = this.$slots.default[0].text.substring(0, 500);
      const desktopText = this.$slots.default[0].text;
      return { responsiveText, desktopText };
    }
  }
};
</script>
<style lang="scss" scoped>
.section-text {
  text-align: center;
  h3 {
    font-family: $baseFont;
  }
  &-slot {
    text-align: center;
    line-height: 25px;
    margin-top: 25px;
    p {
      font-family: $baseFont;
      opacity: 0.8;
    }
    &-desktop {
      display: none;
    }
  }
  &-more {
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    span {
      display: block;
      font-family: $baseFont;
    }
    i {
      font-size: 20px;
    }
  }
}
@media ($md) {
  .section-text {
    &-slot {
      &-mobile {
        display: none;
      }
      &-desktop {
        display: block;
      }
    }
    &-more {
      display: none;
    }
  }
}
</style>
