<template>
  <div class="pt-8 text-center">
    <h1>You did it!</h1>
    <div>
      name: {{ name }}
    </div>
    <div>
      difficulty: {{ difficulty }}
    </div>
    <div>
      score: {{ score }}
    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Overview',
    computed: {
      ...mapGetters([
        'score',
        'difficulty',
        'name'
      ])
    },
  }
</script>
