<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-player></app-player>
  </div>
</template>

<script>
import Header from "./components/Header";
import Player from "./components/Player";
import { firebase } from './modules/firebase-config';
import router from './router'

export default {
  components: {
    appHeader: Header,
    appPlayer: Player
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.commit('loguserin');
        console.log('You are logged in!');
        this.$store.dispatch('updatePlaylist');
        router.replace('/playlist');
      } else {
        this.$store.commit('loguserout');
        console.log('You are logged out!');
        this.$store.commit('emptyLocalPlaylist');
        router.replace('/search');
      }
    })
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background-color: #700750;
  color: #fff;
}
.navbar {
  background-color: #ad1052;
}

.nav-link {
  color: #ffaa10;
}

.nav-link:hover {
  color: #fbff00;
}

.view {
  width: 90%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 100px;
  height: 100%;
}

@media screen and (min-width: 900px) {
  .view {
    width: 50%;
  }
}
</style>
