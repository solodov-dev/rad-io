<template>
  <nav class="navbar">
    <router-link to="/"   class="navbar-brand">
      <app-equalizer class="equalizer"></app-equalizer>
      <img class="logo" src="../assets/logo.svg" alt="Rad.io ">
    </router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/search" class="nav-link">
            <img src="../assets/search.svg" alt="search">
          </router-link>
        </li>
        <li class="nav-item">
            <router-link v-if="!loggedIn" to="/signin" class="nav-link">Login</router-link>
            <router-link v-else class="nav-link" to="/playlist">
              <img src="../assets/playlist.svg" alt="playlist">
            </router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
import Equalizer from "../components/Equalizer";

export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  components: {
    appEqualizer: Equalizer,
  }
}
</script>

<style scoped>
  .navbar {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .logo {
    margin-right: 10px;
  }

  .equalizer {
    float: left;
  }
</style>