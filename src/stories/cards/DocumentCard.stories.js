import DocumentCard from '../../components/Cards/DocumentCard'
import LButton from '../../components/LButton'

export default {
  title: 'Cards/DocumentCard',
  component: { DocumentCard },
}

export const Document_Card = () => ({
  components: { DocumentCard, LButton },
  template: `<DocumentCard img="https://api.lanista.com.tr/assest/images/girişimci.PNG-4-4-.jpg">
    <template v-slot:desc>
    <p class="fw-600">
    Teknik Dosya
  </p>
  <small>
    20.03.2021
  </small>
    </template>
    <template v-slot:button>
        <l-button bg-variant="bg-primary" size="sm" text-variant="text-white">
        Hemen Arayın
        </l-button>
    </template>
    <template v-slot:info>
    <p class="text-white">
    Dosyayı talep
    <br />
    etmek için
  </p>
    </template>
  </DocumentCard>`,
})
