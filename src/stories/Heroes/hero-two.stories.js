import HeroTwo from "../../components/Heroes/HeroTwo/HeroTwo.vue";
import LButton from "../../components/LButton.vue";
import CarouselOne from "../../components/Carousel/CarouselOne.vue";

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
    LButton,
    CarouselOne
  },
  template: `<HeroTwo>
            <template v-slot:title>
            <h1>Sağlığınız</br> herşeyden önemli.</h1>
            </template>         
            <template v-slot:textcontent>
            Ambalaj sektörüne dair bütün ürünler
            <strong class="text-blue">Medcup Ambalaj</strong> ile sizlerle buluşuyor. 
            İnsan sağlığına zararsız ve geri dönüşümlü ürünlerle hizmetinizdeyiz.
            </template>         
            <template v-slot:buttons>
            <div><LButton bg-variant="bg-blue" text-variant="text-light" size="md"> Tüm ürünleri görün </LButton></div>
            <LButton bg-variant="link" size="md">Kataloğu indirin</LButton>
            </template>
            <slot>
            <CarouselOne>
              <slot>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </slot>
            </CarouselOne>
              </slot>
            </HeroTwo>`
});
