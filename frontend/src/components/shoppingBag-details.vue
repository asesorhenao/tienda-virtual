<template>
  <div class="bfShoppingBagDetails">
    <div class="bfShoppingBagDetails-container">
      <form class="bfShoppingBagDetails-form" action="">
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-name">Nombres:</label>
          <input type="text" v-model="order.user.firstName" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.firstName.$error }" id="bf-name" aria-describedby="bf-name-text" placeholder="Nombres">
          <small id="bf-name-text" v-if="submitted && !$v.order.user.firstName.required" class="form-text bfShoppingBagDetails-errorText invalid-feedback">Nombres requeridos</small>
        </div>
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-lastName">Apellidos:</label>
          <input type="text" v-model="order.user.lastName" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.lastName.$error }" id="bf-lastName" aria-describedby="bf-lastName-text" placeholder="Apellidos">
          <small id="bf-lastName-text" v-if="submitted && !$v.order.user.lastName.required" class="form-text bfShoppingBagDetails-errorText invalid-feedback">Apellidos requeridos</small>
        </div>
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-phone">Celular:</label>
          <input type="text" v-model="order.user.phone" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.phone.$error }" id="bf-phone" aria-describedby="bf-phone-text" placeholder="Celular">
          <small id="bf-phone-text" v-if="submitted && !$v.order.user.phone.required" class="form-text bfShoppingBagDetails-errorText invalid-feedback">Celular requerido</small>
        </div>
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-email">Correo Electrónico</label>
          <input type="email" v-model="order.user.email" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.email.$error }" id="bf-email" aria-describedby="bf-email-text" placeholder="ejemplo@dominio.com">
          <small id="bf-email-text" v-if="submitted && $v.order.user.email.$error" class="form-text bfShoppingBagDetails-errorText invalid-feedback">
            <span v-if="!$v.order.user.email.required">El correo electrónico es requerido</span>
            <span v-if="!$v.order.user.email.email">El correo electrónico es inválido</span>
          </small>
        </div>
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-department">Departamento:</label>
          <input type="text" v-model="order.user.department" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.department.$error }" id="bf-department" aria-describedby="bf-department-text" placeholder="Departamento">
          <small id="bf-department-text" v-if="submitted && !$v.order.user.department.required" class="form-text bfShoppingBagDetails-errorText invalid-feedback">Departamento requeridos</small>
        </div>
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-city">Ciudad:</label>
          <input type="text" v-model="order.user.city" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.city.$error }" id="bf-city" aria-describedby="bf-city-text" placeholder="Ciudad">
          <small id="bf-city-text" v-if="submitted && !$v.order.user.city.required" class="form-text bfShoppingBagDetails-errorText invalid-feedback">Ciudad requerida</small>
        </div>
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-address">Dirección:</label>
          <input type="text" v-model="order.user.address" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.address.$error }" id="bf-address" aria-describedby="bf-address-text" placeholder="Dirección">
          <small id="bf-address-text" v-if="submitted && !$v.order.user.address.required" class="form-text bfShoppingBagDetails-errorText invalid-feedback">Dirección requerida</small>
        </div>
        <div class="form-group bfShoppingBagDetails-formGroup">
          <label for="bf-telephone">Número:</label>
          <input type="text" v-model="order.user.telephone" class="form-control bfShoppingBagDetails-input" :class="{ 'is-invalid': submitted && $v.order.user.telephone.$error }" id="bf-telephone" aria-describedby="bf-telephone-text" placeholder="Teléfono">
          <small id="bf-telephone-text" v-if="submitted && !$v.order.user.telephone.required" class="form-text bfShoppingBagDetails-errorText invalid-feedback">Teléfono requerido</small>
        </div>
        <div class="bfShoppingBagDetails-info">
          <div class="bfShoppingBagDetails-links">
            <button @click.prevent="nextStep" class="btn bfShoppingBagDetails-botton">SEGUIR</button>
            <p>
              <router-link to="/shoppingBag">
                &#60; De vuelta a mi bolsa
              </router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
    
  </div>
</template>
<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  props: {
    gostep: Function,
    order: Object
  },
  data () {
    return {
      submitted: false
    }
  },
  validations: {
    order: {
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
    }
  },
  methods: {
    nextStep (e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.order.user));
      this.gostep(2);
    },
  }
}
</script>
<style lang="scss">
  @import "../styles/settings.scss";
  .bfShoppingBagDetails {
    &-container {
      width: 100%;
      @media screen and (min-width: $bf-tablet) {
        width: 700px;
        margin: 0 auto;
      }
      @media screen and (min-width: $bf-desktop-min) {
        width: 868px;
        margin: 0 auto;
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
      padding: 30px 0;
    }
    &-text {
      width: 100%;
      color: $bf-silver-chalice;
      font-size: 14px;
      margin-bottom: 20px;
      @media screen and (min-width: $bf-tablet) {
        width: 50%;
        margin-bottom: 0;
      }
      @media screen and (min-width: $bf-desktop-min) {
        width: 60%;
      }
    }
    &-recapcha {
      display: flex;
      justify-content: center;
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
        width: 260px;
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
  }
</style>