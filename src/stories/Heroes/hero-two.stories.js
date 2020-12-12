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
            <template v-slot:title>
            <h1>Sağlığınız</br> herşeyden önemli.</h1>
            </template>         
            <template v-slot:textcontent>
            Ambalaj sektörüne dair bütün ürünler
            Medcup Ambalaj ile sizlerle buluşuyor. 
            İnsan sağlığına zararsız ve geri dönüşümlü ürünlerle hizmetinizdeyiz.
            </template>         
            <template v-slot:buttons>
            <LButton bg-variant="bg-blue" text-variant="text-light" size="md"> Tüm ürünleri görün </LButton>
            <LButton bg-variant="link" size="md">Kataloğu indirin</LButton>
            </template>
            <img
            src="/erbay/man.png"
            alt="Test"
          />
            </HeroTwo>`
});
