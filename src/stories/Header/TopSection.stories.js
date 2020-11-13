import TopSection from "../../components/Header/TopSection.vue";

export default {
  title: "Header/TopSection",
  component: TopSection
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TopSection },
  template: "<TopSection></TopSection>"
});

export const TopSectionpreview = Template.bind({});
