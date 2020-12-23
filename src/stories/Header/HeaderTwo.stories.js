import HeaderTwobottom from '../../components/Header/HeaderTwo/Bottom.vue'
import HeaderTwotop from '../../components/Header/HeaderTwo/Top.vue'
import HeaderTwo from '../../components/Header/HeaderTwo/HeaderTwo.vue'
import BgIcon from '../../components/Icons/BgIcon'
import PrependInput from '../../components/Inputs/PrependInput'
import LButton from '../../components/LButton'
import CompanyLogo from '../../components/Header/HeaderOne/HeaderOneComponents/BottomSection/CompanyLogo'

export default {
  title: 'Headers/HeaderTwobottom',
  component: HeaderTwobottom
}
export const Header_Two_Bottom = () => ({
  components: { HeaderTwobottom, BgIcon, PrependInput },
  template: `<HeaderTwobottom>
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
  </HeaderTwobottom>`
})
export const Header_Two_Top = () => ({
  components: { HeaderTwotop, CompanyLogo, LButton },
  template: `<HeaderTwotop>
<template v-slot:logo>
<CompanyLogo
img="/erbay/logo.png"
name="ERBAY LASTİK"
subname="Kereste İmalat İnşaat Ltd. Şti."
/>
</template>
<template v-slot:button>
<l-button bg-variant="bg-light" size="md">Müşteri Girişi</l-button>
</template>
  </HeaderTwotop>`
})
export const Header_Two = () => ({
  components: { HeaderTwo },
  template: `<HeaderTwo>
  </HeaderTwo>`
})
