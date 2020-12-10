import ProductFilter from "../../components/Cards/ProductFilter";

export default {
  title: "/Cards/ProductFilter",
  component: { ProductFilter },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Product_Filter = () => ({
  components: { ProductFilter },
  template: `<ProductFilter></ProductFilter>`
});
