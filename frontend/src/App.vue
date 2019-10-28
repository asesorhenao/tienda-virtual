<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import layout from './components/layout/layout'

export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style lang="scss">
@import "./styles/settings.scss";
  * {
    margin: 0;
    padding: 0;
  }
  body{
    position: relative;
    font-family: 'Open Sans', sans-serif;
    color: $bg-mine-shaft;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Varela Round', sans-serif;
  }
</style>
