<template>
  <div class="bfCongrats">
    <div class="container">
      <h3 class="bfCongrats-title">FELICIDADES</h3>
      <p class="bfCongrats-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <h4 class="bfCongrats-orderId">T4565567564</h4>
      <p class="bfCongrats-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
      <router-link to="/" class="bfCongrats-button">
        FINALIZAR COMPRA
      </router-link>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
export default {
  props: {
    order: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/settings.scss";
.bfCongrats {
  padding-top: 30px;
  text-align: center;
  &-title {
    margin-bottom: 30px;
    font-size: 30px;
  }
  &-text{
    margin-bottom: 30px;
    color: $bf-silver-chalice;
    font-size: 14px;
  }
  &-orderId {
    margin-bottom: 30px;
  }
  &-button {
    width: 100%;
    display: block;
    padding: 11px 0;
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
    @media screen and (min-width: $bf-tablet) {
      width: 258px;
      margin: 0 auto;
    }
  }
}

</style>




