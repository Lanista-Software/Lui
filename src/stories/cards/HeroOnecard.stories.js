import { boolean } from '@storybook/addon-knobs'
import HeroOne from '../../components/Cards/HeroCards/HeroOnecard.vue'
export default {
  title: 'Cards/HeroOnecard',
  component: { HeroOne },
  argTypes: {
    BackgroundColor: { control: 'color' }
  }
}

export const HeroOne1 = () => ({
  data: () => {
    return {
      buttonVariants: {
        bgVariant: 'bg-warning',
        textVariant: 'text-dark',
        btnText: 'İletişime geçin'
      }
    }
  },
  props: {
    center: {
      default: boolean('center', false)
    }
  },
  components: { HeroOne },
  template: `<HeroOne hSize="h2" :buttonVariants="buttonVariants" v-bind='$props' >
 <p :class="center ? 'text-center' : null">
  Yılların tecrübesiyle ve uzman kadromuzla bütün sorularınıza 
  yanıt vermek için bekliyoruz
  </p>
  <template v-slot:top>
  <i class="ri-shield-check-fill text-success ri-8x" />
  </template>
  <template v-slot:top-desc>
  <h2 class="text-dark">
  ONLİNE SİPARİŞ KOLAYLIĞI ÇOK YAKINDA HİZMETİNİZDE
  </h2>
  </template>
  </HeroOne>`
})
// export const HeroOne2 = () => ({
//   data: () => {
//     return {
//       buttonVariants: {
//         bgVariant: 'bg-primary',
//         textVariant: 'text-white',
//         btnText: 'İletişime geçin'
//       }
//     }
//   },
//   props: {
//     titleOne: {
//       default: text('titleOne', 'Temsilcilsi olduğumuz')
//     },
//     titleSecond: {
//       default: text('titleSecond', 'büyük markalar')
//     },
//     btnText: {
//       default: text('btnText', 'Hemen arayın')
//     },
//     center: {
//       default: boolean('center', false)
//     },
//     textVariant: {
//       default: select('textVariant', Variant.textVariant, 'text-dark')
//     }
//   },
//   components: { HeroOne },
//   template: `<HeroOne :buttonVariants="buttonVariants" hSize="h2" v-bind='$props' >
//   Daha fazla bilgi almak ve diğer hizmetleri öğrenmek için
//   </HeroOne>`
// })
