<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">

      <div v-if="nodes.node_list == null || nodes.node_list.length == 0">
        No items found
      </div>

      <div v-for="node in nodes.node_list" :key="node.id" class="post-preview">
        <nuxt-link :to="node.path" >
          <h2 class="post-title">{{node.title}}</h2>
        </nuxt-link>

        <p class="post-meta">
          Posted by {{node.user.username}} on {{node.created | date_format}}
        </p>

      </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Node from '~/models/Node'

@Component
export default class NodeList extends Vue {

  get nodes() {
    return this.$store.state.nodes;
  }

  get type() : string {
    return this.$route.params['type']
  }

  get termSlug() : string {
    return this.$route.params['slug']
  }

  async mounted() {

    const name = 'node_list'
    let params = {
      type: this.type,
      term: this.termSlug,
    }

    await this.$store.dispatch('nodes/GET_NODES', {name, params})
  }

}

</script>
