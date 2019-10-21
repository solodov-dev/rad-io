<template>
<!-- Bar equalizer animation -->
  <div class="equalizer">
  <div class="column column1" :class="{play: isPlaying}"></div>
  <div class="column column2" :class="{play: isPlaying}"></div>
  <div class="column column3" :class="{play: isPlaying}"></div>
  <div class="column column4" :class="{play: isPlaying}"></div>
  <div class="column column5" :class="{play: isPlaying}"></div>
</div>
</template>
<script>
export default {
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
  }
}
</script>
<style scoped>
.equalizer {
  display: flex;
  justify-content: justify;
  align-items: flex-end;
  width: 50px;
  height: 35px;
  background-color: #ad1052;
}

.column {
  height: 0px;  
  width: 5px;
  margin: 2px;
  background-color: #ffaa10;
}

.column1 {
  animation: play .2s infinite alternate;
  animation-play-state: paused;
}

.column2 {
  animation: play .3s infinite alternate;
  animation-delay: -1.1s;
  animation-play-state: paused;
}

.column3 {
  animation: play .32s infinite alternate;
  animation-delay: -8s;
  animation-play-state: paused;

}

.column4 {
  animation: play .23s infinite alternate;
  animation-delay: -2.3s;
  animation-play-state: paused;
}

.column5 {
  animation: play .29s infinite alternate;
  animation-delay: -10s;
  animation-play-state: paused;
}

.play {
  animation-play-state: running;
}

@keyframes play {
  from {
    height: 30%;
  } to {
    height: 70%;
  }
}
</style>