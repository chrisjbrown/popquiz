import Vue from 'vue'
import * as type from './types'
import { SHOW_FETCHING, HIDE_FETCHING } from '../fetching/types'

const actions = {
	getQuestions({ commit }) {
		commit(type.REQUEST_QUESTIONS)
		commit(SHOW_FETCHING)

		Vue.http.get(`https://opentdb.com/api.php?amount=10`)
			.then(resp => {
				commit(type.REQUEST_QUESTIONS_SUCCESS, {
					payload: resp.body.results
				})

				commit(HIDE_FETCHING)
			})
			.catch(error => {
				commit(type.REQUEST_QUESTIONS_ERROR, {
					error
				})

				commit(SHOW_FETCHING, {
					message: 'There was an error fetching the questions'
				})
			})
	}
}

export default actions;