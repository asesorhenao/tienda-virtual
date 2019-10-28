<template>
  <div class="bfShoppingBagConfirmation">
    <div class="bfShoppingBagConfirmation-container">
      <h2 class="bfShoppingBagConfirmation-title">MI BOLSA DE COMPRAS</h2>
      <div class="bfShoppingBagConfirmation-content">
        <div class="bfShoppingBagConfirmation-info">
          <div class="bfShoppingBagConfirmation-headings">
            <p class="bfShoppingBagConfirmation-headingProduct">Productos</p>
            <p class="bfShoppingBagConfirmation-headingDetails">Detalles</p>
            <p class="bfShoppingBagConfirmation-headingPrice">Precio</p>
          </div>
          <div class="bfShoppingBagConfirmation-item" v-for="(item, index) in items" :key="index">
            <div class="bfShoppingBagConfirmation-contentProduct">
              <img class="bfShoppingBagConfirmation-image" :src="item.image" :alt="item.altText">
              <h3 class="bfShoppingBagConfirmation-imageTitle">{{item.title}}</h3>
            </div>
            <div class="bfShoppingBagConfirmation-contentDetails">
              <p class="bfShoppingBagConfirmation-color">Color: <span class="bfShoppingBagConfirmation-colorValue" :style="{background: item.color[0]}"></span> {{item.color[1]}}</p>
              <p class="bfShoppingBagConfirmation-size">Talla: {{item.size}}</p>
              <p class="bfShoppingBagConfirmation-amount">Cantidad: {{item.amount}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-contentPrice">
              <p class="bfShoppingBagConfirmation-price">$ {{item.price}}</p>
            </div>
          </div>
          <div class="bfShoppingBagConfirmation-confirmation">
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Nombres:</label>
              <p>{{order.user.firstName}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Apellidos:</label>
              <p>{{order.user.lastName}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Celular:</label>
              <p>{{order.user.phone}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Teléfono:</label>
              <p>{{order.user.telephone}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Correo Electrónico:</label>
              <p>{{order.user.email}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Dirección:</label>
              <p>{{order.user.address}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Ciudad:</label>
              <p>{{order.user.city}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-confirmationValue">
              <label>Departamento:</label>
              <p>{{order.user.department}}</p>
            </div>
          </div>
          <div class="bfShoppingBagConfirmation-payment">
            <div class="bfShoppingBagConfirmation-paymentValue">
              <label>Terjeta:</label>
              <p>{{order.paymentMethod.card}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-paymentValue">
              <label>Número de Terjeta:</label>
              <p>{{order.paymentMethod.number}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-paymentValue">
              <label>Mes:</label>
              <p>{{order.paymentMethod.month}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-paymentValue">
              <label>Año:</label>
              <p>{{order.paymentMethod.year}}</p>
            </div>
            <div class="bfShoppingBagConfirmation-paymentValue">
              <label>CVN:</label>
              <p>{{order.paymentMethod.cvn}}</p>
            </div>
          </div>
          <div class="bfShoppingBagConfirmation-values">
            <div class="bfShoppingBagConfirmation-value">
              <p>Subtotal:</p>
              <span class="bfShoppingBagConfirmation-total">$ {{parseFloat(total).toFixed(2)}}</span>
            </div>
            <div class="bfShoppingBagConfirmation-value">
              <p>Envío:</p>
              <span class="bfShoppingBagConfirmation-total">$ 15.00</span>
            </div>
            <div class="bfShoppingBagConfirmation-value">
              <p>Total:</p>
              <span class="bfShoppingBagConfirmation-totalValue">$ {{parseFloat(total + 15.00).toFixed(2)}}</span>
            </div>
          </div>
          <div class="bfShoppingBagConfirmation-links">
            <router-link to="/shoppingBagCongrats" class="bfShoppingBagConfirmation-btnAdd">
              FINALIZAR COMPRA
            </router-link>
            <a href="#" v-on:click="gostep(2)"  class="bfShoppingBagConfirmation-link">
              &#60; De vuelta al pago
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from "../data/bag.json";
  export default {
    props: {
      gostep: Function,
      order: Object
    },
    data() {
      return {
        items: data,
        total: 0
      };
    },
    methods: {
      
    },
    mounted () {
      this.total = 0;
      this.items.forEach(element => {
        this.total += element.price;
      });
    }
  };
</script>
<style lang="scss" scoped>
  @import "../styles/settings.scss";

  .bfShoppingBagConfirmation {
    &-container {
      padding: 30px 15px 0;
    }
    &-title {
      color: $bg-mine-shaft;
      font-size: 30px;
      text-align: center;
      text-transform: uppercase;
      padding-left: 20px;
      padding-right: 20px;
      @media screen and (min-width: $bf-tablet) {
        margin-bottom: 40px;
      }
      @media screen and (min-width: $bf-desktop-min) {
        font-size: 42px;
      }
      @media screen and (min-width: $bf-desktop) {
        margin-bottom: 60px;
      }
    }
    &-content {
      @media screen and (min-width: $bf-desktop) {
        display: flex;
      }
    }
    &-info {
      @media screen and (min-width: $bf-desktop) {
        width: 100%;
    
      }
    }
    &-headings {
      display: none;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        padding: 10px 0;
        border-top: 1px solid $bf-silver-chalice;
        border-bottom: 1px solid $bf-silver-chalice;
        & p {
          margin: 0;
          font-size: 16px;
          color: $bf-silver-chalice;
        }
      }
    }
    &-headingProduct {
      @media screen and (min-width: $bf-tablet) {
        width: 40%;
      }
    }
    &-headingDetails {
      @media screen and (min-width: $bf-tablet) {
        width: 40%;
      }
    }
    &-headingPrice {
      @media screen and (min-width: $bf-tablet) {
        width: 20%;
        text-align: center;
      }
    }
    &-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      padding: 30px 0;
      border-bottom: 1px solid $bg-mine-shaft;
      & p {
        margin-bottom: 0;
      }
      @media screen and (min-width: $bf-tablet) {
        justify-content: space-between;
        border-bottom: 1px solid $bf-silver-chalice;
      }
    }
    &-contentProduct {
      width: 100%;
      display: flex;
      @media screen and (min-width: $bf-tablet) {
        width: 35%;
        margin-right: 5%;
      }
    }
    &-contentDetails {
      position: absolute;
      left: 108px;
      top: 70px;
      @media screen and (min-width: $bf-tablet) {
        width: 40%;
        position: static;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &-contentPrice {
      position: absolute;
      right: 0;
      bottom: 25px;
      @media screen and (min-width: $bf-tablet) {
        width: 20%;
        position: static;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
    &-image {
      width: 98px;
      height: 128px;
      margin-right: 10px;
    }
    &-imageTitle {
      width: 50%;
      font-size: 16px;
    }
    &-color {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $bf-silver-chalice;
    }
    &-colorValue {
      width: 14px;
      height: 14px;
      margin: 0 5px;
      display: block;
    }
    &-size {
      margin-bottom: 10px;
      font-size: 14px;
      color: $bf-silver-chalice;
    }
    &-amount {
      font-size: 14px;
      color: $bf-silver-chalice;
    }
    &-price {
      margin-bottom: 0;
      text-align: left;
      font-size: 24px;
      font-weight: 600;
      color: $bg-mine-shaft;
    }
    &-confirmation {
      width: 100%;
      padding: 30px 0 14px;
      border-bottom: 1px solid $bg-mine-shaft;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px solid $bf-silver-chalice;
      }
    }
    &-confirmationValue {
      width: 100%;
      & label {
        color: $bf-silver-chalice;
        font-size: 16px;
      }
      & p {
        color: $bg-mine-shaft;
        font-size: 16px;
      }
      @media screen and (min-width: $bf-tablet) {
        width: 48%;
      }
    }
    &-payment {
      width: 100%;
      padding: 30px 0 14px;
      border-bottom: 1px solid $bg-mine-shaft;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px solid $bf-silver-chalice;
      }
    }
    &-paymentValue {
      width: 100%;
      & label {
        color: $bf-silver-chalice;
        font-size: 16px;
      }
      & p {
        color: $bg-mine-shaft;
        font-size: 16px;
      }
      @media screen and (min-width: $bf-tablet) {
        width: 48%;
      }
    }
    &-values {
      width: 100%;
      padding: 30px 0;
      border-bottom: 1px solid $bg-mine-shaft;
      @media screen and (min-width: $bf-tablet) {
        border-bottom: 1px solid $bf-silver-chalice;
      } 
    }
    &-value {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & p {
        margin: 0;
        font-size: 16px;
        color: $bf-silver-chalice;
      }
      @media screen and (min-width: $bf-tablet) {
        width: 250px;
        margin: 0 0 0 auto;
      } 
    }
    &-total {
      font-size: 24px;
      font-weight: 400;
      color: $bg-mine-shaft;
    }
    &-totalValue {
      font-size: 30px;
      font-weight: 600;
      color: $bg-mine-shaft;
    }
    &-links {
      padding: 30px 0;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
      }
    }
    &-btnAdd {
      width: 100%;
      display: block;
      padding: 11px 0;
      border: solid 1px $bf-pink-salmon;
      border-radius: 0;
      background-color: $bf-white;
      color: $bf-pink-salmon;
      font-size: 14px;
      text-align: center;
      &:hover,
      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
        background-color: $bf-pink-salmon;
        color: $bf-white;
        text-decoration: none;
      }
      @media screen and (min-width: $bf-tablet) {
        width: 258px;
      }
    }
    &-link {
      margin-top: 30px;
      display: block;
      text-align: center;
      color: $bg-mine-shaft;
      font-size: 16px;
      &:hover {
        color: $bf-pink-salmon;
      }
      @media screen and (min-width: $bf-tablet) {
        margin: 0;
      }
    }
  }
</style>