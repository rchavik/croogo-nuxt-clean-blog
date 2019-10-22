<template>

  <div class="card border-light">
    <h5 class="card-header">
      {{block.title}}
    </h5>
    <div class="card-body">
      <ul>
        <li v-for="node in nodes" v-bind:key="'block-node-' + node.id">
          <nuxt-link :to="node.path">{{ node.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Block from '~/models/Block'

@Component
export default class NodeBlock extends Vue {

  @Prop(Block) readonly block: Block | undefined

  get nodes() {
    return this.$store.state.nodes[this.blockName];
  }

  get blockName() : string {
    let reName = /\[(node|n):([A-Za-z0-9_\-]*)(.*?)\]/gi
    let matches = this.$props.block.body.matchAll(reName)
    for (let match of matches) {
      if (match[1] == 'node') {
        return match[2]
      }
    }
    return 'nodes'
  }

  async mounted () {
    let re = /(\S+)=[\'"]?((?:.(?![\'"]?\s+(?:\S+)=|[>\'"]))+.)[\'"]?/gi
    let matches = this.$props.block.body.matchAll(re)
    let params = {}
    for (let match of matches) {
      if (match[1] == 'conditions') {
        const [ key, value ] = match[2].split(':')
        const field : string = key.replace(/Nodes./g, '')
        params = Object.assign({[field]: value}, params)
      }
    }

    await this.$store.dispatch('nodes/GET_NODES', {name: this.blockName, params})
  }

}
</script>
