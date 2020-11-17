import QuestiondropCard from "../../components/Cards/QuestiondropCard";

export default {
  title: "/Cards/QuestiondropCard",
  component: { QuestiondropCard },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Questiondrop_Card = () => ({
  components: { QuestiondropCard },
  template: `<QuestiondropCard></QuestiondropCard>`
});
