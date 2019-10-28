<template>
  <div class="bfTooltipBag" id="bfTooltipBag">
    <div class="bfTooltipBag-container">
      <div class="bfTooltipBag-content">
        <div class="bfTooltipBag-info">
          <div class="bfTooltipBag-contentInfo" v-for="(info, index) in items" :key="index">
            <img :src="info.image" :alt="info.alText">
            <button class="bfTooltipBag-delete" @click="deleteItem(info)"></button>
            <div class="bfTooltipBag-text">
              <h5>{{info.title}}</h5>
              <ul>
                <li><span>Precio:</span><span>${{info.price}}</span></li>
                <li><span>Color:</span><span>{{info.color[1]}}</span></li>
                <li><span>Talla:</span><span>{{info.size}}</span></li>
                <li><span>Cantidad:</span><span>{{info.amount}}</span></li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
      <div class="bfTooltipBag-total">
        <span>Total</span>
        <span>${{parseFloat(total).toFixed(2)}}</span>
      </div>
      <div class="bfTooltipBag-button">
        <router-link to="/shoppingBag" class="bfTooltipBag-btn">
          VERIFICAR
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
/*
 Use locally
*/

import data from "../data/bag.json";

export default {
  data() {
    return {
      items: data,
      total: 0
    };
  },
  methods: {
    deleteItem (item) {
      this.items.splice(this.items.indexOf(item), 1);
      this.total -= item.price;
    }
  },
  mounted () {
    this.total = 0;
    this.items.forEach(element => {
      this.total += element.price;
    });
  }
}
</script>
<style lang="scss">
  @import "../styles/settings.scss";
  .bfTooltipBag {
    width: 100%; 
    position: absolute;
    display: none;
    padding: 15px;
    right: 0;
    top: 40px;
    z-index: 10;
    &-container {
      padding: 14px;
      background-color: $bf-white;
      border: solid 1px $bg-mine-shaft;
      &::before {
        content: '';
        display: block;
        position: absolute;
        height: 12px;
        width: 12px;
        border: 1px solid $bg-mine-shaft;
        border-right: 0;
        border-bottom: 0;
        top: 9px;
        right: 18px;
        transform: rotate(45deg);
        background: $bf-white;
      }
    }
    &-content {
      display: flex;
      justify-content: space-between;
    }
    &-delete {
      position: absolute;
      top: 0;
      right: -10px;
      border: none;
      background-color: transparent;
      &::before {
        width: 20px;
        height: 20px;
        display: block;
        content: url('../assets/Round_Close_Icon.svg');
      }
      &:focus,
      &:active,
      &:hover {
        outline: none;
        &::before {
          width: 20px;
          height: 20px;
          display: block;
          content: url('../assets/Round_Close_Hover_Icon.svg');
        }
      }
    }
    &-info {
      padding-right: 10px;
      max-height: 165px;
      overflow: auto;
    }
    &-text {
      padding-right: 10px;
    }
    &-contentInfo {
      display: flex;
      position: relative;
      margin-bottom: 14px;
      & img {
        max-width: 96px;
        height: 128px;
        margin-right: 10px;
      }
      & h5 {
        font-size: 16px;
        color: $bg-mine-shaft;
      }
      & ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      & ul li {
        display: flex;
        justify-content: space-between;
      }
      & ul li span {
        font-size: 14px;
        color: $bf-silver-chalice;
      }
    }
    &-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: solid 1px $bf-silver-chalice;
      padding: 10px 0;
      & span {
        font-weight: 700;
      }
    } 
    &-btn {
      display:block;
      padding: 16px 30px;
      font-size: 14px;
      color: $bf-pink-salmon;
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
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
    @media screen and (min-width: $bf-tablet) {
      width: 350px;
    }
  }
</style>