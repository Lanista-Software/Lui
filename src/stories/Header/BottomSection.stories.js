import Menu from "../../components/Header/BottomSection/Menu.vue";

export default {
  title: "Header/Menu",
  component: { Menu },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

const MenA = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Menu },
  template: "<Menu v-bind='$props' ></Menu>"
});
// const ItemTemplate = () => ({
//   props: {
//     icon: {
//       default: text("icon", "ri-map-pin-2-fill")
//     },
//     content: {
//       default: text(
//         "content",
//         "Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van"
//       )
//     }
//   },
//   components: { ItemGroup },
//   template: "<ItemGroup :icon='icon' >{{content}}</ItemGroup>"
// });

// export const TopSectionpreview = TopSectionGroup.bind({});
export const MenuPreview = MenA.bind({});
MenA.args = {
  label: "BackgroundColor",
  BackgroundColor: "#091E3F"
};
