import Menu from "../../components/Header/BottomSection/Menu.vue";
import BottomSectiongroup from "../../components/Header/BottomSection/BottomSectiongroup.vue";
import companyLogo from "../../components/Header/BottomSection/companyLogo.vue";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Header/BottomSection",
  component: { Menu },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

const MenA = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Menu },
  template: "<Menu v-bind='$props' ></Menu>"
});
export const MenuPreview = MenA.bind({});
MenA.args = {
  label: "BackgroundColor",
  BackgroundColor: "#091E3F"
};
export const CompanyLogo = () => ({
  props: {
    img: {
      default: text("img", "/erbay/logo.png")
    },
    name: {
      default: text("name", "ERBAY LASTİK")
    },
    subname: {
      default: text("subname", "Kereste İmalat İnşaat Ltd. Şti.")
    }
  },
  components: { companyLogo },
  template: "<companyLogo v-bind='$props' ></companyLogo>"
});
export const BottomSectionGroup = () => ({
  components: { BottomSectiongroup },
  template: "<bottom-sectiongroup></bottom-sectiongroup>"
});
