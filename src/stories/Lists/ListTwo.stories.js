import { select } from "@storybook/addon-knobs";
import ListTwo from "../../components/Lists/ListTwo.vue";
import variants from "../assets/variant";
export default {
  title: "Lists/ListTwo",
  component: ListTwo
};
export const List_Two = () => ({
  components: { ListTwo },
  props: {
    variant: {
      default: select("variants", variants.color, "success")
    }
  },
  template: `<ListTwo :variant="variant">
  DOĞA DOSTU ÜRETİM</ListTwo>`
});
