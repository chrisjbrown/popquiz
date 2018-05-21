<template>
  <div class="pt-8 text-center bg-red min-h-screen">
    <h1 v-if="fetching.show">loading questions...</h1>
    <div
      v-else
      class="pt-8"
    >
      <h2>{{ title }}</h2>
      <Answers
        :answers="answers"
        :send-answer="sendAnswer"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import * as type from '../../config/store/game/types'
  import store from '../../config/store'
  import Answers from '../Answers/Answers';

  export default {
    name: 'Questions',
    components: {
      Answers
    },
    beforeRouteEnter(to, from, next) {
			store.dispatch('getQuestions')
				.then(() => {
					next()
				})
    },
    computed: {
      ...mapGetters([
        'title',
        'answers'
      ]),
      ...mapState([
        'fetching'
      ])
    },
    methods: {
			...mapActions([
				'getQuestions'
      ]),
      sendAnswer: function(answer) {
        if (answer === this.$store.getters.correct_answer) {
          this.$store.commit(type.QUESTION_CORRECT)
        } else {
          this.$store.commit(type.QUESTION_INCORRECT)
        }
      }
		},
  }
</script>
