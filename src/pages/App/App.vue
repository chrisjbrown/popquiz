<template>
  <transition
    name="component-fade"
    mode="out-in">
    <div>
      <Info/>
      <div
        id="app"
        :class="$style.container"
      >
        <div class="max-w-md mx-auto">
          <router-view/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Info from '../../components/Info/Info'
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

<style lang="postcss" module src="./App.css"></style>
