<template>
  <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
    <div class="overlay" />
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>{{ masthead.heading }} </h1>
            <span class="subheading">{{ masthead.subheading }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  computed: {
    masthead () {
      const current = this.$store.state.nodes.current;
      return {
        heading: current.title ,
        subheading: current.excerpt,
      }
    }
  }

})
</script>
