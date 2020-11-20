
// import Vue from 'vue'
// import VueRouter from 'vue-router'
import '!style-loader!css-loader!sass-loader!../src/assets/style.scss';
// Vue.use(VueRouter)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}