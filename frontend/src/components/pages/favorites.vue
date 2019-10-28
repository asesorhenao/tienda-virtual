<template>
  <div class="bfFavorites">
    <div class="bfFavorites-container">
      <h2 class="bfFavorites-title">Favoritos</h2>
      <div class="bfFavorites-content">
        <div class="bfFavorites-item" v-for="(item, index) in items" :key="index">
          <button class="bfFavorites-delete" @click="deleteItem(item)"></button>
          <img class="bfFavorites-image" :src="item.image" :alt="item.altText">
          <p class="bfFavorites-price">{{item.price}}</p>
          <p class="bfFavorites-description">{{item.description}}</p>
          <p class="bfFavorites-size">{{item.size}}</p>
          <button class="bfFavorites-btnAdd">AGREGAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from "../../data/favorites.json";
  export default {
    data() {
      return {
        items: data,
      };
    },
    methods: {
      deleteItem (item) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../styles/settings.scss";

  .bfFavorites {
    &-container {
      padding: 30px 10px 0;
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
    &-content {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      width: 50%;
      position: relative;
      padding: 0 5px;
      margin-bottom: 40px;
      @media screen and (min-width: $bf-tablet) {
       width: 20%;
      }
    }
    &-image {
      width: 100%;
    }
    &-delete {
      position: absolute;
      top: 10px;
      right: 15px;
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
    }
    &-price {
      margin-bottom: 0;
      text-align: left;
      font-size: 16px;
      font-weight: 600;
      color: $bg-mine-shaft;
    }
    &-description {
      margin-bottom: 5px;
      text-align: left;
      font-size: 16px;
      font-weight: 100;
      color: $bf-silver-chalice;
    }
    &-size {
      margin-bottom: 10px;
      font-size: 14px;
      color: $bf-pink-salmon;
    }
    &-btnAdd {
      width: 100%;
      display: block;
      padding: 13px 0;
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
    }
  }
  
</style>