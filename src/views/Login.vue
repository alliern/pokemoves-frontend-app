<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <img
        class="log-img"
        src="https://fontmeme.com/permalink/210429/d1a8b0b90c63e4a417b20ef4ec234b54.png"
        alt="pokemon-font"
        border="0"
      />
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" class="form-control" v-model="username" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<style>
.log-img {
  height: 120px;
  width: 410px;
}
.form-group {
  margin-left: 200px;
  margin-right: 200px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      username: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid username or password."];
          this.username = "";
          this.password = "";
        });
    },
  },
};
</script>
