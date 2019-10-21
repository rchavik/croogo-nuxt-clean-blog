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
import Vue from 'vue'
import DefaultBlock from '~/components/DefaultBlock.vue'
import MenuBlock from '~/components/MenuBlock.vue'
import NodeBlock from '~/components/NodeBlock.vue'
import TaxonomyBlock from '~/components/TaxonomyBlock.vue'

export default Vue.extend({

  components: {
    DefaultBlock,
    MenuBlock,
    NodeBlock,
    TaxonomyBlock,
  },

  computed: {
    blocks () {
      return this.$store.state.blocks
    }
  },

  async mounted () {
    await this.$store.dispatch('blocks/GET_BLOCKS', this.$attrs.region);
  },

})
</script>
