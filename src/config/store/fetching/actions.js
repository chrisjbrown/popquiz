import Vue from 'vue'
import * as type from './types'

const actions = {
	showFetching({ commit }, message){
		commit(type.SHOW_FETCHING)
	},

	hideFetching({ commit }){
		commit(type.HIDE_FETCHING)
	}
}

export default actions;