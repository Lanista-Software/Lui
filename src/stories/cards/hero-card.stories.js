import { text } from "@storybook/addon-knobs";
import HeroCard from "../../components/Cards/HeroCard";
export default {
  title: "Cards/HeroCard",
  component: { HeroCard },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Herocard = () => ({
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
  components: { HeroCard },
  template: "<HeroCard v-bind='$props' ></HeroCard>"
});
