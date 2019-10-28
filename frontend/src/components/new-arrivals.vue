<template>
  <div class="bfNewArrivals">
    <div class="bfNewArrivals-container">
      <h2 class="bfNewArrivals-title">{{title}}</h2>
      <div class="bfNewArrivals-gallery">
        <div class="bfNewArrivals-galleryItem" v-for="(image, index) in items" :key="index">
          <a :href="image.link">
            <img :src="image.image" :alt="image.altText">
            <p class="bfNewArrivals-galleryPrice">{{image.price}}</p>
            <p class="bfNewArrivals-galleryDescription">{{image.description}}</p>
          </a>
        </div>
      </div>
      <router-link 
      class="bfNewArrivals-button"
      to="/category">
        All products
      </router-link>
    </div>
  </div>
</template>

<script>
/*
 Used locally
*/
import data from "../data/new-arrivals.json";

export default {
  data() {
    return {
      items: data
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
  mounted() {
    $(".bfNewArrivals-gallery").slick({
      autoplay: false,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    });
  },
  props: {
    title: {
      type: String
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../styles/settings.scss";
.bfNewArrivals {
  &-container {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    @media screen and (min-width: $bf-tablet) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
  &-title {
    color: $bg-mine-shaft;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
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
  &-gallery {
    padding: 0 8px;
  }
  &-galleryItem {
    margin: 0 7px;
    & a {
      &:hover, 
      :active {
        text-decoration: none;
        outline: none;
      }
      &:focus {
        outline: none;
      }
    }
    & a img {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  &-galleryPrice {
    margin-bottom: 6px;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    color: $bg-mine-shaft;
  }
  &-galleryDescription {
    margin-bottom: 30px;
    text-align: left;
    font-size: 16px;
    font-weight: 100;
    color: $bf-silver-chalice;
  }
  &-button {
    display: inline-block;
    padding: 16px 30px;
    margin-top: 20px;
    font-size: 14px;
    color: $bf-pink-salmon;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1;
    border: 1px solid $bf-pink-salmon;
    border-radius: 0;
    background: $bf-white;
    
    &:hover {
      text-decoration: none;
      background: $bf-pink-salmon;
      color: white;
    }
    &:focus {
      color: white;
      background: $bf-froly;
      border: 1px solid $bf-froly;
    }
  }
}
</style>
<style lang="scss">
@import "../styles/settings.scss";
.bfNewArrivals {
  .slick-slide{
    height: auto;
  }
  .slick-next,
  .slick-prev {
    width: 48px;
    height: 48px;
    z-index: 9;

    &:hover {
     color: $bf-pink-salmon;
      &::before {
        content: url("../assets/Arrow_Icon.svg");
      }
    }
    &:active {
      color: $bf-froly;
    }
    &:before {
      content: url("../assets/slider/arrow-icon-white.svg");
      color: $bf-black;
      opacity: 1;
      display: block;
      width: 24px;
      margin: 0 auto;
    }
  }
  .slick-next {
    right: 22px;
    top: 32%;
    &:before {
      transform: rotate(180deg);
    }
    @media screen and (min-width: 425px) {
      top: 35%;
    }
    @media screen and (min-width: $bf-tablet) {
      top: 32%;
    }
    @media screen and (min-width: $bf-desktop-min) {
      top: 35%;
    }
    @media screen and (min-width: $bf-desktop) {
      top: 40%;
    }
  }
  .slick-prev {
    left: 22px;
    top: 32%;
    @media screen and (min-width: 425px) {
      top: 35%;
    }
    @media screen and (min-width: $bf-tablet) {
      top: 32%;
    }
    @media screen and (min-width: $bf-desktop-min) {
      top: 35%;
    }
    @media screen and (min-width: $bf-desktop) {
      top: 40%;
    }
  }

  .slick-dotted.slick-slider {
    margin-bottom: 0;
  }
}
</style>