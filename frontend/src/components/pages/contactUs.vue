<template>
  <div class="bfContactUs">
    <div class="container">
      <div class="bfContactUs-container">
        <div class="bfContactUs-containerText">
          <div class="bfContactUs-contactText">
            <h2>SERVICIO AL CLIENTE</h2>
            <h4>Línea de ayuda gratuita</h4>
            <span><img src="../../assets/WhatsApp_Hover_Icon.svg" alt=""> 0 200 5803020</span>
            <p>Lunes - Viernes 9 AM - 4 PM</p>
          </div>
          <div class="bfContactUs-contactText">
            <h2>EMAIL</h2>
            <h4>info@bellafashion.com</h4>
          </div>
          <div class="bfContactUs-contactText">
            <h2>CORRESPONDENCIA</h2>
            <h4>BellaFashion Shop Zona 12, 54 Ciudad de Guatemala / Guatemala</h4>
          </div>
        </div>
        <div class="bfContactUs-containerForm">
          <h2 class="bfContactUs-title">TU MENSAJE PARA BELLAFASHION</h2>
          <form class="bfContactUs-form" action="" @submit.prevent="registerSubmit">
            <div class="form-group bfContactUs-formGroup">
              <label for="bf-name">Nombres:</label>
              <input type="text" v-model="user.firstName" class="form-control bfContactUs-input" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" id="bf-name" aria-describedby="bf-name-text" placeholder="Nombres">
              <small id="bf-name-text" v-if="submitted && !$v.user.firstName.required" class="form-text bfContactUs-errorText invalid-feedback">Nombres requeridos</small>
            </div>  
            <div class="form-group bfContactUs-formGroup">
              <label for="bf-email">Correo Electrónico</label>
              <input type="email" v-model="user.email" class="form-control bfContactUs-input" :class="{ 'is-invalid': submitted && $v.user.email.$error }" id="bf-email" aria-describedby="bf-email-text" placeholder="ejemplo@dominio.com">
              <small id="bf-email-text" v-if="submitted && $v.user.email.$error" class="form-text bfContactUs-errorText invalid-feedback">
                <span v-if="!$v.user.email.required">El correo electrónico es requerido</span>
                <span v-if="!$v.user.email.email">El correo electrónico es inválido</span>
              </small>
            </div>
            <div class="form-group bfContactUs-formGroup bfContactUs-formGroup--fullWith">
              <label for="bf-review">Comentario:</label>
              <textarea v-model="user.review" class="form-control bfContactUs-input" :class="{ 'is-invalid': submitted && $v.user.review.$error }" id="bf-review" rows="3"></textarea>
              <small id="bf-review-text" v-if="submitted && !$v.user.review.required" class="form-text bfContactUs-errorText invalid-feedback">Comentario requerido</small>
            </div>  
            <div class="bfContactUs-info">
              <div class="bfContactUs-text">
                <span>Al hacer clic en "enviar", usted acepta que LPP procese sus datos con el fin de responder su mensaje de formulario de contacto.</span>
              </div>
              <div class="form-group bfContactUs-recapcha">
                <div class="g-recaptcha" data-sitekey="6LdLTKkUAAAAANJMgDGsIOAj40IZeYn9QESLRoBc"></div>
              </div>
            </div>
            <div class="bfContactUs-links">
              <button type="submit" class="btn bfContactUs-botton">ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
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
        email: '',
        review: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
        firstName: { required },
        email: { required, email },
        review: { required }
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
  .bfContactUs {
    &-container {
      padding: 18px 0 0;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
      }
    }
    &-containerText {
      width: 100%;
      margin-bottom: 48px;
      @media screen and (min-width: $bf-tablet) {
       width: 40%;
       margin-bottom: 0;
       margin-right: 20px;
      }
    }  
    &-contactText {
      margin-bottom: 48px;
      & h2 {
        margin-bottom: 22px;
        padding-top: 5px;
        font-size: 24px;
        color: $bg-mine-shaft;
        @media screen and (min-width: $bf-tablet) {
          padding-top: 0;
        }
      }
      & span {
        display: flex;
        margin-bottom: 11px;
        align-items: center;
        font-size: 24px;
        color: $bf-pink-salmon;
      }
      & h4 {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
        color: $bf-pink-salmon;
      }
      & img {
        width: 23px;
        margin-right: 10px;
      }
      & p {
        font-size: 14px;
        color: $bf-silver-chalice;
        margin-bottom: 0;
      }
    }
    &-containerForm {
      width: 100%;
      @media screen and (min-width: $bf-tablet) {
       width: 60%;
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
      &--fullWith {
        @media screen and (min-width: $bf-tablet) {
          width: 100%;
        }    
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
      padding: 38px 0 0;
    }
    &-text {
      width: 100%;
      color: $bf-silver-chalice;
      font-size: 14px;
      margin-bottom: 20px;
      @media screen and (min-width: $bf-desktop-min) {
        width: 45%;
      }
    }
    &-recapcha {
      width: 100%;
      display: flex;
      justify-content: center;
      @media screen and (min-width: $bf-desktop-min) {
        width: 50%;
      }
    }
    &-botton {
      width: 100%;
      padding: 11px 10px;
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
      margin: 34px 0 0;
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
        text-align: right; 
      }
    }
  }
</style>