<template>
  <div class="bfAddressBook">
    <div class="bfAddressBook-container container">
      <div class="bfAddressBook-dashboard">
        <dashboard />
      </div>
      <div class="bfAddressBook-content">
        <h3>DIRECTORIO</h3>
        <form class="bfAddressBook-form" action="" @submit.prevent="registerSubmit">
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-name">Nombres:</label>
            <input type="text" v-model="user.firstName" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" id="bf-name" aria-describedby="bf-name-text" placeholder="Nombres">
            <small id="bf-name-text" v-if="submitted && !$v.user.firstName.required" class="form-text bfAddressBook-errorText invalid-feedback">Nombres requeridos</small>
          </div>
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-lastName">Apellidos:</label>
            <input type="text" v-model="user.lastName" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" id="bf-lastName" aria-describedby="bf-lastName-text" placeholder="Apellidos">
            <small id="bf-lastName-text" v-if="submitted && !$v.user.lastName.required" class="form-text bfAddressBook-errorText invalid-feedback">Apellidos requeridos</small>
          </div>
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-phone">Celular:</label>
            <input type="text" v-model="user.phone" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.phone.$error }" id="bf-phone" aria-describedby="bf-phone-text" placeholder="Celular">
            <small id="bf-phone-text" v-if="submitted && !$v.user.phone.required" class="form-text bfAddressBook-errorText invalid-feedback">Celular requerido</small>
          </div>
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-telephone">Teléfono:</label>
            <input type="text" v-model="user.telephone" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.telephone.$error }" id="bf-telephone" aria-describedby="bf-telephone-text" placeholder="Teléfono">
            <small id="bf-telephone-text" v-if="submitted && !$v.user.telephone.required" class="form-text bfAddressBook-errorText invalid-feedback">Teléfono requerido</small>
          </div>
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-email">Correo Electrónico</label>
            <input type="email" v-model="user.email" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.email.$error }" id="bf-email" aria-describedby="bf-email-text" placeholder="ejemplo@dominio.com">
            <small id="bf-email-text" v-if="submitted && $v.user.email.$error" class="form-text bfAddressBook-errorText invalid-feedback">
              <span v-if="!$v.user.email.required">El correo electrónico es requerido</span>
              <span v-if="!$v.user.email.email">El correo electrónico es inválido</span>
            </small>
          </div>
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-address">Dirección:</label>
            <input type="text" v-model="user.address" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.address.$error }" id="bf-address" aria-describedby="bf-address-text" placeholder="Dirección">
            <small id="bf-address-text" v-if="submitted && !$v.user.address.required" class="form-text bfAddressBook-errorText invalid-feedback">Dirección requerida</small>
          </div>
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-city">Ciudad:</label>
            <input type="text" v-model="user.city" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.city.$error }" id="bf-city" aria-describedby="bf-city-text" placeholder="Ciudad">
            <small id="bf-city-text" v-if="submitted && !$v.user.city.required" class="form-text bfAddressBook-errorText invalid-feedback">Ciudad requerida</small>
          </div>
          <div class="form-group bfAddressBook-formGroup">
            <label for="bf-department">Departamento:</label>
            <input type="text" v-model="user.department" class="form-control bfAddressBook-input" :class="{ 'is-invalid': submitted && $v.user.department.$error }" id="bf-department" aria-describedby="bf-department-text" placeholder="Departamento">
            <small id="bf-department-text" v-if="submitted && !$v.user.department.required" class="form-text bfAddressBook-errorText invalid-feedback">Departamento requeridos</small>
          </div>
          <div class="form-group bfAddressBook-checkbox">
            <input type="checkbox" class="bfAddressBook-check" id="bf-checkbox" >
            <label for="bf-checkbox">Dirección predeterminada</label>
          </div>
          <div class="form-group bfAddressBook-buttons">
            <button type="submit" class="btn bfAddressBook-botton">AÑADIR</button>
            <button type="button" class="btn bfAddressBook-botton">CANCELAR</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
  import dashboard from '../dashboard';
  import data from "../../data/myAcount.json";
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
       user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        telephone: '',
        address: '',
        city: '',
        department: ''
      },
      submitted: false
      };
    },
    components: {
      dashboard
    },
    validations: {
    user: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        phone: { required },
        telephone: { required },
        address: { required },
        city: { required },
        department: { required }
      }
    },
    methods: {
    registerSubmit (e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  }
  };
</script>
<style lang="scss" scoped>
  @import "../../styles/settings.scss";

  .bfAddressBook {
    &-container {
      padding: 30px 15px;
      @media screen and (min-width: $bf-tablet) {
        padding: 48px 0 20px;
        display: flex;
      }
    }
    &-dashboard {
      width: 100%;
      margin-bottom: 48px;
      @media screen and (min-width: $bf-tablet) {
        width: 30%;
        margin-bottom: 0;
      }
    }
    &-content {
      width: 100%;
      @media screen and (min-width: $bf-tablet) {
        width: 70%;
      }
      & h3 {
        font-size: 36px;
        color: $bg-mine-shaft;
        margin-bottom: 28px;
        text-align: center;
        @media screen and (min-width: $bf-tablet) {
          text-align: left;
        }
      }
    }
    &-form {
      width: 100%;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
    &-title {
      margin-bottom: 45px;
      font-size: 26px;
      text-align: center;
      color: $bg-mine-shaft;
    }
    &-input {
      background-color: transparent;
      padding: 23px 22px;
      border: 1px solid $bf-silver-chalice;
      border-radius: 0;
      font-size: 14px;
      color: $bg-mine-shaft;
      &:focus {
        color: $bg-mine-shaft;
        background-color: $bf-white;
        border-color: $bf-froly;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(240,98,113,.25);
      }
    }
    &-formGroup {
      min-height: 105px;
      margin-bottom: 5px;
      & label {
        color: $bf-silver-chalice;
        font-size: 16px;
      }
       @media screen and (min-width: $bf-tablet) {
        width: 48%;
      }
    }
    &-errorText {
      font-size: 14px;
      color: $bf-pink-salmon;
    }
    &-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      border-top: solid 1px $bg-mine-shaft;
      margin-top: 28px;
      padding: 38px 0;
    }
    &-botton {
      width: 100%;
      padding: 11px 10px;
      margin-bottom: 34px;
      background-color: $bf-white;
      border: 1px solid $bf-pink-salmon;
      border-radius: 0;
      color: $bf-pink-salmon;
      &:hover, 
      &:focus,
      &:active {
        background-color: $bf-pink-salmon;
        color: $bf-white;
        outline: none;
        box-shadow: none;
      }
       @media screen and (min-width: $bf-tablet) {
        width: 140px;
        margin-bottom: 0;
      }
    }
    &-links {
      width: 100%;
      text-align: center;
      margin: 34px 0;
      & a {
        color: $bg-mine-shaft;
        font-size: 14px;
        text-decoration: underline;
        &:hover,
        &:active,
        &:focus {
          color: $bf-froly;
        }
      }
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        text-align: left;
      }
    }
    &-checkbox {
      width: 100%;
      display: flex;
      align-items: center;
      color: $bf-silver-chalice;
      & input[type="checkbox"] {
        display: none;
      }
      & input[type="checkbox"]:checked + label:after {
        content: '';
        position: absolute;
        left: 0;
        top: 6px;
        box-sizing: border-box;
        display: block;
      }
      & input[type="checkbox"]:checked + label:after {
        width: 16px;
        height: 8px;
        border-left: 3px solid $bf-pink-salmon;
        border-bottom: 3px solid $bf-pink-salmon;
        transform: rotate(-45deg);
      }
      & label {
        position: relative;
        padding-left: 20px;
        color: $bf-silver-chalice;
        font-size: 16px;
        cursor: pointer;
        &::before {
          content: '';
          width: 16px;
          height: 16px;
          left: 0;
          top: 4px;
          position: absolute;
          display: inline-block;
          border: 1px solid $bf-pink-salmon;
        }
      }
    }
  }
</style>