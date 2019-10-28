<template>
  <div class="bfMyOrders">
    <div class="bfMyOrders-container container">
      <div class="bfMyOrders-dashboard">
        <dashboard />
      </div>
      <div class="bfMyOrders-content">
        <h3 class="bfMyOrders-title">MIS ORDENES</h3>
        <div class="bfMyOrders-table container accordion" id="bfAccordion">
          <div class="row bfMyOrders-border-t bfMyOrders-border-b bfMyOrders-hom bfMyOrders-header">
            <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-20 bfMyOrders-table-title">Número</div>
            <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-20 bfMyOrders-table-title">Fecha</div>
            <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-25 bfMyOrders-table-title">Recibe</div>
            <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-20 bfMyOrders-table-title">Total</div>
            <div class="bfMyOrders-col bfMyOrders-cd-10 bfMyOrders-ct-15 bfMyOrders-table-title">Estado</div>
            <div class="bfMyOrders-col bfMyOrders-cd-30 bfMyOrders-table-title text-right pr-3 bfMyOrders-hot bfMyOrders-hom">Detalles</div>
          </div>

          <div class="row bfMyOrders-border-t bfMyOrders-hot bfMyOrders-hod"></div>

          <div class="row bfMyOrders-border-b p-0" v-for="(order, index) in orders.slice(0, orderShowCounter)" :key="index" :id="'heading_' + index">
            
            <div class="bfMyOrders-col bfMyOrders-cd-100 bfMyOrders-ct-100 bfMyOrders-cm-100 bfMyOrders-flex-container bfMyOrders-row">
              <div class="bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-table-title bfMyOrders-hot bfMyOrders-hod">Número</div>
              <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-20 bfMyOrders-cm-60">{{order.orderId}}</div>
              <div class="bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-table-title bfMyOrders-hot bfMyOrders-hod">Fecha</div>
              <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-20 bfMyOrders-cm-60">{{order.date}}</div>
              <div class="bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-table-title bfMyOrders-hot bfMyOrders-hod">Recibe</div>
              <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-25 bfMyOrders-cm-60">{{order.recipient}}</div>
              <div class="bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-table-title bfMyOrders-hot bfMyOrders-hod">Total</div>
              <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-20 bfMyOrders-cm-60">$ {{order.total}}</div>
              <div class="bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-table-title bfMyOrders-hot bfMyOrders-hod">Estado</div>
              <div class="bfMyOrders-col bfMyOrders-cd-10 bfMyOrders-ct-15 bfMyOrders-cm-60">{{order.status}}</div>
              <div class="bfMyOrders-col bfMyOrders-cd-30 text-right pr-3 bfMyOrders-hot bfMyOrders-hom">
                <span class="bfMyOrders-arrow collapsed" 
                data-toggle="collapse" :data-target="'#collapse_' + index" aria-expanded="true" :aria-controls="'collapse_' + index"></span>
              </div>
            </div>

            <div class="bfMyOrders-col bfMyOrders-ct-100 bfMyOrders-cm-100 bfMyOrders-table-title 
            bfMyOrders-border-t-gray collapsed bfMyOrders-hod bfMyOrders-row bfMyOrders-d-grid"
            data-toggle="collapse" :data-target="'#collapse_' + index" aria-expanded="true" :aria-controls="'collapse_' + index">
              <span>Detalles <span class="bfMyOrders-arrow float-right mr-3"></span></span>
            </div>
            <div class="bfMyOrders-col bfMyOrders-cd-100 bfMyOrders-border-t pt-2 collapse"
             :id="'collapse_' + index" :aria-labelledby="'heading_' + index" data-parent="#bfAccordion">
              <div class="bfMyOrders-flex-container">

                <div class="bfMyOrders-col bfMyOrders-cd-15 bfMyOrders-ct-20 bfMyOrders-cm-40">
                  <img :src="order.image" :alt="order.altText" class="img-fluid">
                </div>

                <div class="bfMyOrders-col bfMyOrders-cd-85 bfMyOrders-ct-80 bfMyOrders-hom">
                  <div class="bfMyOrders-flex-container">
                    <div class="bfMyOrders-col bfMyOrders-cd-25 bfMyOrders-ct-30">
                      {{order.title}}
                    </div>
                    <div class="bfMyOrders-col bfMyOrders-cd-75 bfMyOrders-ct-70"></div>

                    <div class="bfMyOrders-col bfMyOrders-cd-27 bfMyOrders-ct-35">
                      <table class="bfMyOrders-text-details">
                        <tr>
                          <td class="pr-1">Precio:</td>
                          <td>$ {{order.price}}</td>
                        </tr>
                        <tr>
                          <td class="pr-1">Color:</td>
                          <td>{{order.color}}</td>
                        </tr>
                        <tr>
                          <td class="pr-1">Tamaño:</td>
                          <td>{{order.size}}</td>
                        </tr>
                        <tr>
                          <td class="pr-1">Cantidad:</td>
                          <td>{{order.amount}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="align-top bfMyOrders-col bfMyOrders-cd-13 bfMyOrders-ct-20 bfMyOrders-text-details">Dirección:</div>
                    <div class="bfMyOrders-col bfMyOrders-cd-30 bfMyOrders-ct-45 bfMy bfMyOrders-text-details">{{order.address}}</div>
                    <div class="bfMyOrders-col bfMyOrders-cd-30 bfMyOrders-ct-100 text-right bfMyOrders-text-details">
                      <table class="d-inline-block text-left">
                        <tr>
                          <td class="pr-3 ">Orden Suma:</td>
                          <td class="">$ {{order.amount * order.price}}</td>
                        </tr>
                        <tr>
                          <td class="pr-3 ">Entrega:</td>
                          <td class="">$ {{order.shipping}}</td>
                        </tr>
                      </table>
                      <div class="mt-2">
                        Total: <span class="bfMyOrders-total ml-2">$ {{order.total}}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bfMyOrders-col bfMyOrders-cm-60 bfMyOrders-hot bfMyOrders-hod">
                  {{order.title}}
                  <table class="bfMyOrders-text-details">
                    <tr>
                      <td class="pr-3">Precio:</td>
                      <td>$ {{order.price}}</td>
                    </tr>
                    <tr>
                      <td class="pr-3">Color:</td>
                      <td>{{order.color}}</td>
                    </tr>
                    <tr>
                      <td class="pr-3">Tamaño:</td>
                      <td>{{order.size}}</td>
                    </tr>
                    <tr>
                      <td class="pr-3">Cantidad:</td>
                      <td>{{order.amount}}</td>
                    </tr>
                  </table>
                </div>
                <div class="align-top bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-text-details bfMyOrders-hot bfMyOrders-hod">Dirección:</div>
                <div class="bfMyOrders-col bfMy bfMyOrders-cm-60 bfMyOrders-text-details bfMyOrders-hot bfMyOrders-hod">{{order.address}}</div>
                <div class="bfMyOrders-hot bfMyOrders-hod align-top bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-text-details">Orden Suma:</div>
                <div class="bfMyOrders-hot bfMyOrders-hod bfMy bfMyOrders-col bfMyOrders-cm-60 bfMyOrders-text-details">$ {{order.amount * order.price}}</div>
                <div class="bfMyOrders-hot bfMyOrders-hod align-top bfMyOrders-col bfMyOrders-cm-40 bfMyOrders-text-details">Entrega:</div>
                <div class="bfMyOrders-hot bfMyOrders-hod bfMyOrders-col bfMyOrders-cm-60 bfMyOrders-text-details">$ {{order.shipping}}</div>
                <div class="bfMyOrders-hot bfMyOrders-hod bfMyOrders-col bfMyOrders-cm-100 bfMyOrders-text-details text-right">
                  Total: <span class="bfMyOrders-total ml-2">$ {{order.total}}</span>
                </div>

                <div class="bfMyOrders-col bfMyOrders-cd-100 bfMyOrders-ct-100 bfMyOrders-cm-100 bfMyOrders-border-t pt-2 mt-2 bfMyOrders-flex-container">
                  <div class="bfMyOrders-col bfMyOrders-cd-30 bfMyOrders-ct-40 bfMyOrders-cm-100 mb-2">
                      <button type="submit" @click="removeOrder(index)" class="btn bfMyOrders-botton collapsed"
                      data-toggle="collapse" :data-target="'#collapse_' + index" aria-expanded="true" :aria-controls="'collapse_' + index">CANCELAR ORDEN</button>
                  </div>
                  <div class="bfMyOrders-col bfMyOrders-cd-30 bfMyOrders-ct-40 bfMyOrders-cm-100 mb-2">
                      <button type="button" class="btn bfMyOrders-botton">IMPRIMIR</button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="bfMyOrders-btnShowMore" 
          v-show="orders.length > orderShowCounter"
          @click="orderShowCounter += orderShowCounter">
          <a >Mostrar Mas</a>
        </div>

      </div>
    </div>
  </div>
  
</template>

<script>
  import dashboard from '../dashboard';
  import data from "../../data/orders.json";
  export default {
    data() {
      return {
        orders: data,
        orderShowCounter: 3
      };
    },
    components: {
      dashboard
    },
    methods: {
      removeOrder (index) {
        this.orders.splice(index, 1);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../styles/settings.scss";

  .bfMyOrders {
    &-title {
      margin-left: -15px;
      margin-right: -15px;
    }
    &-flex-container{
      display: flex;
      flex-wrap: wrap;
    }
    &-d-grid{
      display: grid !important;
    }
    &-container {
      padding: 30px 15px;
      @media screen and (min-width: $bf-tablet) {
        padding: 48px 0 20px;
        display: flex;
      }
    }
    &-total {
      color: $bg-mine-shaft;
      font-size: 1.4rem;
    }
    &-border-b {
      padding-bottom: 10px;
      border-bottom: 1px solid $bg-mine-shaft;
    }
    &-border-t {
      padding-top: 10px;
      border-top: 1px solid $bg-mine-shaft;
    }
    &-border-t-gray {
      padding-top: 10px;
      border-top: 1px solid $bf-dusty-gray;
    }
    &-table {
      padding: 0;
      &-align-r {
        text-align: right;
      }
      &-title {
        color: $bf-silver-chalice;
      }
      & img {
        max-height: 150px;
      }
    }
    &-header {
      height: 48px;
      align-content: center;
      padding-bottom: 10px;
    }
    &-row {
      min-height: 48px;
      align-content: center;
    }
    &-botton {
      width: 100%;
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
    &-text {
      font-size: 0.95rem;
      &-details {
        color: $bf-silver-chalice;
      }
    }
    &-arrow {
      &::before {
        transition: all .5s;
        vertical-align: middle;
        content: url('../../assets/Arrow_Icon.svg');
        width: 15px;
        height: 15px;
        display: inline-block;
        transform: rotate(-90deg);
      }
    }
    [data-toggle]:not(.collapsed).bfMyOrders-arrow {
      &::before {
        transform: rotate(90deg);
        transition: all .5s;
      }
    }
    [data-toggle]:not(.collapsed) > span > .bfMyOrders-arrow {
      &::before {
        transform: rotate(90deg);
        transition: all .5s;
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
        margin-bottom: 28px;
        text-align: center;
        @media screen and (min-width: $bf-tablet) {
          text-align: left;
        }
      }
      & h4 {
        font-size: 24px;
        color: $bg-mine-shaft;
      }
    }

    &-btnShowMore {
      width: 100%;
      text-align: center;
      a {
        display: inline-block;
        font-size: 14px;
        color: $bf-pink-salmon;
        text-transform: uppercase;
        text-decoration: none;
        line-height: 1;
        border: 1px solid $bf-pink-salmon;
        border-radius: 0;
        background: #ffffff;
        padding: 16px 30px;
        margin-top: 20px;
        cursor: pointer;

        &:hover {
          text-decoration: none;
          background: $bf-pink-salmon;
          color: white;
        }
      }
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

    &-col{
      padding: 0 5px;
      position: relative;
    }
    /* Mobile */
    @media screen and (max-width: $bf-mobile-max) {
      &-container {
        padding: 30px 30px;
      }
      &-cm-25{
        flex: 0 0 25%;
        max-width: 25%;
      }
      &-cm-30{
        flex: 0 0 30%;
        max-width: 30%;
      }
      &-cm-40{
        flex: 0 0 40%;
        max-width: 40%;
      }
      &-cm-50{
        flex: 0 0 50%;
        max-width: 50%;
      }
      &-cm-60{
        flex: 0 0 60%;
        max-width: 60%;
      }
      &-cm-70{
        flex: 0 0 70%;
        max-width: 70%;
      }
      &-cm-75{
        flex: 0 0 75%;
        max-width: 75%;
      }
      &-cm-100{
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
    
    /* Tablet */
    @media screen and (min-width: $bf-tablet) {
      &-ct-10{
        flex: 0 0 10%;
        max-width: 10%;
      }
      &-ct-15{
        flex: 0 0 15%;
        max-width: 15%;
      }
      &-ct-20{
        flex: 0 0 20%;
        max-width: 20%;
      }
      &-ct-25{
        flex: 0 0 25%;
        max-width: 25%;
      }
      &-ct-30{
        flex: 0 0 30%;
        max-width: 30%;
      }
      &-ct-35{
        flex: 0 0 35%;
        max-width: 35%;
      }
      &-ct-40{
        flex: 0 0 40%;
        max-width: 40%;
      }
      &-ct-45{
        flex: 0 0 45%;
        max-width: 45%;
      }
      &-ct-50{
        flex: 0 0 50%;
        max-width: 50%;
      }
      &-ct-60{
        flex: 0 0 60%;
        max-width: 60%;
      }
      &-ct-70{
        flex: 0 0 70%;
        max-width: 70%;
      }
      &-ct-80{
        flex: 0 0 80%;
        max-width: 80%;
      }
      &-ct-100{
        flex: 0 0 100%;
        max-width: 100%;
      }
    }

    /* Desktop */
    @media screen and (min-width: $bf-desktop-min) {
      &-cd-10{
        flex: 0 0 10%;
        max-width: 10%;
      }
      &-cd-13{
        flex: 0 0 13%;
        max-width: 13%;
      }
      &-cd-15{
        flex: 0 0 15%;
        max-width: 15%;
      }
      &-cd-20{
        flex: 0 0 20%;
        max-width: 20%;
      }
      &-cd-25{
        flex: 0 0 25%;
        max-width: 25%;
      }
      &-cd-27{
        flex: 0 0 27%;
        max-width: 27%;
      }
      &-cd-30{
        flex: 0 0 30%;
        max-width: 30%;
      }
      &-cd-35{
        flex: 0 0 35%;
        max-width: 35%;
      }
      &-cd-40{
        flex: 0 0 40%;
        max-width: 40%;
      }
      &-cd-50{
        flex: 0 0 50%;
        max-width: 50%;
      }
      &-cd-75{
        flex: 0 0 75%;
        max-width: 75%;
      }
      &-cd-85{
        flex: 0 0 85%;
        max-width: 85%;
      }
      &-cd-100{
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
</style>