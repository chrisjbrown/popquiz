<template>
  <div id="app" :class="$style.app">
    <div :class="$style.banner">
      <img
        src="https://vuejs.org/images/logo.png"
        width="100"
        alt="vue"
        :class="$style.logo"
      />
      <h1>Welcome to Vue.js</h1>
    </div>
    <div :class="$style.bottom">
      To get started, edit <code>./src/components/App.vue</code> and save to reload.<br/>
      <span :class="$style.fade">
        Checkout <code>./README.md</code> for more usages.
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="postcss">
  @tailwind preflight;
  @tailwind utilities;
</style>

<style lang="postcss" module src="./App.css"></style>
