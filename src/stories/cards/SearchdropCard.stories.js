import SearchdropCard from "../../components/Cards/SearchdropCard";

export default {
  title: "/Cards/SearchdropCard",
  component: { SearchdropCard },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Searchdrop_Card = () => ({
  components: { SearchdropCard },
  template: `<SearchdropCard></SearchdropCard>`
});
