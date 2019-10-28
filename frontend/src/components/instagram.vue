<template>
  <div class="bfInstagram">
    <div class="bfInstagram-container">
      <h2 class="bfInstagram-title">{{title}}</h2>
      <div class="bfInstagram-gallery">
        <div class="bfInstagram-galleryItem" v-for="(item, index) in items" :key="index">
          <a :href="'https://www.instagram.com/p/' + item.node.shortcode" target="_blank">
            <div class="bfInstagram-galleryItem-overflow">
              <img
                class="bfInstagram-galleryItem-overflow-icon"
                src="../assets/Instagram_Icon_White.svg"
              />
            </div>
            <img class="bfInstagram-galleryItem-image" :src="item.node.thumbnail_src" alt />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: null
    };
  },
  created() {
    axios
      .get("https://www.instagram.com/bellafashiontest/?__a=1")
      .then(res => {
        this.items = res.data.graphql.user.edge_owner_to_timeline_media.edges;
        if (this.items.length > 6) {
          this.items.length = 6;
        }
      })
      .catch(err => {
        console.log(err);
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
.bfInstagram {
  &-container {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    @media screen and (min-width: $bf-tablet) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    @media screen and (min-width: $bf-desktop) {
      padding-top: 40px;
      padding-bottom: 55px;
    }
  }
  &-title {
    color: $bg-mine-shaft;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
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
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: $bf-tablet) {
      flex-wrap: nowrap;
    }
  }
  &-galleryItem {
    width: 33.3333%;
    position: relative;

    &:hover &-overflow {
      opacity: 1;
    }

    &-image {
      width: 100%;
    }
    &-overflow {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.4s ease-in-out 0s;

      &-icon {
        max-width: 24px;
      }
    }
  }
}
</style>


