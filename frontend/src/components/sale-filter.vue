<template>
  <div class="bfSaleFilter">
    <div class="bfSaleFilter-container">
      <h2 class="bfSaleFilter-title">{{title}}</h2>
      <div class="bfSaleFilter-totalItems">{{dataToShow.length}} Items</div>
      <div class="bfSaleFilter-filter">
        <div
          class="bfSaleFilter-filter-title"
          data-toggle="collapse"
          href="#filterCollapse"
          role="button"
          aria-expanded="false"
          aria-controls="filterCollapse"
          @click="toggleFilter = !toggleFilter"
        >
          Filtrar
          <img src="../assets/Arrow_Icon.svg" :class="{up : toggleFilter}" />
        </div>
        <!-- Filter Menu Mobile -->
        <div id="filterCollapse" class="bfSaleFilter-filter-content collapse">
          <form id="bfSaleFilter-filter-form">
            <div
              v-for="(item, index) in filterDataToShow"
              :key="index"
              :class="'bfSaleFilter-filter-'+item.value+' bfSaleFilter-filter-content-items'"
            >
              <div
                class="bfSaleFilter-filter-content-btn"
                data-toggle="modal"
                :data-target="'#modalFilter-'+index"
              >{{item.text}}</div>

              <div
                class="modal fade"
                :id="'modalFilter-'+index"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="bfSaleFilter-filter-content-subMenus">
                        <div
                          class="form-check"
                          v-for="(subItem, indexSubItem) in item.options"
                          :key="indexSubItem"
                        >
                          <input
                            class="bfSaleFilter-form-check-input"
                            type="radio"
                            :name="'radioGroup_'+index"
                            :id="'radios_'+index+'_'+indexSubItem"
                            :value="subItem.value"
                          />
                          <label
                            class="form-check-label"
                            :for="'radios_'+index+'_'+indexSubItem"
                            @click.stop="onFilterData(item.value, subItem.value, subItem.text, index)"
                          >
                            {{subItem.text}}
                            <template v-if="item.value == 'color'">
                              <span
                                class="radioBox_before_color"
                                :style="{ background: subItem.hex  }"
                              ></span>
                              <span class="radioBox_after_color"></span>
                            </template>
                            <template v-else>
                              <span class="radioBox_before"></span>
                              <span class="radioBox_after"></span>
                            </template>
                          </label>
                        </div>
                        <!-- DON'T REMOVE, IT MAY BE ACTIVATED IN THE FUTURE -->
                        <!-- <div class="btn-modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Filtrar</button>
                        </div>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bfSaleFilter-filter-content-items"
              v-show=" isBeingFiltered || isBeingSorted "
            >
              <div
                class="bfSaleFilter-filter-content-btn"
                data-toggle="collapse"
                href="#filterCollapse"
                role="button"
                aria-expanded="false"
                aria-controls="filterCollapse"
                @click="onClearFilters"
              >Borrar Filtros</div>
            </div>
          </form>
        </div>
        <!-- Filter Menu Desktop -->
        <div class="bfSaleFilter-filter-content-desktop" v-click-outside="onCloseMenu">
          <form id="bfSaleFilter-filter-form-desk">
            <div
              v-for="(item, index) in filterDataToShow"
              :key="index"
              :class="['bfSaleFilter-filter-'+item.value+' bfSaleFilter-filter-content-desktop-items', {'isActive' : onCheckToggleFilterMenuDesk(index), 'isRight' : toRightMenu } ]"
              :style="{zIndex: filterDataToShow.length - index}"
            >
              <div
                class="bfSaleFilter-filter-content-desktop-btn"
                :id="'bfSaleFilter-btn-'+index"
                @click.stop="onToggleFilterMenuDesk(index)"
              >
                {{item.text}}
                <img src="../assets/Arrow_Icon.svg" :class="{up : toggleFilter}" />
              </div>

              <div
                class="bfSaleFilter-filter-content-desktop-container-submenu"
                :id="'filter-desk-'+index"
                v-show="toogleMenuFilter == ('filter-desk-'+ index)"
              >
                <div class="bfSaleFilter-filter-content-desktop-subMenus">
                  <div
                    class="form-check"
                    v-for="(subItem, indexSubItem) in item.options"
                    :key="indexSubItem"
                  >
                    <input
                      class="bfSaleFilter-form-check-input"
                      type="radio"
                      :name="'radioGroup_desk_'+index"
                      :id="'radios_desk_'+index+'_'+indexSubItem"
                      :value="subItem.value"
                    />
                    <label
                      class="form-check-label"
                      :for="'radios_desk_'+index+'_'+indexSubItem"
                      @click="onFilterData(item.value, subItem.value, subItem.text, index)"
                    >
                      {{subItem.text}}
                      <template v-if="item.value == 'color'">
                        <span class="radioBox_before_color" :style="{ background: subItem.value  }"></span>
                        <span class="radioBox_after_color"></span>
                      </template>
                      <template v-else>
                        <span class="radioBox_before"></span>
                        <span class="radioBox_after"></span>
                      </template>
                    </label>
                  </div>

                  <!-- DON'T REMOVE, IT MAY BE ACTIVATED IN THE FUTURE -->
                  <!-- <div class="btn-modal-footer">
                  <button
                    type="button"
                    class="btn btn-light"
                    data-dismiss="modal"
                    @click="onCloseMenu"
                  >Cerrar</button>
                  <button type="button" class="btn btn-primary">Filtrar</button>
                  </div>-->
                </div>
              </div>
            </div>
            <div class="bfSaleFilter-filter-content-desktop-items">
              <div
                v-show=" isBeingFiltered || isBeingSorted "
                class="bfSaleFilter-filter-content-desktop-btn"
                @click="onClearFilters"
              >Borrar Filtros</div>
            </div>
          </form>
        </div>
      </div>
      <div class="bfSaleFilter-grid">
        <div
          class="bfSaleFilter-gridItem"
          v-for="(item, index) in dataToShow.slice(0, dataShowCounter)"
          :key="index"
        >
          <router-link to="/product">
            <img class="bfSaleFilter-gridItem-itemImage" :src="item.image" alt />
          </router-link>
          <div class="bfSaleFilter-gridItem-priceFav">
            <div class="bfSaleFilter-gridItem-priceFav-price">${{item.price}}</div>
            <div class="bfSaleFilter-gridItem-priceFav-fav">
              <i @click="onFavorite(item.id)" :class="favoriteClass(item.id)"></i>
            </div>
          </div>
          <div class="bfSaleFilter-gridItem-title">{{item.title}}</div>
        </div>
        <div class="bfSaleFilter-grid-btnShowMore" v-show="dataToShow.length > dataShowCounter">
          <a @click="showMore">Mostrar Mas</a>
        </div>
        <div
          class="bfSaleFilter-grid-noItems"
          v-show="dataToShow.length == 0"
        >No se encontraron productos</div>
      </div>
    </div>
  </div>
</template>

<script>
import fullData from "../data/sale-filter-category.json";
import filterData from "../data/sale-filter-filterOptions.json";
import { eventBus } from "../main";

export default {
  props: {
    title: String,
    category: String
  },
  data() {
    return {
      fullData,
      filteredData: fullData,
      dataToShow: fullData,
      dataShowCounter: 30,
      filterData,
      filterDataToShow: [],
      filtersToApply: {},
      isBeingSorted: "",
      isBeingFiltered: false,
      favorited: [],
      toRightMenu: false,
      toggleFilter: false,
      toogleMenuFilter: String
    };
  },
  created() {
    this.filterDataToShow = JSON.parse(JSON.stringify(this.filterData));
    this.dataToShow = [...this.filteredData];
    const getFavorited = localStorage.getItem("productsFavorited");
    if (getFavorited) this.favorited = JSON.parse(getFavorited);
    this.emiteFavoritedCount();
  },
  methods: {
    onToggleFilterMenuDesk: function(index) {
      const myFilterDesk = "filter-desk-" + index;
      this.toogleMenuFilter =
        this.toogleMenuFilter == myFilterDesk
          ? ""
          : (this.toogleMenuFilter = "filter-desk-" + index);

      const menuBox = document.getElementById("bfSaleFilter-btn-" + index);
      const bounding = menuBox.getBoundingClientRect();

      if (document.documentElement.clientWidth - bounding.right < 290) {
        this.toRightMenu = true;
      } else {
        this.toRightMenu = false;
      }
    },

    onCheckToggleFilterMenuDesk: function(index) {
      if (this.toogleMenuFilter == "filter-desk-" + index) return true;
    },

    onCloseMenu: function() {
      this.toogleMenuFilter = "";
    },

    onFilterData(
      filterCategory = "",
      valueFilter = "",
      textFilter = "",
      index = 0
    ) {
      // Change text on filter according to selection
      this.filterDataToShow[index].text = textFilter;

      this.dataShowCounter = 30;

      if (filterCategory == "sortBy") {
        this.isBeingSorted = valueFilter;
        this.onSortBy(valueFilter);
      } else {
        this.isBeingFiltered = true;
        this.filtersToApply[filterCategory] = valueFilter;

        let mynewArray = this.fullData;

        for (const key in this.filtersToApply) {
          mynewArray = mynewArray.filter(element => {
            if (Array.isArray(element[key])) {
              return element[key].find(e => {
                return e == this.filtersToApply[key];
              });
            } else {
              if (key == "price") {
                let priceSplited = this.filtersToApply[key].split("-");
                if (priceSplited.length == 2) {
                  return (
                    element[key] >= parseInt(priceSplited[0]) &&
                    element[key] <= parseInt(priceSplited[1])
                  );
                } else {
                  priceSplited = this.filtersToApply[key].split("+");
                  return element[key] >= parseInt(priceSplited[0]);
                }
              }
            }
          });
        }
        this.filteredData = mynewArray;

        if (this.isBeingSorted) this.onSortBy(this.isBeingSorted);
        else this.dataToShow = mynewArray;
      }
      this.onCloseMenu();

      // Close modal on Mobile
      $("#modalFilter-" + index).modal("hide");
    },

    showMore() {
      this.dataShowCounter += 30;
    },

    onSortBy(valueFilter) {
      let toSort = this.filteredData.slice();
      if (valueFilter != "relevance") {
        toSort.sort((elementA, elementB) => {
          if (valueFilter == "lowToHigh")
            return parseInt(elementA.price, 10) - parseInt(elementB.price, 10);
          else
            return parseInt(elementB.price, 10) - parseInt(elementA.price, 10);
        });
      }
      this.dataToShow = toSort.slice();
    },

    onClearFilters() {
      this.dataToShow = this.fullData.slice();
      this.filterDataToShow = JSON.parse(JSON.stringify(this.filterData));
      this.filtersToApply = {};
      this.isBeingSorted = "";
      this.isBeingFiltered = this.toggleFilter = false;
      this.dataShowCounter = 30;
      document.getElementById("bfSaleFilter-filter-form").reset();
      document.getElementById("bfSaleFilter-filter-form-desk").reset();
    },
    favoriteClass: function(id) {
      return {
        hearthFavorited: this.favorited.find(element => element == id)
      };
    },

    onFavorite(id) {
      const indexof = this.favorited.findIndex(element => {
        return element == id;
      });
      if (indexof == -1) this.favorited.push(id);
      else this.favorited.splice(indexof, 1);

      localStorage.setItem("productsFavorited", JSON.stringify(this.favorited));
      this.emiteFavoritedCount();
    },

    emiteFavoritedCount() {
      eventBus.$emit("favoritedCount", this.favorited.length);
    }
  },

  // Directive for click outside element
  directives: {
    clickOutside: {
      bind: function(el, binding, vnode) {
        window.event = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", window.event);
      },
      unbind: function(el) {
        document.body.removeEventListener("click", window.event);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";
.bfSaleFilter {
  &-container {
    padding: 20px 8px;
    @media screen and (min-width: $bf-tablet) {
      padding: 40px 15px;
    }
    @media screen and (min-width: $bf-desktop) {
      padding: 55px 23px;
    }
  }
  &-title {
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
    padding: 0 20px;
  }
  &-totalItems {
    text-align: center;
  }
  &-filter {
    padding: 0 7px;

    &-title {
      text-transform: uppercase;
      padding: 20px 0;
      img {
        margin-left: 7px;
        margin-top: -3px;
        max-width: 16px;
        transform: rotate(-90deg);
        transition: all 0.5s;
      }
      img.up {
        transform: rotate(90deg);
      }
    }

    &-content {
      transition: all 0.5s;
      &-desktop {
        display: none;
      }
      &-btn {
        display: block;
        border: 1px solid black;
        text-align: center;
        text-transform: uppercase;
        padding: 12px 16px;
        margin-bottom: 15px;
      }
      &-subMenus,
      &-desktop-subMenus {
        list-style: none;

        .form-check {
          display: flex;
          margin-bottom: 14px;
          padding-left: 0;

          label {
            flex: 1 1;
          }

          input[type="radio"] + label {
            display: inline-block;
            cursor: pointer;
            position: relative;
            padding-left: 30px;

            .radioBox_before,
            .radioBox_before_color {
              content: "";
              display: block;
              width: 16px;
              height: 16px;
              margin-right: 14px;
              position: absolute;
              top: 4px;
              left: 0;
              border: 1px solid black;
              background-color: #fff;
            }
            .radioBox_before_color {
              border: 1px solid #d2d2d2;
              width: 32px;
              height: 32px;
            }
          }

          input[type="radio"] {
            display: none !important;
            *display: inline;

            &:checked + label .radioBox_after,
            &:checked + label .radioBox_after_color {
              content: "";
              display: block;
              position: absolute;
              top: 4px;
              left: 0px;
              width: 16px;
              height: 16px;
              background: $bf-pink-salmon;
              border: 1px solid black;
            }
            &:checked + label .radioBox_after_color {
              border: 1px solid $bf-pink-salmon;
              top: 1px;
              left: -3px;
              width: 38px;
              height: 38px;
              background: transparent;
            }
          }
        }
      }
      .modal-content,
      &-desktop-subMenus {
        border-radius: 0px;
        padding: 15px 0;
        .btn-modal-footer {
          display: flex;
          padding-top: 10px;
          .btn {
            text-transform: uppercase;
            border-radius: 0;
            flex: 50%;
            padding: 10px 16px;
          }
          .btn-light {
            border: 1px solid $bf-pink-salmon;
            background: white;
            color: $bf-pink-salmon;
            margin-right: 5px;
          }
          .btn-primary {
            background: $bf-pink-salmon;
            border: 0px;
            margin-left: 5px;
          }
        }
      }
    }

    &-color {
      .form-check {
        input[type="radio"] + label {
          padding-left: 45px;
          padding-top: 7px;
        }
      }
    }
  }
  &-grid {
    display: flex;
    flex-wrap: wrap;

    &-noItems {
      width: 100%;
      text-align: center;
      padding: 30px 16px 16px;
    }

    &-btnShowMore {
      width: 100%;
      text-align: center;
      a {
        display: inline-block;
        font-size: 14px;
        color: $bf-pink-salmon;
        text-transform: uppercase;
        text-decoration: none;
        line-height: 1;
        border: 1px solid $bf-pink-salmon;
        border-radius: 0;
        background: #ffffff;
        padding: 16px 30px;
        margin-top: 20px;
        cursor: pointer;

        &:hover {
          text-decoration: none;
          background: $bf-pink-salmon;
          color: white;
        }
      }
    }
  }
  &-gridItem {
    width: 50%;
    padding: 7px;
    margin-bottom: 50px;
    &-itemImage {
      max-width: 100%;
    }
    &-priceFav {
      display: flex;
      padding-top: 14px;
      &-price {
        flex: 50%;
        font-weight: bold;
      }
      &-fav {
        flex: 50%;
        text-align: right;
        i {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-top: 5px;
          background: url("../assets/Favorites_Outline_Icon.svg") no-repeat;

          @media screen and (min-width: $bf-desktop-min) {
            &:hover {
              cursor: pointer;
              background: url("../assets/Favorites_Hover_Icon.svg") no-repeat;
            }
          }
        }
        i.hearthFavorited {
          background: url("../assets/Favorites_Hover_Icon.svg") no-repeat;
        }
      }
    }
    &-title {
      color: #a8a8a8;
    }
    @media screen and (min-width: $bf-tablet) {
      width: 20%;
      padding: 5px;
    }
    @media screen and (min-width: $bf-desktop) {
      padding: 7px;
    }
  }
  @media screen and (min-width: $bf-tablet) {
    &-filter {
      &-title {
        display: none;
      }
      &-content {
        display: none;

        &-desktop {
          display: inline-block;
          margin-top: 16px;
          &-subMenus {
            padding: 16px;
            min-width: 290px;
          }
          &-items {
            display: inline-block;
            position: relative;
            &:first-child {
              .bfSaleFilter-filter-content-btn {
                margin-left: 0;
                padding-left: 0;
              }
            }
          }
          &-btn {
            display: flex;
            border: 0px;
            white-space: nowrap;
            padding: 12px 32px 12px 15px;
            cursor: pointer;
            border: 1px solid transparent;
            img {
              display: inline;
              max-width: 16px;
              margin-left: 8px;
              transform: rotate(-90deg);
            }
          }
          &-container-submenu {
            border: 1px solid black;
            background: white;
            position: absolute;
            margin-top: -1px;
            &hover {
              display: block;
            }
          }
          &-items.isActive &-btn {
            border: 1px solid black;
            border-bottom: 1px solid white;
            z-index: 9;
            position: relative;
            img {
              transform: rotate(90deg);
            }
          }
          &-items.isRight &-container-submenu {
            right: 0;
          }
        }
      }
    }
  }
}
</style>




