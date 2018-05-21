<template>
  <div class="text-center bg-blue min-h-screen">
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
        <span v-if="difficulty">
          <transition
            name="component-fade"
            mode="out-in">
            <component :is="'v-' + difficulty"/>
          </transition>
        </span>

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
      <button
        class="bg-white p-4 border border-black"
        @click="onStart()"
      >
        Start!
      </button>
    </div>
  </div>
</template>

<script>
  import * as type from '../../config/store/user/types'

  export default {
    name: 'Start',
    components: {
      'v-wimpy': {
        template: '<div>wimpy</div>'
      },
      'v-basic': {
        template: '<div>basic</div>'
      },
      'v-getrekt': {
        template: '<div>getrekt</div>'
      }
    },
    data: function() {
      return {
        difficulty: this.$store.getters.difficulty,
        name: this.$store.getters.name,
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
        if (!this.$store.getters.name) {
          return this.$data.nameError = 'Please fill in a name!'
        } else if (!this.$store.getters.difficulty) {
          return this.$data.difficultyError = 'Please select a difficulty!'
        } else {
          this.$router.push({ path: 'questions' })
        }
      }
    },
  }
</script>

<style lang="postcss" module src="./Start.css"></style>
