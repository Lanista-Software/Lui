<template>
  <div class="header-top-section" :style="style">
    <div>
      <ItemGroup icon="ri-contacts-book-2-fill">(0432) 223 24 48</ItemGroup>
    </div>
    <div>
      <ItemGroup icon="ri-map-pin-2-fill">
        Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van
      </ItemGroup>
    </div>
    <div>
      <ItemGroup icon="ri-mail-line">
        info@erbaylastik.com.tr
      </ItemGroup>
    </div>
  </div>
</template>

<script>
import ItemGroup from "./ItemGroup.vue";
export default {
  name: "TopSection",
  components: {
    ItemGroup
  },
  props: {
    BackgroundColor: {
      type: String,
      default: null
    }
  },
  computed: {
    style() {
      return `background-color: ${this.BackgroundColor}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-top-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    align-self: center;
  }
  div:nth-child(1) {
    justify-self: start;
  }
  div:nth-child(2) {
    justify-self: center;
  }
  div:nth-child(3) {
    justify-self: end;
  }
}
</style>
