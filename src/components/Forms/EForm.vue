<template>
  <div class="e-form-container bg-white shadow radius-08">
    <form @submit="submit">
      <div class="e-form">
        <div class="e-form-left">
          <div class="e-form-inline">
            <EGroup v-model="$v.form.name.$model" label="Ad" />
            <EGroup v-model="$v.form.surname.$model" label="Soyad" />
          </div>
          <EGroup
            v-model="$v.form.phone.$model"
            class="e-form-group"
            label="Telefon"
          />
          <EGroup
            v-model="$v.form.email.$model"
            class="e-form-group"
            label="E-mail"
          />
        </div>
        <div class="e-form-right">
          <div class="e-form-right-area">
            <label for="adress">Adres</label>
            <textarea
              id="adress"
              v-model="form.adress"
              class="bg-dark_01 radius-05"
            />
            <div class="e-form-right-area-btn">
              <l-button
                text-variant="text-white"
                bg-variant="bg-dark"
                size="sm"
                type="submit"
                >Gönder</l-button
              >
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import LButton from "../LButton.vue";
import EGroup from "./EGroup.vue";
export default {
  components: { EGroup, LButton },
  validations: {
    form: {
      name: {
        required
      },
      surname: {
        required
      },
      phone: {
        required
      },
      email: {
        required
      }
    }
  },
  data() {
    return {
      form: {
        name: null,
        surname: null,
        phone: null,
        email: null,
        adress: null
      }
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        // this.$fire.firestore.collection("requests").add(this.form);
        this.$v.form.$reset();
        this.form = {
          name: "",
          surname: "",
          phone: "",
          email: "",
          adress: ""
        };
      } else {
        alert("Form has strong");
      }
    }
  }
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
        position: relative;
        top: -10px;
        right: 10px;
      }
    }
  }
}
</style>
