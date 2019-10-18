<template>
  <div class="view">
    <form>
      <img class="login-logo" src="../assets/radio.svg" alt="rad.io">
      <h2 class="header">Sign in</h2>
      <div class="form-group">
        <input class="form-control" type="email" placeholder="Email" v-model="email">
      </div>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="Password" v-model="password">
        </div>
        <button class="btn btn-primary" @click.prevent="">Sign in</button>
<p class="help">
  Not a user? <router-link to="/signup">Sign up</router-link>
</p>

    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
}
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