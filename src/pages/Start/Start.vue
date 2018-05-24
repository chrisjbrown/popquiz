<template>
  <div>
    <div class="py-4">
      <img
        :class="$style.logo"
        src="https://vuejs.org/images/logo.png"
        width="100"
        alt="vue"
      >
      <h1>Welcome to PopQuiz!</h1>
    </div>
    <div class="p-4 text-xl">
      <h3>
        Choose your (nick)name
      </h3>
      <div
        v-if="nameError"
        class="mt-4"
      >
        <strong
          class="text-red"
        >
          {{ nameError }}
        </strong>
      </div>
      <div class="m-4">
        <input
          v-model="name"
          type="text"
          placeholder="(nick)name"
          class="h-10 p-2"
          @change="setName(name)"
        >
      </div>

      <div class="m-4">
        <h3>Select Difficulty</h3>
        <strong
          v-if="difficultyError"
          class="text-red"
        >
          {{ difficultyError }}
        </strong>
        <div class="my-3">
          <input
            id="wimpy"
            v-model="difficulty"
            type="radio"
            value="wimpy"
            @click="setDifficulty('wimpy')"
          >
          <label for="wimpy">Wimpy</label>
        </div>

        <div class="my-3">
          <input
            id="basic"
            v-model="difficulty"
            type="radio"
            value="basic"
            @click="setDifficulty('basic')"
          >
          <label for="basic">Basic</label>
        </div>

        <div class="my-3">
          <input
            id="getrekt"
            v-model="difficulty"
            type="radio"
            value="getrekt"
            @click="setDifficulty('getrekt')"
          >
          <label for="getrekt">Get Rekt</label>
        </div>
      </div>
      <Button
        title="Start!"
        class="bg-white p-4 border border-black"
        @onClick="onStart()"
      />
    </div>
  </div>
</template>

<script>
  import * as type from '../../config/store/user/types'
  import Button from '../../components/Button/Button'

  export default {
    name: 'Start',
    components: {
      Button
    },
    data: function() {
      return {
        difficulty: this.$store.state.user.difficulty,
        name: this.$store.state.user.name,
        nameError: undefined,
        difficultyError: undefined
      }
    },
    methods: {
      'setName': function(name) {
        this.$data.nameError = undefined
        this.$store.commit(type.SET_NAME, name)
      },
      'setDifficulty': function(difficulty) {
        this.$data.difficultyError = undefined
        this.$store.commit(type.SET_DIFFICULTY, difficulty)
      },
      onStart: function() {
        if (!this.$data.name) {
          return this.$data.nameError = 'Please fill in a name!'
        } else if (!this.$data.difficulty) {
          return this.$data.difficultyError = 'Please select a difficulty!'
        } else {
          this.$router.push({ path: 'question' })
        }
      }
    },
  }
</script>

<style lang="postcss" module src="./Start.css"></style>
