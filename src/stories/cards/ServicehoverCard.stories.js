import ServicehoverCard from '../../components/Cards/ServicehoverCard'
import LButton from '../../components/LButton'
export default {
  title: 'Cards/ServicehoverCard',
  component: { ServicehoverCard },
}

export const Servicehover_Card = () => ({
  components: { ServicehoverCard, LButton },
  template: `<ServicehoverCard bgUrl="https://api.lanista.com.tr/assest/images/gökhan.jpg-4-4-.jpg">
  <p class="text-white_08">
  20.01.13  
  </p>
  <template v-slot:button>
  <l-button bg-variant="bg-primary" text-variant="text-white" size="md"
        >Iletişime geçin</l-button
      >
  </template>
  <template v-slot:title>
  <h5 class="text-white">
  Teknik Dosya
</h5>
  </template>
  </ServicehoverCard>`,
})
