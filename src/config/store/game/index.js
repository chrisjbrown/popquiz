import actions from './actions'
import * as type from './types'

const state = {
	error: null,
	questions: [],
	answered: 0,
	score: 0
}

const mutations = {
	[type.REQUEST_QUESTIONS](state) {
		state.error = null
	},

	[type.REQUEST_QUESTIONS_SUCCESS](state, action) {
		state.questions = action.payload
		state.error = null
	},

	[type.REQUEST_QUESTIONS_ERROR](state, action) {
		state.error = action.error
	},

	[type.QUESTION_CORRECT](state, action) {
		state.score++;
		state.answered++;
	},
	[type.QUESTION_INCORRECT](state, action) {
		state.score = state.score > 0 ? state.score - 1 : 0;
		state.answered++
	}
}

const getters = {
	title: state => {
		if (state.questions.length === 0) {
			return ''
		}
		return state.questions[state.answered].question
	},
	answers: state => {
		if (state.questions.length === 0) {
			return [];
		}
		const game = state.questions[state.answered]
		const incorrect_answers = game.incorrect_answers
		incorrect_answers.splice(Math.floor(Math.random()*(incorrect_answers.length + 1)), 0, game.correct_answer)
		return incorrect_answers;
	},
	correct_answer: state => {
		if (state.questions.length === 0) {
			return undefined
		}
		return state.questions[state.answered].correct_answer
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}