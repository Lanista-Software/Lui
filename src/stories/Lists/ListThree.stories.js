import { array, select } from '@storybook/addon-knobs'
import ListThree from '../../components/Lists/ListThree.vue'
import Variants from '../assets/variant'
export default {
  title: 'Lists/ListThree',
  component: ListThree
}
export const Variant_01 = () => ({
  components: {
    ListThree
  },
  props: {
    list: {
      default: array('List', Variants.list, '/')
    },
    textVariant: {
      default: select('Text Variant', Variants.textVariant)
    }
  },
  template: `<ListThree :list="list" :text-variant="textVariant">
                <template v-slot:title :style="{color: textVariant}><h5 class="fw-600">Site Haritası</h5></template>
             </ListThree>`
})
