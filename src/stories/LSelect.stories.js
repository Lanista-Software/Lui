import LSelect from '../components/LSelect'

export default {
  title: '/Lanista/Selects',
  component: { LSelect },
  argTypes: {
    BackgroundColor: { control: 'color' },
  },
}

export const L_Select = () => ({
  components: { LSelect },
  data: () => {
    return {
      items: [
        {
          label: 'Marka',
          key: null,
        },
        {
          label: 'Audi',
          key: 'audi',
        },
        {
          label: 'Bmw',
          key: 'bmw',
        },
        {
          label: 'Toyota',
          key: 'toyota',
        },
      ],
    }
  },
  template: `<LSelect :items="items"></LSelect>`,
})
