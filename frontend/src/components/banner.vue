<template>
  <div class="bfBanner">
    <div class="bfBanner-container">
      <div class="row">
        <div class="col-md col-12 bfBanner--image-col">
          <img :src="items.image" :alt="items.altText">
        </div>
        <div class="col-md col-12 align-middle text-center bfBanner--blue-bg">
          <h2>{{items.title}}</h2>
          <p>{{items.text}}</p>
          <a :href="items.buttonLink" class="btn btn-link">{{items.buttonText}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/banner.json";

export default {
  data() {
    return {
      items: data
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/settings.scss";
.bfBanner {
  &-container {
    padding-top: 20px;
    padding-bottom: 20px;
    .row {
      margin-left: 0;
      margin-right: 0;
    }
  }
  &--image-col {
    padding: 0;
    img {
      width: 100%;
    }
  }
  &--blue-bg {
    background: url("../assets/banner/bg-info-banner.jpg") center no-repeat;
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 20px 15px;
    h2 {
      font-size: 24px;
      line-height: 32px;
      text-transform: uppercase;
      border-bottom: 1px solid #3f3f3f;
      width: 100%;
      padding-bottom: 8px;
    }
    p {
      line-height: 32px;
    }
    a {
      font-size: 14px;
      color: $bf-pink-salmon;
      text-transform: uppercase;
      text-decoration: none;
      line-height: 1;
      border: 1px solid $bf-pink-salmon;
      border-radius: 0;
      background: white;
      padding: 18px 30px;

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
}
@media screen and (min-width: 425px) and (max-width: 767px) {
  .bfBanner {
    &--blue-bg {
      min-height: 340px;
    }
  }
}
@media screen and (min-width: $bf-tablet) {
  .bfBanner {
    &-container {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    &--blue-bg {
      padding: 20px;
      h2 {
        font-size: 36px;
        padding: 5px 60px 15px;
        width: auto;
      }
      p {
        margin-bottom: 10px;
      }
      a {
        min-width: 258px;
      }
    }
  }
}
@media screen and (min-width: 980px) {
  .bfBanner {
    &--blue-bg {
      h2 {
        padding: 10px 60px 34px;
      }
      p {
        margin-top: 25px;
        margin-bottom: 34px;
      }
      a {
        min-width: 258px;
      }
    }
  }
}

@media screen and (min-width: $bf-desktop) {
  .bfBanner {
    &-container {
      padding-top: 55px;
      padding-bottom: 55px;
    }
    &--blue-bg {
      padding: 20px 30px;
      h2 {
        padding: 10px 60px 34px;
      }
      p {
        margin-top: 42px;
        margin-bottom: 58px;
        padding: 0 7%;
      }
    }
  }
}
@media screen and (min-width: 1800px) {
  .bfBanner {
    &--blue-bg {
      p {
        padding: 0 15%;
      }
    }
  }
}
</style>
