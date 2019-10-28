<template>
  <div class="bfLogin">
    <div class="bfLogin-container">
      <h2 class="bfLogin-title">INICIO DE SESIÓN</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group bfLogin-formGroup">
          <label for="bf-email">Correo Electrónico</label>
          <input type="email" v-model="user.email" class="form-control bfLogin-input" :class="{ 'is-invalid': submitted && $v.user.email.$error }" id="bf-email" aria-describedby="bf-email-text" placeholder="ejemplo@dominio.com">
          <small id="bf-email-text" v-if="submitted && $v.user.email.$error" class="form-text bfLogin-errorText invalid-feedback">
            <span v-if="!$v.user.email.required">El correo electrónico es requerido</span>
            <span v-if="!$v.user.email.email">El correo electrónico es inválido</span>
          </small>
        </div>
        <div class="form-group bfLogin-formGroup">
          <label for="bf-password">Contraseña</label>
          <input type="password" v-model="user.password" class="form-control bfLogin-input" :class="{ 'is-invalid': submitted && $v.user.password.$error }" id="bf-password" aria-describedby="bf-password-text">
          <small id="bf-password-text" v-if="submitted && $v.user.password.$error" class="form-text bfLogin-errorText invalid-feedback">
            <span v-if="!$v.user.password.required">La contraseña es requerida</span>
            <span v-if="!$v.user.password.minLength">La contraseña debe ser mayor a 6 caracteres</span>
          </small>
        </div>
        <div class="form-group bfLogin-recapcha">
          <div class="g-recaptcha" data-sitekey="6LdLTKkUAAAAANJMgDGsIOAj40IZeYn9QESLRoBc"></div>
        </div>
        <button type="submit" class="btn bfLogin-botton">INICIO DE SESIÓN</button>
        <div class="bfLogin-links">
          <p><a href="#">¿Se te olvidó tu contraseña?</a></p>
          <p>
            <router-link to="/register">
              ¿No es un miembro? Registro
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  
  methods: {
    handleSubmit (e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  },
  
}
</script>
<style lang="scss">
  @import "../../styles/settings.scss";
  .bfLogin {
    &-container {
      width: 100%;
      padding: 40px 15px;
      @media screen and (min-width: $bf-tablet) {
        width: 370px;
        margin: 0 auto;
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
      }
    }
    &-errorText {
      font-size: 14px;
      color: $bf-pink-salmon;
    }
    &-recapcha {
      display: flex;
      justify-content: center;
    }
    &-botton {
      width: 100%;
      padding: 11px 10px;
      margin: 34px 0;
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
    }
    &-links {
      text-align: center;
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
    }
  }
</style>