<template>
  <div class="footer-one">
    <div class="container">
      <TopSection />
    </div>
    <div class="bg-white_01">
      <div class="container">
        <BottomSection />
      </div>
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
  overflow: hidden;
  background: rgb(44, 77, 131);
  background: linear-gradient(
    135deg,
    rgba(44, 77, 131, 1) 0%,
    rgba(9, 30, 63, 1) 100%
  );
}
</style>
