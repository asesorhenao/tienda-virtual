<template>
  <div class="bfBackToTop">
    <div class="bfBackToTop-container">
        <a href="#" class="bfBackToTop-link"></a>
    </div>
  </div>
</template>
<script>
/*
 Use locally
*/

export default {

}
</script>
<style lang="scss">
  @import "../styles/settings.scss";
  .bfBackToTop {
    &-container {
      width: 48px;
      height: 48px;
      position: fixed;
      bottom: 24px;
      right: 15px;
      @media screen and (min-width: $bf-tablet) {
        bottom: 48px;
        right: 39px;
      }
      @media screen and (min-width: $bf-desktop-min) {
        right: 30px;
      }
    }
    &-link {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $bf-white;
      border: solid 1px $bf-pink-salmon;
      transition: all .5s;
      &::before {
        content: url('../assets/slider/arrow-icon.svg');
        width: 20px;
        height: 20px;
        display: block;
        transform: rotate(90deg);
      }
      &:hover {
        background-color: $bf-pink-salmon;
        transition: all .5s;
        &::before {
          content: url('../assets/slider/arrow-icon-white.svg');
          width: 20px;
          height: 20px;
          display: block;
          transform: rotate(90deg);
        }
      }
    }
  }
</style>