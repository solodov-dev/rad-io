import Vue from 'vue';
import firebase from 'firebase';
import firebaseConfig from './firebase-config';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
