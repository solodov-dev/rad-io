<template>
  <div class="view">
    <form class="form-group" action="">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" v-model="searchTerm">
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button" @click="searchStations">Search</button>
        </div>
      </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="searchBy" id="radioTag" value="bytag" v-model="searchBy" class="custom-control-input">
      <label for="radioTag" class="custom-control-label">by tag</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="searchBy" id="radioName" value="byname" v-model="searchBy" class="custom-control-input">
      <label for="radioName" class="custom-control-label">by name</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" name="searchBy" id="radioCountry" value="bycountry" v-model="searchBy" class="custom-control-input">
      <label for="radioCountry" class="custom-control-label">by country</label>
    </div>
    </form>
    <div class="list-group">
      <a href="#" v-for="station in stationsList" class="list-group-item list-group-item-action" @click="play(station)">
        <img class="station-icon" :src="station.icon" alt="">
        {{ station.name }}
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchBy: 'bytag',
      searchTerm: '',
      stationsList: [],
    }
  },
  methods: {
    searchStations() {
      axios.get(`http://www.radio-browser.info/webservice/json/stations/${this.searchBy}/${this.searchTerm}`)
        .then(res => {
          for (let station in res.data) {
            this.stationsList.push({id: res.data[station].id, 
                              name: res.data[station].name, 
                              icon: res.data[station].favicon, 
                              url: res.data[station].url
            })
          }
        })
        .catch(error => console.log(error))
    },
    play(station) {
      console.log(station);
    }
  }
}
</script>

<style scoped>
.view {
  width: 50%;
  margin: auto;
  padding-top: 20px;
}

.btn-secondary {
  background-color: #4E92C2;
}

.station-icon {
  float: left;
  height: 50px;
  width: auto;
}
</style>