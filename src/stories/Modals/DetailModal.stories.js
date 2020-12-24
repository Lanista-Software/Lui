import Modal from '../../components/Modals/DetailModal.vue'
import BgIcon from '../../components/Icons/BgIcon.vue'
import LButton from '../../components/LButton.vue'
import { action } from '@storybook/addon-actions'
export default {
  title: 'Modals/DetailModal',
  component: Modal,
}
export const Detail_Modal = () => ({
  components: { Modal, BgIcon, LButton },
  methods: { action: action('filter clicked') },
  template: `<Modal class="radius-05" @click="action()" style="border: 1px solid #063750">
    <template v-slot:header>
    <div class="" style="display:inline-flex; justify-content:center; align-items:center; width:100%; background-image: url('https://i2.wp.com/isgtedbir.com/wp-content/uploads/2016/11/190.jpg?fit=1022%2C575&ssl=1'); height:100%; background-size:100%; padding:3rem;">
        <bg-icon class="shadow radius-10 bg-white_08"  :size="[100, 100]" style="margin-right:1rem">
        <i class="ri-contacts-book-2-fill ri-3x" /> 
        </bg-icon>
        <h4 class="text-white" style="border-bottom:2px solid #FF7C7C;">
        Tekstil</h4>
    </div>
    </template>
    <template v-slot:body>
    <div style="display:inline-flex; margin:2rem 0px; justify-content: center; column-gap:1.5rem; width:100%">
    <l-button size="sm" v-for="item in 4" :key="item" bg-variant="bg-light" >
    t-shirt
    </l-button>
    </div>
    <div style="padding:3rem;">
    <p class="text-dark">
    Gochem Silikon ve Kimya uzun yıllara dayanan sektör tecrübesiyle performansı yüksek, maliyeti düşük tekstil silikonlarını envanterinde bulundurur. Kullanım ihtiyacına göre formülize edilebilen bu ürünler yüksek kaliteli baskılar elde etmenizi sağlar. Gochem Silikon ve Kimya’nın kendi bünyesindeki labaratuvarında geliştirdiği müşteriye özel tekstil silikonları çatlama, kopma, solma gibi olumsuz sonuçlar doğurmaz ve yüksek performanslı bir kullanım sağlar.
    Tişört üzerine yapılan baskılar, çorap tabanlarına yapılan kaydırmaz baskılar, bayan iç çamaşırlarına yapılan çeşitli uygulamalar, sporcu kıyafetlerine uygulanan kaydırmazlık ve esneklik sağlayan uygulamalar silikonun tekstildeki kullanımına güncel örneklerdir. Gochem Silikon ve Kimya ayrıca enjeksiyon baskı, emprime baskı, gofre baskı, kabartma baskı, klişe baskı, etiket baskı, ısı transfer uygulamalarında da uzman kadrosuyla tekstil sektörüne gerekli teknik servis hizmetini vermektedir.
    </p>
    <p lass="text-dark">
    Gochem Silkon ve Kimya’nın sunduğu ürün grubundaki silikonlar bütün iplik çeşitlerine rahatlıkla uygulanabilir. Vücuda temas halinde terletmeyen antibakteriyel yapısıyla silikon, insan sağlığına zarar vermeyen doğal bir üründür. Tekstil sektörü için gerekli bütün izin ve belgelere sahip olan Gochem Silikon ve Kimya sürekli yapılan periyodik kontrollerle denetlenmektedir. Gerekli bütün belgelere internet sitemizden ulaşabilirsiniz.
    Tekstil sektöründe kullanılan silikon hammaddeler için uzman kadromuzla görüşebilr ve daha farklı çözümler ile ilgili bilgi alabilirsiniz.
    </p>
    </div>
    </template>
    <template v-slot:footer>
        <div style="display: inline-flex; justify-content: center; column-gap:1rem; width:100%; margin:1.5rem 0px;">
        <l-button size="md"  bg-variant="bg-light" >
    Online sipariş
    </l-button>   
    <l-button size="md"  bg-variant="bg-light" >
    Daha fazla bilgi
    </l-button>   
        </div>
     </template>
  </Modal>`,
})
