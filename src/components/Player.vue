<template>
  <nav class="navbar">
    <audio :src="stream.url" type="audio/mpeg">Your browser does not support the audio element</audio>
    <div class="navbar justify-content-center player">
      <div class="player-btn play" :class="{stop: isPlaying}" @click="playStream"></div>
      <span class="station-name">{{ stream.name }}</span>
      <div v-show="streamLoaded" class="equalizer-container">
       <app-equalizer v-show="isPlaying"></app-equalizer>
      </div>
    </div>
  </nav>
</template>

<script>
import { eventBus } from "../main";
import Equalizer from "../components/Equalizer"

export default {
  data() {
    return {
      stream: { name: "", url: "" },
      streamLoaded: false,
      isPlaying: false
    };
  },
  methods: {
    playStream() {
      if (this.streamLoaded) {
        let aud = document.querySelector("audio");
        if (this.isPlaying) {
          aud.pause();
        } else {
          aud.play();
        }
        this.isPlaying = !this.isPlaying;
      }
    }
  },
  created() {
    eventBus.$on("playStream", streamData => {
      this.stream.name = streamData.data.name;
      this.stream.url = streamData.data.url;
      this.streamLoaded = true;
      this.isPlaying = false;
    });
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
  margin-right: 1em;
  background-image: url("../assets/play-button.svg");
}

.stop {
  background-image: url("../assets/stop-button.svg");
}

.station-name {
  color: #ffaa10;
}
</style>