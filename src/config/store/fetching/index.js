import * as type from './types'

const state = {
	show: false,
}

const mutations = {
	[type.SHOW_FETCHING](state) {
		state.show = true;
	},

	[type.HIDE_FETCHING](state) {
		state.show = false;
	}
}

export default {
	state,
	mutations
}
