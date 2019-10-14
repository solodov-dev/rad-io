<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-player></app-player>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

import Header from './components/Header';
import Player from './components/Player';

export default {
  components: {
    appHeader: Header,
    appPlayer: Player,
  }
}
</script>
