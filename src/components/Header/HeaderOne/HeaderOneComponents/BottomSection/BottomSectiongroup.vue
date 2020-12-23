<template>
  <div class="bottom-section-group">
    <div>
      <CompanyLogo
        img="/erbay/logo.png"
        name="ERBAY LASTİK"
        subname="Kereste İmalat İnşaat Ltd. Şti."
      />
    </div>
    <div>
      <lmenu :items="items" multi-border />
    </div>
    <div>
      <l-button
        bg-variant="bg-primary"
        size="md"
        text-variant="text-white"
        @click="scrollDown('form')"
        >İletişim</l-button
      >
    </div>
  </div>
</template>

<script>
import lButton from '../../../../LButton'
import CompanyLogo from './CompanyLogo'
import lmenu from './Menu'
export default {
  components: {
    CompanyLogo,
    lmenu,
    lButton
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
  },
  methods: {
    scrollDown(id) {
      // window.scrollTo(0, 400)
      const elmnt = document.getElementById(id)
      elmnt.scrollIntoView()
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-section-group {
  display: grid;
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
</style>
