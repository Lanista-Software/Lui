<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="header-c">
          <top-section />
        </div>
      </div>
      <div class="header-bottom">
        <div class="header-c">
          <bottom-sectiongroup />
        </div>
      </div>
    </div>
    <div class="responsive-header">
      <div class="responsive-header-left">
        <img src="/erbay/logo.png" alt="erbay" />
      </div>
      <div class="responsive-header-center">
        <i class="ri-shield-check-fill text-success" />
      </div>
      <div class="responsive-header-right">
        <i class="ri-menu-5-line text-white" />
      </div>
    </div>
  </div>
</template>

<script>
import BottomSectiongroup from "../HeaderOne/HeaderOneComponents/BottomSection/BottomSectiongroup";
import TopSection from "../HeaderOne/HeaderOneComponents/TopSection/TopSection";
export default {
  components: { TopSection, BottomSectiongroup }
};
</script>

<style lang="scss" scoped>
.header-c {
  width: 90%;
}
.header {
  display: none;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-bottom {
    align-self: center;
    margin: 7px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.responsive-header {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  background: rgb(44, 77, 131);
  width: 100%;
  height: 40px;
  align-content: center;
  background: linear-gradient(
    135deg,
    rgba(44, 77, 131, 1) 0%,
    rgba(9, 30, 63, 1) 100%
  );
  div {
    align-self: center;
    justify-self: center;
    img {
      width: 20px;
      height: 20px;
    }
    i {
      font-size: 20px;
    }
  }
}
@media ($sm) {
  .responsive-header {
    div {
      img {
        width: 30px;
        height: 30px;
      }
      i {
        font-size: 25px;
      }
    }
  }
}
@media ($lg) {
  .responsive-header {
    display: none;
  }
  .header {
    display: grid;
  }
}
</style>
