<template>
  <div class="bfImage">
    <div class="bfImage-container">
      <div class="row margin-0">
        <div class="col-md-3 col-6 bfImage-shop-item" v-for="(item, index) in items" :key="index">
          <a :href="item.link">
            <img :src="item.image" :alt="item.text">
            <button type="button" class="btn btn-link">{{item.text}}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

/*
 Use locally
*/
import data from "../data/images.json";

export default {
  data() {
    return {
      items: data
    };
  }
  /*
    Use when working with server
    */
  /* created(){
        axios.get('../data/images.json')
        .then(res => {
          items: res;
          console.log(res);
        })
        .catch(err => {

        })
    }
    */
};
</script>

<style lang='scss' scoped>
@import "../styles/settings.scss";

.bfImage {
  padding: 0 calc(15px - #{$space-item-rows-mobile});
  &-container {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .row {
    margin-left: 0;
    margin-right: 0;
  }
  &-shop-item {
    position: relative;
    margin-bottom: 15px;
    padding-right: $space-item-rows-mobile;
    padding-left: $space-item-rows-mobile;

    > a {
      display: flex;
      justify-content: center;
    }
    img {
      max-width: 100%;
      flex: 0 0 auto;
      align-self: center;
    }
    button {
      color: $bf-pink-salmon;
      font-size: 14px;
      line-height: 1.3;
      text-transform: uppercase;
      text-decoration: none;
      background: white;
      border: 1px solid $bf-pink-salmon;
      border-radius: 0;
      position: absolute;

      width: 80%;
      bottom: 18px;
      padding: 14px 10px;

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

@media screen and (min-width: $bf-tablet) {
  .bfImage {
    &-container {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    padding: 0 calc(20px - #{$space-item-rows});
    &-shop-item {
      margin-bottom: 0px;
      padding-right: $space-item-rows;
      padding-left: $space-item-rows;
      button {
        width: 70%;
        bottom: 24px;
      }
    }
  }
}

@media screen and (min-width: $bf-desktop) {
  .bfImage {
    &-container {
      padding-top: 55px;
      padding-bottom: 55px;
    }
    padding: 0 calc(30px - #{$space-item-rows});
    button {
      font-size: 16px;
      padding: 14px 16px;
      width: 60%;
      bottom: 40px;
    }
  }
}
</style>

