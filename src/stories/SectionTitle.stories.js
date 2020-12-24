import SectionTitle from '../components/SectionTitle'

export default {
  title: '/SectionTitle',
  component: { SectionTitle },
}

export const SectionTitle_Card = () => ({
  components: { SectionTitle },
  template: `<SectionTitle title="Sık sorulan sorular">Mağazamıza gelin kaliteyi yerinde yaşayın falan filan amanın öyle böyle
  yaparız ederiz eveeeeet Mağazamıza gelin kaliteyi yerinde yaşayın falan
  filan amanın öyle</SectionTitle>`,
})
