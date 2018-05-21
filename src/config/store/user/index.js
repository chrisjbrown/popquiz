import * as type from './types'

const state = {
  name: undefined,
  difficulty: undefined
}

const mutations = {
  [type.SET_NAME](state, payload) {
    Object.assign(state, {
      name: payload
    })
  },
  [type.SET_DIFFICULTY](state, payload) {
    Object.assign(state, {
      difficulty: payload
    })
  },
}

const getters = {
  name: state => state.name,
  difficulty: state => state.difficulty,
}

export default {
  state,
  mutations,
  getters
}