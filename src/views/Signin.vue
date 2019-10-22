<template>
  <div class="view">
    <form @submit.prevent="signIn">
      <img class="login-logo" src="../assets/radio.svg" alt="rad.io" />
      <h2 class="header">Sign in</h2>
      <div class="form-group">
        <input class="form-control" type="email" placeholder="Email" v-model="email" />
      </div>
      <div class="form-group">
        <input class="form-control" type="password" placeholder="Password" v-model="password" />
      </div>
      <div v-if="errorMsg" class="alert alert-danger" role="alert">
        {{ errorMsg }}
      </div>
      <button class="btn btn-primary" type="submit">Sign in</button>
      <p class="help">
        Not a user?
        <router-link to="/signup">Sign up</router-link>
      </p>
    </form>
  </div>
</template>
<script>
import { firebase } from "../modules/firebase-init";
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMsg: '',
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log("OK");
        })
        .catch(error => this.errorMsg = error.message);
    }
  }
};
</script>
<style scoped>
.view {
  width: 25%;
}

.login-logo {
  height: 80px;
  width: auto;
  margin: 1em;
}

.header {
  margin: 1em;
}

.help {
  margin: 5em auto;
}
</style>