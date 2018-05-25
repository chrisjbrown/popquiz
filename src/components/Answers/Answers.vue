<template>
  <ul class="list-reset">
    <li
      v-for="(item, index) in answers"
      :key="index"
      :class="$style.listItem"
      @click="sendAnswer(item)"
      v-html="item"
    />
  </ul>
</template>

<script>
  export default {
    name: 'Answers',
    props: {
			answers: {
				type: Array,
				required: true
      },
      sendAnswer: {
        type: Function,
        required: true
      }
    },
  }
</script>


<style lang="postcss" module scoped src="./Answers.css"></style>
