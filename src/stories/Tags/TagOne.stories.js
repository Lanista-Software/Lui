import { array } from "@storybook/addon-knobs";
import TagOne from "../../components/Tags/TagOne.vue";
export default {
  title: "Tags/TagOne",
  component: TagOne
};

export const Tag = () => ({
  props: {
    size: {
      default: array("Size", [200, 200], "X")
    }
  },
  components: { TagOne },
  template: `<TagOne :size="size" class="bg-blue radius-r-05">
                <h5>Deneme</h5>
                </TagOne>`
});
