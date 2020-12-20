import ListOne from '../../components/Lists/ListOne.vue'
export default {
  title: 'Lists/ListOne',
  component: ListOne
}
export const List_One = () => ({
  components: { ListOne },
  template: `<ListOne>
  Tüm ihtiyaçlarınızı karşılayabileceğiniz en güvenilir firma.</ListOne>`
})
