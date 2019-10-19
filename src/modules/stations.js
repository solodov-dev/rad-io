/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = {
  playLink: '',
  stationsList: [],
};

const getters = {
  getLink(state) {
    return state.playLink;
  },
  stationsList(state) {
    return state.stationsList;
  },
};

const mutations = {
  updateLink(state, link) {
    state.playLink = link;
  },
  pushStation(state, station) {
    state.stationsList.push(station);
  },
  clearStationsList(state) {
    state.stationsList = [];
  },
};

const actions = {
  searchStations({ commit }, search) {
    commit('clearStationsList');
    axios
      .get(
        `http://www.radio-browser.info/webservice/json/stations/${search.by}/${search.term}`,
      )
      .then((res) => {
        const dataList = [];
        for (let station in res.data) {
          dataList.push({
            id: res.data[station].id,
            name: res.data[station].name,
            icon: res.data[station].favicon,
            url: res.data[station].url
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
          this.stationsList.push(error);
        }
      })
      .catch(error => console.log(error));
  },
  playStation({ commit }, station) {
    axios
      .get(
        `http://www.radio-browser.info/webservice/v2/json/url/${station.id}`,
      )
      .then(res => commit('updateLink', res.data))
      .catch(error => console.log(error));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
