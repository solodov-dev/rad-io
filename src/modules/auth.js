/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { firebase, db } from '@/modules/firebase-config';

const state = {
  user: {},
  loggedIn: false,
};

const getters = {
  user(state) {
    return state.user;
  },
  loggedIn(state) {
    return state.loggedIn;
  },
};

const mutations = {
  loguserin(state) {
    state.loggedIn = true;
  },
  loguserout(state) {
    state.loggedIn = false;
  },
  setuser(state, userData) {
    state.user = userData;
  },
};

const actions = {
  signup({ commit }, authData) {
    firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
      .then((res) => {
        db.collection('users').doc(`${res.user.uid}`).set({ playlist: [] });
      })
      .catch(error => console.log(error));
  },
  signin({ commit }, authData) {
    firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  },
  logout({ commit }) {
    firebase.auth().signOut()
      .then(res => console.log(res))
      .catch(error => console.log(error));
  },
  getuser({ commit }) {
    const user = firebase.auth().currentUser;
    commit('setuser', user);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
