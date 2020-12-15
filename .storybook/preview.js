import Vue from "vue";
// import VueRouter from 'vue-router'
import "!style-loader!css-loader!sass-loader!../src/assets/style.scss";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
// Vue.use(VueRouter)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  backgrounds: {
    default: "white",
    values: [
      { name: "success", value: "#00FF80" },
      { name: "warning", value: "#FCE500" },
      { name: "white", value: "#FFFFFF" },
      { name: "primary", value: "#27509B" },
      { name: "blue", value: "#449BFD" },
      { name: "dark", value: "#041F45" },
      { name: "light", value: "#F3F4F6" },
    ],
  },
};
