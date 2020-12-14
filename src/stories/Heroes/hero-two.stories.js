import HeroTwo from "../../components/Heroes/HeroTwo/HeroTwo.vue";
import LButton from "../../components/LButton.vue";
import TagImage from "../../components/ImageViews/TagImage.vue";
import TagOne from "../../components/Tags/TagOne.vue";
import CarouselOne from "../../components/Carousel/CarouselOne.vue";
import { Math } from "core-js";

export default {
  title: "Heroes/HeroTwo",
  component: {
    HeroTwo,
    LButton,
    TagImage,
    TagOne
  }
};
const url = `https://picsum.photos/id/${Math.floor(
  Math.random() * (200 - 1) + 1
)}/600/600`;
export const HeroTwo_v1 = () => ({
  props: {},
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        arrows: false,
        // cssEase: "linear",
        pauseOnFocus: true,
        pauseOnHover: true,
        focusOnSelect: true
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
      },
      url: url
    };
  },
  components: {
    HeroTwo,
    LButton,
    CarouselOne,
    TagImage,
    TagOne
  },
  template: `  <HeroTwo style="padding:5%">
                <template v-slot:title>
                  <h1 class="fw-600" style="line-height:1.40;">Sağlığınız</br> herşeyden önemli.</h1>
                </template>
                <template v-slot:textcontent>
                  Ambalaj sektörüne dair bütün ürünler
                  <strong class="text-blue">Medcup Ambalaj</strong> ile sizlerle buluşuyor.
                  İnsan sağlığına zararsız ve geri dönüşümlü ürünlerle hizmetinizdeyiz.
                </template>
                <template v-slot:buttons>
                  <div>
                    <LButton bg-variant="bg-blue" text-variant="text-light" size="md"> Tüm ürünleri görün </LButton>
                  </div>
                  <LButton bg-variant="link" size="md">
                    <span style="display:flex; align-items:center;">
                      Kataloğu indirin
                      <i style="margin-left:12px" class="ri-mail-line text-dark" />
                    </span>
                  </LButton>
                </template>
                <slot>
                  <CarouselOne class="shadow" v-bind="settings">
                    <slot>
                      <div class="radius-10 slider-page shadow">
                        <TagImage :url="url" class="radius-10">
                          <slot>
                            <TagOne class="bg-blue text-light radius-r-10" :size="[180, 46]">
                            <slot><p>Kağıt Çantalar</p></slot>
                        </TagOne>
                          </slot>
                        </TagImage>
                      </div>
                      <div class="radius-10 slider-page shadow">
                        <TagImage :url="url" class="radius-10">
                          <slot>
                            <TagOne class="bg-blue text-light radius-r-10" :size="[180, 46]">
                            <slot><p>Kağıt Çantalar</p></slot>
                        </TagOne>
                          </slot>
                        </TagImage>
                      </div>
                      <div class="radius-10 slider-page shadow">
                        <TagImage :url="url" class="radius-10">
                          <slot>
                            <TagOne class="bg-blue text-light radius-r-10" :size="[180, 46]">
                            <slot><p>Kağıt Çantalar</p></slot>
                        </TagOne>
                          </slot>
                        </TagImage>
                      </div>
                      <div class="radius-10 slider-page shadow">
                        <TagImage :url="url" class="radius-10">
                          <slot>
                            <TagOne class="bg-blue text-light radius-r-10" :size="[180, 46]">
                            <slot><p>Kağıt Çantalar</p></slot>
                        </TagOne>
                          </slot>
                        </TagImage>
                      </div>
                    </slot>
                  </CarouselOne>
                </slot>
              </HeroTwo>`
});
