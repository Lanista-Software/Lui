<template>
  <div>
    <div class="" :class="scrollP <= 600 ? 'header' : 'header-sticky'">
      <div v-if="scrollP < 600" class="header-top">
        <div class="header-c">
          <top-section />
        </div>
      </div>
      <div class="header-bottom">
        <div class="header-c">
          <bottom-sectiongroup />
        </div>
      </div>
    </div>
    <div class="responsive-header">
      <div class="responsive-header-left">
        <img src="/erbay/logo.png" alt="erbay" />
      </div>
      <div class="responsive-header-center">
        <i class="ri-shield-check-fill text-success" />
      </div>
      <div class="responsive-header-right">
        <i
          class="ri-menu-5-line text-white"
          role="button"
          @click="showMenu()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BottomSectiongroup from '../HeaderOne/HeaderOneComponents/BottomSection/BottomSectiongroup'
import TopSection from '../HeaderOne/HeaderOneComponents/TopSection/TopSection'
export default {
  components: { TopSection, BottomSectiongroup },
  data() {
    return {
      scrollP: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    showMenu() {
      this.$emit('show', true)
    },
    handleScroll() {
      this.scrollP = window.scrollY
    },
  },
}
</script>

<style lang="scss" scoped>
.header-c {
  width: 100%;
}
.header-sticky {
  grid-template-rows: 1fr;
  transition: 0.5s;
  display: none;
}
.header {
  display: none;
  grid-template-rows: 30px 1fr;
  &-top {
    border-bottom: 1px solid $primary;
    padding: 0.5rem 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-bottom {
    align-self: center;
    margin: 0.5rem 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.responsive-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  height: 40px;
  align-content: center;
  div {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
    i {
      font-size: 20px;
    }
  }
  &-right {
    justify-self: flex-end;
  }
  &-center {
    justify-self: center;
  }
  &-left {
    justify-self: flex-start;
  }
}
@media ($sm) {
  .responsive-header {
    div {
      img {
        width: 30px;
        height: 30px;
      }
      i {
        font-size: 25px;
      }
    }
  }
}
@media ($lg) {
  .responsive-header {
    display: none;
  }
  .header {
    display: grid;
  }
  .header-sticky {
    display: grid;
  }
}
</style>
