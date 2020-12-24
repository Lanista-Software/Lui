import SlideCard from '../../components/Cards/SlideCard.vue'
export default {
  title: 'Cards/SlideCard',
  component: { SlideCard },
}
export const Slide_Card = () => ({
  components: { SlideCard },
  template: `<SlideCard bgImage="https://api.lanista.com.tr/assest/images/gökhan.jpg-4-4-.jpg" href="https://www.youtube.com/watch?v=-N7kFnzXG4U">
    </SlideCard>`,
})
