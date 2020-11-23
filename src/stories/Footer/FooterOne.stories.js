// import { boolean, select, text } from "@storybook/addon-knobs";
import FooteronetopSection from "../../components/Footers/FooterOne/FooteronetopSection.vue";
import FooteonebottomSection from "../../components/Footers/FooterOne/FooteonebottomSection.vue";
export default {
  title: "Footers/FooterOne",
  component: { FooteronetopSection, FooteonebottomSection },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Footeronetop_Section = () => ({
  components: { FooteronetopSection },
  template: `<FooteronetopSection>
  </FooteronetopSection>`
});
export const Footeonebottom_Section = () => ({
  components: { FooteonebottomSection },
  template: `<FooteonebottomSection>
  </FooteonebottomSection>`
});
