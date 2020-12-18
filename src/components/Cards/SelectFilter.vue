<template>
  <div class="select-filter bg-light radius-08">
    <div
      class="select-filter-top"
      :style="size > 992 ? frStyle.dst : frStyle.st"
    >
      <slot />
      <!-- slot gelebilir -->
    </div>
    <div class="select-filter-btn">
      <l-button
        class="select-filter-btn-responsive"
        size="md"
        :bg-variant="buttonVariants.bg"
        :text-variant="buttonVariants.text"
        v-on="$listeners"
        block
        >{{ buttonVariants.slot }}</l-button
      >
      <l-button
        class="select-filter-btn-desktop"
        size="md"
        :bg-variant="buttonVariants.bg"
        :text-variant="buttonVariants.text"
        v-on="$listeners"
        >{{ buttonVariants.slot }}</l-button
      >
    </div>
  </div>
</template>

<script>
import LButton from "../LButton.vue";
export default {
  name: "SelectFilter",
  components: { LButton },
  props: {
    mobileFr: {
      type: Number,
      default: 2
    },
    desktopFr: {
      type: Number,
      default: 6
    },
    buttonVariants: {
      type: Object,
      default: () => {
        return {
          slot: "Lastik ara",
          bg: "bg-primary",
          text: "text-white"
        };
      }
    }
  },
  data() {
    return {
      size: null
    };
  },
  computed: {
    frStyle() {
      const st = `
        grid-template-columns: repeat(${this.mobileFr},1fr);
      `;
      const dst = `grid-template-columns: repeat(${this.desktopFr},1fr)`;
      const arr = { dst, st };
      return arr;
    }
  },
  created() {
    this.size = window.innerWidth;
    window.addEventListener("resize", () => {
      this.size = window.innerWidth;
    });
  },

  destroyed() {
    window.addEventListener("resize", () => {
      this.size = window.innerWidth;
    });
  }
};
</script>

<style lang="scss" scoped>
.select-filter {
  display: grid;
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 10px;
  &-top {
    display: grid;
    column-gap: 12px;
    row-gap: 1rem;
    grid-template-rows: 1fr;
  }
  &-bottom {
    display: grid;
    gap: 30px;
  }
  &-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    &-desktop {
      display: none;
    }
  }
}
@media ($lg) {
  .select-filter {
    height: auto;
    padding: 10px;
    grid-template-rows: 1fr;
    grid-template-columns: auto minmax(100px, 150px);
    gap: 1rem;
    &-top {
      align-self: center;
      div {
        width: 100%;
      }
    }
    &-bottom {
      align-self: center;
      div {
        width: 100%;
      }
    }
    &-btn {
      align-self: center;
      justify-content: flex-end;
      margin-bottom: 0px;
      &-desktop {
        display: block;
      }
      &-responsive {
        display: none;
      }
    }
  }
}
</style>
