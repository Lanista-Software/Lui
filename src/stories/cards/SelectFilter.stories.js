import SelectFilter from "../../components/Cards/SelectFilter";

export default {
  title: "/Cards/SelectFilter",
  component: { SelectFilter },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Select_Filter = () => ({
  components: { SelectFilter },
  template: `<SelectFilter></SelectFilter>`
});
