<template>
  <div class="social-one">
    <div class="social-container">
      <ul>
        <li v-for="(item, index) in socialList" :key="index">
          <a class="element" :href="item.link" target="_blank">
            <img :src="item.icon" :alt="item.name" />
          </a>
          <div class="dnone">
            <a :href="item.link" target="_blank">
              {{ "/" + item.link.split("/")[3] }}
            </a>
          </div>
        </li>
        <li>
          <a class="element" href="#">
            <img src="/icons/search.svg" alt="search" />
          </a>
          <div class="dnone">
            <input type="text" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialOne",
  data() {
    return {};
  },
  props: {
    socialList: {
      type: Array,
      default() {
        return [
          {
            name: "Facebook",
            icon: "/icons/001-facebook.svg",
            link: "https://www.facebook.com/PfizerTurkiye"
          },
          {
            name: "Whatsapp",
            icon: "/icons/whatsapp.svg",
            link: "https://www.facebook.com/PfizerTurkiye"
          },
          {
            name: "Instagram",
            icon: "/icons/instagram (1).svg",
            link: "https://www.facebook.com/PfizerTurkiye"
          }
        ];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.social-one {
  padding: 5px 4px;
  border-radius: 5px;
  width: 23px;
  background-color: rgba($dark, 0.2);
  overflow: hidden;
  transition: width 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}
.social-container {
  z-index: -5;
}
ul {
  list-style: none;
  row-gap: 4px;
  display: grid;
  padding: 1px;
}
a {
  display: contents;
  text-decoration: none;
  color: $dark;
}
.element {
  -webkit-tap-highlight-color: transparent; /* remove tap highlight */
}
li {
  display: inline-flex;
  column-gap: 10px;
  align-items: center;
}
li:last-child {
  transition: background-color 0.3s cubic-bezier(0, 0.6, 0.96, 0.3);
  border-radius: 5px;
}
li:last-child input {
  width: 100%;
  background-color: transparent;
  outline: none;
  color: $white;
  border: none;
}
img {
  width: 15px;
}
.dnone {
  visibility: hidden;
  transition: visibility 0.5s linear;
}
.social-one:hover .dnone {
  visibility: visible;
}
.social-one:hover {
  width: 60%;
}
.social-one:hover .social-container {
  z-index: 5;
}
.social-one:hover li:last-child {
  background-color: $dark;
}

@media screen and ($xs) {
  .social-one {
    padding: 10px 10px;
    width: 44px;
  }
  ul {
    row-gap: 10px;
  }
  li {
    column-gap: 15px;
  }
  li:last-child input {
    padding: 3px;
  }
  img {
    width: 24px;
  }
  .social-one:hover {
    width: 50%;
  }
}
@media screen and ($sm) {
  .social-one:hover {
    width: 30%;
  }
}
@media screen and ($md) {
  .social-one:hover {
    width: 25%;
  }
}
@media screen and ($lg) {
  .social-one:hover {
    width: 20%;
    max-width: 250px;
  }
}
</style>
