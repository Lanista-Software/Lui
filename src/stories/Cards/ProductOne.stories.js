// import { boolean, select, text } from "@storybook/addon-knobs";

import Rating from '../../components/Cards/Rating.vue'
import ProductOne from '../../components/Cards/ProductCards/ProductOne.vue'
export default {
  title: 'Cards/ProductCards/ProductOne',
  component: {
    ProductOne,
    Rating,
  },
}
export const Product_One = () => ({
  components: { ProductOne },
  data() {
    return {
      product: {
        title: 'Kormoran 2020 Üretim 205/60 R16 96H XL Snow Ko Kış Lastiği',
        img:
          'https://marketplace-single-product-images.oss-eu-central-1.aliyuncs.com/prod/239750/d4ff7eb8-8bc5-4080-9fe8-b4c83adcbf58/626111501_0.jpg',
        quantity: '20',
        type: 'Kış',
        attributes: [
          {
            attributeId: 356,
            attributeName: 'Taban Genişliği',
            attributeValue: '205 mm',
            attributeValueId: 7890,
          },
          {
            attributeId: 355,
            attributeName: 'Mevsim',
            attributeValue: 'Kış',
            attributeValueId: 7880,
          },
          {
            attributeId: 353,
            attributeName: 'Kesit Oranı',
            attributeValue: '60',
            attributeValueId: 7866,
          },
          {
            attributeId: 351,
            attributeName: 'Jant Çapı',
            attributeValue: '16',
            attributeValueId: 7222,
          },
          {
            attributeId: 369,
            attributeName: 'Yıl',
            attributeValue: '2020',
            attributeValueId: 18713,
          },
          {
            attributeId: 539,
            attributeName: 'Yakıt Verimliliği',
            attributeValue: 'E',
            attributeValueId: 25234,
          },
          {
            attributeId: 538,
            attributeName: 'Islak Zeminde Frenleme',
            attributeValue: 'C',
            attributeValueId: 25222,
          },
          {
            attributeId: 566,
            attributeName: 'Popüler Ebatlar',
            attributeValue: '205/60/R16',
            attributeValueId: 165139,
          },
        ],
        brand: 'Kormoran',
        id: 63273807,
      },
    }
  },
  template: `
  <product-one :product="product" img="https://marketplace-single-product-images.oss-eu-central-1.aliyuncs.com/prod/239750/d4ff7eb8-8bc5-4080-9fe8-b4c83adcbf58/626111501_0.jpg">
  NOKIAN WR Snowproof 205/55 R16 91H(D5) 2019 Üretimi</product-one>
  `,
})
export const Rating_Preview = () => ({
  components: { Rating },
  template: `<Rating :line="2" :fill="3">
  </Rating>`,
})
