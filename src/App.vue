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
  min-height: 100vh;
  background-color: #700750;
}
.navbar {
    background-color: #ad1052;
  }

  .nav-link {
    color: #FFAA10;
  }

  .nav-link:active {
    color: #fbff00;
  }

  .view {
    height: 100%;
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
