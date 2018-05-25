<template>
  <div class="bg-grey w-auto px-4 absolute">
    <div>
      <span> Name: {{ user.name }}</span>
    </div>
    <div>
      <span> Difficulty: {{ user.difficulty }}</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Info',
    computed: mapState([
      'user'
    ]),
  }
</script>
