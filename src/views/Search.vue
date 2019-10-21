<template>
  <div class="view">
    <form class="form-group" @submit.prevent="searchStations">
      <!-- Search input -->
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" v-model="searchTerm" />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button" @click="searchStations">Search</button>
        </div>
      </div>
      <!-- Search by radio buttons -->
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          name="searchBy"
          id="radioTag"
          value="bytag"
          v-model="searchBy"
          class="custom-control-input"
        />
        <label for="radioTag" class="custom-control-label">tag</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          name="searchBy"
          id="radioName"
          value="byname"
          v-model="searchBy"
          class="custom-control-input"
        />
        <label for="radioName" class="custom-control-label">station</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          name="searchBy"
          id="radioCountry"
          value="bycountry"
          v-model="searchBy"
          class="custom-control-input"
        />
        <label for="radioCountry" class="custom-control-label">country</label>
      </div>
    </form>
    <!-- Loading spinner -->
    <div v-if="searching" class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <!-- Stations list -->
    <div class="list-group">
      <div
        v-for="(station, index) in stationsList"
        :key="index"
        class="list-group-item list-group-item-action"
        @click="play(station)"
      >
      <!-- Station icon -->
        <img class="station-icon" :src="station.icon" @error="fallbackImg" alt="Radiostation image" />
      <!-- Station name -->
        {{ station.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBy: "bytag",
      searchTerm: "",
    }
  },
  computed: {
    stationsList() {
      return this.$store.getters.stationsList;
    },
    searching() {
      return this.$store.getters.searching;
    },
  },
  methods: {
    searchStations() {
      this.$store.dispatch('searchStations', {by: this.searchBy, term: this.searchTerm})
    },
    fallbackImg(evt) {
      evt.currentTarget.src = require("../assets/radio.svg");
    },
    play(station) {
      this.$store.dispatch('playStation', station);
    }
  }
};
</script>

<style scoped>
.btn-secondary {
  background-color: #4e92c2;
}

.custom-radio {
  color: #fff;
  margin-top: 5px;
}

.spinner-grow {
  margin-top: 100px;
}

.btn-secondary:hover {
  background-color: #ffaa10;
}
</style>