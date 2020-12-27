import FooterTwo from '../../components/Footers/FooterTwo/FooterTwo.vue'
import Top from '../../components/Footers/FooterTwo/Top.vue'
import Bottom from '../../components/Footers/FooterOne/FooteroneBottomsection'
import List from '../../components/Lists/ListThree.vue'
import Variants from '../assets/variant'
import { array, select } from '@storybook/addon-knobs'

export default {
  title: 'Footers/FooterTwo',
  component: {
    FooterTwo,
    List,
    Top,
  },
}
export const FooterTwo_V1 = () => ({
  components: { FooterTwo },
  template: `
            <footer-two>
            </footer-two>            
    `,
})
export const Top_V1 = () => ({
  components: { Top, List },
  props: {
    list: {
      default: array('List', Variants.list, '/'),
    },
    textVariant: {
      default: select('Text Variant', Variants.textVariant),
    },
  },
  template: `
            <Top>
                <template v-slot:section_1>
                <img src="/gochem.svg" alt="Gochem Media" width="135" height="auto">
                <List :list="list" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:section_2>
                <List :list="list" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:section_3>
                <List :list="list" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:section_4>
                <List :list="list" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:footerMedia>
                    <img src="/footerbanner.png" alt="Footer Media">
                </template>
            </Top>            
    `,
})
export const Bottom_V1 = () => ({
  components: { Bottom },
  template: `
            <Bottom>
            </Bottom>            
    `,
})
