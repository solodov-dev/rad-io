<template>
  <div class="view">
    <h2>Playlist</h2>
    <!-- Playlist -->
    <div class="list-group">
      <a
      href="#/"
        v-for="station in playlist"
        :key="station.id"
        class="list-group-item list-group-item-action"
        @click="play(station)"
      >
        <img class="station-icon" :src="station.icon" @error="fallbackImg" alt="Radiostation image" />
        {{ station.name }}
      </a>
    </div>
    <a href="#" class="logout" @click="logOut">Log Out</a>
  </div>
</template>

<script>
export default {
  computed: {
    playlist() {
      return this.$store.getters.playlist;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut');
    },
    fallbackImg(evt) {
      evt.currentTarget.src = require("../assets/radio.svg");
    },
    play(station) {
      this.$store.dispatch('playStation', station);
    },
  }
}
</script>
<style scoped>
  .logout {
    color: #fff;
    margin: 1em;
  }
</style>