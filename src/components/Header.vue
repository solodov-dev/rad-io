<template>
  <nav class="navbar">
    <a href="#" class="navbar-brand">
      <img src="../assets/logo.svg" alt="Rad.io">
    </a>
      <ul class="nav">
        <router-link to="/" class="nav-item active">
          <a href="#" class="nav-link">Home</a>
        </router-link>
         <router-link to="/search" class="nav-item">
          <a href="#" class="nav-link">Search</a>
         </router-link>
        <router-link to="#" class="nav-item">
          <a href="#" class="nav-link">Playlist</a>
        </router-link>
      </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .navbar {
    background-color: #ad1052;
  }

  .nav-link {
    color: #FFAA10;
  }
</style>