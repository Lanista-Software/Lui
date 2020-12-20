import LineCard from "../../components/Cards/LineCard.vue";
import BgIcon from "../../components/Icons/BgIcon.vue";
import LButton from "../../components/LButton.vue";
export default {
  title: "Cards/LineCard",
  component: { LineCard, BgIcon, LButton }
};

export const Variant_1 = () => ({
  components: { LineCard, BgIcon, LButton },
  props: {},
  template: ` <LineCard class="bg-white shadow radius-05">
                    <template v-slot:icon>
                        <bg-icon class="radius-09 bg-dark_01" :size="[50,50]">
                        <slot><i class="ri-mail-line ri-2x text-dark" /></slot>
                        </bg-icon>
                    </template>
                    <template v-slot:title>
                        <h5 class="fw-600" style="font-size:1rem; border-bottom:3.9px solid #FE7C7C; line-height:20px;">Tekstil</h5>
                    </template>
                    <template v-slot:content>
                        <p style="line-height:25px;" class="text-dark_08"> Gochem Silikon uzun yıllara dayanan sektör tecrübesiyle performansı yüksek, maliyeti düşük tekstil silikonlarını envanterinde bulundurur. Kullanım ihtiyacına göre formülize edilebilen bu ürünler yüksek kaliteli baskılar elde …		 
                         </p>
                    </template>
                    <template v-slot:footer>
                        <LButton bg-variant="link" style="padding: 0 !important;" size="md">
                        <span style="display:flex; align-items:center;">
                        Daha fazlası
                        <i style="margin-left:12px" class="ri-arrow-right-line text-dark" />
                        </span>
                        </LButton>
                    </template>
                </LineCard>`
});
