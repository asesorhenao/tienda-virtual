<template>
  <div class="bfShippingInfo">
    <div class="container">
      <div class="bfShippingInfo-rates">
        <h2 class="bfShippingInfo-title">DATOS DE ENVÍO</h2>
        <h3 class="bfShippingInfo-subtitle">NUESTRAS TARIFAS DE ENVÍO</h3>
        <div class="bfShippingInfo-domestic">
          <h3>Envío Doméstico</h3>
          <table class="table table-bordered bfShippingInfo-table">
            <tr>
              <th>Método</th>
              <th>Costo</th>
              <th>Tiempo de envío</th>
            </tr>
            <tr v-for="(domestic, index) in info.domestics" :key="index">
              <td>{{domestic.method}}</td>
              <td>{{domestic.cost}}</td>
              <td>{{domestic.inTransitTime}}</td>
            </tr>
          </table>
        </div>
        <div class="bfShippingInfo-international">
          <h3>Envío Internacional</h3>
          <table class="table table-bordered bfShippingInfo-table">
            <tr>
              <th>Método</th>
              <th>Costo</th>
              <th>Tiempo de envío</th>
            </tr>
            <tr v-for="(international, index) in info.internationals" :key="index">
              <td>{{international.method}}</td>
              <td>{{international.cost}}</td>
              <td>{{international.inTransitTime}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="bfShippingInfo-conditions">
        <p v-for="(description, index) in info.descriptions" :key="index">{{description.description}}</p>
      </div>
      <div class="bfShippingInfo-accordions">
        <div class="accordion bfShippingInfo-accordion" id="bfAccordion">
          <div class="card bfShippingInfo-accordionCard" v-for="(accordion, index) in info.accordions" :key="index">
            <div class="card-header bfShippingInfo-accordionHeader" :id="'heading-'+index">
              <h2 class="bfShippingInfo-accordionHeading">
                <button class="btn btn-link bfShippingInfo-accordionBtn collapsed" type="button" data-toggle="collapse" :data-target="'#collapse-'+index" aria-expanded="true" aria-controls="collapseOne">
                  <span>{{accordion.title}}</span> 
                  <img class="bfShippingInfo-accordionArrow" src="../../assets/Arrow_Icon.svg" alt="">
                </button>
              </h2>
            </div>
            <div :id="'collapse-'+index" class="collapse" :aria-labelledby="'heading-'+index" data-parent="#bfAccordion">
              <div class="card-body bfShippingInfo-accordionBody">
                {{accordion.text}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bfShippingInfo-link">
        <router-link
          class="bfHeader-childLinkDesktop"
          :to="info.link"
        >{{info.linkText}}</router-link>
      </div>    
      <div class="bfShippingInfo-button">
        <router-link
          class="bfHeader-childLinkDesktop"
          :to="info.button"
        >{{info.buttonText}}</router-link>
      </div>    
    </div>
  </div>
</template>

<script>
  import data from "../../data/shipping-info.json";
  export default {
    data() {
      return {
        info: data,
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../styles/settings.scss";

  .bfShippingInfo {
    &-title {
      margin-bottom: 50px;
      font-size: 24px;
      text-align: center;
      color: $bg-mine-shaft;
    }
    &-subtitle {
      margin-bottom: 20px;
      font-size: 24px;
      color: $bg-mine-shaft;
    }
    &-domestic {
      & h3 {
        margin-bottom: 10px;
        font-size: 30px;
        font-weight: 900;
      }
    }
    &-international {
      & h3 {
        margin-bottom: 10px;
        font-size: 30px;
        font-weight: 900;
      }
    }
    &-conditions {
      padding: 30px 0;
      margin-bottom: 30px;
      border-bottom: 1px solid $bg-mine-shaft;
      @media screen and (min-width: $bf-tablet) {
        padding: 50px 0;
        margin-bottom: 50px;
      }
    }
    &-table {
      & tr th {
        color: $bf-silver-chalice;
      }
    }
    &-accordions {
      width: 100%;
      @media screen and (min-width: $bf-tablet) {
        width: 80%;
        margin: 0 auto;
      }
    }
    &-accordionCard {
      border: none;
      border-radius: 0;
      margin: 0;
      border-top: 1px solid $bg-mine-shaft;
      &:first-child {
        border-top: none;
      }
    }
    &-accordionHeader {
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0;
      border-bottom: 0;
      border-radius: 0;
      background-color: transparent;
      margin: 0;
      & h2 {
        margin: 0;
      }
      & button {
        width: 100%;
        height: 100%;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        color: $bg-mine-shaft;
        &:hover,
        &:active,
        &:focus {
          text-decoration: none;
        }
        &[data-toggle]:not(.collapsed) > .bfShippingInfo-accordionArrow {
          transform: rotate(90deg);
          transition: all .5s;
        }
      }
    }
    &-accordionHeading {
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;
    }
    &-accordionArrow {
      width: 16px;
      transform: rotate(-90deg);
      transition: all .5s;
    }
    &-accordionBody {
      padding: 0 0 20px;
      color: $bf-river-bed;
      font-size: 16px;
      line-height: 30px;
      & ul {
        list-style: none;
        padding: 0;
      }
    }
    &-link {
      width: 100%;
      margin-top: 50px;
      text-align: center;
      & a {
        font-size: 16px;
        color: $bg-mine-shaft;
        &:hover,
        &:active,
        &:focus {
          color: $bf-pink-salmon;
        }
      }
    }
    &-button {
      width: 100%;
      margin-top: 30px;
      text-align: center;
      & a {
        display: block;
        padding: 11px 0;
        border: solid 1px $bf-pink-salmon;
        background-color: $bf-white;
        color: $bf-pink-salmon;
        font-size: 16px;
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
          display: inline-block;
          padding: 11px 60px;
        }
      }
    }
  }
  
</style>