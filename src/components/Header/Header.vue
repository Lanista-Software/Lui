<template>
  <div class="header">
    <div class="header-top">
      <top-section />
    </div>
    <div class="header-bottom">
      <bottom-sectiongroup />
    </div>
  </div>
</template>

<script>
import BottomSectiongroup from "./BottomSection/BottomSectiongroup.vue";
import TopSection from "./TopSection/TopSection.vue";
export default {
  components: { TopSection, BottomSectiongroup }
};
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-rows: 30px 1fr;
  background: rgb(44, 77, 131);
  background: linear-gradient(
    135deg,
    rgba(44, 77, 131, 1) 0%,
    rgba(9, 30, 63, 1) 100%
  );
  &-top {
    border-bottom: 1px solid $primary;
    padding: 7px 0px;
  }
  &-bottom {
    align-self: center;
    margin: 7px 0px;
  }
}
</style>
