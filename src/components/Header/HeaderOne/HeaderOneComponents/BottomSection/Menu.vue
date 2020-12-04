<template>
  <div>
    <ul>
      <li>
        <nuxt-link class="text-white" tag="a" to="/" exact=""
          >Anasayfa <span />
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
</template>
<style lang="scss" scoped>
ul {
  padding: 0;
  list-style: none;
  width: 100%;
  margin: 0;
}
li {
  float: left;
  font-family: $baseFont;
  margin: 0;
  color: $white;
  span {
    display: none;
    width: 30px;
    height: 2px;
    background-color: $warning;
    margin-top: 3px;
  }
}
.nuxt-link-active {
  span {
    display: block;
  }
}
li:not(:last-child) {
  margin-right: 11px;
}
@media ($xxl) {
  li:not(:last-child) {
    margin-right: 22px;
  }
}
</style>
