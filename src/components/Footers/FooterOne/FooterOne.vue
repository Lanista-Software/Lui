<template>
  <div class="footer-one">
    <div class="container">
      <footeronetop-section />
    </div>
    <div class="bg-white_01">
      <div class="container">
        <footeonebottom-section />
      </div>
    </div>
  </div>
</template>

<script>
import FooteonebottomSection from "./FooteonebottomSection.vue";
import FooteronetopSection from "./FooteronetopSection.vue";
export default {
  components: { FooteronetopSection, FooteonebottomSection }
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
