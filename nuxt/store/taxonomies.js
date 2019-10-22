import Vue from 'vue'
import Taxonomy from '~/models/Taxonomy'

export const state = () => ({
})

export const mutations = {

  replaceTaxonomies(state, taxonomies) {
    Vue.set(state, 'data', taxonomies)
  },

}

export const actions = {

  async GET_TAXONOMIES ({ commit }, params) {
    const { data } = await Taxonomy.params(params).get()
    commit('replaceTaxonomies', data)
  },
}
