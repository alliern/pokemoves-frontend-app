<template>
  <div class="signup">
    <form class="acct-form" v-on:submit.prevent="submit()">
      <img
        class="log-img"
        src="https://fontmeme.com/permalink/210429/b9a301bd4f8b0c504fc6feb5815a74f9.png"
        alt="pokemon-font"
        border="0"
      />
      <div class="log-card">
        <ul>
          <li class="text-danger" v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
        <div class="form-group">
          <label>Username:</label>
          <input type="text" class="form-control" v-model="username" />
          <small v-if="username.length < 21 && username.length > 0">
            {{ 20 - username.length }} Characters remaining
          </small>
          <small class="text-danger" v-else-if="username.length > 20">Username is too long!</small>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" />
        </div>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>
<style>
.signup {
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["passwords must match"];
          this.password = "";
          this.passwordConfirmation = "";
        });
    },
  },
};
</script>
