<template>
  <button
    :class="$style.button"
    :disabled="disabled"
    @click="click()"
  >
    {{ title }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
			title: {
        type: String,
        default: '',
				required: false
      },
      onClick: {
        type: String,
        default: '',
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    methods: {
      'click': function() {
        this.$emit('onClick')
      }
    }
  }
</script>

<style lang="postcss" module scoped src="./Button.css"></style>
