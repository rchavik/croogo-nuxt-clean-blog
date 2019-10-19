import Link from '~/models/Link'

export const state = () => ({
  main: []
})

export const mutations = {
  add (state, link) {
    state.main.push(link)
  },
  remove (state, { link }) {
    state.main.splice(state.links.indexOf(link), 1)
  },
  replace (state, links) {
    state.main = links
  },
}

export const actions = {

  async GET_LINKS ({ commit }, menuAlias) {
    const query = new URLSearchParams({menuAlias})
    const { data } = await Link.params({menuAlias}).get()
    commit('replace', data)
  },

}
