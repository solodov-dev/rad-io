/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { db } from '@/modules/firebase-config';

const state = {
  localPlaylist: [],
};

const getters = {
  localplaylist(state) {
    return state.localPlaylist;
  },
};

const mutations = {
  playlistPush(state, station) {
    state.localPlaylist.push(station);
  },
  emptyLocalPlaylist(state) {
    state.localPlaylist = [];
  },
};

const actions = {
  addToPlaylist({ commit }, station) {
    commit('playlistPush', station);
    db.collection('db').add({
      id: station.id,
      name: station.name,
      url: station.url,
    }).then((docRef) => {
      console.log(`Document is written${docRef}`);
    }).catch(error => console.log(error));
  },
  updatePlaylist({ commit }) {
    db.collection('db').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit('playlistPush', doc.data);
        });
      }).catch(error => console.log(error));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
