import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC45CK5kgJAu3DHMXpgYayoz4_07kMxJVY',
  authDomain: 'rad-io-7c5cb.firebaseapp.com',
  databaseURL: 'https://rad-io-7c5cb.firebaseio.com',
  projectId: 'rad-io-7c5cb',
  storageBucket: 'rad-io-7c5cb.appspot.com',
  messagingSenderId: '473844176516',
  appId: '1:473844176516:web:8364e73c9df7ca54fc94d1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
