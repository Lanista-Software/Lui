import LineCard from '../../components/Cards/LineCard.vue'
import BgIcon from '../../components/Icons/BgIcon.vue'
import LButton from '../../components/LButton.vue'
import ListTwo from '../../components/Lists/ListTwo.vue'
export default {
  title: 'Cards/LineCard',
  component: { LineCard, BgIcon, LButton, ListTwo },
}

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
                </LineCard>`,
})
export const Variant_2 = () => ({
  components: { LineCard, BgIcon, LButton },
  props: {},
  template: ` <LineCard class="bg-white radius-05">
                    <template v-slot:media>
                        <div style="display:flex; width:100%; justify-content:center;">
                        <bg-icon class="radius-09 bg-dark_09" :size="[100,100]">
                        <slot><i class="ri-mail-line ri-2x text-dark" /></slot>
                        </bg-icon>
                        </div>
                    </template>
                    <template v-slot:title>
                        <h5 class="fw-600" style="font-size:1rem; line-height:20px;">Tekstil</h5>
                    </template>
                    <template v-slot:content>
                        <p style="line-height:25px;" class="text-dark_08"> Gochem Silikon uzun yıllara dayanan sektör tecrübesiyle performansı yüksek, maliyeti düşük tekstil silikonlarını envanterinde bulundurur. Kullanım ihtiyacına göre formülize edilebilen bu ürünler yüksek kaliteli baskılar elde …		 
                         </p>
                    </template>
                </LineCard>`,
})
export const Variant_3 = () => ({
  components: { LineCard, BgIcon, LButton },
  props: {},
  template: ` <LineCard>
                    <template v-slot:media>
                        <div style="display:flex; width:100%; justify-content:start;">
                        <bg-icon class="radius-09 bg-warning" :size="[50,50]">
                        <slot><i class="ri-mail-line ri-2x text-dark" /></slot>
                        </bg-icon>
                        </div>
                    </template>
                    <template v-slot:title>
                        <p class="fw-600">Silikon Hammadde İthalatı</p>
                    </template>
                    <template v-slot:content>
                        <p style="line-height:25px;" class="text-dark_08"> 
                        Medcup Ambalaj'ın evnanterinde olan ürünler doğa dostu ve geri dönüşümlü
                       materyellerdendir. Doğa bizim için ve geleceğimiz için çok önemli.
                         </p>
                    </template>
                </LineCard>`,
})
export const Variant_4 = () => ({
  components: { LineCard, BgIcon, LButton, ListTwo },
  props: {},
  template: ` <LineCard>
                    <template v-slot:title>
                    <div>
                    <ListTwo variant="success">
                     <h3>Neler Yapıyoruz ?</h3></ListTwo>
                    </div>
                    </template>
                    <template v-slot:content>
                        <p style="line-height:25px;" class="text-dark_08"> 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet ...
                         </p>
                    </template>
                    <template v-slot:footer>
                        <l-button class="link text-blue">Daha fazla öğrenin <i class="ri-alert-line ri-2x text-dark" /></l-button>
                    </template>
                </LineCard>`,
})
export const Variant_5 = () => ({
  components: { LineCard, BgIcon, LButton, ListTwo },
  props: {},
  template: ` <LineCard>
                    <template v-slot:title>
                    <div>
                    <ListTwo variant="success">
                     <h3>Çalışmalarımız</h3></ListTwo>
                    </div>
                    </template>
                    <template v-slot:content>
                        <p style="line-height:25px;" class="text-dark_08"> 
                        Gochem Silikon ve Kimya’nın geliştirdiği özel tekniklerle üretilmiş bazı örnekler. Bu örnekleri ve daha fazlasını görmek için ofisimizi ziyaret edebilirsiniz. Gochem Silikon ve Kimya’nın geliştirdiği özel tekniklerle üretilmiş bazı örnekler. Bu örnekleri ve daha fazlasını görmek için ofisimizi ziyaret edebilirsiniz.                         </p>
                    </template>
                    <template v-slot:footer>
                        <l-button size="md" class="text-white bg-dark">Hepsini görün </l-button>
                    </template>
                </LineCard>`,
})
export const Variant_6 = () => ({
  components: { LineCard, LButton },
  props: {},
  template: ` <LineCard>
                    <template v-slot:title>
                    <div style="line-height:30px;">
                     <h3 class="text-white">Gochem Silikon’un
                     uzman takımı ile tanışın</h3>
                    </div>
                    </template>
                    <template v-slot:content>
                        <p style="line-height:25px;" class="text-white_08"> 
                        Silikonun ülkedeki hammadde ihtiyacını tespit eden Gochem Silikon ve Kimya 2009 tarihinde Gökhan Özenoğlu tarafından İstanbul’da kuruldu. Kurulduğundan bugüne daima yenilikçi olmayı                      </template>
                    <template v-slot:footer>
                        <l-button size="md" class="text-white bg-dark">İletişime Geçin </l-button>
                    </template>
                </LineCard>`,
})
