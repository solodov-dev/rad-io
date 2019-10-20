/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { db } from '@/modules/firebase-config';

const state = {
  localPlaylist: [],
};

const getters = {
  playlist(state) {
    return state.localPlaylist;
  },
};

const mutations = {
  playlistPush(state, station) {
    state.localPlaylist.push(station);
  },
  unloadPlaylist(state) {
    state.localPlaylist = [];
  },
  setPlaylist(state, playlist) {
    state.localPlaylist = playlist;
  },
  playlistFilter(state, id) {
    state.localPlaylist = state.localPlaylist.filter(station => station.id !== id);
  },
};

const actions = {
  addToPlaylist({ commit }, station) {
    commit('playlistPush', station);
  },
  removeFromPlaylist({ commit }, station) {
    commit('playlistFilter', station.id);
  },
  loadPlaylist({ commit }, uid) {
    db.collection('users').doc(uid).get()
      .then((doc) => {
        if (doc.exists) {
          commit('setPlaylist', doc.data().playlist);
        } else {
          console.log('No such document');
        }
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
