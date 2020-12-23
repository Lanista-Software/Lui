<template>
  <div class="header-two">
    <top>
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
      </Bottom>
    </div>
  </div>
</template>
<script>
import LButton from '../../LButton.vue'
import Top from './Top'
import Bottom from './Bottom'
import CompanyLogo from '../HeaderOne/HeaderOneComponents/BottomSection/CompanyLogo.vue'
import BgIcon from '../../Icons/BgIcon.vue'
import PrependInput from '../../Inputs/PrependInput.vue'
export default {
  components: { CompanyLogo, LButton, Top, BgIcon, PrependInput, Bottom },
  name: 'HeaderTwo'
}
</script>
