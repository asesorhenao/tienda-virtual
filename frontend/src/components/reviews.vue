<template>
  <div class="bfReviews">
    <div class="container">
      <div class="bfReviews-contentTitle">
        <h2 class="bfReviews-title">COMENTARIOS</h2>
        <h3 class="bfReviews-subtitle">{{rating}}</h3>
      </div>
      <div class="bfReviews-accordions">
        <div class="accordion bfReviews-accordion" id="bfAccordion">
          <div class="card bfReviews-accordionCard" >
            <div class="card-header bfReviews-accordionHeader" id="headingOne">
             
                <div class="bfReviews-contentStars">
                  <star-rating 
                    v-model="rating"
                    :show-rating="false" 
                    inactive-color="#ffffff" 
                    active-color="#ff969c"
                    :star-size="28" 
                    :border-width="2" 
                    border-color="#ff969c"
                    :read-only="true"
                    :round-start-rating="false"
                    >
                    </star-rating>
                    <span>{{dataReviews.length}} Comentarios</span>
                </div>
                <div class="bfReviews-button">
                  <button class="btn btn-link bfReviews-accordionBtn collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ESCRIBE UN COMENTARIO
                  </button>
                </div>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#bfAccordion">
              <div class="card-body bfReviews-accordionBody">
                <p>ESCRIBE UN COMENTARIO</p>
                <form class="bfReviews-form" action="" @submit.prevent="registerSubmit">
                  <div class="form-group bfReviews-formGroup">
                    <label for="bf-score">Puntuación:</label>
                    <star-rating 
                      
                      :show-rating="false" 
                      inactive-color="#ffffff" 
                      active-color="#ff969c"
                      :star-size="28" 
                      :border-width="2" 
                      border-color="#ff969c"
                      :round-start-rating="false"
                      >
                      </star-rating>
                  </div>
                  <div class="form-group bfReviews-formGroup">
                    <label for="bf-title">Título:</label>
                    <input type="text" v-model="user.title" class="form-control bfReviews-input" :class="{ 'is-invalid': submitted && $v.user.title.$error }" id="bf-title" aria-describedby="bf-title-text">
                    <small id="bf-title-text" v-if="submitted && !$v.user.title.required" class="form-text bfReviews-errorText invalid-feedback">Título requerido</small>
                  </div>
                  <div class="form-group bfReviews-formGroup">
                    <label for="bf-review">Comentario:</label>
                    <textarea v-model="user.review" class="form-control bfReviews-input" :class="{ 'is-invalid': submitted && $v.user.review.$error }" id="bf-review" rows="3"></textarea>
                    <small id="bf-review-text" v-if="submitted && !$v.user.review.required" class="form-text bfReviews-errorText invalid-feedback">Comentario requerido</small>
                  </div>
                  <div class="bfReviews-button">
                    <button type="submit" class="btn bfReviews-postBtn">ENVIAR</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="bfReviews-contentResults">
              <div class="bfReviews-result" v-for="(review, index) in dataReviews.slice(0, dataShowCounter)" :key="index">
                <div class="bfReviews-resultTitle">
                  <h3>{{review.name}}</h3> 
                  <span>{{review.verified}}</span>
                </div>
                <div class="bfReviews-star">
                  <star-rating 
                    v-model="review.rating"
                    :show-rating="false" 
                    inactive-color="#ffffff" 
                    active-color="#ff969c"
                    :star-size="28" 
                    :border-width="2" 
                    border-color="#ff969c"
                    :read-only="true"
                    >
                    </star-rating>
                </div>
                <h2>{{review.title}}</h2>
                <p>{{review.description}}</p>
                <div class="bfReviews-resultFooter">
                  <div class="bfReviews-resultInfo">
                    <span>{{review.date}}</span>
                    <div class="bfReviews-resultLikes">
                      <span class="bfReviews-resultLikesMsg">¿Fue este comentario útil?</span>
                      <button class="bfReviews-like">
                        <img src="../assets/Like_Icon.svg" alt="" class="bfReviews-likeImg">
                        <span class="bfReviews-likeValue">0</span>
                      </button>
                      <button class="bfReviews-dislike">
                        <img src="../assets/Like_Icon.svg" alt="" class="bfReviews-dislikeImg">
                        <span class="bfReviews-dislikeValue">0</span>
                      </button>
                    </div>
                  </div>
                  <div class="bfReviews-resultShare">
                    <div class="bfReviews-resultSocialMedia" :id="'resultSocialMedia'+index">
                      <ul>
                        <li><a href=""><img src="../assets/Facebook_Icon.svg" alt=""></a></li>
                        <li><a href=""><img src="../assets/Pinterest_Icon.svg" alt=""></a></li>
                        <li><a href=""><img src="../assets/Instagram_Icon.svg" alt=""></a></li>
                        <li><a href=""><img src="../assets/Twitter_Icon.svg" alt=""></a></li>
                      </ul>
                    </div>
                    <button class="bfReviews-resultShareBtn" @click="showSocialMedia(index)">
                      <img src="../assets/Share_Icon.svg" alt="" class="bfReviews-resultShareImg">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bfReviews-btnShowMore" v-show="dataReviews.length > dataShowCounter">
        <a @click="showMore">Mostrar Más</a>
      </div>  
       <div
        class="bfReviews-noReviews"
        v-show="dataReviews.length == 0"
        >No se encontraron comentarios</div> 
    </div>
  </div>
</template>

<script>
  import data from "../data/product-gallery.json";
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
  export default {
    data() {
      return {
        reviews: data,
        dataReviews: data.reviews,
        dataShowCounter: 2,
        rating: 0,
        user: {
          title: '',
          review: ''
          
        },
        submitted: false
      };
    },
    validations: {
      user: {
          title: { required },
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
      },
      showMore () {
        this.dataShowCounter += 2;
      },
      showSocialMedia(index) {
        $('#resultSocialMedia'+index).toggle();
      }
    },
    mounted () {
      this.rating = 0;
      let sum = 0,
          cont = 0,
          num = 0;
      this.dataReviews.forEach(element => {
        sum += element.rating;
        cont ++;
      });
      
      if(sum > 0) {
        num = sum / cont;
      }
      this.rating = parseFloat(num.toFixed(1));
    },
  };
</script>
<style lang="scss" scoped>
  @import "../styles/settings.scss";

  .bfReviews {
    &-title {
      margin-bottom: 5px;
      font-size: 30px;
      text-align: center;
      color: $bg-mine-shaft;
    }
    &-subtitle {
      font-size: 24px;
      text-align: center;
      color: $bg-mine-shaft;
    }
    &-accordions {
      width: 100%;
    }
    &-accordionCard {
      border: none;
      border-radius: 0;
      margin: 0;
    }
    &-accordionHeader {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 30px 0;
      border-bottom: 0;
      border-radius: 0;
      background-color: transparent;
      margin: 0;
      @media screen and (min-width: $bf-tablet) {
        flex-wrap: nowrap;
      }
    }
    &-contentStars {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      & span {
        margin-left: 7px;
        padding-top: 6px;
        font-size: 16px;
      }
      @media screen and (min-width: $bf-tablet) {
        margin-bottom: 0;
      }
    }
    &-button {
      width: 100%;
      text-align: right;
    }
    &-accordionBtn {
      width: 100%;
      display: block;
      padding: 11px 0;
      border: solid 1px $bf-pink-salmon;
      border-radius: 0;
      background-color: $bf-white;
      color: $bf-pink-salmon;
      font-size: 16px;
      text-align: center;
      transition: all .5s;
      &:hover,
      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
        text-decoration: none;
      }
      &[data-toggle]:not(.collapsed) {
        background-color: $bf-pink-salmon;
        color: $bf-white;
        transition: all .5s;
      }
      @media screen and (min-width: $bf-tablet) {
        width: 258px;
        display: inline-block;
        padding: 11px 0;
      }
    }
    &-accordionBody {
      padding: 30px 0 30px;
      color: $bf-river-bed;
      font-size: 16px;
      line-height: 30px;
      border-top: 1px solid $bg-mine-shaft;
      & p {
        color: $bf-silver-chalice;
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
    }
    &-formGroup {
      min-height: 105px;
      margin-bottom: 5px;
      & label {
        color: $bf-silver-chalice;
        font-size: 16px;
      }
    }
    &-postBtn {
      width: 100%;
      margin-top: 20px;
      padding: 11px 0;
      border: solid 1px $bf-pink-salmon;
      border-radius: 0;
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
        width: 258px;
      }
    }
    &-result {
      padding: 20px 0;
      border-top: 1px solid $bg-mine-shaft;
      transition: all .5s;
      & h2 {
        margin: 10px 0;
        font-size: 24px;
      }
      & p {
        font-size: 16px;
        color: $bf-silver-chalice;
      }
      & span {
        font-size: 14px;
        color: $bf-silver-chalice;
      }
    }
    &-resultTitle {
      margin-bottom: 7px;
      display: flex;
      align-items: baseline;
      & h3 {
        margin-bottom: 0;
        font-size: 16px;
      }
      & span {
        margin-left: 10px;
      }
    }
    &-resultFooter {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    &-resultLikes {
      display: flex;
      align-items: center;
    }
    &-resultLikesMsg {
      display: none;
      @media screen and (min-width: $bf-tablet) {
        display: block;
      }
    }
    &-like {
      margin: 0 5px;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    &-dislike {
       margin: 0 5px;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    &-likeImg {
      width: 14px;
      height: 14px;
      margin: 0 5px;
    }
    &-dislikeImg {
      width: 14px;
      height: 14px;
      margin: 0 5px;
      transform: rotate(180deg);
    }
    &-resultShare {
      position: relative;
      text-align: right;
    }
    &-resultShareBtn {
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    &-resultShareImg {
      width: 27px;
      height: 24px;
    }
    &-resultSocialMedia {
      display: none;
      position: absolute;
      right: 0;
      top: -50px;
      padding: 5px;
      border: 2px solid $bg-mine-shaft;
      background-color: $bf-white;
      &::before {
        content: '';
        display: block;
        position: absolute;
        height: 12px;
        width: 12px;
        border: 2px solid $bg-mine-shaft;
        border-right: 0;
        border-bottom: 0;
        bottom: -8px;
        right: 1px;
        transform: rotate(225deg);
        background: $bf-white;
      }
      & ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      & ul li {
        margin: 0 10px;
      }
      & ul li a {
        width: 24px;
        height: 24px;
      }
      & ul li a img {
        width: 24px;
        height: 24px;
      }
    }
    &-btnShowMore {
      width: 100%;
      margin-top: 20px;
      & a {
        width: 100%;
        display: block;
        padding: 11px 0;
        border: solid 1px $bf-pink-salmon;
        border-radius: 0;
        background-color: $bf-white;
        color: $bf-pink-salmon;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
        &:hover,
        &:active,
        &:focus {
          outline: none;
          box-shadow: none;
          text-decoration: none;
          background-color: $bf-pink-salmon;
          color: $bf-white;
        }
        @media screen and (min-width: $bf-tablet) {
          width: auto;
          display: inline-block;
          padding: 11px 30px;
        }
      }
      @media screen and (min-width: $bf-tablet) {
        text-align: center;
      }
    }
    &-noReviews {
      width: 100%;
      text-align: center;
    }
  }
</style>