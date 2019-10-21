<template>
  <div>
    <TopNavbar menu="main"/>
    <Masthead />

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <nuxt />
        </div>
        <div class="col-md-4">
          <Region region="right" />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopNavbar from '~/components/TopNavbar.vue'
import Masthead from '~/components/Masthead.vue'
import Region from '~/components/Region.vue'
export default Vue.extend({
  components: {
    TopNavbar,
    Masthead,
    Region,
  }
})
</script>

<style>
</style>
