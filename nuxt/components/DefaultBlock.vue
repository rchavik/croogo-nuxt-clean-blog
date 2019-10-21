<template>

  <div class="card border-light">
    <h5 class="card-header">
      {{block.title}}
    </h5>
    <div class="card-body">
      {{block.body}}
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  props: {
    block: {}
  },

})
</script>
