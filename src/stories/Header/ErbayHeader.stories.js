import Header from "../../components/Header/Header.vue";
export default {
  title: "Header/index",
  component: { Header },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const HeaderErbay = () => ({
  components: { Header },
  template: "<Header></Header>"
});
