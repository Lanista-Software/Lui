import FooterTwo from '../../components/Footers/FooterTwo/FooterTwo.vue'
import Top from '../../components/Footers/FooterTwo/Top.vue'
import Bottom from '../../components/Footers/FooterTwo/Bottom.vue'
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

export const TFooterTwo_V1 = () => ({
  components: {
    FooterTwo,
    Top,
    List,
  },
  data() {
    return {
      iconList: [
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/facebook',
        },
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/instagram',
        },
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/linkedin',
        },
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/linkedin',
        },
      ],
    }
  },
  props: {
    list: {
      default: array('List', Variants.list, '/'),
    },
    textVariant: {
      default: select('Text Variant', Variants.textVariant),
    },
  },
  template: `
    <FooterTwo>
            <Top>
                <template v-slot:section_1>
                <img src="/gochem.svg" alt="Gochem Media" width="135" height="auto">
                <List style="margin-top:24px" :list="iconList" direction="list-h" :text-variant="textVariant">
                 </List>
                </template>
                <template v-slot:section_2>
                <List :list="list" direction="list-v" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:section_3>
                <List :list="list" direction="list-v" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:section_4>
                <List :list="list" direction="list-v" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:footerMedia>
                    <img src="/footerbanner.png" alt="Footer Media">
                </template>
            </Top>
    </FooterTwo>           
    `,
})
export const Bottom_V1 = () => ({
  components: {
    Bottom,
  },
  template: `
            <Bottom>
            </Bottom>            
    `,
})
export const Top_V1 = () => ({
  components: {
    Top,
    List,
  },
  data() {
    return {
      iconList: [
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/facebook',
        },
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/instagram',
        },
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/linkedin',
        },
        {
          type: 'icon',
          content: 'ri-snowy-fill ri-lg',
          link: '/linkedin',
        },
      ],
    }
  },
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
                <List style="margin-top:24px" :list="iconList" direction="list-h" :text-variant="textVariant">
                 </List>
                </template>
                <template v-slot:section_2>
                <List :list="list" direction="list-v" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:section_3>
                <List :list="list" direction="list-v" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:section_4>
                <List :list="list" direction="list-v" :text-variant="textVariant">
                    <template v-slot:title><h5 style="font-size:1rem;" class="fw-600">Site Haritası</h5></template>
                 </List>
                </template>
                <template v-slot:footerMedia>
                    <img src="/footerbanner.png" alt="Footer Media">
                </template>
            </Top>            
    `,
})
