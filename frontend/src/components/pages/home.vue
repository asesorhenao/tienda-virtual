<template>
  <div class="bf-container">
    <sliderCompontent />
    <imageCompontent />
    <bannerCompontent />
    <newArrivalsCompontent title="New Arrivals" />
    <instagramCompontent title="Siguenos en Instagram" />
  </div>
</template>
<script>

import imageCompontent from '../image'
import sliderCompontent from '../slider'
import bannerCompontent from '../banner'
import newArrivalsCompontent from '../new-arrivals'
import instagramCompontent from '../instagram'

export default {
  
  components: {
    imageCompontent,
    sliderCompontent,
    bannerCompontent,
    newArrivalsCompontent,
    instagramCompontent
  }
}
</script>
<style lang="scss">

</style>