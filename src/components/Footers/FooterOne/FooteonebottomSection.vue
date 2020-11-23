<template>
  <div class="footer-one-bottom-section-container">
    <div class="footer-one-bottom-section">
      <div>
        <company-logo
          class="footer-one-bottom-section-desktop"
          name="ERBAY LASTİK"
          img="/erbay/logo.png"
          subname="Kereste İmalat İnşaat Ltd. Şti."
        ></company-logo>
        <div class="footer-one-bottom-section-responsive">
          <h5 class="text-white">
            ERBAY LASTİK
          </h5>
          <span class="text-white">
            Kereste İmalat İnşaat Ltd. Şti.
          </span>
        </div>
      </div>
      <div>
        <h5 class="text-white fw-100">
          Copyright 2020
        </h5>
      </div>
      <div>
        <img src="/lanista/lanista.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import companyLogo from "../../Header/HeaderOne/HeaderOneComponents/BottomSection/companyLogo.vue";
export default {
  components: { companyLogo }
};
</script>

<style lang="scss" scoped>
h5 {
  font-family: $baseFont;
}
span {
  font-size: 0.4rem;
}
.footer-one-bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 13px 0px;
  div {
    justify-self: center;
    align-self: center;
  }
  &-container {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #2c4d83;
  }
  img {
    width: 35px;
  }
  &-desktop {
    display: none;
  }
}
@media ($sm) {
  .footer-one-bottom-section {
    span {
      font-size: 0.6rem;
    }
    img {
      width: 80px;
    }
  }
}
@media ($lg) {
  .footer-one-bottom-section {
    width: 90%;
    span {
      font-size: 0.8rem;
    }
    img {
      width: 100px;
    }
    &-desktop {
      display: inline-flex;
    }
    &-responsive {
      display: none;
    }
  }
}
@media ($xxl) {
  .footer-one-bottom-section {
    span {
      font-size: 1rem;
    }
    img {
      width: 130px;
    }
  }
}
</style>
