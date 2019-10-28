<template>
<div class="bf-container">
  <div class="bf-container">
    <productGalleryComponent />
    <newArrivalsCompontent title="OTROS TAMBIÉN MIRARON" />
    <reviewsComponent />
  </div>
</div>
</template>
<script>
  import productGalleryComponent from '../product-gallery.vue'
  import newArrivalsCompontent from '../new-arrivals'
  import reviewsComponent from '../reviews.vue'
  export default {
    
    components: {
      productGalleryComponent,
      newArrivalsCompontent,
      reviewsComponent
    }
  }
</script>
<style lang="scss">

</style>