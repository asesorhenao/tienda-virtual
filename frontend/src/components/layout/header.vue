<template>
  <div class="bfHeader" id="bfHeader-sticky">
    <nav class="navbar navbar-expand-lg bfHeader-nav">
      <div class="bfHeader-container">
        <div class="bfHeader-logo">
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="bfHeader-togglerIcon"></span>
          </button>
          <router-link to="/">
            <img src="../../assets/logo.svg" alt="Logo Bella Fashion" />
          </router-link>
        </div>
        <div class="bfHeader-search">
          <form>
            <input
              class="form-control bfHeader-searchInput"
              type="search"
              placeholder="¿Qué producto estás buscando?"
              aria-label="Search"
            />
            <button class="bfHeader-searchButton">
              <img class="bfHeader-searchIcon" src="../../assets/Search_Icon.svg" alt />
            </button>
          </form>
        </div>
        <div class="bfHeader-icons">
          <ul>
            <li>
              <router-link to="/login">
                <img class="bfHeader-icon" src="../../assets/Profile_Icon.svg" alt />
              </router-link>
            </li>
            <li>
              <router-link to="/favorites">
                <span class="bfHeader-iconNumber">{{favoritedNum}}</span>
                <img class="bfHeader-icon" src="../../assets/Favorites_Icon.svg" alt />
              </router-link>
            </li>
            <li>
              <button class="bfHeader-buttonIconBag" @click="showToolTipBag">
                <span class="bfHeader-iconNumber bfHeader-iconNumber--bag">2</span>
              </button>
              <!--<router-link to="/product">
                <span class="bfHeader-iconNumber bfHeader-iconNumber--bag">2</span>
                <img class="bfHeader-icon" src="../../assets/Bag_Icon.svg" alt>
              </router-link>-->
            </li>
          </ul>
        </div>
        <toolTipBag />
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="bfHeader-navigationMobile">
          <div class="accordion" id="bf-accordion">
            <div v-for="(nav, index) in items" :key="index" class="card bfHeader-card">
              <div class="card-header bfHeader-cardHeader" :id="'heading-'+index">
                <h2 class="mb-0 bfHeader-cardHeading">
                  <router-link class="bfHeader-cardNavLink" :to="nav.itemLink">{{nav.item}}</router-link>
                  <button
                    class="bfHeader-buttonArrow collapsed"
                    type="button"
                    data-toggle="collapse"
                    :data-target="'#collapse-'+index"
                    aria-expanded="false"
                    :aria-controls="'collapse'+index"
                    v-if="nav.child"
                  >
                    <img class="bfHeader-arrow" src="../../assets/Arrow_Icon.svg" alt />
                  </button>
                </h2>
              </div>

              <div
                :id="'collapse-'+index"
                class="collapse"
                :aria-labelledby="'heading-'+index"
                data-parent="#bf-accordion"
              >
                <div class="card-body bfHeader-cardBody" v-if="nav.child">
                  <ul class="bfHeader-navChild" v-if="nav.child">
                    <li v-for="(childs, index) in nav.child" :key="index">
                      <router-link class="bfHeader-childLink" :to="childs.itemLink">{{childs.item}}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bfHeader-navigationDesktop">
          <ul>
            <li v-for="(nav, index) in items" :key="index">
              <router-link
                class="bfHeader-linkDesktop"
                :class="{ 'bfHeader-navigationDesktop-hasChildren': nav.child }"
                :to="nav.itemLink"
              >{{nav.item}}</router-link>
              <ul v-if="nav.child" class="bfHeader-navigationDesktop-children">
                <li v-for="(childs, index) in nav.child" :key="index">
                  <router-link
                    class="bfHeader-childLinkDesktop"
                    :to="childs.itemLink"
                  >{{childs.item}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
/*
 Use locally
*/
import data from "../../data/navegation.json";
import toolTipBag from "../tooltip-bag.vue";
import { eventBus } from "../../main";

export default {
  data() {
    return {
      items: data,
      favoritedNum: 0
    };
  },
  created() {
    const getFavorited = localStorage.getItem("productsFavorited");
    if (getFavorited) {
      const parsedFavorited = JSON.parse(getFavorited);
      this.favoritedNum = parsedFavorited.length;
    }

    eventBus.$on("favoritedCount", message => {
      this.favoritedNum = message;
    });
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", event => {
      window.onscroll = function() {
        myFunction();
      };

      let navbar = document.getElementById("bfHeader-sticky");
      let divOffet = document.getElementById("bfHeader-sticky").offsetHeight;
      let sticky = navbar.offsetTop;

      function myFunction() {
        if ((window.pageYOffset) > sticky) {
          // if (window.pageYOffset > divOffet) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    });
  },
  methods: {
    showToolTipBag() {
      $('#bfTooltipBag').toggle();
    }
  },
  components: {
    toolTipBag
  }
};
</script>
<style lang="scss">
@import "../../styles/settings.scss";

#bfHeader-sticky {
  position: relative;
  &.sticky {
    background: white;
    width: 100%;
    position: fixed;
    z-index: 999;
  }
}

.bfHeader {
  &-nav {
    padding: 0;
  }
  &-container {
    width: 100%;
    position: relative;
    padding: 0.5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    background-color: $bf-white;
    .navbar-toggler {
      padding: 0;
      border: none;
      margin-right: 5px;
      &[data-toggle]:not(.collapsed) > .bfHeader-togglerIcon {
        background-image: url("../../assets/Close_Icon.svg");
      }
      &:focus {
        outline: none;
      }
    }
  }
  &-logo {
    width: 50%;
    display: flex;
    align-items: center;
    order: 1;
    & a img {
      width: 160px;
      @media screen and (min-width: $bf-tablet) {
        width: 187px;
      }
      @media screen and (min-width: $bf-desktop-min) {
        width: 219px;
      }
    }
    @media screen and (min-width: $bf-desktop-min) {
      width: 33.3%;
    }
  }
  &-search {
    width: 100%;
    position: relative;
    order: 3;
    margin-top: 10px;
    @media screen and (min-width: $bf-desktop-min) {
      order: 2;
      margin-top: 0;
      width: 33.3%;
    }
  }
  &-searchInput {
    border: none;
    border-bottom: 1px solid $bf-black;
    border-radius: 0;
    &:focus {
      border-color: initial;
      outline: 0;
      box-shadow: none;
    }
    &::placeholder {
      color: $bf-dusty-gray;
    }
  }
  &-searchButton {
    position: absolute;
    background-color: $bf-white;
    border: none;
    right: 5px;
    top: 5px;
  }
  &-searchIcon {
    width: 24px;
    height: 24px;
  }
  &-togglerIcon {
    display: flex;
    width: 26px;
    height: 20px;
    background-image: url("../../assets/Menu_Icon.svg");
    background-size: 100% 100%;
    align-items: center;
  }
  &-icons {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    order: 2;
    & ul {
      margin: 0;
      display: flex;
      list-style: none;
      align-items: center;
    }
    & li {
      display: flex;
      padding: 0 6px;
      &:last-child {
        padding-right: 0;
      }
    }
    & li a {
      position: relative;
    }
    @media screen and (min-width: $bf-desktop-min) {
      order: 3;
      width: 33.3%;
    }
  }
  &-buttonIconBag {
    position: relative;
    border: none;
    background-color: transparent;
    &::before {
      width: 24px;
      height: 24px;
      display: block;
      content: url("../../assets/Bag_Icon.svg");
    }
    &:focus,
    &:active,
    &:hover {
      outline: none;
      &::before {
        width: 24px;
        height: 24px;
        display: block;
        content: url("../../assets/Bag_Hover_Icon.svg");
      }
    }
  }
  &-icon {
    width: 24px;
    height: 24px;
  }
  &-iconNumber {
    position: absolute;
    left: 0;
    right: 0;
    top: 17%;
    color: $bf-white;
    text-decoration: none;
    text-align: center;
    font-size: 12px;
    &--bag {
      top: 35%;
    }
  }
  &-navigationMobile {
    padding: 0 15px;
    @media screen and (min-width: $bf-desktop-min) {
      display: none;
    }
  }
  &-card {
    border: none;
  }
  &-cardHeader {
    padding: 0.75rem 0;
    background-color: $bf-white;
    border-bottom: none;
  }
  &-cardHeading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-cardNavLink {
    color: $bg-mine-shaft;
    font-size: 22px;
    &:hover,
    :active,
    :focus {
      color: $bf-froly;
      text-decoration: none;
    }
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
    padding: 0.2rem 0;
    color: $bf-silver-chalice;
    &:hover,
    :active,
    :focus {
      color: $bf-froly;
      text-decoration: none;
    }
  }
  &-buttonArrow {
    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
    &[data-toggle]:not(.collapsed) > .bfHeader-arrow {
      transform: rotate(90deg);
      transition: all 0.5s;
    }
    & img {
      &:hover,
      &:focus,
      &:active {
        outline: none;
      }
    }
  }
  &-arrow {
    width: 25px;
    position: relative;
    transform: rotate(-90deg);
    transition: all 0.5s;
  }
  &-navigationDesktop {
    display: none;
    @media screen and (min-width: $bf-desktop-min) {
      display: block;
      width: 100%;
      background: #f4f3f1;
    }
    > ul {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      li {
        a {
          display: block;
          &:hover,
          :active,
          :focus {
            color: $bf-froly;
            text-decoration: none;
          }
        }
      }
    }
    li {
      list-style: none;
    }
    &-children {
      display: none;
      &:hover {
        width: 209px;
        margin-left: 10px;
        padding: 10px 0;
        display: block;
        position: absolute;
        z-index: 999;
        background: $bf-white;
        border: 1px solid #212d50;
        border-top: 0;
      }
    }
    &-hasChildren:hover {
      & + .bfHeader-navigationDesktop-children {
        width: 209px;
        margin-left: 10px;
        padding: 10px 0;
        display: block;
        position: absolute;
        z-index: 999;
        background: $bf-white;
        border: 1px solid #212d50;
        border-top: 0;
      }
    }
  }
  &-linkDesktop {
    color: $bf-thunder;
    padding: 8px 30px;
  }
  &-childLinkDesktop {
    color: $bf-silver-chalice;
    padding: 5px 20px;
  }

  .navbar-expand-lg {
    flex-flow: wrap;
  }
}
</style>