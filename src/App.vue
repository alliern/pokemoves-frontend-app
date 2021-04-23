<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/pokemon">All Pokemon</router-link>
      |
      <router-link to="/moves">All Moves</router-link>
      <span v-if="isLoggedIn()">
        |
        <router-link to="/logout">Log Out</router-link>

        |
        <router-link to="/users/:id">User Profile</router-link>
      </span>
      <span v-else>
        |
        <router-link to="/signup">Create Account</router-link>
        |
        <router-link to="/login">Log In</router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #dad735;
}
</style>
<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
