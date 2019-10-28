<template>
  <div class="bfFooter">
    <div class="bfFooter-container">
      <div class="container">
        <div class="bfFooter-content">
          <div class="bfFooter-contact">
            <h2>SERVICIO AL CLIENTE</h2>
            <h4>Línea de ayuda gratuita</h4>
            <span><img src="../../assets/WhatsApp_Icon.svg" alt=""> 0 200 5803020</span>
            <p>Lunes - Viernes 9 AM - 4 PM</p>
          </div>
          <div class="bfFooter-form">
            <form>
              <p>¡SÉ EL PRIMERO EN CONOCER LAS ÚLTIMAS OFERTAS, VENTAS Y MÁS!</p>
              <div class="bfFooter-formControls">
                <input
                  class="form-control bfFooter-formInput"
                  type="text"
                  placeholder="Introduce tu correo electrónico"
                  aria-label="Suscribir"
                >
                <button class="btn bfFooter-formBtn">
                  SUSCRIBIR
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="bfFooter-contentNav">
          <div class="bfFooter-navMobile">
            <div class="accordion" id="bf-accordionFooter">
              <div v-for="(nav, index) in items" :key="index" class="card bfFooter-card">
                <div class="card-header bfFooter-cardHeader" :id="'heading-'+index">
                  <h2 class="mb-0 bfFooter-cardHeading collapsed" 
                    data-toggle="collapse" 
                    :data-target="'#collapse-'+index" 
                    aria-expanded="false" 
                    :aria-controls="'collapse'+index"  
                    v-if="nav.child"
                  >
                    {{nav.item}}
                    <img class="bfFooter-arrow" src="../../assets/Arrow_Icon.svg" alt="">
                  </h2>
                </div>

                <div
                  :id="'collapse-'+index"
                  class="collapse"
                  :aria-labelledby="'heading-'+index"
                  data-parent="#bf-accordionFooter"
                >
                  <div
                    class="card-body bfFooter-cardBody"
                    v-if="nav.child"
                  >
                    <ul class="bfFooter-navChild" v-if="nav.child">
                      <li v-for="(childs, index) in nav.child" :key="index">
                        <router-link
                          class="bfFooter-childLink"
                          :to="childs.itemLink"
                        >{{childs.item}}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bfFooter-navDesktop">
            <ul>
              <li v-for="(nav, index) in items" :key="index">
                <h2>{{nav.item}}</h2>
                <ul v-if="nav.child">
                  <li v-for="(childs, index) in nav.child" :key="index">
                  <router-link
                    class="bfFooter-childLink"
                    :to="childs.itemLink"
                  >{{childs.item}}
                  </router-link>
                </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="bfFooter-socialMedia">
            <h2>SÍGUENOS</h2>
            <ul>
              <li><a href="#"><img src="../../assets/Facebook_Icon.svg" alt=""></a></li>
              <li><a href="#"><img src="../../assets/Pinterest_Icon.svg" alt=""></a></li>
              <li><a href="#"><img src="../../assets/Instagram_Icon.svg" alt=""></a></li>
              <li><a href="#"><img src="../../assets/Twitter_Icon.svg" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bfFooter-legal">
        <div class="container bfFooter-legalContainer">
          <div class="bfFooter-legalText">
            <span>Política de Privacidad</span>
            <a href="#">Términos de Servicio</a>
          </div>
          <div class="bfFooter-legalPayments">
            <ul>
              <li><a href="#"><img src="../../assets/Visa_Icon.png" alt=""></a></li>
              <li><a href="#"><img src="../../assets/Maestro_Icon.png" alt=""></a></li>
              <li><a href="#"><img src="../../assets/PayPal_Icon.png" alt=""></a></li>
              <li><a href="#"><img src="../../assets/Mastercard.png" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
      <backToTop />
    </div>
  </div>
</template>
<script>
/*
 Use locally
*/
import data from "../../data/footer.json";
import backToTop from '../back-to-top';

export default {
  data() {
    return {
      items: data
    };
  },
  components: {
    backToTop
  }
}
</script>
<style lang="scss">
  @import "../../styles/settings.scss";
  .bfFooter {
    padding-top: 20px;
    @media screen and (min-width: $bf-tablet) {
      padding-top: 40px;
    }
    @media screen and (min-width: $bf-desktop) {
      padding-top: 55px;
    }
    &-container {
      padding: 30px 0 0;
      background: url("../../assets/Bg_Footer.svg") center no-repeat;
      background-size: cover;
    }
    &-legal {
      padding: 20px 0;
      background-color: $bg-mine-shaft;
      @media screen and (min-width: $bf-tablet) {
        padding: 10px 0;
      }
    }
    &-legalContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    &-content {
      border-bottom: 1px solid $bg-mine-shaft;
      padding-bottom: 30px;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
      }
    }
    &-contact {
      margin-bottom: 4px;
      & h2 {
        margin-bottom: 22px;
        padding-top: 5px;
        font-size: 22px;
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
        color: $bg-mine-shaft;
      }
      & h4 {
        margin-bottom: 16px;
        font-size: 16px;
        color: $bg-mine-shaft;
      }
      & img {
        width: 23px;
        margin-right: 20px;
      }
      & p {
        font-size: 14px;
        color: $bf-silver-chalice;
        margin-bottom: 0;
      }
      @media screen and (min-width: $bf-tablet) {
        width: 35%;
      }
    }
    &-form {
      padding-top: 30px;
      & p {
        font-size: 14px;
        color: $bf-dusty-gray;
      }
      @media screen and (min-width: $bf-tablet) {
        width: 52%;
        padding: 0;
      }
    }
    &-formControls {
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        align-items: center;
      }
    }
    &-formInput {
      background-color: transparent;
      padding: 23px 22px;
      border: 1px solid $bf-river-bed;
      border-radius: 0;
      font-size: 14px;
      color: $bf-silver-chalice;
      &:focus {
        color: $bg-mine-shaft;
        background-color: $bf-white;
        border-color: $bf-froly;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(240,98,113,.25);
      }
      @media screen and (min-width: $bf-tablet) {
        width: 70%;
      }
    }
    &-formBtn {
      width: 100%;
      height: 48px;
      padding: 11px 10px;
      margin-top: 15px;
      background-color: $bg-mine-shaft;
      color: $bf-white;
      border-radius: 0;
      &:hover,
      &:active,
      &:focus {
        background-color: $bf-pink-salmon;
        color: $bf-white;
        outline: none;
        box-shadow: none;
      }
      @media screen and (min-width: $bf-tablet) {
         margin-top: 0;
         width: 30%;
      }
    }
    &-contentNav {
      padding: 12px 0;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
      }
    }
    &-navMobile {
      @media screen and (min-width: $bf-tablet) {
        display: none;
      }
    }
    &-card {
      border: none;
      background-color: transparent;
    }
    &-cardHeader {
      padding: 20px 0;
      background-color: transparent;
      border-bottom: none;
    }
    &-cardHeading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $bg-mine-shaft;
      cursor: pointer;
      font-size: 22px;
      &[data-toggle]:not(.collapsed) > .bfFooter-arrow {
        transform: rotate(90deg);
        transition: all .5s;
      }
    }
    &-arrow {
      width: 25px;
      position: relative;
      transform: rotate(-90deg);
      transition: all .5s;
    }
    &-cardBody {
      padding: 0 1.25rem;
    }
    &-navChild {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &-childLink {
      display: block;
      padding: 12px 0;
      color: $bf-river-bed;
      &:hover, 
      :active, 
      :focus {
        color: $bf-froly;
        text-decoration: none;
      }
    }
    &-socialMedia {
      padding-bottom: 28px;
      & h2 {
        margin-top: 20px;
        color: $bg-mine-shaft;
        font-size: 22px;
      }
      & ul {
        display: flex;
        margin: 0;
        padding: 10px 0;
        list-style: none;
      }
      & li {
        margin-right: 52px;
      }
      & img {
        width: 24px;
        height: 24px;
      }
      @media screen and (min-width: $bf-tablet) {
       padding-bottom: 0;
        & h2 {
          margin-top: 0;
        }
        & li {
          margin-right: 15px;
        }
      }
      @media screen and (min-width: $bf-desktop-min) {
        & li {
          margin-right: 22px;
        }
      }
    }
     &-navDesktop {
      display: none;
      & ul {
        list-style: none;
        display: flex;
        padding: 0;
      }
      & ul li {
        margin-right: 24px;
      }
      & ul li ul {
        display: flex;
        flex-direction: column;
      }
      & ul li ul li a {
        padding: 5px 0;
      }
      & h2 {
        color: $bg-mine-shaft;
        font-size: 22px;
      }
      @media screen and (min-width: $bf-tablet) {
        display: block;
      }
      @media screen and (min-width: $bf-desktop-min) {
        & ul li {
          margin-right: 35px;
        }
      }
      @media screen and (min-width: $bf-desktop) {
        & ul li {
          margin-right: 55px;
        }
      }
    }
    &-legalContainer {
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        justify-content: space-between;
      }
    }
    &-legalText {
      width: 100%;
      padding-bottom: 15px;
      color: $bf-cararra;
      font-size: 14px;
      text-align: center;
      border-bottom: 1px solid $bf-cararra;
      & span {
        margin-right: 5px;
      }
      & a {
        margin-left: 5px;
        color: $bf-cararra;
      }
      @media screen and (min-width: $bf-tablet) {
        width: auto;
        padding-bottom: 0;
        border-bottom: none;
        text-align: left;
      }
    }
    &-legalPayments {
      padding-top: 20px;
      & ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      & ul li {
        margin: 0 7px;
      }
      & ul li a img {
        width: 33px;
      }
      @media screen and (min-width: $bf-tablet) {
        padding-top: 0;
      }
    }
  }
</style>