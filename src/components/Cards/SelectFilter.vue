<template>
  <div class="select-filter bg-light radius-08 shadow">
    <div class="select-filter-top">
      <l-select
        v-model="form.brand"
        :items="filterData.brands"
        :selected="selectform.brand"
        class="dr1"
      />
      <l-select
        v-model="form.season"
        :items="filterData.attributes.seasons"
        :selected="selectform.season"
        class="dr2"
      />
      <l-select
        v-model="form.year"
        :selected="selectform.year"
        :items="filterData.attributes.years"
        class="dr6"
      />
    </div>
    <div class="select-filter-bottom">
      <l-select
        v-model="form.baseWidth"
        :selected="selectform.baseWidth"
        :items="filterData.attributes.baseWidth"
        class="dr3"
      />
      <l-select
        v-model="form.sectionRatio"
        :selected="selectform.sectionRatio"
        :items="filterData.attributes.sectionRatio"
        class="dr4"
      />
      <l-select
        v-model="form.wheelDiameter"
        :selected="selectform.wheelDiameter"
        :items="filterData.attributes.wheelDiameter"
        class="dr5"
      />
    </div>
    <div class="select-filter-btn">
      <l-button
        class="select-filter-btn-responsive"
        size="lg"
        bg-variant="bg-primary"
        text-variant="text-white"
        @click="filter"
        >Filtreleme yapın</l-button
      >
      <l-button
        class="select-filter-btn-desktop"
        size="md"
        bg-variant="bg-primary"
        text-variant="text-white"
        @click="filter"
        >Lastik ara</l-button
      >
    </div>
  </div>
</template>

<script>
import LButton from "../LButton.vue";
import LSelect from "../LSelect.vue";
import mixin from "../filter";
export default {
  name: "SelectFilter",
  components: { LSelect, LButton },
  mixins: [mixin],
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectform: {
        brand: null,
        season: null,
        baseWidth: null,
        sectionRatio: null,
        wheelDiameter: null,
        year: null
      }
    };
  },
  watch: {
    items: {
      deep: true,
      handler(val) {
        this.form.brand = val.brand;
        this.form.baseWidth = val.baseWidth;
        this.form.season = val.season;
        this.form.sectionRatio = val.sectionRatio;
        this.form.wheelDiameter = val.wheelDiameter;
        this.form.year = val.year;
        // component içi
        this.selectform.brand = val.brand;
        this.selectform.season = val.season ? val.season.split(",")[2] : null;
        this.selectform.baseWidth = val.baseWidth
          ? val.baseWidth.split(",")[2]
          : null;
        this.selectform.sectionRatio = val.sectionRatio
          ? val.sectionRatio.split(",")[2]
          : null;
        this.selectform.wheelDiameter = val.wheelDiameter
          ? val.wheelDiameter.split(",")[2]
          : null;
        this.selectform.year = val.year ? val.year.split(",")[2] : null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.select-filter {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  &-bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  &-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    &-desktop {
      display: none;
    }
  }
}
@media ($lg) {
  .select-filter {
    height: 70px;
    padding: 2px 20px;
    grid-template-columns: 1fr 1fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 30px;
    &-top {
      align-self: center;
      div {
        width: 100%;
      }
    }
    &-bottom {
      align-self: center;
      div {
        width: 100%;
      }
    }
    &-btn {
      align-self: center;
      justify-content: flex-end;
      margin-bottom: 0px;
      &-desktop {
        display: block;
      }
      &-responsive {
        display: none;
      }
    }
  }
}
</style>
