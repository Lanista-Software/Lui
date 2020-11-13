import LButton from "../components/LButton";

export default {
  title: "Lanista/Buttons",
  component: LButton
};
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LButton },
  template: '<l-button @clicked="clicked">deneme</l-button>'
});

export const Red = Template.bind({});
// Red.args = {
//     red: true,
//     label:"Button"
// })
