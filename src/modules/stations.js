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
    state.stationsList.push({ id: station.id, name: station.name, icon: station.favicon.replace('http:', 'https:') });
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
        `https://www.radio-browser.info/webservice/json/stations/${search.by}/${search.term}`,
      )
      .then((res) => {
        const unfilteredList = Object.values(res.data);
        const dataList = unfilteredList.filter(s => s.url.indexOf('https:') !== -1);
        // If there are more than 20 stations => choose 20 random stations
        if (dataList.length > 20) {
          for (let i = 0; i < 20; i += 1) {
            commit('pushStation', dataList[Math.floor(Math.random() * dataList.length)]);
          }
        // If more than 0 but less than 20 => just returh the datalist
        } else if (dataList.length > 0) {
          for (let i = 0; i < dataList.length; i += 1) {
            commit('pushStation', dataList[i]);
          }
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
        `https://www.radio-browser.info/webservice/v2/json/url/${station.id}`,
      )
      .then((res) => {
        // Destructure res to include only needed fields
        const streamData = (({ id, name, url }) => ({ id, name, url }))(res.data);
        // Add radiostation icon (result doesn't include one)
        streamData.icon = station.icon;
        // Send station info to the stream and play
        console.log(streamData.url);
        commit('updateStream', streamData);
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
