<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">

      <div v-for="node in nodes.promoted" :key="node.id" class="post-preview">
        <nuxt-link :to="node.path" >
          <h2 class="post-title">{{node.title}}</h2>
        </nuxt-link>

        <p class="post-meta">
          Posted by {{node.user.username}} on {{format_date(node.created)}}
        </p>

      </div>

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

  methods: {
    format_date(value: string) : string  {
      let date = new Date(value);
      return date.toLocaleString()
    }
  },

  async mounted () {
    await this.$store.dispatch('nodes/GET_PROMOTED');
  },

})
</script>

<style scoped>
</style>
