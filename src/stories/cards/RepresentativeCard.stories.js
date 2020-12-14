import RepresentativeCard from "../../components/Cards/RepresentativeCard";

export default {
  title: "Cards/RepresentativeCard",
  component: { RepresentativeCard },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Representative_Card = () => ({
  components: { RepresentativeCard },
  template: `<RepresentativeCard>
  <img src="/erbay/petlas.png" />
  </RepresentativeCard>`
});
