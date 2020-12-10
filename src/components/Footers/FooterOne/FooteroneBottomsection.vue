<template>
  <div class="footer-one-bottom-section-container">
    <div class="footer-one-bottom-section">
      <div class="company">
        <company-logo
          class="footer-one-bottom-section-desktop"
          name="ERBAY LASTİK"
          img="/erbay/logo.png"
          subname="Kereste İmalat İnşaat Ltd. Şti."
        />
        <div
          class="footer-one-bottom-section-responsive footer-one-bottom-item"
        >
          <h6 class="text-white">ERBAY LASTİK</h6>
          <small class="text-white company-title">
            Kereste İmalat İnşaat Ltd. Şti.
          </small>
        </div>
      </div>
      <div class="copyright">
        <small class="text-white fw-100">Copyright 2020</small>
      </div>
      <div class="footer-one-bottom-section-item l-logo">
        <a href="https://www.lanista.com.tr" target="_blank">
          <img src="/lanista/lanista.svg"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyLogo from "../../Header/HeaderOne/HeaderOneComponents/BottomSection/CompanyLogo";
export default {
  components: { CompanyLogo }
};
</script>

<style lang="scss" scoped>
a {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
}
h6 {
  font-family: $titleFont;
}
span {
  font-size: 0.6rem;
}
.company-title {
  display: none;
}
.footer-one-bottom-section {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  align-items: center;
  &-item {
    padding: 1rem;
  }
  div {
    justify-self: center;
  }
  .company {
    justify-self: start;
    width: 100%;
  }
  .copyright {
    justify-self: center;
    height: 100%;
    display: flex;
    align-items: center;
    small {
      align-self: center;
    }
  }
  .l-logo {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  &-container {
    display: flex;
    justify-content: center;
  }
  img {
    width: 60%;
    height: auto;
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
      height: auto;
    }
  }
  .company-title {
    display: block;
  }
}
@media ($lg) {
  .footer-one-bottom-section {
    span {
      font-size: 0.8rem;
    }
    img {
      width: 100px;
      height: auto;
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
      height: auto;
    }
  }
}
</style>
