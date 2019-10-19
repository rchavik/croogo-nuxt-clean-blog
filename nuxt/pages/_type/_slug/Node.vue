<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">

        <div class="post-body" v-html="nodes.current.body" />

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  computed: {
    nodes () {
      return this.$store.state.nodes
    }
  },

  head () {
    return {
      title: this.$store.state.nodes.current.title,
    }
  },

  beforeDestroy() {
    this.$store.commit('nodes/clearCurrent')
  },

  async mounted () {
    await this.$store.dispatch('nodes/GET_NODE', this.$route.params);
  },

  async fetch({store, params}) {
    await store.dispatch('nodes/GET_NODE', store.app.context.route.params)
  },

})
</script>
