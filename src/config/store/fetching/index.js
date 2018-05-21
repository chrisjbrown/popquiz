import * as type from './types'
import actions from './actions'

const state = {
	show: false,
}

const mutations = {
	[type.SHOW_FETCHING](state, action) {
		state.show = true;
	},

	[type.HIDE_FETCHING](state) {
		state.show = false;
	}
}

export default {
	state,
	mutations,
	actions
}