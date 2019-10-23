<template>
  <div class="view-form">
    <form @submit.prevent="signIn" @focusin="errorMsg = ''">
      <img class="radio-logo" src="../assets/radio.svg" alt="rad.io" />
      <h2 class="header">Sign in</h2>
      <div class="form-group">
        <input
          class="form-control"
          type="email"
          placeholder="Email"
          :class="{'is-invalid': $v.email.$error}"
          v-model="email"
          @blur="$v.email.$touch()"
        />
      </div>
      <div class="form-group">
        <input class="form-control" type="password" placeholder="Password" v-model="password" />
      </div>
      <div v-if="errorMsg" class="alert alert-danger" role="alert">{{ errorMsg }}</div>
      <button class="btn btn-primary" type="submit" :disabled="$v.$invalid">Sign in</button>
      <p class="help">
        Not a user?
        <router-link to="/signup">Sign up</router-link>
      </p>
    </form>
  </div>
</template>
<script>
import { firebase } from "../modules/firebase-init";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMsg: ""
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log("OK");
        })
        .catch(error => (this.errorMsg = error.message));
    }
  }
};
</script>
<style scoped>
.header {
  margin: 1em;
}

.help {
  margin: 5em auto;
}
</style>