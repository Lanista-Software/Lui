import Header from "../../components/Header/HeaderOne/HeaderOne.vue";
export default {
  title: "Headers/HeaderOne/HeaderOne",
  component: { Header },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const HeaderOne = () => ({
  components: { Header },
  template: "<Header></Header>"
});
