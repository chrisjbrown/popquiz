<template>
  <div class="pt-8 text-center">
    <h1>You did it!</h1>
    <div>
      name: {{ user.name }}
    </div>
    <div>
      difficulty: {{ user.difficulty }}
    </div>
    <div>
      score: {{ game.score }}
    </div>
    <Button
      :title="scoreSubmitted ? 'Score Submitted' : 'Submit Your Score'"
      :disabled="scoreSubmitted"
      class="bg-white mt-8 p-4 border border-black"
      @onClick="pushScore()"
    />
    <div
      class="mt-8 flex"
    >
      <Scoreboard
        :scores="scores.wimpy || {}"
        container-class="bg-yellow-dark mx-2 w-1/3 h-full"
        name="wimpy"
      />
      <Scoreboard
        :scores="scores.basic || {}"
        container-class="bg-orange-dark mx-2 w-1/3 h-full"
        name="basic"
      />
      <Scoreboard
        :scores="scores.getrekt || {}"
        container-class="bg-red-dark mx-2 w-1/3 h-full"
        name="getrekt"
      />
    </div>
    <div class="mt-8">
      <h2>Go again?</h2>
      <Button
        class="bg-white mt-8 p-4 border border-black"
        title="restart"
        @onClick="restart()"
      />
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  import Button from '../../components/Button/Button'
  import Scoreboard from '../../components/Scoreboard/Scoreboard'
  import * as type from '../../config/store/game/types'
  import fb from '../../config/fb'

  const db = fb.db()

  export default {
    name: 'Overview',
    components: {
      Button,
      Scoreboard
    },
    data: function() {
      return {
        scores: {
          wimpy: {},
          basic: {},
          getrekt: {}
        },
        scoreSubmitted: false
      }
    },
    computed: mapState([
      'user',
      'game'
    ]),
    mounted () {
      this.getScores()
    },
    methods: {
      restart: function() {
        this.$store.commit(type.RESTART)
        this.$router.push({ path: '/' })
      },
      pushScore: function () {
        const that = this
        const payload = {
          name: this.$store.state.user.name,
          score: this.$store.state.game.score
        }
        this.$data.scoreSubmitted = true
        fb.add(db, 'scores', this.$store.state.user.difficulty, payload).then(() => {
          that.getScores()
        })
      },
      getScores: function() {
        const that = this
        fb.fetchAll(db, 'scores').then((response) => {
          if (response) {
            that.scores = response
          }
        })
      }
    },
  }
</script>
