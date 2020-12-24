import PrependInput from '../../components/Inputs/PrependInput.vue'
export default {
  title: 'Inputs/PrependInput',
  component: PrependInput,
}
export const Prepend_Input = () => ({
  components: { PrependInput },
  template: `<PrependInput>
  <i class="ri-star-line ri-1x" /></PrependInput>`,
})
