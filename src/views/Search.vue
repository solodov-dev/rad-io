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
    <!-- Loading spinner -->
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <!-- Stations list -->
    <div class="list-group">
      <a href="#" v-for="(station, index) in stationsList" :key="index" class="list-group-item list-group-item-action" @click="play(station)">
        <img class="station-icon" :src="station.icon" alt="">
        {{ station.name }}
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../main';

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
      // Show loading spinner
      let spinner = document.querySelector('.spinner-grow');
      spinner.style.display = 'inline-flex';

      // Reset lists
      let dataList = [];
      this.stationsList = [];

      // Get search results
      axios.get(`http://www.radio-browser.info/webservice/json/stations/${this.searchBy}/${this.searchTerm}`)
        .then(res => {
          for (let station in res.data) {
            dataList.push({id: res.data[station].id, 
                              name: res.data[station].name, 
                              icon: res.data[station].favicon, 
                              url: res.data[station].url
            })
          }

          // Hide loading spinner
          spinner.style.display = 'none';
          
          // If there are results => choose 50 random stations
          if (dataList.length > 0) {
            let counter = 0;
            do {
              this.stationsList.push(dataList[Math.floor(Math.random()*dataList.length)]);
              counter++;
            } while (counter <= 19 && counter <= dataList.length)
          } else {
            let error = {
              name: 'Sorry, nothing found...',
            }
            this.stationsList.push(error);
          }
          
        })
        .catch(error => console.log(error));
    },
    play(station) {
      axios.get(`http://www.radio-browser.info/webservice/v2/json/url/${station.id}`)
        .then(res => {
          eventBus.$emit('playStream', res);
        })
        .catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>
.view {
  width: 50%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 100px;
}

.btn-secondary {
  background-color: #4E92C2;
}

.station-icon {
  float: left;
  height: 50px;
  max-width: 100px;
  width: auto;
}

.custom-radio {
  color: white;
  margin-top: 5px;
}

.spinner-grow {
  margin-top: 100px;
  display: none;
}
</style>