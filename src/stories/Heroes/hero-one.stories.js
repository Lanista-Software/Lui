import HeroOne from '../../components/Heroes/HeroOne/HeroOne.vue'
export default {
  title: 'Heroes/HeroOne',
  component: { HeroOne }
}

export const HeroOne1 = () => ({
  components: { HeroOne },
  template: `<HeroOne>
  </HeroOne>`
})
