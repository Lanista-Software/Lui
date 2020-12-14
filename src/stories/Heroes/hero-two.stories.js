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
  props: {},
  data() {
    return {
      settings: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
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
      }
    };
  },
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
             <LButton bg-variant="link" size="md">
                <span style="display:flex; align-items:center;">
                Kataloğu indirin  
                <i style="margin-left:12px" class="ri-mail-line text-dark" />
                </span>
             </LButton>
            </template>
            <slot>
            <CarouselOne v-bind="settings">
              <slot>
              <div>
                  <div class="carousel-page-container">
                    <img
                      src="https://picsum.photos/id/237/600/600"
                      alt="Slider Image"
                    />
                  </div>
               </div>
              <div>
                 <div class="carousel-page-container">
                  <img
                    src="https://picsum.photos/id/200/600/600"
                    alt="Slider Image"
                  />
                  </div>
              </div>
              <div>
                <div class="carousel-page-container">
              <img
                src="https://picsum.photos/id/157/600/600"
                alt="Slider Image"
                  />
                </div>
              </div>
              <div>
                <div class="carousel-page-container">
              <img
                src="https://picsum.photos/id/119/600/600"
                alt="Slider Image"
                  />
                </div>
              </div>
              </slot>
            </CarouselOne>
              </slot>
            </HeroTwo>`
});
