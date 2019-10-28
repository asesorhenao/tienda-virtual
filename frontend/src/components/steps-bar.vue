<template>
  <div class="bfStepsBar">

    <div class="bfStepsBar-container">
      <div class="d-flex justify-content-center align-items-center">
        
        <div class="bfStepsBar-step bfStepsBar-active">
          <span class="bfStepsBar-circle bfStepsBar-first-step">1</span>
          <span class="bfStepsBar-label bfStepsBar-hom">TUS DETALLES</span>
        </div>

        <div class="bfStepsBar-step" :class="{'bfStepsBar-active' : stepsObj.step >= 2}">
          <hr class="bfStepsBar-separator" />
          <span class="bfStepsBar-circle">2</span>
          <span class="bfStepsBar-label bfStepsBar-hom">PAGO</span>
        </div>

        <div class="bfStepsBar-step" :class="{'bfStepsBar-active' : stepsObj.step >= 3}">
          <hr class="bfStepsBar-separator" />
          <span class="bfStepsBar-circle">3</span>
          <span class="bfStepsBar-label bfStepsBar-hom">CONFIRMACIÓN</span>
        </div>
       
      </div>

      <div class="bfStepsBar-center-content">
        <div class="bfStepsBar-content" v-if="stepsObj.step === 1">
          <h3 class="bfStepsBar-title">TUS DETALLES</h3>
          <shoppingBagDetails v-bind:gostep="goToStep" :order="order" />
        </div>
        <div class="bfStepsBar-content" v-if="stepsObj.step === 2">
          <paymentMethod v-bind:gostep="goToStep" :order="order" />
        </div>
        <div class="bfStepsBar-content" v-if="stepsObj.step === 3">
          <h3 class="bfStepsBar-title">CONFIRMACIÓN</h3>
          <shoppingBagConfirmation v-bind:gostep="goToStep" :order="order" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  import bag from '../data/bag.json';
  import shoppingBagDetails from './shoppingBag-details';
  import paymentMethod from './payment-method';
  import shoppingBagConfirmation from './shoppingBag-confirmation';
  export default {
    components: {
      shoppingBagDetails,
      paymentMethod,
      shoppingBagConfirmation
    },
    data() {
      return {
        stepsObj: {step: 1},
        order: {
          orderId: 'T4565567564',
          user: {
            firstName: 'Nombres',
            lastName: 'Apellidos',
            email: 'correo electrónico',
            phone: 'Celular',
            telephone: 'Teléfono',
            address: 'Dirección',
            city: 'Ciudad',
            department: 'Departamento'
          },
          total: this.getTotal() + 5.99, // products + shipping
          subTotal: this.getTotal(),
          shippingTotal: 5.99,
          paymentMethod: {
            card: 'VISA',
            number: '000111',
            month: 'Septiembre',
            year: '2020',
            cvn: '234'
          }
        }
      }
    },
    methods: {
      goToStep: function(nextStep) {
        this.stepsObj.step = nextStep
      },
      getTotal: function(){
        let total = 0;
        for (let i = 0; i < bag.length; i++){
          total += bag[i].price;
        }
        return total;
      },
      
    }
  };
</script>

<style lang="scss">
  @import "../styles/settings.scss";
  .bfStepsBar {
    &-botton {
      padding: 7px 10px;
      background-color: $bf-white;
      border: 1px solid $bf-pink-salmon;
      border-radius: 0;
      color: $bf-pink-salmon;
      height: 48px;
      &:hover, 
      &:focus,
      &:active {
        background-color: $bf-pink-salmon;
        color: $bf-white;
        outline: none;
        box-shadow: none;
      }
    }
  }
</style>


<style lang="scss" scoped>
  @import "../styles/settings.scss";
  .bfStepsBar {

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
    
    // &-center-content{
    //   margin: 10px;
    // }
    &-title {
      text-align: center;
    }
    &-step {
      text-align: center;
      cursor: pointer;
    }

    &-circle{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: $bf-white;
      background-color: $bf-silver-chalice;
      display: inline-block;
      z-index: 5;
      position: relative;
      text-align: center;
      font-size: 26px;
      font-weight: bold;
    }
    &-active {
      color: $bf-pink-salmon;
      > span.bfStepsBar-circle {
        background-color: $bf-pink-salmon;
      }
    }
    &-label{
      margin-top: 5px;
      display: block;
    }
    &-first-step {
      margin-top: 4px;
    }
    &-separator{
      z-index: 4;
      border: 2px solid $bf-alto;
      margin: 0 50% 0 calc(-50% - 10px);
      top: 20px;
      position: relative;
    }
    &-background-line{
      background-color: $bf-river-bed;
    }
    &-content {
      margin-top: 20px;
    }
    &-container{
      margin: 0 20px 20px 20px;
      //width: 100%;
      @media screen and (min-width: $bf-tablet) {
        width: 750px;
        margin: 0 auto;
      }
      @media screen and (min-width: $bf-desktop-min) {
        width: 868px;
        margin: 0 auto;
      }
    }
  }
</style>
