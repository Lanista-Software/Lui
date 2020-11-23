// import { boolean, select, text } from "@storybook/addon-knobs";
import ProductpreviewCardtop from "../../components/Cards/ProductpreviewCard/ProductpreviewCardtop.vue";
import ProductpreviewCardleft from "../../components/Cards/ProductpreviewCard/ProductpreviewCardleft.vue";
export default {
  title: "Cards/ProductpreviewCard",
  component: { ProductpreviewCardtop, ProductpreviewCardleft }
};

export const ProductpreviewCard_top = () => ({
  components: { ProductpreviewCardtop },
  template: `<ProductpreviewCardtop>
  </ProductpreviewCardtop>`
});
export const ProductpreviewCard_left = () => ({
  components: { ProductpreviewCardleft },
  template: `<ProductpreviewCardleft>
  </ProductpreviewCardleft>`
});
