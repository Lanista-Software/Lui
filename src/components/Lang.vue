<template>
  <div class="lang">
    <div class="lang-container">
      <slot />
      <span class="link">
        <a class="text-white" @click="show = false">
          {{ selected }}
        </a>
        <a
          v-if="show"
          style="display:block"
          class="text-white"
          @click=";(show = false), (selected = other)"
        >
          {{ other }}
        </a>
      </span>
      <l-button class="link" @click="show = true">
        <i class="ri-arrow-down-s-line text-white"></i>
      </l-button>
    </div>
  </div>
</template>

<script>
import LButton from './LButton.vue'
export default {
  components: { LButton },
  name: 'Lang',
  data() {
    return {
      show: false,
      selected: 'Turkish',
      other: 'English',
    }
  },
}
</script>

<style lang="scss" scoped>
.lang {
  height: 50px;
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
  }
  &-container {
    display: inline-flex;
    width: 100%;
    align-items: center;
    column-gap: 12px;
    i {
      font-size: 20px;
    }
  }
}
</style>
