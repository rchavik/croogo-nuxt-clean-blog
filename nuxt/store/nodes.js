import Node from '~/models/Node'

export const state = () => ({
  promoted: [],
  nodes: [],
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
  replaceNodes(state, nodes) {
    state.nodes = nodes;
  },
}

export const actions = {

  async GET_PROMOTED ({ commit }) {
    const { data } = await Node.params({promote: 1}).get()
    commit('replacePromoted', data)
  },

  async GET_NODE ({ commit }, params) {
    commit('clearCurrent')
    params.status = 1
    const { data } = await Node.params(params).get()
    commit('replaceCurrent', data.length > 0 ? data[0] : {})
  },

  async GET_NODES ({ commit }, params) {
    params.status = 1
    const { data } = await Node.params(params).get()
    commit('replaceNodes', data)
  },
}
