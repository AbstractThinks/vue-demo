<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'muse-ui/dist/theme-light.css';

export default {
  name: 'app'
}
</script>

<style lang="scss">

  html,body,#app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  @for $i from 1 to 10 {
    .blank#{$i*10} {
      height: #{$i*10}px;
    }
  }
</style>
