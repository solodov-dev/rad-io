import Vue from 'vue';
import Vuex from 'vuex';
import stations from './modules/stations';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stations,
    auth,
  },
});
