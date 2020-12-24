import { number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import SelectFilter from '../../components/Cards/SelectFilter'
import mixin from '../../components/filter'
import LSelect from '../../components/LSelect.vue'
export default {
  title: 'Cards/SelectFilter',
  component: { SelectFilter, LSelect },
}

export const Select_Filter = () => ({
  components: { SelectFilter, LSelect },
  props: {
    mobileFr: {
      default: number('mobileFr', 2),
    },
    desktopFr: {
      default: number('desktopFr', 6),
    },
  },
  data: () => {
    return {
      selectform: {
        brand: null,
        season: null,
        baseWidth: null,
        sectionRatio: null,
        wheelDiameter: null,
        year: null,
      },
    }
  },
  methods: { action: action('filter clicked') },

  mixins: [mixin],
  template: `<SelectFilter v-bind="$props" @click="action">
  <l-select
  v-model="form.brand"
  :items="filterData.brands"
  :selected="selectform.brand"
/>
<l-select
  v-model="form.season"
  :items="filterData.attributes.seasons"
  :selected="selectform.season"
/>
<l-select
  v-model="form.year"
  :selected="selectform.year"
  :items="filterData.attributes.years"
/>
<l-select
  v-model="form.baseWidth"
  :selected="selectform.baseWidth"
  :items="filterData.attributes.baseWidth"
/>
<l-select
  v-model="form.sectionRatio"
  :selected="selectform.sectionRatio"
  :items="filterData.attributes.sectionRatio"
/>
<l-select
  v-model="form.wheelDiameter"
  :selected="selectform.wheelDiameter"
  :items="filterData.attributes.wheelDiameter"
/>
  </SelectFilter>`,
})
