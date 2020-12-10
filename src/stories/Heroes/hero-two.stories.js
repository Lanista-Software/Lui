import HeroTwo from "../../components/Heroes/HeroTwo/HeroTwo.vue";
import LButton from "../../components/LButton.vue";

export default {
  title: "Heroes/HeroTwo",
  component: {
    HeroTwo,
    LButton
  }
};
export const HeroTwo_v1 = () => ({
  data: () => {
    return {};
  },
  props: {},
  components: {
    HeroTwo,
    LButton
  },
  template: `<HeroTwo>
            <template v-slot:title><h1>Sağlığınız için çalışıyoruz.</h1></template>         
            <template v-slot:textcontent>s</template>         
            <template v-slot:textcontent>
            <div class="button-container"><LButton>Ses</LButton><LButton>Ses</LButton>
            </div></template>
            <slot><img src="../../assets/logo.png" alt="Test" /></slot>  
            </HeroTwo>`
});
