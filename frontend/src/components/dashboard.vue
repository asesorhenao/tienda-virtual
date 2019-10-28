<template>
  <div class="bfDashboard">
    <div class="bfDashboard-container">
      <h3>TABLERO</h3>
      <ul>
        <li>
          <router-link to="/myAcount">
            MI CUENTA
          </router-link>
        </li>
        <li>
          <router-link to="/addressBook">
            DIRECTORIO
          </router-link>
        </li>
        <li>
          <router-link to="/myOrders">
            MIS ORDENES
          </router-link>
        </li>
        <li>
          <router-link to="/myAcount">
            CERRAR SESIÓN
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import "../styles/settings.scss";

  .bfDashboard {
    &-container {
      & h3 {
        font-size: 24px;
        color: $bg-mine-shaft;
        margin-bottom: 20px;
      }
      & ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      & ul li {
        margin-top: 15px;
        &:last-child {
          margin-top: 30px;
        }
      }
      & ul li a {
        color: $bg-mine-shaft;
        &:hover,
        &:active,
        &:focus {
          color: $bf-pink-salmon;
          text-decoration: underline;
        }
      }
    }
  } 

</style>