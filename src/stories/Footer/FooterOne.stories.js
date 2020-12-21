// import { boolean, select, text } from "@storybook/addon-knobs";
import FooteronetopSection from '../../components/Footers/FooterOne/FooteronetopSection.vue'
import FooteonebottomSection from '../../components/Footers/FooterOne/FooteroneBottomsection.vue'
import FooterOne from '../../components/Footers/FooterOne/FooterOne.vue'
export default {
  title: 'Footers/FooterOne',
  component: { FooteronetopSection, FooteonebottomSection, FooterOne },
  argTypes: {
    BackgroundColor: { control: 'color' }
  }
}

export const Footeronetop_Section = () => ({
  components: { FooteronetopSection },
  template: `<FooteronetopSection>
  </FooteronetopSection>`
})
export const Footeonebottom_Section = () => ({
  components: { FooteonebottomSection },
  template: `<FooteonebottomSection>
  </FooteonebottomSection>`
})
export const Footer_One = () => ({
  components: { FooterOne },
  template: `<FooterOne>
  </FooterOne>`
})
