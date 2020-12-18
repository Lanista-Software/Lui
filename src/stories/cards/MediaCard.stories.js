import MediaCard from "../../components/Cards/HeroCards/MediaCard.vue";
export default {
  title: "Cards/Herocards/MediaCard",
  component: { MediaCard }
};
export const Media_Card = () => ({
  components: { MediaCard },
  template: `<MediaCard bgImage="https://api.lanista.com.tr/assest/images/gökhan.jpg-4-4-.jpg" href="https://www.youtube.com/watch?v=-N7kFnzXG4U">
    </MediaCard>`
});
