import Menu from '../../components/Header/HeaderOne/HeaderOneComponents/BottomSection/Menu.vue'
import BottomSectiongroup from '../../components/Header/HeaderOne/HeaderOneComponents/BottomSection/BottomSectiongroup.vue'
import CompanyLogo from '../../components/Header/HeaderOne/HeaderOneComponents/BottomSection/CompanyLogo.vue'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Headers/HeaderOne/BottomSection',
  component: { Menu },
  argTypes: {
    BackgroundColor: { control: 'color' }
  }
}

const MenA = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Menu },
  template: "<Menu v-bind='$props' ></Menu>"
})
export const MenuPreview = MenA.bind({})
MenA.args = {
  label: 'BackgroundColor',
  BackgroundColor: '#091E3F'
}
export const CompanyLogoComponents = () => ({
  props: {
    img: {
      default: text('img', '/erbay/logo.png')
    },
    name: {
      default: text('name', 'ERBAY LASTİK')
    },
    subname: {
      default: text('subname', 'Kereste İmalat İnşaat Ltd. Şti.')
    }
  },
  components: { CompanyLogo },
  template: "<CompanyLogo v-bind='$props' ></CompanyLogo>"
})
export const BottomSectionGroup = () => ({
  components: { BottomSectiongroup },
  template: '<bottom-sectiongroup></bottom-sectiongroup>'
})
