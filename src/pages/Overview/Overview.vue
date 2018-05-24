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
  import * as type from '../../config/store/game/types'

  export default {
    name: 'Overview',
    components: {
      Button
    },
    computed: mapState([
      'user',
      'game'
    ]),
    methods: {
      restart: function() {
        this.$store.commit(type.RESTART)
        this.$router.push({ path: '/' })
      }
    }
  }
</script>
