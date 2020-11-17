import { text } from "@storybook/addon-knobs";
import HeroCard from "../../components/Cards/HeroCard";
export default {
  title: "Cards/HeroCard",
  component: { HeroCard },
  argTypes: {
    BackgroundColor: { control: "color" }
  }
};

export const Herocard = () => ({
  props: {
    titleOne: {
      default: text("titleOne", "ERBAY LASTİK")
    },
    titleSecond: {
      default: text("titleSecond", "Her mevsim yol güvenceniz")
    },
    subname: {
      default: text("subname", "Kereste İmalat İnşaat Ltd. Şti.")
    },
    btnText: {
      default: text("btnText", "İletişime geçin")
    }
  },
  components: { HeroCard },
  template: `<HeroCard v-bind='$props' >Yılların tecrübesiyle ve uzman kadromuzla bütün sorularınıza 
  yanıt vermek için bekliyoruz</HeroCard>`
});
