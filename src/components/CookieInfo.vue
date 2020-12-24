<template>
  <div class="container cookie-info">
    <div class="row">
      <div class="cookie-info-left">
        <p class="text-dark_09">
          <slot />
        </p>
      </div>
      <div class="cookie-info-right">
        <l-button
          bgVariant="bg-none"
          borderVariant="border-primary"
          textVariant="text-dark"
          size="sm"
        >
          Kabul etme
        </l-button>
        <l-button
          bgVariant="bg-primary"
          borderVariant="border-primary"
          textVariant="text-white"
          size="sm"
        >
          Kabul et
        </l-button>
      </div>
    </div>
  </div>
</template>
<script>
import LButton from './LButton.vue'
export default {
  components: { LButton },
  name: 'CookieInfo',
}
</script>
<style lang="scss" scoped>
.cookie-info {
  background-color: $light;
  border-radius: 8px;
  padding: 2.5rem 1.3rem;
}
.cookie-info-right {
  display: inline-flex;
  column-gap: 5px;
  margin-top: 10px;
}

@media screen and ($xss) {
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 5px;
  }
  .cookie-info-left p {
    text-align: center;
  }
}
@media screen and ($md) {
  .row {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-items: center;
  }
  .cookie-info-left {
    width: 70%;
  }
  .cookie-info-right {
    justify-self: center;
    margin-top: 0px;
  }
  .cookie-info-left p {
    text-align: justify;
  }
}

@media screen and ($lg) {
  .cookie-info-left {
    width: 75%;
  }
}

@media screen and ($xl) {
  .cookie-info-left {
    width: 75%;
  }
  .cookie-info-right {
    width: 25%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
