// import { boolean, select, text } from "@storybook/addon-knobs";
import ProductpreviewCardtop from "../../components/Cards/ProductpreviewCard/ProductpreviewCardtop.vue";
import ProductpreviewCardleft from "../../components/Cards/ProductpreviewCard/ProductpreviewCardleft.vue";
import ProductpreviewCard from "../../components/Cards/ProductpreviewCard/ProductpreviewCard.vue";
import Rating from "../../components/Cards/ProductpreviewCard/rating.vue";
export default {
  title: "Cards/ProductpreviewCard",
  component: {
    ProductpreviewCardtop,
    ProductpreviewCardleft,
    ProductpreviewCard,
    Rating
  }
};

export const Productpreview_Card = () => ({
  components: { ProductpreviewCard },
  template: `<ProductpreviewCard href="http://www.erbaylastik.com">
  NOKIAN WR Snowproof 205/55 R16 91H(D5) 2019 Üretimi
  </ProductpreviewCard>`
});
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
export const Rating_Preview = () => ({
  components: { Rating },
  template: `<Rating :line="2" :fill="3">
  </Rating>`
});
