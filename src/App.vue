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
        this.$store.commit('logUserIn', user.uid);
        this.$store.dispatch('loadPlaylist', user.uid);
        router.replace('/playlist');
      } else {
        this.$store.commit('logUserOut');
        this.$store.commit('unloadPlaylist');
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

.station-icon {
  float: left;
  height: 50px;
  max-width: 100px;
  width: auto;
}

@media screen and (min-width: 900px) {
  .view {
    width: 50%;
  }
}
</style>
