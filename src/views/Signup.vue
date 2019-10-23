<template>
  <div class="view-form">
    <form @submit.prevent="signUp" @focusin="errorMsg=''">
      <img class="radio-logo" src="../assets/radio.svg" alt="rad.io" />
      <h2 class="header">Sign Up</h2>
      <div class="form-group">
        <input
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          type="email"
          placeholder="Email"
          v-model="email"
          @blur="$v.email.$touch()"
        />
      </div>
      <div v-if="$v.email.$error" class="alert alert-danger" role="alert">
        Enter valid email adress
      </div>
      <div class="form-group">
        <input
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          type="password"
          placeholder="Password"
          v-model="password"
          @blur="$v.password.$touch()"
        />
      </div>
      <div v-if="$v.password.$error" class="alert alert-danger" role="alert">
        Password should be minimum 6 characters long
      </div>
      <div class="form-group">
        <input
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          type="password"
          placeholder="Confirm Password"
          v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch()"
        />
      </div>
      <div v-if="$v.confirmPassword.$error" class="alert alert-danger" role="alert">
        Passwords don't match
      </div>
      <div v-if="errorMsg" class="alert alert-danger" role="alert">
        {{ errorMsg }}
      </div>
      <button class="btn btn-primary" :disabled="$v.$invalid" type="submit">Sign Up</button>
    </form>
  </div>
</template>
<script>
import { firebase, db } from "../modules/firebase-init";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      errorMsg: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password'),
    },
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          db.collection("users")
            .doc(`${res.user.uid}`)
            .set({ playlist: [] });
        })
        .catch(error => this.errorMsg = error.message);
    }
  }
};
</script>
<style scoped>

.header {
  margin: .6em;
}
</style>