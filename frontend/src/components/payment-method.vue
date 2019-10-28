<template>
  <div class="bfPaymentMethod">

      <h3 class="bfPaymentMethod-title">MÉTODO DE PAGO</h3>
      <div class="bfPaymentMethod-flex-contariner">
        <div class="bfPaymentMethod-colfm-50 bfPaymentMethod-colft-30 bfPaymentMethod-colfd-33 bfPaymentMethod-left-m mt-3">
          <span class="bfPaymentMethod-span-checkbox" @click="ccType"></span>
          <img src="../assets/Visa_Icon.png" class="bfPaymentMethod-img ml-2" alt="">
        </div>
        <div class="bfPaymentMethod-colfm-50 bfPaymentMethod-colft-30 bfPaymentMethod-colfd-33 bfPaymentMethod-left-m mt-3">
          <span class="bfPaymentMethod-span-checkbox" @click="ccType"></span>
          <img src="../assets/PayPal_Icon.png" class="bfPaymentMethod-img ml-2" alt="">
        </div>
        <div class="bfPaymentMethod-colfm-100 bfPaymentMethod-colft-40 bfPaymentMethod-colfd-33 bfPaymentMethod-left-m mt-3">
          <span class="bfPaymentMethod-span-checkbox" @click="ccType"></span>
          <img src="../assets/Maestro_Icon.png" class="bfPaymentMethod-img ml-2 mr-3" alt="">
          <img src="../assets/Mastercard.png" class="bfPaymentMethod-img" alt="">
        </div>
      </div>
      <div class="bfPaymentMethod-flex-container bfPaymentMethod-main-form mt-4">
        <div class="row">
          <div class="col-12">
            <p>DETALLES DE PAGO <img src="../assets/lock.png" class="bfPaymentMethod-img" alt=""></p>
                
            <div class="bfPaymentMethod-formGroup">
              <label for="bf-card">Número de Tarjeta:</label>
              <input type="text" id="bf-card" class="form-control bfPaymentMethod-input" 
                v-model="order.paymentMethod.card"
                :class="{ 'is-invalid': $v.order.paymentMethod.card.$error }">
            </div>

            <div class="bfPaymentMethod-formGroup">
              <label for="bf-month">Fecha de caducidad:</label>
              <div>
                <div class="bfPaymentMethod-col-47 bfPaymentMethod-mr-4 position-relative">
                  <select class="bfPaymentMethod-select" name="bf-month" id="bf-month" 
                    v-model="order.paymentMethod.month"
                    :class="{ 'is-invalid': $v.order.paymentMethod.month.$error }">
                    <option value="">MES</option>
                    <option v-for="month  in months" :key="month" :value="month">{{month}}</option>
                  </select>
                  <span class="bfPaymentMethod-arrow" v-if="!$v.order.paymentMethod.month.$error"></span>
                </div>

                <div class="bfPaymentMethod-col-47 position-relative">
                  <select class="bfPaymentMethod-select" name="bf-year" id="bf-year" 
                    v-model="order.paymentMethod.year"
                    :class="{ 'is-invalid': $v.order.paymentMethod.year.$error }">
                    <option value="">AÑO</option>
                    <option v-for="year in getYears()" :key="year" :value="year">{{year}}</option>
                  </select>
                  <span class="bfPaymentMethod-arrow" v-if="!$v.order.paymentMethod.year.$error"></span>
                </div>
              </div>
            </div>

            <div class="bfPaymentMethod-formGroup">
              <label for="bf-cvn">CVN:</label>
              <div>
                <div class="bfPaymentMethod-col-70 bfPaymentMethod-mr-3">
                  <input type="text" id="bf-cvn" class="form-control bfPaymentMethod-input" 
                    v-model="order.paymentMethod.cvn"
                    :class="{ 'is-invalid': $v.order.paymentMethod.cvn.$error }">
                </div>
                <div class="bfPaymentMethod-col-20">
                  <img src="../assets/cvn.png" class="bfPaymentMethod-img" alt="">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="bfPaymentMethod-border-t mt-4 pt-2 d-flex">
        <div class="bfPaymentMethod-colfm-50 bfPaymentMethod-colft-80 bfPaymentMethod-colfd-80 bfPaymentMethod-label">Shipping:</div>
        <div class="bfPaymentMethod-colfm-50 bfPaymentMethod-colft-20 bfPaymentMethod-colfd-20 bfPaymentMethod-shipping">$ {{order.shippingTotal}}</div>
      </div>
      <div class="bfPaymentMethod-border-b pb-2 d-flex">
        <div class="bfPaymentMethod-colfm-50 bfPaymentMethod-colft-80 bfPaymentMethod-colfd-80 bfPaymentMethod-label">Total:</div>
        <div class="bfPaymentMethod-colfm-50 bfPaymentMethod-colft-20 bfPaymentMethod-colfd-20 bfPaymentMethod-total">$ {{order.total}}</div>
      </div>

      <div class="bfPaymentMethod-info">
        <div class="bfPaymentMethod-links">
          <button type="button" v-on:click="confirmPayment()" class="btn bfPaymentMethod-button">COMPRAR</button>
          <p class="bfPaymentMethod-hom bfPaymentMethod-conditions text-right">
            Al crear una cuenta, usted acepta nuestros términos y condiciones.
          </p>
          <span class="bfPaymentMethod-link" v-on:click="gostep(1)">&#x3C; Volver a los Detalles</span>
        </div>
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
  data() {
    return {
      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    }
  },
  validations: {
    order: {
      paymentMethod: {
        card: { required },
        month: { required },
        year: { required },
        cvn: { required }
      }
    }
  },
  methods: {
    getYears: function(){
      const years = [];
      let currentYear = new Date().getFullYear();
      for(let year = currentYear; year < (currentYear + 10); year++){
        years.push(year);
      }
      return years;
    },
    ccType: function(event){
      const activeElements = document.getElementsByClassName('bfPaymentMethod-span-checkbox-active');
      const currentTarget = event.target;
      for(let i = 0; i < activeElements.length; i++){
        activeElements[i].classList.remove('bfPaymentMethod-span-checkbox-active');
      }
      currentTarget.classList.add("bfPaymentMethod-span-checkbox-active");
    },
    confirmPayment: function(){
      this.$v.$touch();
      if (this.$v.$invalid) {
          return;
      }
      this.gostep(3);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";
.bfPaymentMethod {
  &-title{
    text-align: center;
  }
  &-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px 0;
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
  &-button {
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
      width: 150px;
      margin-bottom: 0;
    }
  }
  &-arrow {
    position: absolute;  
    right: 15px;
    top: 29%;
    &::before {
      transition: all .5s;
      vertical-align: middle;
      content: url('../assets/Arrow_Icon.svg');
      width: 15px;
      height: 15px;
      display: inline-block;
      transform: rotate(-90deg);
    }
  }
  &-link {
    cursor: pointer;
    align-self: center;
    &:hover {
      text-decoration: underline;
    }
  }
  &-border-b {
    border-bottom: 1px solid $bg-mine-shaft;
  }
  &-border-t {
    border-top: 1px solid $bg-mine-shaft;
  }

  &-main-form{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  &-form-container {
    margin-top: 25px;
    text-align: left;
    width: 100%;
    display: inline-block;
  }
  &-formGroup {
    //min-height: 105px;
    margin-bottom: 20px;
    & label {
      color: $bf-silver-chalice;
      font-size: 16px;
    }
  }
  &-label {
    align-self: flex-end;
    color: $bf-silver-chalice;
    font-size: 16px;
  }
  &-shipping {
    text-align: right;
    font-size: 24px;
  }
  &-conditions{
    color: $bf-silver-chalice;
    font-size: 14px;
    margin: 0;
    align-self: center;
  }
  &-total {
    text-align: right;
    font-size: 30px;
    font-weight: bold;
  }
  &-select {
    background-color: transparent;
    padding: 11px 20px;
    border: 1px solid #A8A8A8;
    border-radius: 0;
    font-size: 16px;
    color: $bf-silver-chalice;
    width: 100%;
    
    &:focus {
      color: $bg-mine-shaft;
      background-color: $bf-white;
      border-color: $bf-froly;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(240,98,113,.25);
    }
    &.is-invalid{
      border-color: #dc3545;
      background-image: url('../assets/x.svg');
      background-repeat: no-repeat;
      background-position: center right calc(.1375em + .1875rem);
      background-size: calc(.75em + .375rem) calc(.75em + .375rem);
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
    &.is-invalid{
      border-color: #dc3545;
    }
  }
  &-span-checkbox{
    width: 15px;
    height: 15px;
    display: inline-block;
    border: 1px solid #212D50;
    &-active{
      background-color: $bf-pink-salmon;
    }
  }
  &-img {
    max-width: 69px;
  }

  &-flex-contariner {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }
  /* Mobile */
  @media screen and (max-width: $bf-mobile-max) {
    &-label {
      text-align: left;
    }
    &-left-m {
      text-align: left;
    }
    &-colfm-50{
      flex: 0 0 50%;
      max-width: 50%;
    }
    &-colfm-100{
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  /* Tablet */
  @media screen and (min-width: $bf-tablet) {
    &-label {
      text-align: right;
    }
    &-main-form {
      width: 60%;
    }
    &-flex-contariner{
      width: 80%;
    }
    &-colft-20{
      flex: 0 0 20%;
      max-width: 20%;
    }
    &-colft-30{
      flex: 0 0 30%;
      max-width: 30%;
    }
    &-colft-33{
      flex: 0 0 33%;
      max-width: 33%;
    }
    &-colft-40{
      flex: 0 0 40%;
      max-width: 40%;
    }
    &-colft-50{
      flex: 0 0 50%;
      max-width: 50%;
    }
    &-colft-60{
      flex: 0 0 60%;
      max-width: 60%;
    }
    &-colft-80{
      flex: 0 0 80%;
      max-width: 80%;
    }
  }

  /* Desktop */
  @media screen and (min-width: $bf-desktop-min) {
    &-label {
      text-align: right;
    }
    &-main-form {
      width: 50%;
    }
    &-flex-contariner{
      width: 80%;
    }
    &-colfd-20{
      flex: 0 0 20%;
      max-width: 20%;
    }
    &-colfd-25{
      flex: 0 0 25%;
      max-width: 25%;
    }
    &-colfd-30{
      flex: 0 0 30%;
      max-width: 30%;
    }
    &-colfd-33{
      flex: 0 0 33%;
      max-width: 33%;
    }
    &-colfd-40{
      flex: 0 0 40%;
      max-width: 40%;
    }
    &-colfd-60{
      flex: 0 0 60%;
      max-width: 60%;
    }
    &-colfd-75{
      flex: 0 0 75%;
      max-width: 75%;
    }
    &-colfd-80{
      flex: 0 0 80%;
      max-width: 80%;
    }
  }

  &-mr-3{
    margin-right: 3%;
  }
  &-mr-4{
    margin-right: 4%;
  }
  &-col-20{
    width: 20%;
    display: inline-block;
  }
  &-col-47{
    width: 47%;
    display: inline-block;
  }
  &-col-70{
    width: 75%;
    display: inline-block;
  }
  @media screen and (min-width: $bf-desktop-min) {
    &-hod{
      display: none !important;
    }
  }
  @media screen and (min-width: $bf-tablet) and (max-width: $bf-tablet-max) {
    &-hot{
      display: none !important;
    }
  }
  @media screen and (max-width: $bf-mobile-max) {
    &-hom{
      display: none !important;
    }
  }
}

</style>




