import FaqDrop from "../../components/Cards/FaqDrop";

export default {
  title: "/Cards/FaqDrop",
  component: { FaqDrop },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const FaqDrop_Card = () => ({
  components: { FaqDrop },
  template: `<FaqDrop></FaqDrop>`
});
