<template>

  <div class="card border-light">
    <h5 class="card-header">
      {{block.title}}
    </h5>
    <div class="card-body">
      <ul>
        <li v-for="taxonomy in taxonomies" v-bind:key="'block-taxonomy-' + taxonomy.id">
          <nuxt-link :to="'/' + type + '/term/' + taxonomy.term.slug">
            {{ taxonomy.term.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Block from '~/models/Block'

@Component
export default class TaxonomyBlock extends Vue {

  @Prop(Block) readonly block: Block | undefined

  get taxonomies() {
    return this.$store.state.taxonomies.data;
  }

  get vocab() : string | null {
    let reVocabulary = /\[(vocabulary|v):([A-Za-z0-9_\-]*)(.*?)\]/i
    let matches = this.$props.block.body.matchAll(reVocabulary)
    for (let match of matches) {
      if (match[1] == 'vocabulary') {
        return match[2]
      }
    }
    return null
  }

  get type() : string | null {
    let reType = /(\S+)=[\'"]?((?:.(?![\'"]?\s+(?:\S+)=|[>\'"]))+.)[\'"]?/gi

    let matches = this.$props.block.body.matchAll(reType)
    for (let match of matches) {
      if (match[1] == 'type') {
        return match[2]
      }
    }
    return null
  }

  async mounted() {

    let params = {
      vocab: this.vocab,
      type: this.type,
    }

    await this.$store.dispatch('taxonomies/GET_TAXONOMIES', params)
  }
}
</script>
