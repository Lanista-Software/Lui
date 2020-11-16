import Header from "../../components/Header/Header.vue";
export default {
  title: "Erbay/Header/HeaderErbay",
  component: { Header },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const HeaderErbay = () => ({
  components: { Header },
  template: "<Header></Header>"
});
