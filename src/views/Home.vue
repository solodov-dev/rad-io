<template>
  <div class="view">
    <!-- My app description -->
      <div class="view-page-container">
        <div class="view-page">
          <h4>Online radio streaming</h4>
          <img src="../assets/radio.svg" alt="">
          <p>RAD.IO brings you online radiostations from around the world. Listen to your favourite music now.</p>
          <router-link to="/search" class="btn btn-primary">Listen now</router-link>
        </div>
      </div>
       <!-- Radio search directory -->
    <div class="view-page-container">
        <div class="view-page">
          <h4>Choose from 25200 stations</h4>
          <img class="search" src="../assets/search.svg" alt="Radio Search">
          <p>A community with the aim of collecting as many internet radio and TV stations as possible. </p>
          <a href="https://www.radio-browser.info" class="btn btn-primary">Radio browser</a>
        </div>
      </div>
      <!-- Vue.js -->
      <div class="view-page-container">
        <div class="view-page">
          <h4>Built with Vue.js</h4>
          <img src="../assets/vue-js-logo.svg" alt="Vue">
          <p>An incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
          <a href="https://vuejs.org" class="btn btn-primary">Learn more</a>
        </div>
      </div>
     
      <!-- Firebase -->
      <div class="view-page-container">
        <div class="view-page">
          <h4>Built with Firebase</h4>
          <img class="search" src="../assets/firebase-logo.svg" alt="Firebase logo">
          <p>Build apps fast, without managing infrastructure. Firebase gives you functionality like analytics, 
            databases, messaging and more.</p>
          <a href="https://www.firebase.google.com" class="btn btn-primary">Firebase</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
  h4 {
    margin: 2em;
  }
  .btn {
    display: block;
    margin: 1.8em auto;
    width: 150px;

  }
  .view-page-container {
    height: calc(100vh - 114px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
  }

  p {
    width: 60%;
    margin: 2em auto;
  }

  img {
    width:150px;
    height: auto;
  }
</style>
