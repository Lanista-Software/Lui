import PromotionIcon from '../../components/Cards/PromotionCard/PromotionIcon'
import PromotionCard from '../../components/Cards/PromotionCard/PromotionCard'
import { boolean, object, text } from '@storybook/addon-knobs'

export default {
  title: 'Cards/PromotionCard',
  component: { PromotionIcon, PromotionCard }
}

export const Promotion_Card = () => ({
  components: { PromotionCard },
  props: {
    title: {
      default: text('title', 'Geri Dönüşümlü Ürünler')
    },
    borderMode: {
      default: boolean('borderMode', false)
    },
    icon: {
      default: object('icon', {
        iconColor: ' text-primary',
        iconName: 'ri-contacts-book-2-fill'
      })
    }
  },
  template: `<PromotionCard v-bind="$props">Medcup Ambalaj'ın evnanterinde olan ürünler doğa dostu ve geri dönüşümlü
  materyellerdendir. Doğa bizim için ve geleceğimiz için çok önemli.</PromotionCard>`
})
export const Promotion_Icon = () => ({
  components: { PromotionIcon },
  props: {
    iconColor: {
      default: text('iconColor', 'text-blue')
    },
    iconName: {
      default: text('iconName', 'ri-contacts-book-2-fill')
    }
  },
  template: `<PromotionIcon :iconColor='iconColor' :iconName='iconName'></PromotionIcon>`
})
