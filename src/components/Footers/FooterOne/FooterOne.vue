<template>
  <div class="footer-one">
    <div>
      <footeronetop-section></footeronetop-section>
    </div>
    <div class="bg-white_01">
      <footeonebottom-section></footeonebottom-section>
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
  background: rgb(44, 77, 131);
  background: linear-gradient(
    135deg,
    rgba(44, 77, 131, 1) 0%,
    rgba(9, 30, 63, 1) 100%
  );
}
</style>
