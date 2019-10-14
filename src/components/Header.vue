<template>
  <nav class="navbar">
    <router-link to="/" href="#" class="navbar-brand">
      <img src="../assets/logo.svg" alt="Rad.io">
    </router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/search" class="nav-link">Search</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/playlist" class="nav-link">Playlist</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .navbar {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 4;
  }
</style>