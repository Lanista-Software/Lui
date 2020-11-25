<template>
  <div class="bottom-section-group">
    <div>
      <companyLogo
        img="/erbay/logo.png"
        name="ERBAY LASTİK"
        subname="Kereste İmalat İnşaat Ltd. Şti."
      ></companyLogo>
    </div>
    <div>
      <lmenu />
    </div>
    <div>
      <l-button bg-variant="bg-primary" size="md" text-variant="text-white"
        >İletişim</l-button
      >
    </div>
  </div>
</template>

<script>
import companyLogo from "./companyLogo";
import lmenu from "./Menu";
import lButton from "../../../../LButton";
export default {
  components: {
    companyLogo,
    lmenu,
    lButton
  }
};
</script>

<style lang="scss" scoped>
.bottom-section-group {
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
  button {
    padding: 7px 24px;
  }
}
</style>
