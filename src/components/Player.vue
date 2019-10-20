<template>
  <nav class="navbar">
    <audio :src="stream.url" type="audio/mpeg" autoplay>Your browser does not support the audio element</audio>
    <div class="navbar justify-content-center player">
      <div class="player-btn play" :class="{stop: isPlaying}" @click="playStream"></div>
      <span class="station-name" v-show="stream.url">{{ stream.name }}</span>
      
      <a href="#" @click="addToPlaylist">Add</a>
    </div>
  </nav>
</template>

<script>

import { db } from '@/modules/firebase-config'

export default {
  data() {
    return {
      isPlaying: false
    };
  },
  computed: {
    stream() {
      if(this.$store.getters.getLink)
      {
        this.isPlaying = true;
      }
      return this.$store.getters.getLink;
    }
  },
  methods: {
    playStream() {
      if (this.stream.url) {
        let aud = document.querySelector("audio");
        if (this.isPlaying) {
          aud.pause();
        } else {
          aud.play();
        }
        this.isPlaying = !this.isPlaying;
      }
    },
    addToPlaylist() {
      this.$store.dispatch('addToPlaylist', this.stream);
      db.collection('users').doc(this.$store.getters.user).set({playlist: this.$store.getters.playlist});
    }
  },
  components: {
    appEqualizer: Equalizer,
  }
};
</script>

<style lang="scss" scoped>

.equalizer-container {
  width: 50px;
  height: 40px;  
}

.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}

.player-btn {
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("../assets/play-button.svg");
}

.stop {
  background-image: url("../assets/stop-button.svg");
}

.station-name {
  display: inline-block;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 2em;
  color: #ffaa10;
}

@media screen and (max-width: 400px){
  .station-name {
    max-width: 150px;
  }
}
</style>