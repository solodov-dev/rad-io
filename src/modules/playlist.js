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
};

const actions = {
  addToPlaylist({ commit }, station) {
    commit('playlistPush', station);
  },
  loadPlaylist({ commit }, uid) {
    db.collection('users').doc(uid).get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data().playlist);
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
