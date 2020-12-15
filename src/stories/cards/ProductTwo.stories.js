import ProductTwo from "../../components/Cards/ProductCards/ProductTwo";
import TagOne from "../../components/Tags/TagOne.vue";
export default {
  title: "Cards/ProductCards/ProductTwo",
  component: {
    ProductTwo,
    TagOne
  }
};

export const VariantOne = () => ({
  props: {},
  data() {
    return {};
  },
  components: {
    ProductTwo,
    TagOne
  },
  template: `<ProductTwo class="bg-white">
            <template v-slot:tag>
            <TagOne class="bg-blue">
            <small class="text-white">Stokta</small>
            </TagOne>
            </template>
            <template v-slot:title>
            <small class="text-dark_05">Karton ve Kağıt</small>
            </template>
            <template v-slot:name>
            <h6>Karton Kahve bardağı 12'li paket - Koli içi 120 adet</h6>
            </template>
            <template v-slot:properties>
            <small class="text-dark_05">Ebatlar : 12 x 5 cm</small>
            </template>
            </ProductTwo>`
});
