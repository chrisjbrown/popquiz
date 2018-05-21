<template>
  <transition
    name="component-fade"
    mode="out-in">
    <div>
      <Info/>
      <div
        id="app"
      >
        <router-view/>
      </div>
    </div>
  </transition>
</template>

<script>
  import Info from '../Info/Info'
  export default {
    name: 'App',
    components: {
      Info
    }
  }
</script>

<style lang="postcss">
  @tailwind preflight;
  @tailwind utilities;
</style>

<style>
  .component-fade-enter,
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }
</style>
