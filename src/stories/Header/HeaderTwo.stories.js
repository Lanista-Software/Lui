import HeaderTwo from '../../views/components/Headers/HeaderTwo.vue'
import FlexBox from '../../components/FlexBox'
import lmenu from '../../components/Header/HeaderOne/HeaderOneComponents/BottomSection/Menu'
import LButton from '../../components/LButton'
import BgIcon from '../../components/Icons/BgIcon.vue'
import PrependInput from '../../components/Inputs/PrependInput.vue'
import Lang from '../../components/Lang.vue'
export default {
  title: 'views/Headers/Header_Two',
  component: { HeaderTwo },
}
export const Variant_1 = () => ({
  components: {
    HeaderTwo,
    FlexBox,
    lmenu,
    LButton,
    BgIcon,
    PrependInput,
    Lang,
  },
  data() {
    return {
      items: [
        {
          href: '/',
          exact: false,
          class: 'text-white',
          text: 'Anasayfa',
        },
        {
          href: '#',
          exact: false,
          class: 'text-white',
          text: 'Hakkımızda',
        },
        {
          href: '#',
          exact: false,
          class: 'text-white',
          text: 'Sık Sorulan sorular',
        },
        {
          href: '#',
          exact: false,
          class: 'text-white',
          text: 'Ürünler',
        },
      ],
    }
  },
  template: `<HeaderTwo>
  <template v-slot:top>
  <flex-box class="container" justify="space-between" align="center">
  <div>
    <img src="/gochem/logo.svg" alt="gochem" />
  </div>
  <div>
    <lmenu :items="items" multi-border />
  </div>
  <div>
    <l-button bg-variant="bg-light" size="sm">Müşteri Girişi</l-button>
  </div>
</flex-box>
  </template>
  <template v-slot:bottom>
  <flex-box class="container" justify="space-between" align="center">
  <div class="section" style="display:inline-flex; column-gap:10px">
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
  </div>
  <div class="section">
    <prepend-input>
      <i class="ri-star-line ri-1x text-success" />
    </prepend-input>
  </div>
  <div class="section">
    <lang>
      <i class="ri-arrow-down-s-line text-white" />
    </lang>
  </div>
</flex-box>
  </template>
  </HeaderTwo>`,
})
