import PromotionCard from '../../components/Cards/PromotionCard/PromotionCard'
import BgIcon from '../../components/Icons/BgIcon.vue'
import ListTwo from '../../components/Lists/ListTwo.vue'
import LButton from '../../components/LButton.vue'
export default {
  title: 'Cards/PromotionCard',
  component: { PromotionCard }
}

export const Promotion_Card = () => ({
  components: { PromotionCard, BgIcon },
  template: `<PromotionCard v-bind="$props">
  <p>
  Medcup Ambalaj'ın evnanterinde olan ürünler doğa dostu ve geri dönüşümlü
  materyellerdendir. Doğa bizim için ve geleceğimiz için çok önemli
  </p>
  <template v-slot:title>
  <h4>Doğa bizim için</h4>
  </template>
  <template v-slot:icon>
  <bg-icon
    class="bg-white radius-05 shadow"
    :size="[50, 50]"
      >
        <i class="ri-contacts-book-2-fill ri-2x text-dark" />
      </bg-icon>
  </template>
  </PromotionCard>`
})
export const Promotion_Card2 = () => ({
  components: { PromotionCard, BgIcon, ListTwo, LButton },
  template: `<PromotionCard v-bind="$props">
  <p>
  Medcup Ambalaj'ın evnanterinde olan ürünler doğa dostu ve geri dönüşümlü
  materyellerdendir. Doğa bizim için ve geleceğimiz için çok önemli
  </p>
  <template v-slot:title>
<ListTwo variant="success">
<h3>Global Referanslarımız</h3>
</ListTwo>
  </template>
  <template v-slot:buttons>
<l-button bg-variant="bg-success" size="sm">Daha fazla bilgi al</l-button>
  </PromotionCard>`
})
