import { boolean, select } from "@storybook/addon-knobs";
import LButton from "../components/LButton";
import variant from "./assets/variant";
export default {
  title: "Lanista/Buttons",
  component: LButton
};
export const Button = () => ({
  props: {
    bgVariant: {
      default: select("bgVariant", variant.backgroundVariant)
    },
    textVariant: {
      default: select("textVariant", variant.textVariant)
    },
    borderVariant: {
      default: select("borderVariant", variant.borderVariant)
    },
    block: {
      default: boolean("block", false)
    },
    size: {
      default: select("size", ["sm", "md", "lg"], "md")
    }
  },
  components: { LButton },
  template: '<l-button v-bind="$props" @clicked="clicked">deneme</l-button>'
});
