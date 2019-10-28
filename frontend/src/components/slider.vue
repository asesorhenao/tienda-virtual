<template>
  <div class="bfSlider">
    <div class="bfSlider-container">
      <div class="bfSlider-gallery">
        <div v-for="(image, index) in items" :key="index">
          <a :href="image.link">
            <picture>
              <source media="(min-width: 768px)" :srcset="image.image" :alt="image.altText">
              <img :src="image.imageMobile" :alt="image.altText">
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 Used locally
*/
import data from "../data/slider.json";

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
    $(".bfSlider-gallery").slick({
      autoplay: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    });
  }
};
</script>


<style lang="scss" scoped>
  @import "../styles/settings.scss";
  .bfSlider {
    &-container {
      padding-bottom: 20px;
    }
    &-gallery {
      img {
        max-width: 100%;
      }
    }
    @media screen and (min-width: $bf-tablet) { 
      &-container {
        padding-bottom: 40px;
      }
    }
    @media screen and (min-width: $bf-desktop) {
      &-container {
        padding-bottom: 55px;
      }
    }
  }
</style>

<style lang="scss">
@import "../styles/settings.scss";
.bfSlider {
  .slick-slide{
    height: auto;
  }
  .slick-next,
  .slick-prev {
    background: white;
    border: 1px solid $bf-pink-salmon;
    width: 48px;
    height: 48px;
    z-index: 9;

    &:hover {
      background: $bf-pink-salmon;
      &::before {
        content: url("../assets/slider/arrow-icon-white.svg");
      }
    }
    &:active {
      background: $bf-froly;
      border: 1px solid $bf-froly;
    }

    &:before {
      content: url("../assets/slider/arrow-icon.svg");
      color: white;
      opacity: 1;
      display: block;
      width: 20px;
      margin: 0 auto;
    }
  }
  .slick-next {
    right: 22px;
    &:before {
      transform: rotate(180deg);
    }
  }
  .slick-prev {
    left: 22px;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 0;
  }
  .slick-dots {
    bottom: 30px;
    li {
      margin: 0 2px;
      button {
        width: 15px;
        height: 15px;
        &:before {
          content: "";
          width: 15px;
          height: 15px;
          background: white;
          opacity: 1;
        }
        &:active {
          &:before {
            background: $bf-froly;
          }
        }
      }
    }
    .slick-active button:before {
      background: $bf-pink-salmon;
    }
  }
}
</style>



