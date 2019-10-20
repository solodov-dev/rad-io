/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import { firebase, db } from '@/modules/firebase-config';

const state = {
  user: '',
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
  logUserIn(state, uid) {
    state.loggedIn = true;
    state.user = uid;
  },
  logUserOut(state) {
    state.loggedIn = false;
    state.user = '';
  },
};

const actions = {
  signUp({ commit }, authData) {
    firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)
      .then((res) => {
        db.collection('users').doc(`${res.user.uid}`).set({ playlist: [] });
      })
      .catch(error => console.log(error));
  },
  signIn({ commit }, authData) {
    firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
      .then((res) => {
        console.log('OK');
      })
      .catch(error => console.log(error));
  },
  logOut({ commit }) {
    firebase.auth().signOut()
      .then((res) => {
        console.log('OK');
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
