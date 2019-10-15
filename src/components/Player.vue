<template>
  <nav class="navbar">
    <audio controls :src="stream.url" type="audio/mpeg">
      Your browser does not support the audio element
    </audio>
  </nav>
</template>

<script>
import { eventBus } from '../main';
import axios from 'axios';

export default {
  data() {
    return {
      stream: {name: '', url: 'http://0n-jazz.radionetz.de/0n-jazz.mp3'},
      audioContext: '',
    }
  },
  created() {
    eventBus.$on('playStream', streamData => {
      this.stream.name = streamData.data.name;
      this.stream.url = streamData.data.url;
    });
  } 
}
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 5;
  }
</style>