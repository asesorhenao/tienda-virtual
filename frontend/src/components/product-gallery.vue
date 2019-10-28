<template>
  <div class="bfProductGallery">
    <div class="bfProductGallery-container container">
      <div class="bfProductGallery-gallery">
        <div class="bfProductGallery-slider">
          <div v-for="(image, index) in galleries" :key="index" @click="onActiveImage(index)" data-toggle="modal" data-target="#productGalleryModal">
            <img :src="image.dataToLoad" :alt="image.alt">
          </div>
        </div>
          <div class="bfProductGallery-sliderNav">
          <div v-for="(image, index) in galleries" :key="index">
            <img :src="image.thumbImage" :alt="image.alt">
          </div>
        </div> 
      </div>
      <div class="bfProductGallery-content">
        <h4 class="bfProductGallery-title">{{items.title}}</h4>
        <p>
          <span class="bfProductGallery-discount">{{items.discount}}</span>
          <span class="bfProductGallery-price">{{items.price}}</span>
        </p>
        <div class="bfProductGallery-reviews">
          <div class="bfProductGallery-review">
            <star-rating 
              v-model="rating"
              :show-rating="false" 
              inactive-color="#ffffff" 
              active-color="#ff969c"
              :star-size="19" 
              :border-width="2" 
              border-color="#ff969c"
              :read-only="true"
              :round-start-rating="false"
              >
              </star-rating>
              <span>{{sumRating.length}} Comentarios</span>
          </div>
          <div class="bfProductGallery-reviewLink">
            <router-link to="/myAcount">
              ESCRIBIR COMENTARIO
            </router-link>
          </div>
        </div>
        <div class="bfProductGallery-colors">
          <div class="bfProductGallery-colorsButtons">
            <button v-for="(item, index) in items.colors" :key="index" :style=" {background: item.value }" @click="onChangeColor(index)" >
            </button>
          </div>
          <p>{{color}}</p>
        </div>
        <div class="bfProductGallery-sizeChart">
          <button 
            class="bfProductGallery-sizeChartBtn" 
            data-toggle="modal" 
            data-target="#sizeChartModal"
          >Tabla de Tallas
          </button>
        </div>
        <div class="bfProductGallery-selects">
          <div class="bfProductGallery-select">
            <vue-single-select :options="items.sizes" :value="items.sizes" placeholder="TALLA"></vue-single-select>
          </div>
          <div class="bfProductGallery-select">
            <vue-single-select :options="items.amount" :value="items.amount" placeholder="CANTIDAD"></vue-single-select>
          </div>
        </div>
        <div class="bfProductGallery-description">
          <ul>
            <li>
              <img class="bfProductGallery-img" src="../assets/Fast_Shipping_Icon.svg" alt="">
              <span>Políticas de devolución de 30 días</span>
            </li>
            <li>
              <img class="bfProductGallery-img" src="../assets/Easy_Returns_Icon.svg" alt="">
              <span>Pago 100% seguro con tarjeta de crédito Paypal o pago por adelantado.</span>
            </li>
          </ul>
        </div>
        <div class="bfProductGallery-buttons">
          <button class="bfProductGallery-btnBag">ADICIONAR A LA BOLSA</button>
          <button class="bfProductGallery-btnFavorites"></button>
        </div>
        <div class="bfProductGallery-accordions">
          <div class="accordion bfProductGallery-accordion" id="bfAccordion">
            <div class="card bfProductGallery-accordionCard">
              <div class="card-header bfProductGallery-accordionHeader bfProductGallery-accordionHeader--noLine" id="headingOne">
                <h2 class="bfProductGallery-accordionHeading">
                  <button class="btn btn-link bfProductGallery-accordionBtn collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span>DETALLES</span> 
                    <img class="bfProductGallery-accordionArrow" src="../assets/Arrow_Icon.svg" alt="">
                  </button>
                </h2>
              </div>
              <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#bfAccordion">
                <div class="card-body bfProductGallery-accordionBody">
                  <ul>
                    <li v-for="(item, index) in items.details" :key="index">{{item}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card bfProductGallery-accordionCard">
              <div class="card-header bfProductGallery-accordionHeader" id="headingTwo">
                <h2 class="bfProductGallery-accordionHeading bfProductGallery-accordionHeading--noLine">
                  <button class="btn btn-link bfProductGallery-accordionBtn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span>DATOS DE ENVÍO</span> 
                    <img class="bfProductGallery-accordionArrow" src="../assets/Arrow_Icon.svg" alt="">
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#bfAccordion">
                <div class="card-body bfProductGallery-accordionBody">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eaque dolorum, nulla impedit rem cupiditate a nesciunt, vitae reprehenderit saepe aliquam facilis. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade bfProductGallery-modal" id="productGalleryModal" tabindex="-1" role="dialog" aria-labelledby="productGalleryModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl bfProductGallery-modalDialog" role="document">
        <div class="modal-content bfProductGallery-modalContent">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <img class="bfProductGallery-modalClose" src="../assets/Close_Icon.svg" alt="">
            </button>
          </div>
          <div class="modal-body bfProductGallery-modalBody">
            <div class="bfProductGallery-sliderModal">
              <div v-for="(image, index) in galleries" :key="index">
                <img :src="image.image" :alt="image.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade bfProductGallery-modalSC" id="sizeChartModal" tabindex="-1" role="dialog" aria-labelledby="sizeChartModalLabel" aria-hidden="true">
      <div class="modal-dialog bfProductGallery-modalSCDialog" role="document">
        <div class="modal-content bfProductGallery-modalSCContent">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <img class="bfProductGallery-modalSCClose" src="../assets/Close_Icon.svg" alt="">
            </button>
          </div>
          <div class="modal-body bfProductGallery-modalSCBody">
            <h3>Título</h3>
            <div class="table-responsive">
              <table class="table table-striped table-bordered bfProductGallery-tableSC">
                <thead>
                  <tr>
                    <th>Nuestro Tamaño</th>
                    <th>Largo de manga</th>
                    <th>Pecho</th>
                    <th>Cintura</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items.sizeschart" :key="index">
                    <td>{{item.size}}</td>
                    <td>{{item.sleeve}}</td>
                    <td>{{item.chest}}</td>
                    <td>{{item.waist}}</td>
                  </tr>
                </tbody>
              </table>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 Used locally
*/
import data from "../data/product-gallery.json";

export default {
  data() {
    return {
      items: data,
      galleries: data.colors[0].gallery,
      color: data.colors[0].color,
      sumRating: data.reviews,
      rating: 0
    };
  },
  /*
    Use when working with server
 */
  /* created(){
        axios.get('../data/slider.json')
        .then(res => {
          items: res;
          console.log(res);
        })
        .catch(err => {

        })
    },
    */
  methods:{
    onChangeColor(index){
      this.galleries = this.items.colors[index].gallery;
      this.color = this.items.colors[index].color
      $('.bfProductGallery-sliderNav').slick('slickGoTo',0);
    },
    onActiveImage(index){
      $('.bfProductGallery-sliderModal').slick('slickGoTo',index);
    }
  },
  mounted() {
    this.rating = 0;
      let sum = 0,
          cont = 0,
          num = 0;
      this.sumRating.forEach(element => {
        sum += element.rating;
        cont ++;
      });
      
      if(sum > 0) {
        num = sum / cont;
      }
      this.rating = parseFloat(num.toFixed(1));
    $(".bfProductGallery-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.bfProductGallery-sliderNav',
      dots: false,
      arrows: false,
    });
    $('.bfProductGallery-sliderNav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.bfProductGallery-slider',
      focusOnSelect: true,
      arrows: false
    });
    setTimeout(() => {
      $('.bfProductGallery-sliderModal').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.bfProductGallery-slider',
        fade: true,
        arrows: true
      });
    },1500);
  }
};
</script>


<style lang="scss" scoped>
  @import "../styles/settings.scss";
  .bfProductGallery {
    &-container {
      padding: 50px 15px;
      @media screen and (min-width: $bf-tablet) {
        display: flex;
        flex-wrap: wrap;
      }
    }  
    &-gallery {
      width: 100%;
      position: relative;
      padding: 0;
      margin-bottom: 35px;
      @media screen and (min-width: $bf-tablet) {
        width: 50%;
        margin-bottom: 0;
      }
    }  
    &-slider {
      margin-bottom: 25px;
      & img {
        width: 100%;
        max-width: 570px;
      }
    }
    &-sliderNav {
      padding-bottom: 20px;
      & img {
        width: 100%;
        max-width: 70px;
      }
    }
    &-sliderModal {
      position: relative;
      & img {
        width: 100%;
      }
    }
    &-content {
      width: 100%;
      @media screen and (min-width: $bf-tablet) {
        width: 50%;
        padding-left: 5%;
      }
    } 
    &-title {
      font-size: 24px;
      color: $bg-mine-shaft;
    }
    &-discount {
      margin-right: 10px;
      font-size: 30px;
      font-weight: 700;
      color: $bg-mine-shaft;
    }
    &-price {
      font-size: 14px;
      color: $bf-river-bed;
      text-decoration: line-through;
    }
    &-reviews {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 10px 0 20px;
      @media screen and (min-width: $bf-desktop-min) {
         margin: 20px 0 30px;
      }
    }
    &-review {
      display: flex;
      align-items: center;
      & span {
        margin-top: 7px;
        margin-left: 10px;
        font-size: 14px;
        color: $bf-river-bed;
      }
    }
    &-reviewLink {
      padding-top: 7px;
      & a {
        color: $bg-mine-shaft;
        &:hover,
        &:active,
        &:focus {
          color: $bf-pink-salmon;
        }
      }
    }
    &-colors {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 24px;
      & p {
        color: $bg-mine-shaft;
        margin-bottom: 0;
      }
      @media screen and (min-width: $bf-desktop-min) {
        margin: 0 0 30px;
      }
    }
    &-colorsButtons {
      display: flex;
      & button {
        width: 32px;
        height: 32px;
        margin-right: 16px;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
    &-sizeChartBtn {
      margin-bottom: 10px;
      color: $bf-pink-salmon;
      text-decoration: underline;
      &:focus {
        outline: none;
      }
    }
    &-selects {
      display: flex;
      margin: 0 0 24px;
      @media screen and (min-width: $bf-desktop-min) {
        margin: 0 0 40px;
      }
    } 
    &-select {
      width: 50%;
      height: 48px;
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    &-description {
      & ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      & ul li {
        display: flex;
        margin-bottom: 10px;
        align-items: baseline;
      }
      & span {
        font-size: 14px;
        color: $bf-alto;
      }
    }
    &-img {
      width: 15px;
      height: 12px;
      margin-right: 5px;
    }
    &-buttons {
      display: flex;
      margin: 30px 0;
      & button {
        padding: 11px 0;
        border: solid 1px $bf-pink-salmon;
        background-color: $bf-white;
        color: $bf-pink-salmon;
        font-size: 16px;
        &:hover,
        &:active,
        &:focus {
          outline: none;
          box-shadow: none;
          background-color: $bf-pink-salmon;
          color: $bf-white;
        }
      }
      & img {
        width: 20px;
      }
      @media screen and (min-width: $bf-desktop-min) {
        margin: 50px 0;
      }
    }
    &-btnBag {
      width: 100%;
      margin-right: 10px;
    }
    &-btnFavorites {
      width: 70px;
      background-image: url('../assets/Favorites_Outline_Icon.svg');
      background-repeat: no-repeat;
      background-position: center, center;
      background-size: 24px;
      &:hover,
      &:active,
      &:focus {
        background-image: url('../assets/Favorites_Outline_hover_Icon.svg');
      }
    }
    &-accordionCard {
      border: none;
      border-radius: 0;
      margin: 0;
    }
    &-accordionHeader {
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0;
      border-bottom: 0;
      border-top: 1px solid $bg-mine-shaft;
      &--noLine {
        border-top: none;
      }
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
        &[data-toggle]:not(.collapsed) > .bfProductGallery-accordionArrow {
          transform: rotate(90deg);
          transition: all .5s;
        }
      }
    }
    &-accordionHeading {
      width: 100%;
      height: 100%;
      display: block;
    }
    &-accordionArrow {
      width: 16px;
      transform: rotate(-90deg);
      transition: all .5s;
    }
    &-accordionBody {
      padding: 0;
      color: $bf-river-bed;
      font-size: 16px;
      line-height: 30px;
      & ul {
        list-style: none;
        padding: 0;
      }
    }
    &-modalContent {
      width: 100%;
      height: 100%;
    }
    &-modalDialog {
      margin: 0 auto;
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
    &-modalBody {
      padding: 0;
    }
    &-modalClose {
      width: 21px;
      height: 21px;
    }
    &-modalSCContent {
      width: auto;
      height: auto;
    }
    &-modalSCDialog {
      margin: 0 auto;
      padding: 40px 15px;
    }
    &-modalSCBody {
      padding: 10px;
    }
    &-tableSC {
      min-width: 430px;
    }
    &-modalSCClose {
      width: 21px;
      height: 21px;
    }
  }
</style>

<style lang="scss">
@import "../styles/settings.scss";
.bfProductGallery {
  &-slider {
    .slick-slide {
      display: flex;
      justify-content: center;
    }
  }
  &-sliderNav {
    .slick-slide {
      padding-bottom: 5px;
      margin: 0 10px;
      @media screen and (min-width: $bf-tablet) {
        margin: 0 15px;
        max-width: 70px;
      }
    }
    .slick-track {
      display: flex;
      justify-content: center;
    }
    .slick-current {
      border-bottom: 2px solid $bf-pink-salmon;
      &:focus {
        outline: none;
      }
    }
  }
  &-modal {
    .modal-header {
      border-bottom: none;
      .close {
        opacity: 1;
      }
    }
  }
  &-sliderModal {
    .slick-next,
    .slick-prev {
      width: 48px;
      height: 48px;
      z-index: 9;
      &:hover, 
      &:active {
        &::before {
          content: url("../assets/slider/arrow-icon-white.svg");
        }
      }
      &:before {
        content: url("../assets/Arrow_Icon.svg");
        opacity: 1;
        display: block;
        width: 20px;
        margin: 0 auto;
      }
    } 
    .slick-next {
      right: 0;
      &:before {
        transform: rotate(180deg);
      }
    }
    .slick-prev {
      left: 0;
    }
  }
  .search-input[data-v-27213e1d] {
    height: 48px;
    border: 1px solid $bf-silver-chalice;
    border-radius: 0;
    &:focus {
      outline: none;
    }
  }
  .icons[data-v-27213e1d] {
    font-size: 16px;
    fill: $bf-silver-chalice;
  }
}
</style>