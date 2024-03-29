import TopSection from '../../components/Header/HeaderOne/HeaderOneComponents/TopSection/TopSection.vue'
import ItemGroup from '../../components/Header/HeaderOne/HeaderOneComponents/TopSection/ItemGroup.vue'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Headers/HeaderOne/TopSection',
  component: { TopSection, ItemGroup },
  argTypes: {
    BackgroundColor: { control: 'color' },
  },
}

const TopSectionGroup = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TopSection },
  template: "<TopSection v-bind='$props' ></TopSection>",
})
const ItemTemplate = () => ({
  props: {
    icon: {
      default: text('icon', 'ri-map-pin-2-fill'),
    },
    content: {
      default: text(
        'content',
        'Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van'
      ),
    },
  },
  components: { ItemGroup },
  template: "<ItemGroup :icon='icon' >{{content}}</ItemGroup>",
})

export const TopSectionpreview = TopSectionGroup.bind({})
export const ItemTemplatePreview = ItemTemplate.bind({})
TopSectionpreview.args = {
  label: 'BackgroundColor',
  BackgroundColor: '#091E3F',
}
