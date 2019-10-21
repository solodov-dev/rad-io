<template>
  <div class="view">
    <h2>Your Playlist</h2>
    <!-- Playlist -->
    <div class="list-group">
      <a
      href="#"
        v-for="station in playlist"
        :key="station.id"
        class="list-group-item list-group-item-action"
        @click="play(station)"
      >
        <img class="station-icon" :src="station.icon" @error="fallbackImg" alt="Radiostation image" />
        {{ station.name }}
        <svg width="30" height="30" viewBox="0 0 91 86" @click="removeFromPlaylist(station)" class="star" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.5 3.23607L55.2134 33.1307L55.4379 33.8217H56.1644H87.5975L62.1676 52.2976L61.5798 52.7246L61.8043 53.4156L71.5177 83.3103L46.0878 64.8344L45.5 64.4073L44.9122 64.8344L19.4823 83.3103L29.1957 53.4156L29.4202 52.7246L28.8324 52.2976L3.4025 33.8217H34.8356H35.5621L35.7866 33.1307L45.5 3.23607Z" fill="none" stroke="#FFAA10" stroke-width="4"/>
        </svg>
      </a>
    </div>
    <button class="btn btn-primary" @click="logOut">Log Out</button>
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
    removeFromPlaylist(station) {
      this.$store.dispatch('removeFromPlaylist', station);
    }
  }
}
</script>
<style scoped>
  .btn {
    margin: 1em;
  }

  .star {
    float: right;
  }

  .star path {
    fill: #ffaa10;
  }

  .star:hover path {
    fill: #ad1052;
  }
</style>