import HeroThree from '../../components/Heroes/HeroThree.vue'
import ListTwo from '../../components/Lists/ListTwo.vue'
import HerocardOne from '../../components/Cards/HeroCards/HerocardOne.vue'
import MediaCard from '../../components/Cards/HeroCards/MediaCard.vue'
import LSelect from '../../components/LSelect.vue'
import SelectFilter from '../../components/Cards/SelectFilter.vue'
export default {
  title: 'Heroes/HeroThree',
  component: {
    HerocardOne,
    HeroThree,
    ListTwo,
    LSelect,
    SelectFilter,
    MediaCard,
  },
}
export const Hero_Three = () => ({
  components: {
    HerocardOne,
    HeroThree,
    ListTwo,
    LSelect,
    SelectFilter,
    MediaCard,
  },
  data() {
    return {
      items: [
        {
          value: 'Sektör',
          key: null,
        },
        {
          value: 'Kullanım',
          key: null,
        },
      ],
    }
  },
  template: `<HeroThree>
    <template v-slot:left>
    <HerocardOne>
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
    </HerocardOne>
    </template>
    <template v-slot:right>
    <MediaCard bgImage="https://api.lanista.com.tr/assest/images/gökhan.jpg-4-4-.jpg" href="https://www.youtube.com/watch?v=-N7kFnzXG4U"></MediaCard>
    </template>
    </HeroThree>`,
})
