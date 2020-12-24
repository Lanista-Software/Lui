import { array, boolean, color } from '@storybook/addon-knobs'
import BgIcon from '../../components/Icons/BgIcon.vue'
import Variants from '../assets/variant'
export default {
  title: 'Icons/BgIcon',
  component: BgIcon,
}
export const Variant_1 = () => ({
  components: { BgIcon },
  props: {
    circle: {
      default: boolean('circle', false),
    },
    size: {
      default: array('size', Variants.size, 'x'),
    },
    bgVariant: { default: color('bgVariant', '#449BFD') },
  },
  template: ` <bg-icon class="radius-09" :style="{backgroundColor: bgVariant}" :circle="circle" :size="size">
              <slot><i class="ri-mail-line ri-2x text-dark" /></slot>
              </bg-icon>`,
})
