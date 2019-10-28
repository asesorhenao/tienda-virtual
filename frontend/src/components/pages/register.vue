<template>
  <div class="bfRegister">
    <div class="bfRegister-container">
      <h2 class="bfRegister-title">CREAR UNA CUENTA</h2>
      <form class="bfRegister-form" action="" @submit.prevent="registerSubmit">
        <div class="form-group bfRegister-formGroup">
          <label for="bf-name">Nombres:</label>
          <input type="text" v-model="user.firstName" class="form-control bfRegister-input" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" id="bf-name" aria-describedby="bf-name-text" placeholder="Nombres">
          <small id="bf-name-text" v-if="submitted && !$v.user.firstName.required" class="form-text bfRegister-errorText invalid-feedback">Nombres requeridos</small>
        </div>
        <div class="form-group bfRegister-formGroup">
          <label for="bf-lastName">Apellidos:</label>
          <input type="text" v-model="user.lastName" class="form-control bfRegister-input" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" id="bf-lastName" aria-describedby="bf-lastName-text" placeholder="Apellidos">
          <small id="bf-lastName-text" v-if="submitted && !$v.user.lastName.required" class="form-text bfRegister-errorText invalid-feedback">Apellidos requeridos</small>
        </div>
        <div class="form-group bfRegister-formGroup">
          <label for="bf-email">Correo Electrónico</label>
          <input type="email" v-model="user.email" class="form-control bfRegister-input" :class="{ 'is-invalid': submitted && $v.user.email.$error }" id="bf-email" aria-describedby="bf-email-text" placeholder="ejemplo@dominio.com">
          <small id="bf-email-text" v-if="submitted && $v.user.email.$error" class="form-text bfRegister-errorText invalid-feedback">
            <span v-if="!$v.user.email.required">El correo electrónico es requerido</span>
            <span v-if="!$v.user.email.email">El correo electrónico es inválido</span>
          </small>
        </div>
        <div class="form-group bfRegister-formGroup">
          <label for="bf-email2">Confirmar Correo Electrónico</label>
          <input type="email" v-model="user.confirmEmail" class="form-control bfRegister-input" :class="{ 'is-invalid': submitted && $v.user.confirmEmail.$error }" id="bf-email2" aria-describedby="bf-email2-text" placeholder="ejemplo@dominio.com">
          <small id="bf-email2-text" v-if="submitted && $v.user.confirmEmail.$error" class="form-text bfRegister-errorText invalid-feedback">
            <span v-if="!$v.user.confirmEmail.required">El correo electrónico es requerido</span>
            <span v-if="!$v.user.confirmEmail.email">El correo electrónico es inválido</span>
            <span v-else-if="!$v.user.confirmPassword.sameAsEmail">No coinciden los correos electrónicos</span>
          </small>
        </div>
        <div class="form-group bfRegister-formGroup">
          <label for="bf-password">Contraseña</label>
          <input type="password" v-model="user.password" class="form-control bfRegister-input" :class="{ 'is-invalid': submitted && $v.user.password.$error }" id="bf-password" aria-describedby="bf-password-text">
          <small id="bf-password-text" v-if="submitted && $v.user.password.$error" class="form-text bfRegister-errorText invalid-feedback">
             <span v-if="!$v.user.password.required">La contraseña es requerida</span>
            <span v-if="!$v.user.password.minLength">La contraseña debe ser mayor a 6 caracteres</span>
          </small>
        </div>
        <div class="form-group bfRegister-formGroup">
          <label for="bf-password2">Confirmar Contraseña</label>
          <input type="password" v-model="user.confirmPassword" class="form-control bfRegister-input" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" id="bf-password2" aria-describedby="bf-password2-text">
          <small id="bf-password2-text" v-if="submitted && $v.user.confirmPassword.$error" class="form-text bfRegister-errorText invalid-feedback">
            <span v-if="!$v.user.password.required">La contraseña es requerida</span>
            <span v-if="!$v.user.password.minLength">La contraseña debe ser mayor a 6 caracteres</span>
            <span v-else-if="!$v.user.confirmPassword.sameAsPassword">No coinciden las contraseñas</span>
          </small>
        </div>
        <div class="bfRegister-info">
          <div class="bfRegister-text">
            <span>Al hacer clic en "crear una cuenta", usted acepta que LPP procese sus datos con el fin de responder el mensaje de su formulario de contacto</span>
          </div>
          <div class="form-group bfRegister-recapcha">
            <div class="g-recaptcha" data-sitekey="6LdLTKkUAAAAANJMgDGsIOAj40IZeYn9QESLRoBc"></div>
          </div>
          <div class="bfRegister-links">
            <button type="submit" class="btn bfRegister-botton">CREAR UNA CUENTA</button>
            <p>
              <router-link to="/login">
                Volver al inicio de sesión
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
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        confirmEmail: { required, email, sameAsEmail: sameAs('email') },
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAsPassword: sameAs('password') }
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
}
</script>
<style lang="scss">
  @import "../../styles/settings.scss";
  .bfRegister {
    &-container {
      width: 100%;
      padding: 48px 15px 0 15px;
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