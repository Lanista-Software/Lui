<template>
  <div class="e-form">
    <div class="e-form-left">
      <div class="e-form-inline">
        <EGroup label="Ad" />
        <EGroup label="Soyad" />
      </div>
      <EGroup label="Telefon" />
      <EGroup label="E-mail" />
    </div>
    <div class="e-form-right">
      <EGroup label="Adres" />
    </div>
  </div>
</template>

<script>
import EGroup from "./EGroup.vue";
export default {
  components: { EGroup }
};
</script>
<style lang="scss" scoped>
.e-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  &-inline {
    display: inline-flex;
    width: 100%;
    div:not(:last-child) {
      margin-right: 20px;
    }
  }
  &-left {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    div {
      margin-top: 22px;
    }
  }
  &-right {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    margin-top: 22px;
    div {
      margin-top: 22px;
    }
  }
}
</style>
