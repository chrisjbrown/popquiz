<template>
  <div
    :class="containerClass">
    <div>
      <h1>{{ name }}</h1>
    </div>
    <ul class="list-reset px-1">
      <li
        v-for="(key, index) in Object.keys(scores)"
        :key="index"
        :class="$style.listItem"
      >
        {{ scores[key].name }} - {{ scores[key].score }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Scoreboard',
    props: {
			name: {
        type: String,
        default: '',
				required: false
      },
			containerClass: {
        type: String,
        default: '',
				required: false
      },
      scores: {
        type: Object,
        default: function () {
          return {}
        },
				required: false
      },
    }
  }
</script>

<style lang="postcss" module scoped src="./Scoreboard.css"></style>
