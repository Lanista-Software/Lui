<template>
  <div class="header-top-section">
    <div>
      <span>
        <img src="/remixicon/contacts-book-2-fill.svg" />
      </span>
      <span>(0432) 223 24 48</span>
    </div>
    <div>
      <span>
        Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van</span
      >
    </div>
    <div>
      <span>
        Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSection"
};
</script>

<style lang="scss" scoped>
.header-top-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  div {
    justify-self: center;
    align-self: center;
    span {
      font-size: 12px;
    }
  }
}
</style>
