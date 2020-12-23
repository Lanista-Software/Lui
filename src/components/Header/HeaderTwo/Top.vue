<template>
  <div class="top-section-group bg-dark_09">
    <div class="top-section-group-container container">
      <div>
        <slot name="logo" />
      </div>
      <div>
        <lmenu :items="items" multi-border />
      </div>
      <div>
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<script>
import lmenu from '../HeaderOne/HeaderOneComponents/BottomSection/Menu'
export default {
  name: 'HeaderTwoTop',
  components: {
    lmenu
  },
  data() {
    return {
      items: [
        {
          href: '/',
          exact: false,
          class: 'text-white',
          text: 'Anasayfa'
        },
        {
          href: '#',
          exact: false,
          class: 'text-white',
          text: 'Hakkımızda'
        },
        {
          href: '#',
          exact: false,
          class: 'text-white',
          text: 'Sık Sorulan sorular'
        },
        {
          href: '#',
          exact: false,
          class: 'text-white',
          text: 'Ürünler'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top-section-group {
  &-container {
    display: grid;
    height: 75px;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    div {
      align-self: center;
    }
    div:nth-child(1) {
      justify-self: start;
    }
    div:nth-child(2) {
      justify-self: center;
    }
    div:nth-child(3) {
      justify-self: end;
    }
    button {
      padding: 7px 24px;
    }
  }
}
</style>
