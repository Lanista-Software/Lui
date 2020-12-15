<template>
  <div class="row">
    <div class="temp">
      <ul>
        <li>
          <a class="element" href="#">
            <img src="/icons/001-facebook.svg" alt="facebook" />
          </a>
          <div class="dnone">
            <a href="#">
              https://www.facebook.com/ljkljlj
            </a>
          </div>
        </li>
        <li>
          <a class="element" href="#">
            <img src="/icons/instagram (1).svg" alt="instagram" />
          </a>

          <div class="dnone">
            <a href="#">
              https://www.instagram.com/ljkljlj
            </a>
          </div>
        </li>

        <li>
          <a class="element" href="#">
            <img src="/icons/whatsapp.svg" alt="whatsapp" />
          </a>
          <div class="dnone">
            <a href="#">
              https://wp.me/ljkljlj
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
<style lang="scss" scoped>
.row {
  padding: 5px 3px;
  border-radius: 5px;
  width: 15px;
  background-color: rgba($dark, 0.2);
  overflow: hidden;
  transition: width 0.5s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}
.temp {
  width: 280px; /* link ve input boyutu */
  z-index: -5;
}
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  row-gap: 5px;
  display: grid;
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
  width: 100%;
}
li:last-child {
  transition: background-color 0.3s cubic-bezier(0, 0.6, 0.96, 0.3);
  border-radius: 5px;
}
li:last-child input {
  background-color: transparent;
  outline: none;
  color: $white;
  border: none;
  border-bottom: 0.5px solid rgba($light, 0.4);
  height: 8px;
  padding-bottom: 1px;
}
img {
  width: 15px;
}
.dnone {
  width: 100%;
  visibility: hidden;
  transition: visibility 0.5s linear;
}
.row:hover .dnone {
  visibility: visible;
}
.row:hover {
  width: 280px; /* link ve input boyutu */
}
.row:hover .temp {
  z-index: 5;
}
.row:hover li:last-child {
  background-color: $dark;
}
@media screen and ($md) {
  .row {
    padding: 7px 5px;
    width: 18px;
  }
  .temp {
    width: 330px; /* link ve input boyutu */
  }
  ul {
    row-gap: 7px;
  }
  li {
    column-gap: 12px;
  }
  li:last-child input {
    height: 10px;
    padding-bottom: 1.5px;
  }
  img {
    width: 18px;
  }
  .row:hover {
    width: 330px; /* link ve input boyutu */
  }
}

@media screen and ($md) {
  .row {
    padding: 9px 7px;
    width: 20px;
  }
  .temp {
    width: 355px; /* link ve input boyutu */
  }
  ul {
    row-gap: 10px;
  }
  li {
    column-gap: 14px;
  }
  li:last-child input {
    height: 12px;
  }
  img {
    width: 20px;
  }
  .row:hover {
    width: 355px; /* link ve input boyutu */
  }
}

@media screen and ($lg) {
  .row {
    padding: 10px 10px;
    width: 24px;
  }
  .temp {
    width: 355px; /* link ve input boyutu */
  }
  ul {
    row-gap: 10px;
  }
  li {
    column-gap: 15px;
  }
  li:last-child input {
    height: 12px;
    padding-bottom: 3px;
  }
  img {
    width: 24px;
  }
  .row:hover {
    width: 355px; /* link ve input boyutu */
  }
}

@media screen and ($xl) {
  .temp {
    width: 500px; /* link ve input boyutu */
  }

  li:last-child input {
    height: 14px;
    padding-bottom: 2.5px;
    width: 100%;
  }

  .row:hover {
    width: 500px;
  }
}
</style>
