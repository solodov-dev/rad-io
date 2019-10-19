/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import firebaseConfig from './firebase-config';

const state = {
  idToken: null,
  userId: null,
};

const getters = {
  user(state) {
    return state.userId;
  },
};

const mutations = {
  authUser(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
};

const actions = {
  signup({ commit }, authData) {
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    }).then((res) => {
      console.log(res);
      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId,
      });
    }).catch(error => console.log(error));
  },
  signin({ commit }, authData) {
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    }).then((res) => {
      console.log(res);
      commit('authUser', {
        token: res.data.idToken,
        userId: res.data.localId,
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
