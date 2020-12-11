import { boolean, select, text } from "@storybook/addon-knobs";
import HeroCard from "../../components/Heros/HeroOne";
import Variant from "../assets/variant";
export default {
  title: "Heros/HeroOne",
  component: { HeroCard },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Herocard1 = () => ({
  data: () => {
    return {
      buttonVariants: {
        bgVariant: "bg-warning",
        textVariant: "text-dark",
        btnText: "İletişime geçin"
      }
    };
  },
  props: {
    titleOne: {
      default: text("titleOne", "ERBAY LASTİK")
    },
    titleSecond: {
      default: text("titleSecond", "Her mevsim yol güvenceniz")
    },
    center: {
      default: boolean("center", false)
    },
    btnText: {
      default: text("btnText", "İletişime geçin")
    }
  },
  components: { HeroCard },
  template: `<HeroCard :icon="true" hSize="h2" :buttonVariants="buttonVariants" v-bind='$props' >
  Yılların tecrübesiyle ve uzman kadromuzla bütün sorularınıza 
  yanıt vermek için bekliyoruz
  <template v-slot:icon>
  <i class="ri-shield-check-fill text-success" />
  </template>
  </HeroCard>`
});
export const Herocard2 = () => ({
  data: () => {
    return {
      buttonVariants: {
        bgVariant: "bg-primary",
        textVariant: "text-white",
        btnText: "İletişime geçin"
      }
    };
  },
  props: {
    titleOne: {
      default: text("titleOne", "Temsilcilsi olduğumuz")
    },
    titleSecond: {
      default: text("titleSecond", "büyük markalar")
    },
    btnText: {
      default: text("btnText", "Hemen arayın")
    },
    center: {
      default: boolean("center", false)
    },
    textVariant: {
      default: select("textVariant", Variant.textVariant, "text-dark")
    }
  },
  components: { HeroCard },
  template: `<HeroCard :buttonVariants="buttonVariants" hSize="h2" v-bind='$props' >
  Daha fazla bilgi almak ve diğer hizmetleri öğrenmek için
  </HeroCard>`
});
