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
    const { data } = await this.$axios.$get('/api/v1.0/links?' + query.toString(), {
      headers: {
        options: {
          Accept: 'application/json'
        },
        get: {
          Accept: 'application/json'
        }
      }
    })
    console.log(data)
    commit('replace', data)
  },

}
