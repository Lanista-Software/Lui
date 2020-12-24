import { boolean } from '@storybook/addon-knobs'
import EForm from '../../components/Forms/EForm'
import EGroup from '../../components/Forms/EGroup'

export default {
  title: 'Forms/E_Form',
  component: { EForm, EGroup },
}

export const E_Group = () => ({
  components: { EGroup },
  template: `<EGroup label="Ad"></EGroup>`,
})
export const E_Form = () => ({
  props: {
    line: {
      default: boolean('line', false),
    },
  },
  components: { EForm },
  template: `<EForm v-bind="$props" class="bg-white shadow radius-08"></EForm>`,
})
