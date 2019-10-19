<template>
  <nav class="navbar">
    <router-link to="/" href="#" class="navbar-brand">
      <img src="../assets/logo.svg" alt="Rad.io ">
    </router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/search" class="nav-link">
            <img src="../assets/search.svg" alt="search">
          </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
            <router-link class="nav-link" to="/playlist">
              <img src="../assets/playlist.svg" alt="playlist">
            </router-link>
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
    z-index: 5;
  }
</style>