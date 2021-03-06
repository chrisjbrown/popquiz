import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import game from './game'
import fetching from './fetching'

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
    game,
    fetching
  }
})
