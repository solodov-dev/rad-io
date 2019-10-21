/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = {
  stream: '',
  stationsList: [],
  isPlaying: false,
  searching: false,
};

const getters = {
  stream(state) {
    return state.stream;
  },
  stationsList(state) {
    return state.stationsList;
  },
  isPlaying(state) {
    return state.isPlaying;
  },
  searching(state) {
    return state.searching;
  },
};

const mutations = {
  updateStream(state, streamData) {
    state.stream = streamData;
  },
  pushStation(state, station) {
    state.stationsList.push(station);
  },
  clearStationsList(state) {
    state.stationsList = [];
  },
  togglePlaying(state) {
    state.isPlaying = !state.isPlaying;
  },
  play(state) {
    state.isPlaying = true;
  },
  toggleSearching(state, searchState) {
    state.searching = searchState;
  },
};

const actions = {
  searchStations({ commit }, search) {
    commit('clearStationsList');
    commit('toggleSearching', true);
    axios
      .get(
        `http://www.radio-browser.info/webservice/json/stations/${search.by}/${search.term}`,
      )
      .then((res) => {
        const dataList = [];
        for (const station in res.data) {
          dataList.push({
            id: res.data[station].id,
            name: res.data[station].name,
            icon: res.data[station].favicon,
            url: res.data[station].url,
          });
        }

        // If there are results => choose 50 random stations
        if (dataList.length > 0) {
          let counter = 0;
          do {
            commit(
              'pushStation',
              dataList[Math.floor(Math.random() * dataList.length)],
            );
            counter += 1;
          } while (counter <= 19 && counter <= dataList.length);
        } else {
          const error = {
            name: 'Sorry, nothing found...',
            icon: require('@/assets/radio.svg'),
          };
          commit('pushStation', error);
        }

        commit('toggleSearching', false);
      })
      .catch(error => console.log(error));
  },
  playStation({ commit }, station) {
    axios
      .get(
        `http://www.radio-browser.info/webservice/v2/json/url/${station.id}`,
      )
      .then((res) => {
        res.data.icon = station.icon;
        commit('updateStream', res.data);
        commit('play');
      })
      .catch(error => console.log(error));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
