<template>
  <div>
    <ul>
      <li>
        Anasayfa
        <span />
      </li>
      <li>Ana Sayfa</li>
      <li>Ana Sayfa</li>
      <li>Ana Sayfa</li>
      <li>Ana Sayfa</li>
      <li>Ana Sayfa</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  padding: 0;
  list-style: none;
  margin: 0;
}
li {
  float: left;
  font-size: 14px;
  font-family: $baseFont;
  margin: 0;
  color: $white;
  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: $warning;
    margin-top: 3px;
  }
}
li:not(:last-child) {
  margin-right: 30px;
}
</style>
