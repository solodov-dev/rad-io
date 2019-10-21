/* eslint no-shadow: ["error", { "allow": ["state"] }] */
// Save user Auth state

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

export default {
  state,
  getters,
  mutations,
};
