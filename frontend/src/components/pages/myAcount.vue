<template>
  <div class="bfMyAcount">
    <div class="bfMyAcount-container container">
      <div class="bfMyAcount-dashboard">
        <dashboard />
      </div>
      <div class="bfMyAcount-content">
        <h3>{{user.title}}</h3>
        <div class="bfMyAcount-info">
          <div class="bfMyAcount-information">
            <h4>INFORMACIÓN DE LA CUENTA</h4>
            <p>{{user.name}}</p>
            <p>{{user.email}}</p>
          </div>
          <div class="bfMyAcount-addressbook">
            <h4>DIRECTORIO</h4>
            <p>ADMINISTRADOR DE DIRECCIONES ({{user.quantity}})</p>
            <ul>
              <li>{{user.dir1}}</li>
              <li>{{user.dir2}}</li>
              <li>{{user.city}}, {{user.country}}</li>
              <li>{{user.postalCode}}</li>
              <li>{{user.phoneNumber}}</li>
            </ul>
          </div>
        </div>
        <div class="bfMyAcount-orders">
          <h4>MIS ORDENES</h4>
          <ul>
            <li v-if="!user.orders.length">Aún no has realizado ningún pedido.</li>
            <li v-for="(order, index) in user.orders" :key="index">{{order.order}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import dashboard from '../dashboard';
  import data from "../../data/myAcount.json";

  export default {
    data() {
      return {
        user: data
      };
    },
    components: {
      dashboard
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../styles/settings.scss";

  .bfMyAcount {
    &-container {
      padding: 30px 15px;
      @media screen and (min-width: $bf-tablet) {
        padding: 48px 0 20px;
        display: flex;
      }
    }
    &-dashboard {
      width: 100%;
      margin-bottom: 48px;
      @media screen and (min-width: $bf-tablet) {
        width: 30%;
        margin-bottom: 0;
      }
    }
    &-content {
      width: 100%;
      @media screen and (min-width: $bf-tablet) {
        width: 70%;
      }
      & h3 {
        font-size: 36px;
        color: $bf-pink-salmon;
        margin-bottom: 28px;
        text-align: center;
        @media screen and (min-width: $bf-tablet) {
          text-align: left;
        }
      }
      & h4 {
        font-size: 24px;
        color: $bg-mine-shaft;
      }
    }
    &-info {
      margin-bottom: 50px;
      @media screen and (min-width: $bf-tablet) {
        margin-right: 30px;
        display: flex;
      }
    }
    &-information {
      width: 100%;
      margin-bottom: 50px;
      & h4 {
        border-bottom: solid 1px $bg-mine-shaft;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
      & p {
        color: $bg-mine-shaft;
        font-weight: 700;
      }
      @media screen and (min-width: $bf-tablet) {
        margin-right: 30px;
        margin-bottom: 0;
      }
    }
    &-addressbook {
      width: 100%;
      & h4 {
        border-bottom: solid 1px $bg-mine-shaft;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
      & p {
        color: $bg-mine-shaft;
      }
      & ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      & ul li {
        font-weight: 700;
      }
    }
    &-orders {
      & ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      & ul li {
        font-weight: 700;
      }
    }
  }

</style>