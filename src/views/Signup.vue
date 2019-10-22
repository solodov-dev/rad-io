<template>
  <div class="view">
    <form @submit.prevent="signUp">
      <img class="signup-logo" src="../assets/radio.svg" alt="rad.io">
      <h2 class="header">Sign Up</h2>
      <div class="form-group">
        <input class="form-control" type="email" placeholder="Email" v-model="email">
      </div>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="Password" v-model="password">
        </div>
        <button class="btn btn-primary" type="submit">Sign Up</button>
    </form>
  </div>
</template>
<script>
import { firebase, db } from '../modules/firebase-init';

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        db.collection('users').doc(`${res.user.uid}`).set({ playlist: [] });
      })
      .catch(error => console.log(error));
    }
  }
}
</script>
<style scoped>
  .view {
    width: 25%;
  }

  .signup-logo {
    height: 80px;
    width: auto;
    margin: 1em;
  }

  .header {
    margin: 1em;
  }
</style>