import Block from '~/models/Block'
import Vue from 'vue'

export const state = () => ({
})

export const mutations = {
  replace (state, params) {
    const { regionAlias, data } = params
    Vue.set(state, regionAlias, data)
  },
}

export const actions = {

  async GET_BLOCKS ({ commit }, regionAlias) {
    const { data } = await Block.params({regionAlias}).get()
    let blocks = [];
    let nodeRegex = /\[node:/
    let menuRegex = /\[menu:/
    let taxonomyRegex = /\[vocabulary:/
    for (let i in data) {
      let block = data[i];
      if (!block.body || block.element.length > 0) {
        continue;
      }

      let isNode = block.body.match(nodeRegex)
      if (isNode != null) {
        block.component = 'Node'
      }

      let isMenu = block.body.match(menuRegex)
      if (isMenu != null) {
        block.component = 'Menu'
      }

      let isTaxonomy = block.body.match(taxonomyRegex)
      if (isTaxonomy != null) {
        block.component = 'Taxonomy'
      }

      blocks.push(block)
    }

    commit('replace', {regionAlias, data: blocks})
  },

}
