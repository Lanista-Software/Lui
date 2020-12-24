<template>
  <div class="footer-one-top-section-container">
    <div class="footer-one-top-section">
      <div class="footer-one-top-section-left">
        <ul>
          <li>
            <h5 class="text-white">İletişim</h5>
          </li>
          <li>
            <ItemGroup href="tel:0432 223 24 48" icon="ri-contacts-book-2-fill"
              >(0432) 223 24 48</ItemGroup
            >
          </li>
          <li>
            <ItemGroup
              href="mailto:info@erbaylastik.com.tr"
              icon="ri-mail-line"
            >
              info@erbaylastik.com.tr
            </ItemGroup>
          </li>
          <li>
            <ItemGroup href="#map" icon="ri-map-pin-2-fill">
              Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van
            </ItemGroup>
          </li>
        </ul>
      </div>
      <div class="footer-one-top-section-center">
        <ul>
          <li>
            <h5 class="text-white">SİTE HARİTASI</h5>
          </li>
          <li>
            <nuxt-link class="text-white" tag="a" to="/" exact=""
              >Ana Sayfa <span />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" tag="a" to="#hit"
              >Öne çıkanlar <span
            /></nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" tag="a" to="#products"
              >Ürünler <span />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" tag="a" to="#brands"
              >Markalar <span />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" tag="a" to="#about"
              >Hakkımızda <span />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="text-white" tag="a" to="#faq"
              >Sık sorulanlar <span />
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer-one-top-section-right">
        <ul>
          <li>
            <h5 class="text-white">HİZMETLER</h5>
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
import ItemGroup from '../../Header/HeaderOne/HeaderOneComponents/TopSection/ItemGroup.vue'
export default {
  components: { ItemGroup },
}
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
  font-size: 1rem;
  font-family: $baseFont;
}
h5 {
  font-weight: 100;
}
.footer-one-top-section {
  &-container {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 20px 0px;
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
      justify-content: center;
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
