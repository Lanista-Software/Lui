import PrintCard from '../../components/Cards/PrintCard'

export default {
  title: 'Cards/PrintCard',
  component: { PrintCard }
}

export const Print_Card = () => ({
  components: { PrintCard },
  template: `<PrintCard>
  <p class="text-primary_07">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illum
          facilis dolorem, laudantium veniam ducimus alias tenetur?
        </p>
        <template v-slot:img>
        <img src="/erbay/man.png" alt="" />
        </template>
    <template v-slot:title>
    <h4 class="text-dark">Silikon Baskılar</h4>
    </template>
  <template v-slot:footer>
  <a href="#" class="text-primary">
            <h5>Bize ulaşın</h5>
          </a>
          <a href="#">
            <i class="ri-arrow-right-line ri-1x text-dark" />
          </a>
  </template>
  </PrintCard>`
})
