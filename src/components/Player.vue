<template>
  <nav class="navbar">
    <audio :src="stream.url" type="audio/mpeg" autoplay>Your browser does not support the audio element</audio>
    <div class="navbar justify-content-center player">
      <div class="player-btn play" :class="{stop: isPlaying}" @click="playStream"></div>
      <span class="station-name" v-show="stream.url">{{ stream.name }}</span>
      <a v-if="stream && loggedIn" @click="updatePlaylist">
        <svg width="30" height="30" viewBox="0 0 91 86" class="star" :class="{bookmarked: isBookmarked}" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.5 3.23607L55.2134 33.1307L55.4379 33.8217H56.1644H87.5975L62.1676 52.2976L61.5798 52.7246L61.8043 53.4156L71.5177 83.3103L46.0878 64.8344L45.5 64.4073L44.9122 64.8344L19.4823 83.3103L29.1957 53.4156L29.4202 52.7246L28.8324 52.2976L3.4025 33.8217H34.8356H35.5621L35.7866 33.1307L45.5 3.23607Z" fill="none" stroke="#FFAA10" stroke-width="4"/>
        </svg>
      </a>
    </div>
  </nav>
</template>

<script>

import { db } from '@/modules/firebase-config'

export default {
  computed: {
    stream() {
      return this.$store.getters.stream;
    },
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    isBookmarked() {
      let found = this.$store.getters.playlist.find((station) => {
        return station.id == this.stream.id;
      });
      if(found) {
        return true;
      } else {
        return false;
      }
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
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
        this.$store.commit('togglePlaying');
      }
    },
    updatePlaylist() {
      if(!this.isBookmarked) {
        this.$store.dispatch('addToPlaylist', this.stream);
      } else {
        this.$store.dispatch('removeFromPlaylist', this.stream);
      }
      db.collection('users').doc(this.$store.getters.user).set({playlist: this.$store.getters.playlist});
    }
  },
};
</script>

<style lang="scss" scoped>

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

.star:hover path{
  fill: #ffaa10;
}

.bookmarked path{
  fill: #ffaa10;
}

.bookmarked:hover path {
  fill: #ad1052;
}

@media screen and (max-width: 400px){
  .station-name {
    max-width: 150px;
  }
}
</style>