<template>
  <div>
    <TopNavbar menu="main"/>
    <Masthead />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopNavbar from '~/components/TopNavbar.vue'
import Masthead from '~/components/Masthead.vue'
export default Vue.extend({
  components: {
    TopNavbar,
    Masthead
  }
})
</script>

<style>
</style>
