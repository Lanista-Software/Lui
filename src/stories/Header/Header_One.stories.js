import Header from "../../components/Header/HeaderOne/HeaderOne.vue";
import mobilemenu from "../../components/Header/HeaderOne/HeaderOneComponents/MobileMenu.vue";
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

export const mobile_menu = () => ({
  components: { mobilemenu },
  template: "<mobilemenu></mobilemenu>"
});
