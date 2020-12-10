<template>
  <div class="footer-one">
    <div>
      <BottomSection />
    </div>
    <div class="bg-white_01">
      <TopSection />
    </div>
  </div>
</template>

<script>
// import BottomSection from "./FooteroneBottomsection.vue";
// import TopSection from "./FooteroneTopsection.vue";
import BottomSection from "./FooteroneBottomsection";
import TopSection from "./FooteroneTopsection";
export default {
  components: {
    BottomSection,
    TopSection
  }
};
</script>
<style lang="scss" scoped>
.footer-one {
  background: rgb(44, 77, 131);
  background: linear-gradient(
    135deg,
    rgba(44, 77, 131, 1) 0%,
    rgba(9, 30, 63, 1) 100%
  );
}
</style>
