<template>
  <div class="bfLayout">
    <header>
      <div class="bfLayout-header">
        <bfHeader/>
      </div>
    </header>
    <section>
      <div class="bfLayout-content">
        <router-view to="/"></router-view>
      </div>
    </section>
    <footer>
      <div class="bfLayout-footer">
        <bfFooter/>
      </div>
    </footer>
  </div>
</template>
<script>
import bfHeader from './header';
import bfFooter from './footer';

export default {
  components: {
    bfHeader,
    bfFooter
  }
}
</script>
<style lang="scss">
  @import "../../styles/settings.scss";
  .bfLayout {
    &-content {
      @media screen and (min-width: $bf-container) {
        width: $bf-container;
        margin: auto;
      }
    }
  }
</style>


