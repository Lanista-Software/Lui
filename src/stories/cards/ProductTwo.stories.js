import ProductTwo from "../../components/Cards/ProductCards/ProductTwo";

export default {
  title: "Cards/ProductCards/ProductTwo",
  component: {
    ProductTwo
  }
};

export const VariantOne = () => ({
  props: {},
  data() {
    return {};
  },
  components: {
    ProductTwo
  },
  template: `<ProductTwo />`
});
