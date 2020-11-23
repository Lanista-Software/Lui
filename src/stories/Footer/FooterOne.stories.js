// import { boolean, select, text } from "@storybook/addon-knobs";
import FooteronetopSection from "../../components/Footers/FooterOne/FooteronetopSection.vue";
export default {
  title: "Footers/FooterOne",
  component: { FooteronetopSection },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Footeronetop_Section = () => ({
  components: { FooteronetopSection },
  template: `<FooteronetopSection>
  </FooteronetopSection>`
});
