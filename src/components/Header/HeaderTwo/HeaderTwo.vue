<template>
  <div class="header-two">
    <div class="desktop-header">
      <top>
        <template v-slot:logo>
          <img src="/gochem/logo.svg" alt="gochem" />
        </template>
        <template v-slot:button>
          <l-button bg-variant="bg-light" size="sm">Müşteri Girişi</l-button>
        </template>
      </top>
      <div>
        <Bottom>
          <template v-slot:left>
            <bg-icon :size="[24, 24]" class="bg-white_07 radius-04">
              <i class="ri-star-line ri-1x" />
            </bg-icon>
            <bg-icon :size="[24, 24]" class="bg-white_07 radius-04">
              <i class="ri-star-line ri-1x" />
            </bg-icon>
            <bg-icon :size="[24, 24]" class="bg-white_07 radius-04">
              <i class="ri-star-line ri-1x" />
            </bg-icon>
            <bg-icon :size="[24, 24]" class="bg-white_07 radius-04">
              <i class="ri-star-line ri-1x " />
            </bg-icon>
          </template>
          <template v-slot:center>
            <prepend-input>
              <i class="ri-star-line ri-1x text-success" />
            </prepend-input>
          </template>
          <template v-slot:right>
            <lang>
              <i class="ri-arrow-down-s-line text-white" />
            </lang>
          </template>
        </Bottom>
      </div>
    </div>
    <div class="responsive-header bg-primary">
      <div class="responsive-header-container">
        <div class="responsive-header-left">
          <img src="/gochem/res.png" alt="gochem" />
        </div>
        <div class="responsive-header-right">
          <i class="ri-menu-5-line text-white" role="button" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LButton from '../../LButton.vue'
import Top from './Top'
import Bottom from './Bottom'
import BgIcon from '../../Icons/BgIcon.vue'
import PrependInput from '../../Inputs/PrependInput.vue'
import Lang from '../../Lang.vue'
export default {
  components: { LButton, Top, BgIcon, PrependInput, Bottom, Lang },
  name: 'HeaderTwo'
}
</script>
<style lang="scss" scoped>
.desktop-header {
  display: none;
}
.responsive-header {
  &-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 40px;
    align-content: center;
    padding-left: 20px;
    padding-right: 20px;
    div {
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
      i {
        font-size: 20px;
      }
    }
  }
  &-right {
    justify-self: flex-end;
  }
  &-left {
    justify-self: flex-start;
  }
}
@media ($lg) {
  .responsive-header {
    display: none;
  }
  .desktop-header {
    display: block;
  }
}
</style>
