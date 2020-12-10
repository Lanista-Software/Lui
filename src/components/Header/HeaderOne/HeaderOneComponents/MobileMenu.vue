<template>
  <div class="mobile-menu bg-dark">
    <div class="mobile-menu-icon">
      <img src="/erbay/close-line.svg" @click="emitMenu(false)" />
    </div>
    <div class="mobile-menu-items">
      <ul>
        <li v-for="(item, i) in menus" :key="i" @click="emitMenu(false)">
          <a class="text-white" :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          href: "/",
          text: "Anasayfa"
        },
        {
          href: "#products",
          text: "Ürünler"
        },
        {
          href: "#brands",
          text: "Markalar"
        },
        {
          href: "#services",
          text: "Hizmetler"
        },
        {
          href: "#about",
          text: "Hakkımızda"
        },
        {
          href: "#faq",
          text: "Sık sorulanlar"
        }
      ]
    };
  },
  methods: {
    emitMenu(e) {
      this.$emit("show", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  height: 100vh;
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-template-columns: 1fr;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    li {
      color: $white;
      font-size: 3rem;
    }
    li:not(:first-child) {
      margin-top: 1rem;
    }
  }
  &-icon {
    justify-self: flex-end;
    margin-right: 20px;
    margin-top: 20px;
    img {
      width: 25px;
    }
  }
  &-items {
    justify-self: center;
  }
}
</style>
