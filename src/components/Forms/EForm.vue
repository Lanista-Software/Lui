<template>
  <div class="e-form-container bg-white shadow radius-08">
    <div class="e-form">
      <div class="e-form-left">
        <div class="e-form-inline">
          <EGroup label="Ad" />
          <EGroup label="Soyad" />
        </div>
        <EGroup class="e-form-group" label="Telefon" />
        <EGroup class="e-form-group" label="E-mail" />
      </div>
      <div class="e-form-right">
        <div class="e-form-right-area">
          <label for="adress">Adres</label>
          <textarea id="adress" class="bg-dark_01 radius-05" />
          <div class="e-form-right-area-btn">
            <l-button textVariant="text-white" bgVariant="bg-dark" size="sm"
              >Gönder</l-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LButton from "../LButton.vue";
import EGroup from "./EGroup.vue";
export default {
  components: { EGroup, LButton }
};
</script>
<style lang="scss" scoped>
.e-form-container {
  padding: 20px;
  height: 100%;
}
.e-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  &-inline {
    width: 100%;
    div:not(:first-child) {
      margin-top: 20px;
    }
  }
  &-group {
    margin-top: 22px;
  }
  &-right {
    display: grid;
    label {
      display: block;
      font-family: $baseFont;
      margin-bottom: 10px;
    }
    textarea {
      resize: none;
      border: none;
      outline: none;
      width: 100%;
    }
    &-area {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.1fr 1fr;
      height: 100%;
      &-btn {
        width: 20%;
        float: right;
        justify-self: end;
        margin-top: -40px;
        margin-right: 5px;
        button {
          float: right;
        }
      }
    }
  }
}
@media ($lg) {
  .e-form-container {
    padding: 50px;
    max-height: 390px;
  }
  .e-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
    gap: 30px;
    &-inline {
      display: inline-flex;
      width: 100%;
      div:not(:last-child) {
        margin-right: 20px;
      }
      div:last-child {
        margin-top: 0px;
      }
    }
    &-right-area {
      &-btn {
        margin-top: -40px;
        margin-right: 20px;
      }
    }
  }
}
</style>
