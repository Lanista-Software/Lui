import { array, select } from '@storybook/addon-knobs'
import ListThree from '../../components/Lists/ListThree.vue'
import Variants from '../assets/variant'
export default {
  title: 'Lists/ListThree',
  component: ListThree,
}
export const Variant_01 = () => ({
  components: {
    ListThree,
  },
  props: {
    list: {
      default: array('List', Variants.list, '/'),
    },
    textVariant: {
      default: select(
        'Text Variant',
        [
          'text-white',
          'text-success',
          'text-primary',
          'text-warning',
          'text-light',
          'text-dark',
        ],
        'text-dark'
      ),
    },
    direction: {
      default: select('Direction', ['list-v', 'list-h'], 'list-h'),
    },
  },
  template: `<ListThree :list="list" :text-variant="textVariant" :direction="direction">
                <template v-slot:title :style="{color: textVariant}><h5 class="fw-600" style="font-size:1rem;">Site Haritası</h5></template>
             </ListThree>`,
})
