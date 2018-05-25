<template>
  <div class="pt-8">
    <h1 v-if="fetching.show">loading questions...</h1>
    <div
      v-else
      class="pt-8"
    >
      <div class="mt-4 text-3xl">
        Question {{ game.answered + 1 }}/{{ game.questions.length }}
      </div>
      <div class="mt-4 text-3xl">
        Time Left: {{ timer }}
      </div>
      <div class="mt-4">
        <h2 v-html="title" />
        <Answers
          :answers="answers"
          :send-answer="sendAnswer"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import * as type from '../../config/store/game/types'
  import store from '../../config/store'
  import Answers from '../../components/Answers/Answers';

  export default {
    name: 'Question',
    components: {
      Answers
    },
    beforeRouteEnter(to, from, next) {
      // TODO - better way to access store here?
			store.dispatch('getQuestions')
				.then(() => {
					next()
				})
    },
    data() {
      return {
        timer: this.getTimer(),
        interval: 1000
      }
    },
    computed: {
      ...mapGetters([
        'title',
        'answers',
        'questions',
        'answered'
      ]),
      ...mapState([
        'fetching',
        'game'
      ])
    },
    mounted: function() {
      this.$data.interval = setInterval(function () {
        if (this.timer === 0) {
          this.sendAnswer()
        }
        this.timer--
      }.bind(this), 1000);
    },
    methods: {
			...mapActions([
				'getQuestions'
      ]),
      getTimer: function() {
        switch (this.$store.state.user.difficulty) {
          case 'wimpy':
            return 15
          case 'basic':
            return 10
          case 'getrekt':
            return 5
          default:
            return 15
        }
      },
      sendAnswer: function(answer) {
        // increment/decrement score
        if (answer === this.$store.getters.correct_answer) {
          this.$store.commit(type.QUESTION_CORRECT)
        } else {
          this.$store.commit(type.QUESTION_INCORRECT)
        }

        // reset timer
        this.resetTimer();

        // if finished
        if (this.$store.state.game.answered === this.$store.state.game.questions.length) {
          clearInterval(this.$data.interval)
          this.$router.push({ path: 'overview' })
        }
      },
      resetTimer: function() {
        this.timer = this.getTimer()
      }
    }
  }
</script>
