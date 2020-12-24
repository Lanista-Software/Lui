import BrandsCard from '../../components/Cards/BrandsCard.vue'
export default {
  title: 'Cards/BrandsCard',
  component: { BrandsCard },
}
export const Brands_Card = () => ({
  components: { BrandsCard },
  data() {
    return {
      images: [
        '/gochem/markalar/H&M.svg',
        '/gochem/markalar/Nike.svg',
        '/gochem/markalar/Lacsote.svg',
        '/gochem/markalar/Decathlon.svg',
        '/gochem/markalar/Adidas.svg',
        '/gochem/markalar/Puma.svg',
      ],
    }
  },
  template: `<BrandsCard class="bg-white shadow radius-05" :images="images"></BrandsCard>`,
})
