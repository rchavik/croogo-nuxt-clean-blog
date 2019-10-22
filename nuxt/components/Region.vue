<template>
  <div>
    <div v-for="block in blocks[this.$attrs.region]" :key="'container- ' + block.id">
      <MenuBlock v-if="block.component == 'Menu'" :block="block" :key="'menu-block-' + block.id" />
      <NodeBlock v-else-if="block.component == 'Node'" :block="block" :key="'node-block-' + block.id" />
      <TaxonomyBlock v-else-if="block.component == 'Taxonomy'" :block="block" :key="'taxonomy-block-' + block.id" />
      <DefaultBlock :block="block" :key="'default-block-' + block.id" v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultBlock from './DefaultBlock.vue'
import MenuBlock from './MenuBlock.vue'
import NodeBlock from './NodeBlock.vue'
import TaxonomyBlock from './TaxonomyBlock.vue'

@Component({
  components: {
    DefaultBlock,
    MenuBlock,
    NodeBlock,
    TaxonomyBlock,
  },
})
export default class Region extends Vue {

  get blocks () {
    return this.$store.state.blocks
  }

  async mounted () {
    await this.$store.dispatch('blocks/GET_BLOCKS', this.$attrs.region);
  }

}
</script>
