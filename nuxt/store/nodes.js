export const state = () => ({
  promoted: [],
  current: {}
})

export const mutations = {

  replacePromoted (state, nodes) {
    state.promoted = nodes
  },

  clearCurrent(state) {
    state.current = {};
  },
  replaceCurrent(state, node) {
    state.current = node;
  },
}

export const actions = {

  async GET_PROMOTED ({ commit }) {
    const { data } = await this.$axios.$get('/api/v1.0/nodes?promote=1', {
      headers: {
        options: {
          Accept: 'application/json'
        },
        get: {
          Accept: 'application/json'
        }
      }
    })
    commit('replacePromoted', data)
  },

  async GET_NODE ({ commit }, params) {
    const qs = new URLSearchParams(params).toString()
    commit('clearCurrent')
    const { data } = await this.$axios.$get('/api/v1.0/nodes?status=1&' + qs, {
      headers: {
        options: {
          Accept: 'application/json'
        },
        get: {
          Accept: 'application/json'
        }
      }
    })
    commit('replaceCurrent', data.length > 0 ? data[0] : {})
  }

}
