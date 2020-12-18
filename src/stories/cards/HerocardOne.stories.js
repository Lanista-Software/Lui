import HerocardOne from "../../components/Cards/HeroCards/HerocardOne.vue";
import ListTwo from "../../components/Lists/ListTwo.vue";
import LSelect from "../../components/LSelect.vue";
import SelectFilter from "../../components/Cards/SelectFilter.vue";
export default {
  title: "Cards/Herocards/HerocardOne",
  component: { HerocardOne }
};
export const Herocard_One = () => ({
  components: { HerocardOne, ListTwo, LSelect, SelectFilter },
  data() {
    return {
      items: [
        {
          value: "Sektör",
          key: null
        },
        {
          value: "Kullanım",
          key: null
        }
      ]
    };
  },
  template: `<HerocardOne>
    <template v-slot:tag>
    <ListTwo variant="success">
    <small class="fw-600 text-success">
    DOĞA DOSTU ÜRETİM
    </small>
    </ListTwo>
    </template>
    <template v-slot:content>
   <h3 class="fw-600 text-white">
   Ülkenin Silikon Tedarikçisi
   </h3>
    <SelectFilter :desktopFr="2" :mobileFr="2">
    <l-select
    :items="items"
  />
  <l-select
    :items="items"
  />
    </SelectFilter>
    </template>
    <slot>
    <p class="text-white_08">
    Sürdürülebilir bir gelecek ve daha yaşanabilir bir dünya için yüksek teknolojiyi kullanarak doğa dostu silikon üretimi gerçekleştiriyoruz.
    </p>
    </slot>
    </HerocardOne>`
});
