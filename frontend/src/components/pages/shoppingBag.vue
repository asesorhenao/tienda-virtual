<template>
  <div class="bfShoppingBag">
    <div class="bfShoppingBag-container">
      <h2 class="bfShoppingBag-title">MI BOLSA DE COMPRAS</h2>
      <div class="bfShoppingBag-content">
        <div class="bfShoppingBag-info">
          <div class="bfShoppingBag-headings">
            <p class="bfShoppingBag-headingProduct">Productos</p>
            <p class="bfShoppingBag-headingDetails">Detalles</p>
            <p class="bfShoppingBag-headingPrice">Precio</p>
          </div>
          <div class="bfShoppingBag-item" v-for="(item, index) in items" :key="index">
            <div class="bfShoppingBag-contentProduct">
              <img class="bfShoppingBag-image" :src="item.image" :alt="item.altText">
              <h3 class="bfShoppingBag-imageTitle">{{item.title}}</h3>
              <button class="bfShoppingBag-delete" @click="deleteItem(item)"></button>
            </div>
            <div class="bfShoppingBag-contentDetails">
              <p class="bfShoppingBag-color">Color: <span class="bfShoppingBag-colorValue" :style="{background: item.color[0]}"></span> {{item.color[1]}}</p>
              <p class="bfShoppingBag-size">Talla: {{item.size}}</p>
              <p class="bfShoppingBag-amount">Cantidad: {{item.amount}}</p>
            </div>
            <div class="bfShoppingBag-contentPrice">
              <p class="bfShoppingBag-price">$ {{item.price}}</p>
            </div>
          </div>
          <div class="bfShoppingBag-values">
            <div class="bfShoppingBag-value">
              <p>Subtotal:</p>
              <span class="bfShoppingBag-total">$ {{parseFloat(total).toFixed(2)}}</span>
            </div>
            <div class="bfShoppingBag-value">
              <p>Envío:</p>
              <span class="bfShoppingBag-total">$ 15.00</span>
            </div>
            <div class="bfShoppingBag-value">
              <p>Total:</p>
              <span class="bfShoppingBag-totalValue">$ {{parseFloat(total + 15.00).toFixed(2)}}</span>
            </div>
          </div>
          <div class="bfShoppingBag-links">
            <router-link to="/checkoutBag" class="bfShoppingBag-btnAdd">
              COMPRAR
            </router-link>
            <router-link to="/"  class="bfShoppingBag-link">
              &#60; De vuelta a las compras
            </router-link>
          </div>
        </div>
        <div class="bfShoppingBag-icons">
          <div class="bfShoppingBag-icon">
            <img src="../../assets/Fast_Shipping_Hover_Icon.svg" alt="" class="bfShoppingBag-iconImg">
            <p class="bfShoppingBag-iconTex">ENVÍO RÁPIDO</p>
          </div>
          <div class="bfShoppingBag-icon">
            <img src="../../assets/Easy_Returns_Hover_Icon.svg" alt="" class="bfShoppingBag-iconImg">
            <p class="bfShoppingBag-iconTex">FÁCILES DEVOLUCIONES</p>
          </div>
          <div class="bfShoppingBag-icon">
            <img src="../../assets/Customer_Service_Icon.svg" alt="" class="bfShoppingBag-iconImg">
            <p class="bfShoppingBag-iconTex">SERVICIO AL CLIENTE 24/7</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from "../../data/bag.json";
  export default {
    data() {
      return {
        items: data,
        total: 0
      };
    },
    methods: {
      deleteItem (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.total -= item.price;
      }
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
  @import "../../styles/settings.scss";

  .bfShoppingBag {
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
        width: calc(100% - 300px);
        margin-right: 50px;
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
    &-delete {
      position: absolute;
      top: 30px;
      right: 0;
      border: none;
      background-color: transparent;
      &::before {
        width: 20px;
        height: 20px;
        display: block;
        content: url('../../assets/Round_Close_Icon.svg');
      }
      &:focus,
      &:active {
        outline: none;
      }
      &:hover {
        &::before {
          width: 20px;
          height: 20px;
          display: block;
          content: url('../../assets/Round_Close_Hover_Icon.svg');
        }
      }
      @media screen and (min-width: $bf-tablet) {
        position: static;
      }
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
    &-icons {
      width: 100%;
      text-align: center;
      @media screen and (min-width: $bf-tablet) {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
      }
      @media screen and (min-width: $bf-desktop) {
        width: 250px;
        margin: 0;
        justify-content: flex-start;
        flex-direction: column;
      }
    }
    &-icon {
      width: 275px;
      margin: 15px auto;
      display: flex;
      align-items: center;
      @media screen and (min-width: $bf-tablet) {
        width: auto;
        margin: 0;
      }
      @media screen and (min-width: $bf-desktop) {
        width: 250px;
        margin-bottom: 60px;
        text-align: left;
      }
    }
    &-iconImg {
      width: 49px;
      height: 39px;
      margin-right: 20px;
    }
    &-iconTex {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: $bf-silver-chalice;
    }
  }
</style>