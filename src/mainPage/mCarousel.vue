<template>
    <div class="bs-example">
      <carousel>
        <slider>
          <img src="https://placehold.it/1200x500?text=one">
          <div class="carousel-caption">
           <h3>Slide #1</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img src="https://placehold.it/1200x500?text=two">
          <div class="carousel-caption">
           <h3>Slide #2</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
        <slider>
          <img src="https://placehold.it/1200x500?text=three">
          <div class="carousel-caption">
           <h3>Slide #3</h3>
           <p>sunt in culpa qui officia deserunt mollit a.</p>
         </div>
        </slider>
      </carousel>
    </div>
</template>

<script>
import carousel from '../components/Carousel.vue'
import slider from '../components/Slider.vue'

export default {
  components: {
    carousel,
    slider
  }
}
</script>
