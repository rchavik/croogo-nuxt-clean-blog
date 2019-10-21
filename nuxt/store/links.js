import Vue from 'vue'
import Link from '~/models/Link'

export const state = () => ({
})

export const mutations = {
  replace (state, params) {
    const { menuAlias, data } = params
    Vue.set(state, menuAlias, data)
  },
}

export const actions = {

  async GET_LINKS ({ commit }, menuAlias) {
    const { data } = await Link.params({menuAlias}).get()
    commit('replace', { menuAlias, data })
  },

}
