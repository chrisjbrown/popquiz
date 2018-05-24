import * as type from './types'

const state = {
  name: undefined,
  difficulty: undefined
}

const mutations = {
  [type.SET_NAME](state, payload) {
    state.name = payload
  },
  [type.SET_DIFFICULTY](state, payload) {
    state.difficulty = payload
  },
}

export default {
  state,
  mutations
}
