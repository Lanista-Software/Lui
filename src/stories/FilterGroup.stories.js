import FilterGroup from "../components/FilterGroup";

export default {
  title: "/FilterGroup",
  component: { FilterGroup }
};

export const Filter_Group = () => ({
  components: { FilterGroup },
  data: () => {
    return {
      buttons: [
        {
          text: "Ödeme",
          active: "bg-white",
          deactive: "bg-light",
          textVariant: "text-dark"
        },
        {
          text: "Deneme",
          active: "bg-warning",
          deactive: "bg-light",
          textVariant: "text-dark"
        },
        {
          text: "Teknik",
          active: "bg-white",
          deactive: "bg-light",
          textVariant: "text-dark"
        },
        {
          text: "İletişim",
          active: "bg-dark",
          deactive: "bg-light",
          textVariant: "text-success"
        }
      ]
    };
  },
  template: `<FilterGroup :buttons="buttons"></FilterGroup>`
});
