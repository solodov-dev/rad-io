<template>
  <div class="view">
    <h2>Playlist</h2>
    <!-- Playlist -->
    <div class="list-group">
      <a
      href="#/"
        v-for="(station, index) in playlist"
        :key="index"
        class="list-group-item list-group-item-action"
        @click="play(station)"
      >
        <img class="station-icon" :src="station.icon" @error="fallbackImg" alt="Radiostation image" />
        {{ station.name }}
      </a>
    </div>
    <a href="#" @click="logOut">Log Out</a>
  </div>
</template>
<script>
export default {
  computed: {
    playlist() {
      return this.$store.getters.localplaylist;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logout');
    },
  }
}
</script>