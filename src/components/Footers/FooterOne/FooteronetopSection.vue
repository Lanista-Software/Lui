<template>
  <div class="footer-one-top-section-container">
    <div class="footer-one-top-section">
      <div class="footer-one-top-section-left">
        <ul>
          <li>
            <h5 class="text-white">
              İletişim
            </h5>
          </li>
          <li>
            <item-group icon="ri-map-pin-2-fill"
              >Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040
              Tuşba/Van</item-group
            >
          </li>
          <li>
            <item-group icon="ri-map-pin-2-fill"
              >Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040
              Tuşba/Van</item-group
            >
          </li>
          <li>
            <item-group icon="ri-map-pin-2-fill"
              >Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040
              Tuşba/Van</item-group
            >
          </li>
        </ul>
      </div>
      <div class="footer-one-top-section-center">
        <ul>
          <li>
            <h5 class="text-white">
              SİTE HARİTASI
            </h5>
          </li>
          <li><a href="" class="text-white">Ana Sayfa</a></li>
          <li><a href="" class="text-white">Ana Sayfa</a></li>
          <li><a href="" class="text-white">Ana Sayfa</a></li>
          <li><a href="" class="text-white">Ana Sayfa</a></li>
          <li><a href="" class="text-white">Ana Sayfa</a></li>
          <li><a href="" class="text-white">Ana Sayfa</a></li>
        </ul>
      </div>
      <div class="footer-one-top-section-right">
        <ul>
          <li>
            <h5 class="text-white">
              HİZMETLER
            </h5>
          </li>
          <li><a href="" class="text-white">Lastik sökme ve takma</a></li>
          <li><a href="" class="text-white">Rot Balans hizmeti</a></li>
          <li><a href="" class="text-white">Lastik hastanesi hizmeti</a></li>
          <li><a href="" class="text-white">Jant düzeltme hizmeti</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ItemGroup from "../../Header/HeaderOne/HeaderOneComponents/TopSection/ItemGroup.vue";
export default {
  components: { ItemGroup }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
li {
  font-family: $baseFont;
  margin-top: 1rem;
  color: $white;
  margin-bottom: 0px;
}
a {
  font-size: 0.7rem;
  font-family: $baseFont;
}
.footer-one-top-section {
  width: 90%;
  &-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
    background: rgb(44, 77, 131);
    background: linear-gradient(
      135deg,
      rgba(44, 77, 131, 1) 0%,
      rgba(9, 30, 63, 1) 100%
    );
  }
  &-center {
    display: none;
  }
  &-right {
    display: none;
  }
  &-left {
    width: 70%;
  }
}
@media ($lg) {
  .footer-one-top-section {
    li {
      margin-top: 20px;
    }
    &-container {
      padding: 50px 0px;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &-center {
      justify-self: center;
      display: block;
    }
    &-right {
      justify-self: end;
      display: block;
    }
    &-left {
      width: 100%;
      justify-self: start;
    }
  }
}
</style>
