<template>
  <ul>
    <li
      v-for="(item, index) in answers"
      :key="index"
      @click="sendAnswer(item)"
    >
      {{ item }}
    </li>
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
